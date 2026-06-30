import { createHmac, timingSafeEqual } from 'node:crypto';
import { generateLuzReply, type ChatMessage } from '@/lib/luz';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type WhatsAppTextMessage = {
  id?: string;
  from?: string;
  timestamp?: string;
  type?: string;
  text?: {
    body?: string;
  };
};

type WhatsAppWebhookPayload = {
  object?: string;
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: WhatsAppTextMessage[];
        statuses?: unknown[];
      };
    }>;
  }>;
};

const conversationHistory = new Map<string, ChatMessage[]>();
const processedMessageIds = new Set<string>();
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

const MAX_HISTORY_MESSAGES = 20;
const MAX_PROCESSED_MESSAGE_IDS = 200;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_MESSAGES = 20;

function plainTextResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

function verifySignature(rawBody: string, signatureHeader: string | null) {
  const appSecret = process.env.WHATSAPP_APP_SECRET;

  if (!appSecret || !signatureHeader?.startsWith('sha256=')) {
    return false;
  }

  const receivedSignature = signatureHeader.replace('sha256=', '');
  const expectedSignature = createHmac('sha256', appSecret)
    .update(rawBody, 'utf8')
    .digest('hex');

  const received = Buffer.from(receivedSignature, 'hex');
  const expected = Buffer.from(expectedSignature, 'hex');

  if (received.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(received, expected);
}

function getFirstTextMessage(payload: WhatsAppWebhookPayload) {
  for (const entry of payload.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const message of change.value?.messages ?? []) {
        const text = message.text?.body?.trim();

        if (message.type === 'text' && message.from && text) {
          return {
            id: message.id,
            from: message.from,
            text,
          };
        }
      }
    }
  }

  return null;
}

function rememberMessageId(messageId?: string) {
  if (!messageId) return false;
  if (processedMessageIds.has(messageId)) return true;

  processedMessageIds.add(messageId);

  if (processedMessageIds.size > MAX_PROCESSED_MESSAGE_IDS) {
    const oldest = processedMessageIds.values().next().value;
    if (oldest) processedMessageIds.delete(oldest);
  }

  return false;
}

function isRateLimited(from: string) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(from);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(from, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX_MESSAGES;
}

function appendToHistory(from: string, message: ChatMessage) {
  const history = conversationHistory.get(from) ?? [];
  const nextHistory = [...history, message].slice(-MAX_HISTORY_MESSAGES);
  conversationHistory.set(from, nextHistory);
  return nextHistory;
}

async function sendWhatsAppText(to: string, body: string) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId || !accessToken) {
    throw new Error(
      'Faltan variables WHATSAPP_PHONE_NUMBER_ID y/o WHATSAPP_ACCESS_TOKEN',
    );
  }

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: {
          body,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Meta Graph API respondió ${response.status}: ${errorBody}`);
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (
    mode === 'subscribe' &&
    token &&
    challenge &&
    token === process.env.WHATSAPP_VERIFY_TOKEN
  ) {
    return plainTextResponse(challenge);
  }

  return plainTextResponse('Forbidden', 403);
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-hub-signature-256');

  if (!verifySignature(rawBody, signature)) {
    console.error('[whatsapp-webhook] Firma inválida o WHATSAPP_APP_SECRET ausente');
    return plainTextResponse('Invalid signature', 401);
  }

  try {
    const payload = JSON.parse(rawBody) as WhatsAppWebhookPayload;
    const incoming = getFirstTextMessage(payload);

    if (!incoming) {
      return plainTextResponse('EVENT_RECEIVED');
    }

    if (rememberMessageId(incoming.id)) {
      return plainTextResponse('EVENT_RECEIVED');
    }

    if (isRateLimited(incoming.from)) {
      console.warn(
        `[whatsapp-webhook] Rate limit excedido para ${incoming.from}`,
      );
      return plainTextResponse('EVENT_RECEIVED');
    }

    const historyWithUserMessage = appendToHistory(incoming.from, {
      role: 'user',
      content: incoming.text,
    });

    const reply = await generateLuzReply(historyWithUserMessage);

    appendToHistory(incoming.from, {
      role: 'assistant',
      content: reply,
    });

    try {
      await sendWhatsAppText(incoming.from, reply);
    } catch (error) {
      console.error(
        '[whatsapp-webhook] Error enviando respuesta a WhatsApp:',
        error instanceof Error ? error.message : error,
      );
    }

    return plainTextResponse('EVENT_RECEIVED');
  } catch (error) {
    console.error(
      '[whatsapp-webhook] Error procesando webhook:',
      error instanceof Error ? error.message : error,
    );
    return plainTextResponse('EVENT_RECEIVED');
  }
}
