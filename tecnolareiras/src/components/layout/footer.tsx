import Link from "next/link";
import { Flame, Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  OPENING_HOURS,
  COMPANY_FOUNDED,
  PRODUCT_CATEGORIES,
  FOOTER_LINKS,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  const productLinks = PRODUCT_CATEGORIES.slice(0, 6).map(cat => ({
    label: cat.name,
    href: `/produtos?categoria=${cat.slug}`,
  }));

  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C8980C] rounded-lg flex items-center justify-center">
                <Flame size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Tecnolareiras</span>
            </Link>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-5">
              Especialistas em recuperadores de calor, salamandras e lareiras desde {COMPANY_FOUNDED}. Venda, instalação e manutenção profissional.
            </p>
            <a
              href="https://facebook.com/tecnolareiras"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C8980C] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>

          {/* Products column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#C8980C] mb-4">Produtos</h3>
            <ul className="space-y-2.5">
              {productLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/produtos" className="text-sm text-[#C8980C] hover:text-[#E0AA14] transition-colors font-medium">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#C8980C] mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.empresa.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.servicos.slice(0, 3).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#C8980C] mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT_PHONE}`} className="flex items-start gap-2.5 text-sm text-[#A0A0A0] hover:text-white transition-colors">
                  <Phone size={15} className="text-[#C8980C] mt-0.5 shrink-0" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-2.5 text-sm text-[#A0A0A0] hover:text-white transition-colors">
                  <Mail size={15} className="text-[#C8980C] mt-0.5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  <MapPin size={15} className="text-[#C8980C] mt-0.5 shrink-0" />
                  {CONTACT_ADDRESS}
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-start gap-2.5">
                  <Clock size={15} className="text-[#C8980C] mt-0.5 shrink-0" />
                  <div className="text-sm text-[#A0A0A0] space-y-0.5">
                    {OPENING_HOURS.map(h => (
                      <div key={h.days}>
                        <span className="text-white/70">{h.days}:</span>{" "}
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#737373]">
            © {year} Tecnolareiras — Recuperadores e Climatização Lda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map(link => (
              <Link key={link.href} href={link.href} className="text-xs text-[#737373] hover:text-[#A0A0A0] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
