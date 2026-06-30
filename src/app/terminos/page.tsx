import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/legal/LegalPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terminos y Condiciones',
  description:
    'Terminos de uso del sitio web y servicios online de Selah, incluyendo citas, pagos, cancelaciones, limites del servicio y uso responsable.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/terminos`,
  },
};

const sections: LegalSection[] = [
  {
    title: '1. Aceptacion de los terminos',
    body: [
      'Al navegar el sitio, usar el chat, contactar por formulario, escribir por WhatsApp o agendar una cita, aceptas estos terminos y las politicas vinculadas. Si no estas de acuerdo, debes abstenerte de usar el sitio o solicitar servicios por este medio.',
    ],
  },
  {
    title: '2. Naturaleza del servicio',
    body: [
      'Selah ofrece servicios de psicologia, orientacion y acompanamiento online. La informacion publicada en el sitio tiene fines educativos e informativos y no sustituye una evaluacion profesional individualizada.',
      'El servicio online puede no ser adecuado para emergencias, crisis severas, riesgo suicida, violencia activa, condiciones medicas urgentes o situaciones que requieran intervencion presencial inmediata.',
    ],
  },
  {
    title: '3. Emergencias y limites',
    body: [
      'Este sitio, el chat y WhatsApp no son canales de emergencia. Si existe peligro inmediato para ti o para otra persona, debes llamar a servicios de emergencia, acudir al centro de salud mas cercano o contactar una red de apoyo local.',
      'Selah puede orientar sobre rutas de ayuda, pero no garantiza respuesta inmediata por canales digitales.',
    ],
  },
  {
    title: '4. Agendamiento de citas',
    body: [
      'Las citas se gestionan mediante Google Calendar Appointment Schedule u otra herramienta que Selah comunique. La reserva queda sujeta a disponibilidad real del calendario, confirmacion, datos correctos de contacto y cumplimiento de condiciones de pago cuando apliquen.',
    ],
    items: [
      'La persona usuaria debe proporcionar datos veraces para recibir confirmaciones y enlaces de sesion.',
      'Los horarios publicados pueden cambiar por ajustes operativos, fuerza mayor o disponibilidad profesional.',
      'La confirmacion final puede depender del correo automatico de calendario, comunicacion directa de Selah o pago previo cuando se requiera.',
    ],
  },
  {
    title: '5. Pagos, reprogramaciones y cancelaciones',
    body: [
      'Los precios, formas de pago, politicas de reprogramacion y cancelacion se informaran por los canales oficiales de Selah antes o durante el proceso de reserva. Cuando se acuerde pago previo, la cita puede condicionarse a la confirmacion del pago.',
      'Si una persona necesita cancelar o reprogramar, debe avisar con la mayor anticipacion posible. Selah podra definir ventanas minimas de aviso, cargos administrativos o excepciones por causa justificada.',
    ],
  },
  {
    title: '6. Obligaciones de la persona usuaria',
    body: [
      'La persona usuaria se compromete a usar el sitio de forma licita, respetuosa y segura.',
    ],
    items: [
      'No usar el chat, formularios o canales de contacto para spam, fraude, acoso, amenazas o contenido ilicito.',
      'No intentar vulnerar, copiar, interferir o explotar tecnicamente el sitio o sus integraciones.',
      'No grabar, difundir o compartir sesiones sin consentimiento expreso de las personas involucradas.',
      'Mantener un entorno privado y seguro durante sesiones online.',
    ],
  },
  {
    title: '7. Menores de edad',
    body: [
      'Los servicios dirigidos a ninas, ninos o adolescentes requieren participacion, consentimiento o autorizacion de madre, padre, tutor o representante legal, segun corresponda. Selah puede solicitar informacion adicional para verificar condiciones de atencion y resguardar el interes superior de la persona menor de edad.',
    ],
  },
  {
    title: '8. Propiedad intelectual',
    body: [
      'Los textos, disenos, imagenes, recursos, estructura del sitio, marca Selah y materiales publicados pertenecen a Selah o se usan bajo licencia. No esta permitido copiar, adaptar, revender o explotar el contenido sin autorizacion escrita, salvo usos personales, informativos y no comerciales permitidos por ley.',
    ],
  },
  {
    title: '9. Inteligencia artificial y asistente virtual',
    body: [
      'El asistente virtual Luz ayuda con orientacion general, recepcion, disponibilidad y preguntas frecuentes. No emite diagnosticos, no sustituye atencion psicologica y puede requerir validacion humana. La persona usuaria no debe compartir informacion innecesariamente sensible por el chat si prefiere tratarla directamente en sesion.',
    ],
  },
  {
    title: '10. Enlaces y proveedores externos',
    body: [
      'El sitio puede dirigir a herramientas de terceros como Google Calendar, Google Meet, WhatsApp u otros proveedores. Selah no controla totalmente esos servicios y su uso puede estar sujeto a terminos y politicas propias.',
    ],
  },
  {
    title: '11. Limitacion de responsabilidad',
    body: [
      'Selah procura mantener informacion actualizada, disponibilidad tecnica y canales funcionales, pero no garantiza que el sitio este libre de errores, interrupciones, fallos de terceros o eventos fuera de control. La responsabilidad se limita en la medida permitida por la ley aplicable.',
    ],
  },
  {
    title: '12. Legislacion y jurisdiccion',
    body: [
      'Estos terminos se interpretan principalmente conforme a las leyes de la Republica de Guatemala, sin perjuicio de normas imperativas de proteccion al consumidor, privacidad, salud digital o comercio electronico que pudieran aplicar a personas usuarias ubicadas en otros paises.',
      'Antes de cualquier disputa, las partes procuraran resolver de buena fe mediante comunicacion directa con Selah.',
    ],
  },
  {
    title: '13. Cambios',
    body: [
      'Selah puede actualizar estos terminos por cambios legales, operativos o tecnologicos. La version vigente sera la publicada en esta pagina.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terminos y Condiciones"
      description="Reglas de uso del sitio, agendamiento, pagos, limites del servicio online y responsabilidades de Selah y de las personas usuarias."
      updatedAt="30 de junio de 2026"
      sections={sections}
    />
  );
}
