import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // TRADUCTOR: Convierte el formato V6 del cliente al formato CoreMessage del servidor
    const safeMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content || (msg.parts && msg.parts.length > 0 ? msg.parts[0].text : '') || ''
    }));

    const result = streamText({
      model: google('gemini-2.0-flash-lite'),
      messages: safeMessages,
      system: "Eres 'Luz', asistente de recepción de la clínica 'Salud Mental'. Eres cálida, empática y concisa. Servicios: Terapia Individual, Pareja e Infantil (100% online). NO des diagnósticos médicos.",
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error('❌ ERROR FATAL EN EL SERVIDOR:', error.message || error);
    return new Response(JSON.stringify({ error: 'Hubo un problema al contactar a la IA.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
