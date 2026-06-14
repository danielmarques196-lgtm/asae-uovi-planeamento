import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { ContactForm } from "./contact-form";
import {
  CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL,
  CONTACT_ADDRESS, OPENING_HOURS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactos | Tecnolareiras — Entroncamento",
  description: `Entre em contacto com a Tecnolareiras. ${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL} · ${CONTACT_ADDRESS}.`,
};

export default function ContactosPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contactos</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Contacte-nos</h1>
          <p className="text-gray-300 max-w-xl">
            Visite-nos em Entroncamento, ligue-nos ou envie uma mensagem. Respondemos em menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-[#C8980C] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Telefone</div>
                  <div className="font-semibold text-sm text-[#111111] mt-0.5 group-hover:text-[#C8980C] transition-colors">
                    {CONTACT_PHONE_DISPLAY}
                  </div>
                  <div className="text-xs text-gray-400">Ligue-nos agora</div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-[#C8980C] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="font-semibold text-sm text-[#111111] mt-0.5 group-hover:text-[#C8980C] transition-colors">
                    {CONTACT_EMAIL}
                  </div>
                  <div className="text-xs text-gray-400">Resposta em 24h</div>
                </div>
              </a>

              <div className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Morada</div>
                  <div className="font-semibold text-sm text-[#111111] mt-0.5">{CONTACT_ADDRESS}</div>
                  <a
                    href="https://maps.google.com/?q=Tecnolareiras+Rua+31+de+Janeiro+2+Entroncamento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C8980C] hover:underline"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Horário</div>
                  {OPENING_HOURS.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 text-sm">
                      <span className="text-gray-500">{h.days}</span>
                      <span className={`font-medium ${h.hours === "Encerrado" ? "text-red-400" : "text-[#111111]"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://www.facebook.com/tecnolareiras.lda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-[#C8980C] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Facebook size={18} className="text-[#C8980C]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Facebook</div>
                  <div className="font-semibold text-sm text-[#111111] mt-0.5 group-hover:text-[#C8980C] transition-colors">
                    Tecnolareiras Lda
                  </div>
                  <div className="text-xs text-gray-400">Siga-nos no Facebook</div>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#111111] mb-2">Enviar Mensagem</h2>
              <p className="text-sm text-gray-500 mb-6">
                Preencha o formulário e entraremos em contacto em menos de 24 horas.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="bg-gray-200 h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={32} className="text-[#C8980C] mx-auto mb-2" />
          <p className="text-gray-600 font-medium">Rua 31 de Janeiro nº2, 2330-091 Entroncamento</p>
          <a
            href="https://maps.google.com/?q=Tecnolareiras+Rua+31+de+Janeiro+2+Entroncamento"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8980C] text-sm font-medium hover:underline mt-1 inline-block"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
