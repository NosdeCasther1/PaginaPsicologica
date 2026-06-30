import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/legal/LegalPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Politica de Privacidad',
  description:
    'Politica de privacidad de Selah sobre tratamiento de datos personales, datos de salud, citas online, proveedores y derechos de usuarios.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/privacidad`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections: LegalSection[] = [
  {
    title: '1. Responsable y alcance',
    body: [
      'Selah presta servicios de orientacion, acompanamiento y terapia psicologica online desde Guatemala. Esta politica explica como se recolectan, usan, conservan y protegen los datos personales que las personas comparten al visitar el sitio, contactar por formularios, usar el chat, escribir por WhatsApp o agendar una cita.',
      'Para consultas sobre privacidad puedes escribir a selahpsicologiagt@gmail.com o al WhatsApp +502 5145 5816.',
    ],
  },
  {
    title: '2. Datos que podemos tratar',
    body: [
      'Tratamos solamente los datos necesarios para responder solicitudes, coordinar citas, prestar servicios y cumplir obligaciones profesionales, administrativas o legales.',
    ],
    items: [
      'Datos de identificacion y contacto: nombre, correo electronico, telefono, pais o ciudad.',
      'Datos de agenda: fecha, hora, servicio solicitado, estado de confirmacion y enlace de videollamada cuando aplique.',
      'Datos de comunicacion: mensajes enviados por formulario, chat web, WhatsApp, correo electronico o durante coordinaciones administrativas.',
      'Datos sensibles o de salud que la persona decida compartir voluntariamente para recibir orientacion o atencion psicologica.',
      'Datos tecnicos basicos del sitio, como informacion de navegador, dispositivo, fecha de acceso y registros de seguridad.',
    ],
  },
  {
    title: '3. Finalidades del tratamiento',
    body: [
      'Usamos los datos para fines legitimos, proporcionales y relacionados con la atencion solicitada.',
    ],
    items: [
      'Responder consultas y solicitudes de informacion.',
      'Agendar, confirmar, modificar o dar seguimiento a citas.',
      'Prestar servicios de psicologia online y mantener registros necesarios para continuidad de atencion.',
      'Enviar recordatorios, confirmaciones, instrucciones de pago o informacion operativa sobre la sesion.',
      'Mejorar la seguridad, disponibilidad y funcionamiento del sitio web.',
      'Cumplir obligaciones legales, eticas, fiscales, contractuales o requerimientos validos de autoridad competente.',
    ],
  },
  {
    title: '4. Base legal y marco de referencia',
    body: [
      'Esta politica se redacta tomando como referencia principios de consentimiento informado, finalidad, proporcionalidad, confidencialidad, seguridad, transparencia y derechos de acceso, rectificacion y supresion cuando correspondan.',
      'En Guatemala se consideran, entre otras normas aplicables segun el caso, la Constitucion Politica de la Republica, la Ley de Acceso a la Informacion Publica en lo relativo a datos personales en poder de entes obligados, el Codigo de Salud, la Ley de Proteccion al Consumidor y Usuario, la Ley para el Reconocimiento de las Comunicaciones y Firmas Electronicas y normas profesionales aplicables al ejercicio psicologico.',
      'Si una persona usuaria se encuentra en otra jurisdiccion de Centroamerica, America Latina, la Union Europea u otro territorio, podrian aplicar normas locales o extraterritoriales de proteccion de datos, consumo, salud, comercio electronico o derechos digitales. Selah procurara atender solicitudes razonables de privacidad conforme a principios internacionalmente reconocidos.',
    ],
  },
  {
    title: '5. Datos sensibles y salud mental',
    body: [
      'La informacion relacionada con salud mental, historia personal, relaciones familiares, emociones, sintomas, diagnosticos previos, medicacion o motivos de consulta se trata con mayor reserva. Solo se solicita o conserva cuando sea necesaria para orientacion, atencion, continuidad del servicio o proteccion de la persona.',
      'No recomendamos enviar informacion extremadamente sensible por canales abiertos si no es indispensable. Para emergencias, riesgo de autolesion, violencia o peligro inmediato, se debe contactar a servicios de emergencia locales o redes de apoyo cercanas.',
    ],
  },
  {
    title: '6. Proveedores y herramientas externas',
    body: [
      'Para operar el sitio y las citas podemos usar proveedores tecnologicos como Vercel, Google Calendar, Google Meet, servicios de correo, WhatsApp Business, herramientas de inteligencia artificial para recepcion virtual y otros servicios necesarios para comunicacion, seguridad o disponibilidad.',
      'Estos proveedores pueden procesar datos conforme a sus propias politicas y condiciones. Selah procura usar herramientas razonables para el tipo de servicio prestado y limitar la informacion compartida a lo necesario.',
    ],
  },
  {
    title: '7. Transferencias internacionales',
    body: [
      'Al usar servicios en la nube, videollamadas, correo, mensajeria o calendario, los datos pueden almacenarse o procesarse fuera de Guatemala. Al usar el sitio o solicitar servicios online, la persona reconoce que este tratamiento internacional puede ser necesario para prestar el servicio.',
      'Cuando sea razonablemente posible, se aplicaran medidas de seguridad, control de acceso y limitacion de finalidad.',
    ],
  },
  {
    title: '8. Conservacion',
    body: [
      'Los datos se conservan durante el tiempo necesario para responder consultas, gestionar citas, prestar servicios, mantener continuidad clinica, cumplir responsabilidades profesionales o atender obligaciones legales. Los mensajes puramente informativos pueden eliminarse antes cuando ya no sean necesarios.',
    ],
  },
  {
    title: '9. Derechos de las personas usuarias',
    body: [
      'Puedes solicitar acceso, actualizacion, correccion, oposicion, limitacion o eliminacion de tus datos cuando proceda. Algunas solicitudes podrian no atenderse total o inmediatamente si existe una obligacion legal, etica, contractual, de seguridad o de conservacion profesional.',
      'Para ejercer estos derechos escribe a selahpsicologiagt@gmail.com indicando tu nombre, medio de contacto y solicitud concreta.',
    ],
  },
  {
    title: '10. Seguridad',
    body: [
      'Selah aplica medidas razonables de seguridad administrativa, tecnica y organizativa, incluyendo control de acceso, uso de proveedores reconocidos, gestion limitada de credenciales y reserva profesional. Ningun sistema conectado a internet es completamente infalible, por lo que tambien recomendamos a las personas usuarias proteger sus dispositivos, cuentas y conexiones.',
    ],
  },
  {
    title: '11. Cookies y tecnologias similares',
    body: [
      'El sitio puede usar tecnologias necesarias para funcionamiento, seguridad, formularios, chat, calendario embebido o medicion tecnica. Si en el futuro se incorporan herramientas de analitica, publicidad o seguimiento avanzado, se debera actualizar esta politica y, cuando corresponda, habilitar mecanismos de consentimiento.',
    ],
  },
  {
    title: '12. Cambios',
    body: [
      'Selah puede actualizar esta politica para reflejar cambios legales, tecnicos u operativos. La version vigente sera la publicada en esta pagina.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politica de Privacidad"
      description="Como Selah recolecta, usa, conserva y protege datos personales y datos sensibles relacionados con la atencion psicologica online."
      updatedAt="30 de junio de 2026"
      sections={sections}
    />
  );
}
