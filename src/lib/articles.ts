export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  publishedAt: string;
  keywords: string[];
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  keyTakeaways: string[];
  sources: Array<{
    title: string;
    url: string;
  }>;
};

export const articles: Article[] = [
  {
    slug: 'tecnicas-para-manejar-ansiedad',
    title: '5 técnicas efectivas para manejar la ansiedad',
    excerpt:
      'Estrategias psicológicas prácticas para reducir la ansiedad diaria sin negar lo que sientes.',
    category: 'Ansiedad',
    readTime: '6 min lectura',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['ansiedad', 'manejo de ansiedad', 'respiración', 'terapia online'],
    intro:
      'La ansiedad no siempre es un problema: es una respuesta natural del cuerpo ante amenazas o demandas. Se vuelve difícil cuando aparece con demasiada frecuencia, se siente fuera de control o empieza a limitar actividades importantes.',
    keyTakeaways: [
      'La meta no es eliminar toda ansiedad, sino aprender a regularla.',
      'La respiración, el registro de pensamientos y la exposición gradual son herramientas útiles.',
      'Si la ansiedad interfiere con tu vida diaria, la terapia puede ayudarte a recuperar control.',
    ],
    sections: [
      {
        title: '1. Respira más lento de lo que tu ansiedad te pide',
        body: [
          'Cuando la ansiedad sube, la respiración suele hacerse rápida y superficial. Esto puede intensificar la sensación de peligro. Practicar respiración lenta ayuda a enviar una señal de seguridad al sistema nervioso.',
          'Prueba inhalar por 4 segundos, sostener 2 segundos y exhalar por 6 segundos. Repite durante 3 a 5 minutos. No busques hacerlo perfecto: busca hacerlo constante.',
        ],
      },
      {
        title: '2. Escribe el pensamiento, no lo obedezcas de inmediato',
        body: [
          'La ansiedad suele llegar con frases como “algo malo va a pasar” o “no voy a poder”. En terapia se trabaja separar el pensamiento de la realidad: tener un pensamiento no significa que sea cierto.',
          'Anota qué estás pensando, qué evidencia tienes a favor, qué evidencia tienes en contra y qué le dirías a un amigo si estuviera pensando lo mismo.',
        ],
      },
      {
        title: '3. Reduce la evitación de forma gradual',
        body: [
          'Evitar lo que da miedo alivia a corto plazo, pero mantiene la ansiedad a largo plazo. La exposición gradual consiste en acercarte paso a paso a lo que evitas, con acompañamiento y objetivos realistas.',
          'Empieza por una versión pequeña y manejable de la situación. Si evitas llamadas, por ejemplo, puedes empezar enviando un audio corto antes de pasar a una llamada breve.',
        ],
      },
      {
        title: '4. Regresa al cuerpo con grounding',
        body: [
          'La técnica 5-4-3-2-1 ayuda cuando la mente se va al futuro. Nombra 5 cosas que ves, 4 que sientes con el cuerpo, 3 que escuchas, 2 que hueles y 1 que saboreas.',
          'Esto no resuelve la causa de fondo, pero baja la intensidad suficiente para que puedas responder mejor.',
        ],
      },
      {
        title: '5. Busca ayuda si la ansiedad ya está decidiendo por ti',
        body: [
          'Es momento de consultar si dejas de hacer cosas importantes, si la ansiedad afecta tu sueño, tu trabajo o tus relaciones, o si sientes que cada vez necesitas más control para estar tranquilo.',
          'La terapia psicológica, especialmente la cognitivo-conductual, tiene buena evidencia para tratar ansiedad en adultos, niños y adolescentes.',
        ],
      },
    ],
    sources: [
      {
        title: 'CDC: Anxiety and depression in children',
        url: 'https://www.cdc.gov/children-mental-health/about/about-anxiety-and-depression-in-children.html',
      },
      {
        title: 'NHS: Anxiety in children',
        url: 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/',
      },
      {
        title: 'Yale Medicine: Child Anxiety Guide',
        url: 'https://www.yalemedicine.org/news/child-anxiety-a-guide-for-parents',
      },
    ],
  },
  {
    slug: 'estres-burnout-senales',
    title: 'Estrés y burnout: señales de que necesitas parar',
    excerpt:
      'Cómo diferenciar cansancio normal de desgaste emocional sostenido y qué hacer antes de llegar al límite.',
    category: 'Estrés',
    readTime: '7 min lectura',
    image:
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['burnout', 'estrés laboral', 'agotamiento emocional', 'salud mental en el trabajo'],
    intro:
      'El estrés no siempre es negativo. Puede ayudarte a responder ante demandas. El problema aparece cuando se mantiene durante semanas o meses sin recuperación suficiente. Ahí puede aparecer el burnout o desgaste ocupacional.',
    keyTakeaways: [
      'El burnout no es flojera: es agotamiento por estrés crónico mal gestionado.',
      'Carga excesiva, bajo control y poco apoyo aumentan el riesgo.',
      'La recuperación requiere cambios de hábitos, límites y, a veces, cambios organizacionales.',
    ],
    sections: [
      {
        title: '¿Qué es burnout?',
        body: [
          'La Organización Mundial de la Salud describe el burnout como un fenómeno ocupacional asociado al estrés crónico en el trabajo que no se ha manejado adecuadamente.',
          'Suele incluir agotamiento, distancia mental o cinismo hacia el trabajo y sensación de baja eficacia.',
        ],
      },
      {
        title: 'Señales de alerta',
        body: [
          'Algunas señales comunes son cansancio que no mejora con dormir, irritabilidad, dificultad para concentrarse, sensación de vacío, dolores físicos por tensión y pérdida de motivación.',
          'También puede aparecer desconexión emocional: la persona funciona “en automático” pero siente que internamente ya no puede más.',
        ],
      },
      {
        title: 'Factores que lo alimentan',
        body: [
          'La OMS señala riesgos psicosociales como cargas excesivas, bajo control sobre el trabajo, inseguridad laboral, discriminación y falta de apoyo.',
          'A nivel personal, el perfeccionismo, la dificultad para decir que no y la culpa al descansar pueden empeorar el problema.',
        ],
      },
      {
        title: 'Qué hacer primero',
        body: [
          'Empieza por revisar sueño, pausas, carga real de trabajo y límites. Si todo depende de “aguantar más”, el sistema probablemente está fallando.',
          'En terapia se trabaja identificar patrones de autoexigencia, recuperar energía y diseñar límites sostenibles. También se puede preparar una conversación laboral difícil si hace falta.',
        ],
      },
    ],
    sources: [
      {
        title: 'WHO: Mental health at work',
        url: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work',
      },
      {
        title: 'WHO guidelines on mental health at work',
        url: 'https://iris.who.int/server/api/core/bitstreams/6152a556-6893-4c4e-9ed8-094478bb25eb/content',
      },
    ],
  },
  {
    slug: 'comunicacion-asertiva-pareja',
    title: 'Comunicación asertiva en la pareja: guía práctica',
    excerpt:
      'Aprende a expresar necesidades sin atacar y a escuchar sin ponerte automáticamente a la defensiva.',
    category: 'Relaciones',
    readTime: '7 min lectura',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['terapia de pareja', 'comunicación asertiva', 'conflictos de pareja'],
    intro:
      'La mayoría de conflictos de pareja no se deben solo al tema que se discute, sino a la forma en que se conversa. La comunicación asertiva permite decir lo que duele o se necesita sin convertir la conversación en una pelea.',
    keyTakeaways: [
      'Hablar desde “yo siento” reduce la defensa del otro.',
      'Escuchar no significa estar de acuerdo: significa entender antes de responder.',
      'Si las discusiones siempre terminan igual, la terapia puede ayudar a romper el patrón.',
    ],
    sections: [
      {
        title: 'Cambia acusaciones por necesidades',
        body: [
          'Decir “tú nunca me escuchas” suele activar defensa. En cambio, “me siento solo cuando intento hablar y miras el celular” describe una experiencia concreta.',
          'La fórmula útil es: situación específica, emoción, necesidad y petición. Por ejemplo: “Cuando llegas tarde sin avisar me siento poco considerado. Necesito más previsibilidad. ¿Puedes avisarme si te retrasas?”',
        ],
      },
      {
        title: 'No discutas para ganar',
        body: [
          'Si el objetivo es ganar, alguien tiene que perder. En pareja, una conversación saludable busca entender qué está pasando entre ambos y qué acuerdo puede cuidar el vínculo.',
          'Una pregunta útil es: “¿Qué necesitas que yo entienda de esto?”',
        ],
      },
      {
        title: 'Valida antes de responder',
        body: [
          'Validar no significa aprobar todo. Significa reconocer que la emoción del otro tiene sentido desde su experiencia.',
          'Frases como “entiendo que eso te haya dolido” o “tiene sentido que te hayas sentido solo” bajan la intensidad y abren espacio para soluciones.',
        ],
      },
      {
        title: 'Cuándo pedir ayuda',
        body: [
          'Si las conversaciones terminan en gritos, silencio prolongado, desprecio, amenazas de ruptura o acumulación de resentimiento, la terapia de pareja puede dar estructura y seguridad.',
          'No hace falta esperar a estar al borde de separarse. Consultar temprano suele facilitar mejores resultados.',
        ],
      },
    ],
    sources: [
      {
        title: 'APA: Healthy relationships',
        url: 'https://www.apa.org/topics/marriage-relationships/healthy-relationships',
      },
    ],
  },
  {
    slug: 'senales-salud-mental-infantil',
    title: 'Señales de alerta en la salud mental infantil',
    excerpt:
      'Guía para madres, padres y cuidadores: cuándo una conducta puede ser parte del desarrollo y cuándo conviene pedir ayuda.',
    category: 'Familia',
    readTime: '8 min lectura',
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['salud mental infantil', 'ansiedad infantil', 'psicólogo infantil', 'señales de alerta'],
    intro:
      'Los niños no siempre explican con palabras lo que sienten. Muchas veces comunican malestar a través del sueño, el apetito, el rendimiento escolar, la conducta o síntomas físicos sin causa médica clara.',
    keyTakeaways: [
      'Cambios persistentes en sueño, conducta o escuela merecen atención.',
      'Dolores de estómago o cabeza pueden aparecer cuando un niño está ansioso.',
      'Pedir ayuda temprano evita que el problema se consolide.',
    ],
    sections: [
      {
        title: 'Cambios que conviene observar',
        body: [
          'Presta atención si tu hijo se muestra más irritable, lloroso, retraído, agresivo o temeroso durante varias semanas.',
          'También importan los cambios en el sueño, pesadillas frecuentes, pérdida de interés, dolores de cabeza o estómago repetidos y rechazo escolar.',
        ],
      },
      {
        title: 'Ansiedad y depresión no siempre se ven igual que en adultos',
        body: [
          'El CDC explica que la ansiedad infantil puede aparecer como miedo, preocupación, irritabilidad, problemas de sueño, fatiga, dolores de cabeza o estómago.',
          'La depresión puede confundirse con “mala conducta”, falta de motivación o enojo. Por eso es importante mirar el patrón, no solo un episodio aislado.',
        ],
      },
      {
        title: 'Qué hacer en casa',
        body: [
          'Escucha sin minimizar. Evita frases como “no pasa nada” si el niño claramente está sufriendo. Mejor prueba: “veo que esto te preocupa, cuéntame más”.',
          'Mantén rutinas, reduce gritos y amenazas, y coordina con la escuela si el problema también aparece allí.',
        ],
      },
      {
        title: 'Cuándo consultar',
        body: [
          'Busca ayuda si el malestar interfiere con escuela, juego, sueño, alimentación o relaciones, o si persiste varios meses.',
          'Si el niño o adolescente habla de hacerse daño, no lo tomes como manipulación: busca apoyo profesional urgente o servicios de emergencia.',
        ],
      },
    ],
    sources: [
      {
        title: 'CDC: Anxiety and depression in children',
        url: 'https://www.cdc.gov/children-mental-health/about/about-anxiety-and-depression-in-children.html',
      },
      {
        title: 'NHS: Anxiety in children',
        url: 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/',
      },
      {
        title: 'Yale Medicine: Child Anxiety Guide',
        url: 'https://www.yalemedicine.org/news/child-anxiety-a-guide-for-parents',
      },
    ],
  },
  {
    slug: 'duelo-como-acompanarlo',
    title: 'Duelo: cómo acompañarlo sin apresurar el proceso',
    excerpt:
      'El duelo no tiene calendario fijo. Aprende qué ayuda, qué no ayuda y cuándo buscar apoyo psicológico.',
    category: 'Duelo',
    readTime: '6 min lectura',
    image:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['duelo', 'pérdida', 'luto', 'acompañamiento psicológico'],
    intro:
      'El duelo es una respuesta humana ante una pérdida significativa. Puede aparecer por la muerte de alguien querido, una separación, migración, pérdida de empleo o cambios vitales profundos.',
    keyTakeaways: [
      'El duelo no se supera por olvidar, sino por integrar la pérdida.',
      'Frases como “sé fuerte” pueden aislar más a la persona.',
      'Cuando el dolor impide funcionar durante mucho tiempo, la terapia puede ayudar.',
    ],
    sections: [
      {
        title: 'No todos duelen igual',
        body: [
          'La intensidad del duelo depende del vínculo, el contexto, los recursos personales y la forma en que ocurrió la pérdida.',
          'No existe un tiempo “correcto” para estar bien. Comparar procesos suele añadir culpa innecesaria.',
        ],
      },
      {
        title: 'Qué suele ayudar',
        body: [
          'Ayuda escuchar sin intentar arreglarlo todo. Acompañar puede ser tan simple como estar disponible, preguntar qué necesita la persona y respetar silencios.',
          'También ayudan los rituales, escribir, hablar de la persona o etapa perdida y mantener rutinas básicas de sueño, comida y movimiento.',
        ],
      },
      {
        title: 'Qué conviene evitar',
        body: [
          'Evita frases como “todo pasa por algo”, “ya tienes que superarlo” o “sé fuerte”. Aunque sean bien intencionadas, pueden hacer que la persona sienta que su dolor incomoda.',
          'Es mejor decir: “no sé exactamente qué decir, pero estoy contigo”.',
        ],
      },
      {
        title: 'Cuándo buscar terapia',
        body: [
          'Consulta si el duelo se acompaña de aislamiento extremo, culpa persistente, incapacidad para funcionar, consumo problemático de alcohol u otras sustancias, o ideas de muerte.',
          'La terapia no borra la pérdida, pero ayuda a darle un lugar menos paralizante dentro de la vida.',
        ],
      },
    ],
    sources: [
      {
        title: 'APA: Grief',
        url: 'https://www.apa.org/topics/grief',
      },
    ],
  },
  {
    slug: 'autoestima-limites',
    title: 'Autoestima y límites: por qué decir “no” también es autocuidado',
    excerpt:
      'Cómo la dificultad para poner límites se relaciona con baja autoestima, ansiedad y relaciones desgastantes.',
    category: 'Autoestima',
    readTime: '6 min lectura',
    image:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-06-29',
    keywords: ['autoestima', 'límites personales', 'asertividad', 'autocuidado'],
    intro:
      'Poner límites no es ser egoísta. Es una forma de cuidar tu energía, tu tiempo y tu bienestar emocional. Para muchas personas, decir “no” activa culpa, miedo al rechazo o sensación de estar fallando.',
    keyTakeaways: [
      'Los límites protegen relaciones sanas; no las destruyen.',
      'La culpa no siempre significa que hiciste algo malo.',
      'La autoestima se fortalece con acciones consistentes de autocuidado.',
    ],
    sections: [
      {
        title: 'Por qué cuesta poner límites',
        body: [
          'Muchas personas aprendieron que agradar era la forma más segura de recibir cariño o evitar conflicto.',
          'Con el tiempo, esto puede convertirse en decir sí cuando quieres decir no, callar molestias o cargar responsabilidades que no te corresponden.',
        ],
      },
      {
        title: 'Un límite sano es claro y respetuoso',
        body: [
          'Un límite no necesita justificar tu valor. Puede ser simple: “hoy no puedo”, “prefiero no hablar de eso”, “necesito pensarlo antes de responder”.',
          'La firmeza no requiere agresión. La asertividad busca cuidar tu necesidad sin atacar a la otra persona.',
        ],
      },
      {
        title: 'La culpa puede aparecer, pero no manda',
        body: [
          'Si llevas años complaciendo, tu sistema emocional puede interpretar un límite como peligro. La culpa puede aparecer aunque el límite sea correcto.',
          'En terapia se trabaja tolerar esa incomodidad inicial y construir una autoestima basada en respeto propio, no solo en aprobación externa.',
        ],
      },
    ],
    sources: [
      {
        title: 'APA: Self-esteem',
        url: 'https://www.apa.org/topics/self-esteem',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
