import { google } from '@ai-sdk/google';
import { streamText, type Message } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT_API]: Received request with', messages?.length, 'messages');

    const result = streamText({
      model: google('gemini-1.5-flash'),
      messages: messages as Message[],
      system: "Eres 'Luz', la asistente virtual de la clínica psicológica 'Salud Mental'. Tu objetivo es orientar a los usuarios y ayudarlos a dar el primer paso hacia la terapia. REGLAS ESTRICTAS: 1) NUNCA des diagnósticos médicos, psicológicos ni consejos clínicos bajo ninguna circunstancia. 2) Si alguien menciona autolesiones o crisis graves, recomiéndale buscar ayuda de emergencia local de inmediato. 3) Sé empática, cálida y muy concisa (respuestas cortas). SERVICIOS: Terapia Individual, Terapia de Pareja y Psicología Infantil. Todo es 100% online por videollamada. FLUJO: Responde sus dudas y siempre invítalos sutilmente a hacer clic en el botón 'Agendar Cita' del menú principal para ver horarios y precios.",
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error('[CHAT_ERROR]:', error.message || error);
    return new Response(
      JSON.stringify({ error: 'Error en el servicio de AI', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
