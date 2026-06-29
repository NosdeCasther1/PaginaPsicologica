export type Condition = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  color: string;
  symptoms: string[];
  causes: string[];
  howTherapyHelps: string;
  whenToSeekHelp: string;
  content: string;
  relatedServices: string[];
  keywords: string[];
};

export const conditions: Condition[] = [
  {
    slug: 'ansiedad',
    title: 'Ansiedad',
    shortDescription:
      'La ansiedad es una respuesta natural al estrés, pero cuando se vuelve constante o desproporcionada interfiere con la vida diaria.',
    icon: '🫀',
    color: 'from-orange-50 to-amber-50',
    symptoms: [
      'Preocupación excesiva y difícil de controlar',
      'Tensión muscular o sensación de estar "al límite"',
      'Dificultad para concentrarse',
      'Alteraciones del sueño (insomnio o sueño inquieto)',
      'Palpitaciones, sudoración o dificultad para respirar',
      'Evitar situaciones que generan miedo',
    ],
    causes: [
      'Eventos de vida estresantes o traumáticos',
      'Presión laboral, académica o familiar',
      'Patrones de pensamiento negativo o catastrófico',
      'Historia de experiencias adversas en la infancia',
      'Falta de herramientas para gestionar emociones',
    ],
    howTherapyHelps:
      'La psicoterapia cognitivo-conductual (TCC) es una de las herramientas más efectivas para la ansiedad. En terapia aprenderás a identificar los pensamientos que alimentan la ansiedad, a cuestionar su validez y a desarrollar respuestas más adaptativas. También se trabajan técnicas de relajación, respiración y exposición gradual cuando hay evitación.',
    whenToSeekHelp:
      'Busca apoyo psicológico si la ansiedad dura más de seis meses, interfiere con tu trabajo, relaciones o actividades cotidianas, o si sientes que no puedes controlarla aunque lo intentes.',
    content: `La ansiedad es una de las condiciones más comunes en la actualidad. Se caracteriza por una sensación persistente de miedo o preocupación que puede aparecer en situaciones específicas —como hablar en público o volar en avión— o de forma generalizada, acompañando prácticamente todos los aspectos de la vida.

Cuando la ansiedad es moderada, nos ayuda a rendir mejor y a estar alerta ante peligros reales. El problema surge cuando la respuesta de alarma se activa con demasiada frecuencia, demasiada intensidad o ante situaciones que objetivamente no representan un peligro.

La psicología trabaja la ansiedad desde múltiples ángulos: identificando los detonantes, modificando los patrones de pensamiento que la alimentan y construyendo habilidades concretas para manejarla. La terapia online es especialmente eficaz porque permite trabajar desde un entorno seguro y familiar para el consultante.`,
    relatedServices: ['Terapia Individual', 'Terapia Infantil'],
    keywords: ['ansiedad', 'trastorno de ansiedad', 'ataques de pánico', 'ansiedad generalizada', 'psicólogo ansiedad Guatemala'],
  },
  {
    slug: 'estres-burnout',
    title: 'Estrés y Burnout',
    shortDescription:
      'El estrés sostenido en el trabajo o la vida personal puede llevar al agotamiento total —el burnout—, un estado de desgaste que afecta cuerpo, mente y motivación.',
    icon: '🔋',
    color: 'from-red-50 to-rose-50',
    symptoms: [
      'Agotamiento físico y emocional crónico',
      'Sensación de que nada tiene sentido o de vacío',
      'Irritabilidad o explosiones emocionales',
      'Disminución del rendimiento y la motivación',
      'Dificultad para desconectarse del trabajo',
      'Problemas de concentración o memoria',
      'Dolores de cabeza, tensión cervical, insomnio',
    ],
    causes: [
      'Cargas de trabajo excesivas durante meses o años',
      'Falta de control sobre las propias tareas o decisiones',
      'Desequilibrio entre vida personal y laboral',
      'Perfeccionismo o dificultad para poner límites',
      'Cuidado intensivo de un familiar enfermo (caregiver burnout)',
      'Ambiente laboral tóxico o falta de reconocimiento',
    ],
    howTherapyHelps:
      'La terapia aborda el burnout desde la recuperación del sentido y los límites personales. Se trabajan estrategias de gestión del tiempo, técnicas de regulación emocional, identificación de valores y establecimiento de prioridades. También se exploran los patrones de pensamiento que llevan a descuidar las propias necesidades.',
    whenToSeekHelp:
      'Si llevas más de un mes sintiéndote vacío, agotado aunque duermas o completamente desconectado de lo que antes te importaba, es momento de buscar apoyo profesional.',
    content: `El estrés es una respuesta fisiológica y psicológica ante demandas del entorno. En dosis controladas, es funcional y hasta necesario. El problema es cuando se vuelve crónico y no hay momentos de recuperación.

El burnout —o síndrome de desgaste profesional— es la consecuencia de un estrés laboral prolongado que no se ha gestionado. La Organización Mundial de la Salud (OMS) lo reconoce como un fenómeno ocupacional caracterizado por tres dimensiones: agotamiento, distancia mental del trabajo y sensación de ineficacia.

No solo afecta a personas con trabajos exigentes: también ocurre en cuidadores, madres y padres, emprendedores y estudiantes. La buena noticia es que con apoyo profesional es totalmente recuperable, y la terapia online permite flexibilizar los horarios para adaptarse a personas con agendas complejas.`,
    relatedServices: ['Terapia Individual'],
    keywords: ['burnout', 'estrés laboral', 'agotamiento emocional', 'síndrome de burnout', 'estrés crónico Guatemala'],
  },
  {
    slug: 'depresion',
    title: 'Depresión',
    shortDescription:
      'La depresión va más allá de la tristeza ocasional. Es un estado persistente que afecta el pensamiento, las emociones, el cuerpo y la capacidad de funcionar en el día a día.',
    icon: '🌧️',
    color: 'from-blue-50 to-slate-50',
    symptoms: [
      'Tristeza profunda o sensación de vacío la mayor parte del tiempo',
      'Pérdida de interés en actividades que antes disfrutabas',
      'Cambios en el apetito o el peso',
      'Insomnio o sueño excesivo',
      'Fatiga y falta de energía',
      'Dificultad para concentrarse o tomar decisiones',
      'Sentimientos de culpa o inutilidad',
      'Pensamientos recurrentes de muerte (en casos severos)',
    ],
    causes: [
      'Eventos de vida difíciles: pérdidas, rupturas, desempleo',
      'Aislamiento social o soledad',
      'Patrones de pensamiento negativos y autocríticos',
      'Trauma o experiencias adversas no procesadas',
      'Cambios hormonales (postparto, menopausia)',
      'Enfermedades crónicas o dolor físico',
    ],
    howTherapyHelps:
      'La psicoterapia —especialmente la TCC y la terapia de activación conductual— es altamente efectiva para la depresión leve a moderada. Se trabaja para identificar y modificar pensamientos disfuncionales, recuperar actividades significativas, fortalecer la red de apoyo y construir habilidades de afrontamiento. Para casos severos, la terapia se combina con evaluación psiquiátrica.',
    whenToSeekHelp:
      'Si los síntomas duran más de dos semanas, si afectan tu trabajo o tus relaciones, o si tienes pensamientos de hacerte daño, busca ayuda profesional inmediatamente.',
    content: `La depresión es mucho más que sentirse triste algunos días. Es un estado que puede durar semanas, meses o años, y que afecta profundamente la forma en que una persona piensa, siente y actúa.

Se estima que en Guatemala y Centroamérica, la depresión sigue siendo una de las condiciones menos diagnosticadas por el estigma que rodea a la salud mental. Muchas personas la confunden con "flojera", "debilidad" o simplemente deciden aguantarla en silencio.

La psicología aborda la depresión sin necesidad de medicación en la mayoría de los casos leves a moderados. El trabajo terapéutico ayuda a romper el ciclo de pensamientos negativos y aislamiento, y a recuperar progresivamente la energía y la motivación. La terapia online elimina la barrera de desplazarse cuando uno apenas tiene fuerzas para levantarse.`,
    relatedServices: ['Terapia Individual'],
    keywords: ['depresión', 'tristeza persistente', 'psicólogo depresión', 'depresión sin medicación', 'terapia depresión Guatemala'],
  },
  {
    slug: 'duelo',
    title: 'Duelo y Pérdidas',
    shortDescription:
      'El duelo es el proceso natural de adaptación a una pérdida significativa. A veces se complica y se necesita acompañamiento profesional para transitarlo.',
    icon: '🕊️',
    color: 'from-purple-50 to-violet-50',
    symptoms: [
      'Tristeza intensa, llanto frecuente',
      'Incredulidad o sensación de que la pérdida no es real',
      'Enojo, culpa o vergüenza relacionados con la pérdida',
      'Dificultad para aceptar la nueva realidad',
      'Retirada social o aislamiento',
      'Dificultad para retomar actividades cotidianas',
      'Pensamientos constantes sobre lo perdido',
    ],
    causes: [
      'Muerte de un ser querido',
      'Ruptura amorosa o divorcio',
      'Pérdida de empleo o proyecto de vida',
      'Diagnóstico de enfermedad grave',
      'Migración y pérdida del entorno conocido',
      'Pérdida de una etapa de vida (jubilación, "nido vacío")',
    ],
    howTherapyHelps:
      'La terapia del duelo acompaña el proceso sin forzar etapas ni imponer tiempos. El objetivo no es "superar" la pérdida —que en muchos casos es una persona irreemplazable— sino integrarla en la vida de una forma que permita continuar. Se trabajan los significados, los rituales, las emociones pendientes y la construcción de una nueva narrativa.',
    whenToSeekHelp:
      'El duelo se vuelve complicado cuando los síntomas son muy intensos después de varios meses, cuando interfieren significativamente con el funcionamiento cotidiano o cuando la persona siente que no puede avanzar sola.',
    content: `Todas las personas experimentan pérdidas a lo largo de la vida. Algunas son esperadas y otras son repentinas, pero todas requieren un proceso de adaptación que se conoce como duelo.

Es importante saber que el duelo no sigue un orden fijo de etapas, ni tiene un tiempo determinado. Cada persona lo vive de forma única según su historia, su cultura, la naturaleza de la pérdida y los recursos con los que cuenta.

En Guatemala, muchas personas cargan con duelos no procesados durante años, especialmente cuando la pérdida ocurrió en contextos de violencia, migración forzada o enfermedad inesperada. La terapia online ofrece un espacio seguro para explorar estas experiencias sin necesidad de desplazarse, y con la privacidad que este tipo de proceso requiere.`,
    relatedServices: ['Terapia Individual', 'Terapia de Pareja'],
    keywords: ['duelo', 'pérdida', 'luto', 'duelo complicado', 'psicólogo duelo Guatemala'],
  },
  {
    slug: 'autoestima',
    title: 'Baja Autoestima',
    shortDescription:
      'La baja autoestima es una valoración negativa y persistente de uno mismo que afecta las decisiones, las relaciones y la calidad de vida.',
    icon: '🪞',
    color: 'from-yellow-50 to-amber-50',
    symptoms: [
      'Autocrítica excesiva y voz interna muy negativa',
      'Dificultad para reconocer los propios logros',
      'Miedo al rechazo o al fracaso',
      'Comparación constante con los demás',
      'Dificultad para poner límites o decir que no',
      'Dependencia de la aprobación externa',
      'Tendencia a quedarse en relaciones o situaciones dañinas',
    ],
    causes: [
      'Críticas frecuentes en la infancia o adolescencia',
      'Bullying o experiencias de exclusión social',
      'Comparación constante en el entorno familiar',
      'Fracasos no procesados adecuadamente',
      'Relaciones afectivas con dinámicas de control o humillación',
      'Estándares culturales de éxito o belleza inalcanzables',
    ],
    howTherapyHelps:
      'En terapia se trabaja para identificar las creencias nucleares negativas que sostienen la baja autoestima, entender su origen y reemplazarlas gradualmente por creencias más realistas y compasivas. También se desarrollan habilidades de asertividad, establecimiento de límites y autocuidado.',
    whenToSeekHelp:
      'Si la imagen que tienes de ti mismo/a te impide avanzar en tus metas, sostener relaciones saludables o cuidarte adecuadamente, la terapia puede ser un punto de inflexión.',
    content: `La autoestima no es una característica fija con la que se nace: se construye a lo largo de la vida a través de las experiencias, las relaciones y los mensajes que recibimos de nuestro entorno.

Una autoestima sana no significa pensar que eres perfecto/a, sino tener una valoración realista y compasiva de ti mismo/a —reconocer tus fortalezas sin magnificarlas, y aceptar tus debilidades sin convertirlas en condenas.

La baja autoestima es transversal a muchas otras dificultades psicológicas: la ansiedad, la depresión, las relaciones de dependencia, el burnout. Por eso trabajarla en terapia tiene un efecto multiplicador: al mejorar la relación contigo mismo/a, muchas otras áreas de tu vida también comienzan a cambiar.`,
    relatedServices: ['Terapia Individual'],
    keywords: ['baja autoestima', 'autoestima', 'seguridad en uno mismo', 'confianza personal', 'psicólogo autoestima Guatemala'],
  },
  {
    slug: 'relaciones-pareja',
    title: 'Problemas de Pareja',
    shortDescription:
      'Los conflictos en la pareja son inevitables, pero cuando los patrones de comunicación se rompen o el dolor se acumula, la terapia puede ayudar a sanar o a tomar decisiones con claridad.',
    icon: '💬',
    color: 'from-pink-50 to-rose-50',
    symptoms: [
      'Discusiones frecuentes sin resolución',
      'Distancia emocional o sensación de desconexión',
      'Dificultad para comunicar necesidades sin conflicto',
      'Desconfianza o celos problemáticos',
      'Uno o ambos sienten que no son escuchados',
      'Presencia de crítica, desprecio, defensividad o evasión',
      'Dificultad para superar una infidelidad u otra ruptura de confianza',
    ],
    causes: [
      'Patrones de comunicación aprendidos en familias de origen',
      'Estilos de apego incompatibles o no trabajados',
      'Crisis vitales: hijos, mudanzas, pérdidas, enfermedades',
      'Diferencias en valores, metas o estilos de vida',
      'Acumulación de resentimientos no expresados',
      'Infidelidad o traición de confianza',
    ],
    howTherapyHelps:
      'La terapia de pareja trabaja la comunicación, los patrones relacionales y los acuerdos que permiten que ambas personas se sientan vistas y respetadas. No se trata de decidir quién tiene la razón, sino de construir un lenguaje común y sanar las heridas que se han ido acumulando.',
    whenToSeekHelp:
      'Cuanto antes se busque ayuda, más recursos tiene la pareja para recuperarse. No esperes a estar en crisis total. Si hay discusiones que se repiten, distancia emocional creciente o una herida que no cierra, es el momento.',
    content: `Todas las parejas atraviesan momentos difíciles. Los conflictos no son señal de que la relación esté condenada al fracaso —a menudo son oportunidades para crecer y conocerse mejor.

El problema surge cuando los patrones de comunicación se vuelven dañinos: cuando una discusión siempre termina igual, cuando uno de los dos se cierra o explota, o cuando la distancia emocional ha crecido tanto que ya no saben cómo acercarse.

La terapia de pareja online es especialmente práctica porque ambas personas pueden conectarse desde donde estén, sin depender de coincidir en horario y desplazamiento. El espacio terapéutico ofrece un terreno neutral donde el psicólogo facilita el diálogo sin tomar partido por ninguna de las dos partes.`,
    relatedServices: ['Terapia de Pareja'],
    keywords: ['terapia de pareja', 'problemas de pareja', 'comunicación en pareja', 'psicólogo pareja Guatemala', 'conflictos de pareja'],
  },
  {
    slug: 'ninez-adolescencia',
    title: 'Niñez y Adolescencia',
    shortDescription:
      'Los niños y adolescentes también tienen necesidades emocionales que, cuando no se atienden, pueden afectar su desarrollo, rendimiento escolar y relaciones.',
    icon: '🌱',
    color: 'from-green-50 to-emerald-50',
    symptoms: [
      'Cambios bruscos de comportamiento o humor',
      'Dificultades en el rendimiento escolar',
      'Retraimiento social o rechazo escolar',
      'Agresividad, rabietas o comportamiento oposicionista',
      'Miedos intensos o ansiedad de separación',
      'Problemas de atención o hiperactividad (TDAH)',
      'Síntomas físicos sin causa médica (dolor de estómago, cefaleas)',
    ],
    causes: [
      'Cambios familiares: divorcio, mudanzas, llegada de un hermano',
      'Bullying o dificultades de integración social',
      'Presión académica excesiva',
      'Experiencias de pérdida o duelo',
      'Ambiente familiar con alta conflictividad',
      'Uso problemático de pantallas y redes sociales',
    ],
    howTherapyHelps:
      'La terapia infantil y adolescente utiliza técnicas adaptadas a cada etapa del desarrollo: juego terapéutico para los más pequeños, y técnicas cognitivo-conductuales o narrativas para adolescentes. También se trabaja con los padres para alinear la respuesta del entorno familiar.',
    whenToSeekHelp:
      'Busca orientación profesional si los cambios de comportamiento duran más de dos semanas, si el niño o adolescente expresa sufrimiento de forma directa o indirecta, o si la familia siente que no sabe cómo ayudar.',
    content: `Los niños y adolescentes no siempre tienen palabras para expresar lo que sienten, pero sí lo comunican a través de su comportamiento, su cuerpo y sus relaciones.

Un niño que de repente se niega a ir al colegio, un adolescente que se aísla o que estalla con frecuencia, o un estudiante cuyo rendimiento cae sin razón aparente, están enviando una señal de que algo no está bien emocionalmente.

La terapia infantil y adolescente no solo trabaja con el niño o joven, sino también con la familia. En muchos casos, los padres aprenden herramientas concretas para acompañar mejor a sus hijos, lo que multiplica el efecto de la terapia. El formato online facilita que los padres participen desde casa sin alterar la rutina familiar.`,
    relatedServices: ['Terapia Infantil', 'Terapia Individual'],
    keywords: ['terapia infantil', 'psicólogo niños', 'psicólogo adolescentes', 'TDAH Guatemala', 'bullying psicólogo'],
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
