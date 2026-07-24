import { faqs } from '@/lib/data';

export default function FAQSection() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="premium-kicker">Preguntas frecuentes</p>
          <h2 className="premium-title mt-5 text-4xl sm:text-5xl">
            Información clara antes de comenzar.
          </h2>
          <p className="mt-6 leading-7 text-slate-600">
            Si tu pregunta no está aquí, puedes escribirnos por WhatsApp y
            orientarte antes de agendar.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.id} className="group py-6">
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
