'use client';

import { useActionState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { sendContactEmail, ContactState } from '@/app/actions/contact';
import { contactInfo } from '@/lib/data';
import { servicePages } from '@/lib/services';

const initialState: ContactState = {};
const fieldClass =
  'mt-2 min-h-12 w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-600';

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <section id="contacto" className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            Contacto
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Da el primer paso hacia tu bienestar.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Cuéntanos brevemente qué necesitas. Te responderemos con orientación
            sobre el servicio y los próximos pasos.
          </p>

          <div className="mt-10 space-y-5 text-sm text-slate-300">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-5 w-5 text-teal-300" />
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-5 w-5 text-teal-300" />
              {contactInfo.phone}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-teal-300" />
              {contactInfo.location}
            </p>
          </div>

          <Link
            href="/agendar"
            className="mt-10 inline-flex items-center gap-2 font-bold text-teal-300 hover:text-white"
          >
            Ir directamente al calendario
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="grid gap-6 bg-white p-7 text-slate-900 sm:grid-cols-2 sm:p-10"
        >
          <label className="text-sm font-semibold">
            Nombre completo
            <input className={fieldClass} type="text" name="name" autoComplete="name" required />
          </label>
          <label className="text-sm font-semibold">
            Correo electrónico
            <input className={fieldClass} type="email" name="email" autoComplete="email" required />
          </label>
          <label className="text-sm font-semibold">
            Teléfono
            <input className={fieldClass} type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="text-sm font-semibold">
            Servicio de interés
            <select className={fieldClass} name="service" defaultValue="">
              <option value="">Selecciona un servicio</option>
              {servicePages.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.shortTitle}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold sm:col-span-2">
            Mensaje
            <textarea className={fieldClass} name="message" rows={5} required />
          </label>

          {state.error && (
            <p className="border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:col-span-2">
              {state.error}
            </p>
          )}
          {state.success && (
            <p className="border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 sm:col-span-2">
              {state.success}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="premium-button sm:col-span-2 sm:justify-self-start"
          >
            {isPending ? 'Enviando…' : 'Enviar mensaje'}
            {!isPending && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}
