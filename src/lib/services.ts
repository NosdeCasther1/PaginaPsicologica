export type ServicePage = {
  slug: string;
  shortTitle: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  intro: string;
  icon: 'user' | 'couple' | 'child' | 'briefcase' | 'group' | 'senior';
  deliveryMode: 'hybrid' | 'in-person';
  featured?: boolean;
  idealFor: string[];
  benefits: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'terapia-individual-adultos',
    shortTitle: 'Terapia individual',
    title: 'Terapia individual para adultos',
    seoTitle: 'Terapia individual online en Guatemala y presencial en Huehuetenango',
    metaDescription:
      'Terapia individual online en toda Guatemala y presencial exclusivamente en Huehuetenango para trabajar ansiedad, estrés, autoestima y duelo.',
    eyebrow: 'Acompañamiento individual',
    summary:
      'Un espacio confidencial para comprender lo que estás viviendo y desarrollar herramientas que puedas aplicar en tu vida cotidiana.',
    intro:
      'La terapia individual permite detenerte, ordenar lo que sientes y explorar nuevas formas de responder ante las dificultades. El proceso se adapta a tus necesidades, tu ritmo y los objetivos que construyamos en conjunto.',
    icon: 'user',
    deliveryMode: 'hybrid',
    idealFor: [
      'Ansiedad, estrés o sensación de sobrecarga',
      'Cambios importantes, pérdidas o crisis personales',
      'Dificultades de autoestima y toma de decisiones',
      'Patrones emocionales o relacionales que deseas comprender',
    ],
    benefits: [
      'Atención privada desde un espacio cómodo para ti',
      'Objetivos terapéuticos claros y revisables',
      'Herramientas prácticas para el día a día',
      'Acompañamiento respetuoso y sin juicios',
    ],
    process: [
      {
        title: 'Primera conversación',
        description: 'Conocemos tu motivo de consulta, contexto y expectativas.',
      },
      {
        title: 'Plan de trabajo',
        description: 'Definimos prioridades y objetivos realistas para el proceso.',
      },
      {
        title: 'Seguimiento',
        description: 'Revisamos avances y ajustamos las herramientas a tus necesidades.',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto dura una sesión?',
        answer: 'Las sesiones individuales tienen una duración aproximada de 50 minutos.',
      },
      {
        question: '¿Necesito tener un diagnóstico?',
        answer:
          'No. Puedes iniciar terapia aunque no tengas un diagnóstico o no sepas exactamente cómo nombrar lo que estás viviendo.',
      },
      {
        question: '¿Cuántas sesiones necesitaré?',
        answer:
          'Depende de tus objetivos y situación. La duración se conversa y revisa contigo durante el proceso.',
      },
    ],
  },
  {
    slug: 'terapia-de-pareja',
    shortTitle: 'Terapia de pareja',
    title: 'Terapia de pareja',
    seoTitle: 'Terapia de pareja online en Guatemala y presencial en Huehuetenango',
    metaDescription:
      'Terapia de pareja online en toda Guatemala y presencial exclusivamente en Huehuetenango para mejorar la comunicación y comprender conflictos.',
    eyebrow: 'Relaciones y vínculos',
    summary:
      'Un espacio guiado para escuchar lo que está ocurriendo en la relación y construir conversaciones más claras, respetuosas y útiles.',
    intro:
      'La terapia de pareja no consiste en decidir quién tiene la razón. Busca identificar patrones de comunicación, necesidades y heridas que mantienen el conflicto, para que ambos puedan comprender la relación y tomar decisiones con mayor claridad.',
    icon: 'couple',
    deliveryMode: 'hybrid',
    featured: true,
    idealFor: [
      'Discusiones repetitivas o dificultad para comunicarse',
      'Distanciamiento emocional o pérdida de confianza',
      'Cambios familiares, laborales o vitales que afectan la relación',
      'Necesidad de tomar decisiones importantes como pareja',
    ],
    benefits: [
      'Conversaciones acompañadas con estructura y respeto',
      'Identificación de patrones que alimentan el conflicto',
      'Herramientas de comunicación y acuerdos',
      'Objetivos compartidos y seguimiento del proceso',
    ],
    process: [
      {
        title: 'Comprender la relación',
        description: 'Escuchamos la perspectiva de ambos y el motivo de consulta.',
      },
      {
        title: 'Reconocer patrones',
        description: 'Identificamos ciclos de conflicto, necesidades y recursos de la pareja.',
      },
      {
        title: 'Practicar cambios',
        description: 'Construimos acuerdos y nuevas formas de conversar y relacionarse.',
      },
    ],
    faqs: [
      {
        question: '¿Ambos deben estar de acuerdo para iniciar?',
        answer:
          'Sí. Para trabajar como pareja es importante que ambas personas conozcan y acepten participar en el proceso.',
      },
      {
        question: '¿La terapia garantiza que continuaremos juntos?',
        answer:
          'No. El objetivo es comprender la relación y facilitar decisiones informadas, no imponer un resultado específico.',
      },
      {
        question: '¿Las sesiones son siempre con ambos?',
        answer:
          'La estructura se define según el caso y se explica con claridad desde el inicio.',
      },
    ],
  },
  {
    slug: 'psicologia-infantil-adolescentes',
    shortTitle: 'Niñez y adolescencia',
    title: 'Psicología infantil y para adolescentes',
    seoTitle: 'Psicología infantil online en Guatemala y presencial en Huehuetenango',
    metaDescription:
      'Psicología infantil y adolescente online en toda Guatemala y presencial exclusivamente en Huehuetenango, con orientación a cuidadores.',
    eyebrow: 'Niñez, adolescencia y familia',
    summary:
      'Acompañamiento adaptado a cada etapa del desarrollo, integrando a la familia cuando es necesario y cuidando el ritmo de cada niño o adolescente.',
    intro:
      'Los cambios emocionales, escolares y familiares pueden ser difíciles de expresar. El acompañamiento psicológico ofrece un espacio adecuado a la edad para comprender lo que sucede y fortalecer recursos personales y familiares.',
    icon: 'child',
    deliveryMode: 'hybrid',
    idealFor: [
      'Cambios emocionales o conductuales persistentes',
      'Dificultades escolares, sociales o familiares',
      'Ansiedad, miedos, irritabilidad o baja autoestima',
      'Transiciones, pérdidas o cambios importantes',
    ],
    benefits: [
      'Comunicación adaptada a la etapa de desarrollo',
      'Participación y orientación para cuidadores',
      'Objetivos coordinados con la familia',
      'Seguimiento respetuoso del bienestar del menor',
    ],
    process: [
      {
        title: 'Entrevista con cuidadores',
        description: 'Recopilamos el motivo de consulta, contexto y antecedentes relevantes.',
      },
      {
        title: 'Valoración inicial',
        description: 'Conocemos al niño o adolescente y definimos necesidades y objetivos.',
      },
      {
        title: 'Acompañamiento familiar',
        description: 'Compartimos orientaciones y revisamos avances con los cuidadores.',
      },
    ],
    faqs: [
      {
        question: '¿La terapia online funciona con niños?',
        answer:
          'Puede ser adecuada en muchos casos, dependiendo de la edad, las necesidades y las condiciones para participar. Esto se valora antes de iniciar.',
      },
      {
        question: '¿Los padres participan en las sesiones?',
        answer:
          'La participación se adapta a la edad y al objetivo terapéutico, respetando la privacidad y el bienestar del menor.',
      },
      {
        question: '¿Qué necesito para la sesión?',
        answer:
          'Un espacio privado, conexión estable y un dispositivo con cámara. Si se requiere algún material, se informa previamente.',
      },
    ],
  },
  {
    slug: 'manejo-estres-ejecutivos',
    shortTitle: 'Estrés para ejecutivos',
    title: 'Manejo del estrés y bienestar para ejecutivos',
    seoTitle: 'Estrés ejecutivo: terapia online y en Huehuetenango',
    metaDescription:
      'Acompañamiento psicológico online en toda Guatemala y presencial exclusivamente en Huehuetenango para ejecutivos ante estrés y burnout.',
    eyebrow: 'Bienestar profesional',
    summary:
      'Un proceso enfocado en manejar la presión, prevenir el desgaste y recuperar un equilibrio sostenible entre desempeño y bienestar.',
    intro:
      'La exigencia constante puede afectar el sueño, las relaciones, la concentración y la salud emocional. Este espacio ayuda a reconocer señales de desgaste y construir estrategias realistas para responder a la presión sin normalizar el agotamiento.',
    icon: 'briefcase',
    deliveryMode: 'hybrid',
    idealFor: [
      'Sobrecarga laboral y dificultad para desconectarse',
      'Señales de agotamiento o burnout',
      'Ansiedad asociada al desempeño y la toma de decisiones',
      'Desequilibrio entre trabajo, familia y descanso',
    ],
    benefits: [
      'Estrategias aplicables al contexto profesional',
      'Revisión de límites, hábitos y prioridades',
      'Prevención del desgaste sostenido',
      'Mayor claridad para tomar decisiones',
    ],
    process: [
      {
        title: 'Mapa de presión',
        description: 'Identificamos fuentes de estrés, señales de desgaste y recursos disponibles.',
      },
      {
        title: 'Estrategia personal',
        description: 'Definimos cambios concretos en límites, hábitos y respuestas emocionales.',
      },
      {
        title: 'Sostenibilidad',
        description: 'Evaluamos resultados y fortalecemos prácticas que puedan mantenerse.',
      },
    ],
    faqs: [
      {
        question: '¿Es coaching o terapia?',
        answer:
          'Es acompañamiento psicológico. Puede abordar el contexto laboral, pero también considera las emociones, relaciones y bienestar integral.',
      },
      {
        question: '¿Puedo agendar fuera del horario laboral?',
        answer:
          'La disponibilidad se consulta directamente en el calendario de citas o por WhatsApp.',
      },
      {
        question: '¿La información de mi trabajo es confidencial?',
        answer:
          'Sí. El proceso se desarrolla bajo los principios de privacidad y confidencialidad profesional.',
      },
    ],
  },
  {
    slug: 'talleres-y-grupos',
    shortTitle: 'Talleres, conferencias y charlas',
    title: 'Talleres, conferencias y charlas de bienestar emocional',
    seoTitle: 'Talleres y conferencias presenciales en Huehuetenango',
    metaDescription:
      'Talleres, conferencias y charlas presenciales en Huehuetenango sobre bienestar emocional, estrés, ansiedad, comunicación, crianza y habilidades personales.',
    eyebrow: 'Aprendizaje en comunidad',
    summary:
      'Espacios psicoeducativos para aprender herramientas, conversar sobre experiencias compartidas y fortalecer recursos personales.',
    intro:
      'Los talleres, conferencias y charlas permiten abordar temas concretos mediante información clara, ejercicios y participación guiada. Se realizan presencialmente en Huehuetenango para comunidades, instituciones, equipos de trabajo o grupos con una necesidad común.',
    icon: 'group',
    deliveryMode: 'in-person',
    idealFor: [
      'Organizaciones que desean promover el bienestar emocional',
      'Familias o comunidades con una necesidad formativa',
      'Personas interesadas en aprender herramientas prácticas',
      'Grupos que buscan un espacio guiado de conversación',
    ],
    benefits: [
      'Contenido adaptado al público y sus objetivos',
      'Actividades prácticas y participación guiada',
      'Modalidad presencial en Huehuetenango',
      'Temas y duración definidos según la necesidad',
    ],
    process: [
      {
        title: 'Definir la necesidad',
        description: 'Conocemos el público, contexto y objetivos del espacio.',
      },
      {
        title: 'Diseñar la propuesta',
        description: 'Acordamos tema, formato, duración y metodología.',
      },
      {
        title: 'Realizar y evaluar',
        description: 'Facilitamos el encuentro y recogemos aprendizajes y próximos pasos.',
      },
    ],
    faqs: [
      {
        question: '¿Los talleres son únicamente para empresas?',
        answer:
          'No. También pueden organizarse para centros educativos, familias, comunidades u otros grupos.',
      },
      {
        question: '¿Se entrega material?',
        answer:
          'El material depende del formato acordado y se especifica en la propuesta.',
      },
      {
        question: '¿Cómo solicito una cotización?',
        answer:
          'Puedes escribir por WhatsApp o utilizar el formulario de contacto indicando el público, tema y fecha aproximada.',
      },
    ],
  },
  {
    slug: 'terapia-adultos-mayores',
    shortTitle: 'Adultos mayores',
    title: 'Acompañamiento psicológico para adultos mayores',
    seoTitle: 'Terapia para adultos mayores online y en Huehuetenango',
    metaDescription:
      'Acompañamiento psicológico online en toda Guatemala y presencial exclusivamente en Huehuetenango para adultos mayores ante cambios y duelo.',
    eyebrow: 'Bienestar en cada etapa',
    summary:
      'Un acompañamiento respetuoso para afrontar cambios, pérdidas y nuevas etapas, fortaleciendo autonomía, vínculos y calidad de vida.',
    intro:
      'La adultez mayor puede traer transiciones importantes en la salud, la familia, las rutinas y el sentido de vida. La terapia ofrece un espacio para expresar estas experiencias y construir formas de adaptación acordes con cada persona.',
    icon: 'senior',
    deliveryMode: 'hybrid',
    idealFor: [
      'Duelo, pérdidas o cambios en la vida cotidiana',
      'Soledad, preocupación o disminución del ánimo',
      'Adaptación a cambios familiares o de salud',
      'Necesidad de fortalecer vínculos y propósito personal',
    ],
    benefits: [
      'Ritmo y comunicación adaptados a la persona',
      'Espacio de escucha respetuoso',
      'Fortalecimiento de recursos y autonomía',
      'Orientación familiar cuando corresponde',
    ],
    process: [
      {
        title: 'Conocer la historia',
        description: 'Escuchamos la situación actual, necesidades y red de apoyo.',
      },
      {
        title: 'Definir prioridades',
        description: 'Acordamos objetivos valiosos y alcanzables para la persona.',
      },
      {
        title: 'Acompañar los cambios',
        description: 'Trabajamos recursos emocionales, vínculos y adaptación cotidiana.',
      },
    ],
    faqs: [
      {
        question: '¿Un familiar puede ayudar con la conexión?',
        answer:
          'Sí. Puede apoyar antes de la sesión, procurando que la conversación pueda desarrollarse con privacidad.',
      },
      {
        question: '¿La familia participa en el proceso?',
        answer:
          'Puede participar cuando sea útil y la persona atendida esté de acuerdo.',
      },
      {
        question: '¿Qué dispositivo se necesita?',
        answer:
          'Puede utilizarse una computadora, tableta o teléfono con cámara, micrófono y conexión estable.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}
