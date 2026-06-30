import { generateLuzReply, type ChatMessage } from '@/lib/luz';

function textStreamResponse(delta: string) {
  return new Response(
    [
      'data: {"type":"start"}',
      '',
      'data: {"type":"start-step"}',
      '',
      'data: {"type":"text-start","id":"0"}',
      '',
      `data: ${JSON.stringify({ type: 'text-delta', id: '0', delta })}`,
      '',
      'data: {"type":"text-end","id":"0"}',
      '',
      'data: {"type":"finish-step"}',
      '',
      'data: {"type":"finish","finishReason":"stop"}',
      '',
      'data: [DONE]',
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
    },
  );
}

export async function POST(req: Request) {
  try {
    const { messages = [] }: { messages?: ChatMessage[] } = await req.json();
    const reply = await generateLuzReply(messages);
    return textStreamResponse(reply);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : error;
    console.error('ERROR FATAL EN EL SERVIDOR:', message);
    return new Response(
      JSON.stringify({ error: 'Hubo un problema al contactar a la IA.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
