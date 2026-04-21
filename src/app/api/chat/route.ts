import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const cleanMessages = messages.filter((m: any) => m.content && m.content.trim() !== '');

    // gemini-2.0-flash-lite: límites más generosos en free tier
    const result = streamText({
      model: google('gemini-2.0-flash-lite'),
      messages: cleanMessages,
      system: "Eres la asistente de recepción de la clínica 'Salud Mental'. Responde en español, de forma empática y concisa. Servicios: Terapia Individual, Pareja e Infantil (100% online). No des diagnósticos.",
    });

    // Construimos el stream manualmente en formato plain text
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.textStream) {
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error: any) {
    console.error('[CHAT_ERROR]:', error.message || error);
    return new Response(
      JSON.stringify({ error: 'Error en el servicio de AI', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
