import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contactos | Fale Connosco",
  description: "Entre em contacto com a Tecnolareiras. Telefone, email ou formulário de contacto.",
};

export default function ContactosPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contactos</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Contacte-nos</h1>
          <p className="text-gray-300 max-w-xl">
            Estamos aqui para ajudar. Contacte-nos por telefone, email ou através do formulário.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Telefone", value: "+351 XXX XXX XXX", sub: "Seg-Sex: 9h-18h" },
                { icon: Mail, label: "Email", value: "geral@tecnolareiras.pt", sub: "Resposta em 24h" },
                { icon: MapPin, label: "Morada", value: "Portugal", sub: "Cobertura nacional" },
                { icon: Clock, label: "Horário", value: "Segunda a Sexta", sub: "09:00 - 18:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4">
                    <div className="w-10 h-10 bg-[#D97706]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#D97706]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                      <div className="font-semibold text-sm text-[#111111] mt-0.5">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#111111] mb-6">Enviar Mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
