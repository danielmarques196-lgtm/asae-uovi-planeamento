import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Camera, Play, Clock } from "lucide-react";
import { FOOTER_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, OPENING_HOURS, COMPANY_FOUNDED } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA Band */}
      <div className="bg-[#C8980C]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl">Precisa de um orçamento?</h3>
            <p className="text-white/80 text-sm mt-1">
              Contacte-nos e obtenha uma proposta personalizada sem compromisso.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/pedir-orcamento"
              className="bg-white text-[#111111] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/contactos"
              className="border border-white text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 flex-shrink-0">
                <circle cx="20" cy="20" r="20" fill="#CC3300"/>
                <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">TL</text>
              </svg>
              <span className="font-bold text-xl">Tecnolareiras</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Especialistas em recuperadores de calor, salamandras, lareiras, ar condicionado e energia solar.
              Em Entroncamento desde {COMPANY_FOUNDED}.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C8980C] transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C8980C] transition-colors"
                aria-label="Instagram"
              >
                <Camera size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C8980C] transition-colors"
                aria-label="YouTube"
              >
                <Play size={14} />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#C8980C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#C8980C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-[#C8980C] transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-[#C8980C] transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-gray-400 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {CONTACT_ADDRESS}
                </span>
              </li>
              <li className="pt-1">
                {OPENING_HOURS.map((h) => (
                  <span key={h.days} className="flex items-start gap-2.5 text-gray-400 text-xs leading-relaxed">
                    <Clock size={12} className="mt-0.5 shrink-0" />
                    {h.days}: {h.hours}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Tecnolareiras. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 text-xs hover:text-[#C8980C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Membro da</span>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8980C] transition-colors"
            >
              Livro de Reclamações Eletrónico
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
