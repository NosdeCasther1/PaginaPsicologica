import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/legal/LegalPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Aviso de Confidencialidad',
  description:
    'Aviso de confidencialidad de Selah sobre reserva profesional, informacion de salud mental, sesiones online y excepciones legales o eticas.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/confidencialidad`,
  },
};

const sections: LegalSection[] = [
  {
    title: '1. Compromiso de confidencialidad',
    body: [
      'Selah reconoce que la informacion compartida en el proceso de orientacion o atencion psicologica puede ser sensible, personal y privada. Por ello se maneja bajo criterios de reserva profesional, necesidad, proporcionalidad y seguridad.',
      'Este aviso aplica a sesiones, coordinaciones, mensajes, formularios, chat, WhatsApp, correo electronico, calendario y cualquier canal utilizado para gestionar la atencion.',
    ],
  },
  {
    title: '2. Informacion protegida',
    body: [
      'Se considera confidencial toda informacion que identifique o pueda identificar a la persona consultante y aquella relacionada con su salud mental, vida familiar, relaciones, historia personal, emociones, sintomas, evaluaciones, citas, pagos, comunicacion con Selah o motivos de consulta.',
    ],
  },
  {
    title: '3. Uso interno limitado',
    body: [
      'La informacion se usa solo para gestionar citas, prestar atencion, dar seguimiento, mantener continuidad del servicio, cumplir obligaciones profesionales o atender requerimientos validos. El acceso se limita a personas autorizadas o proveedoras necesarias para operar el servicio.',
    ],
  },
  {
    title: '4. Excepciones a la confidencialidad',
    body: [
      'La confidencialidad puede tener limites cuando exista una obligacion legal, etica o de proteccion. Estas excepciones se aplican de forma prudente y limitada a la informacion necesaria.',
    ],
    items: [
      'Riesgo serio e inminente de dano para la persona consultante o para terceros.',
      'Sospecha razonable de violencia, abuso, maltrato, explotacion o riesgo que involucre ninas, ninos, adolescentes, personas mayores o personas en condicion de vulnerabilidad.',
      'Orden o requerimiento valido de autoridad competente conforme a la ley aplicable.',
      'Necesidad de defensa legal o profesional ante una reclamacion relacionada con el servicio.',
      'Consentimiento expreso de la persona consultante o su representante legal cuando corresponda.',
    ],
  },
  {
    title: '5. Atencion de menores',
    body: [
      'En procesos con menores de edad, Selah procura equilibrar la privacidad terapeutica de la persona menor con los derechos y responsabilidades de sus representantes legales, siempre buscando el interes superior del menor y la seguridad de todas las personas involucradas.',
    ],
  },
  {
    title: '6. Sesiones online',
    body: [
      'Para proteger la confidencialidad en sesiones online, se recomienda conectarse desde un espacio privado, usar audifonos si es necesario, evitar redes publicas inseguras y no grabar ni compartir la sesion sin autorizacion expresa.',
      'Selah puede usar herramientas como Google Meet u otras plataformas de videollamada. Aunque se eligen herramientas razonables, toda comunicacion digital depende tambien de la seguridad del dispositivo, conexion y cuenta de la persona usuaria.',
    ],
  },
  {
    title: '7. Comunicaciones por chat, WhatsApp y correo',
    body: [
      'Los canales de mensajeria son utiles para coordinacion, preguntas generales y seguimiento administrativo. No se recomienda enviar informacion extremadamente sensible por estos medios si no es necesario. Para contenidos clinicos profundos, se sugiere tratarlos en sesion.',
    ],
  },
  {
    title: '8. Conservacion y eliminacion',
    body: [
      'La informacion confidencial se conserva durante el tiempo necesario para continuidad de atencion, respaldo profesional, obligaciones legales o defensa de derechos. Cuando deje de ser necesaria, podra eliminarse, anonimizarse o archivarse de forma restringida segun corresponda.',
    ],
  },
  {
    title: '9. Contacto',
    body: [
      'Para dudas sobre confidencialidad, manejo de informacion o ejercicio de derechos relacionados con datos personales, puedes escribir a selahpsicologiagt@gmail.com o al WhatsApp +502 5145 5816.',
    ],
  },
];

export default function ConfidentialityPage() {
  return (
    <LegalPage
      title="Aviso de Confidencialidad"
      description="Compromiso de Selah sobre reserva profesional, manejo de informacion sensible, sesiones online y limites legales o eticos de la confidencialidad."
      updatedAt="30 de junio de 2026"
      sections={sections}
    />
  );
}
