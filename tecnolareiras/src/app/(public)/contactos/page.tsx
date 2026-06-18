import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  OPENING_HOURS,
} from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contactos | Tecnolareiras",
  description: "Entre em contacto com a Tecnolareiras em Entroncamento. Telefone, email, morada e formulário de contacto.",
};

export default function ContactosPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white">Contactos</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Fale Connosco</h1>
          <p className="text-white/60 max-w-xl">
            Estamos disponíveis para responder a todas as suas questões sobre produtos, instalação e manutenção.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">Informações de Contacto</h2>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#E5DDD0] rounded-2xl">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#737373] uppercase tracking-wide mb-1">Telefone</p>
                  <a href={`tel:${CONTACT_PHONE}`} className="text-lg font-semibold text-[#1C1C1C] hover:text-[#C8980C] transition-colors">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#E5DDD0] rounded-2xl">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#737373] uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-base font-medium text-[#1C1C1C] hover:text-[#C8980C] transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#E5DDD0] rounded-2xl">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#737373] uppercase tracking-wide mb-1">Morada</p>
                  <p className="text-base font-medium text-[#1C1C1C] mb-2">{CONTACT_ADDRESS}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#C8980C] hover:underline"
                  >
                    Ver no Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#E5DDD0] rounded-2xl">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#C8980C]" />
                </div>
                <div className="w-full">
                  <p className="text-xs font-semibold text-[#737373] uppercase tracking-wide mb-3">Horário de Funcionamento</p>
                  <div className="space-y-2">
                    {OPENING_HOURS.map(h => (
                      <div key={h.days} className="flex justify-between text-sm">
                        <span className="text-[#737373]">{h.days}</span>
                        <span className="font-semibold text-[#1C1C1C]">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#E5DDD0] rounded-2xl">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-[#C8980C]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#737373] uppercase tracking-wide mb-1">Redes Sociais</p>
                  <a
                    href="https://facebook.com/tecnolareiras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-base font-medium text-[#1C1C1C] hover:text-[#C8980C] transition-colors"
                  >
                    Tecnolareiras no Facebook <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">Enviar Mensagem</h2>
              <div className="bg-white border border-[#E5DDD0] rounded-2xl p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-[#E5DDD0] relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <MapPin size={32} className="text-[#C8980C]" />
          <p className="font-semibold text-[#1C1C1C]">{CONTACT_ADDRESS}</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-[#C8980C] text-white text-sm font-semibold rounded-xl hover:bg-[#A67A09] transition-colors"
          >
            Abrir no Google Maps <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
