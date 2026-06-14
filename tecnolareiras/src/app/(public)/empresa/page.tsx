import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CONTACT_PHONE_DISPLAY, CONTACT_EMAIL, CONTACT_ADDRESS,
  COMPANY_FOUNDED, OPENING_HOURS, COMPANY_FULL_NAME,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre Nós | Tecnolareiras",
  description: `Conheça a Tecnolareiras — especialistas em recuperadores de calor, salamandras e climatização em Entroncamento desde ${COMPANY_FOUNDED}.`,
};

const timeline = [
  {
    year: "1992",
    title: "Fundação",
    description: "A empresa nasce como 'Mármores & Decorações' no centro de Entroncamento, com uma loja de pedra decorativa e os primeiros passos na venda de recuperadores e churrasqueiras.",
  },
  {
    year: "2005",
    title: "Transformação",
    description: "Em novembro de 2005, a empresa transforma-se em 'Tecnolareiras, Recuperadores e Climatização Lda', lançando novas marcas e uma maior diversidade de produtos.",
  },
  {
    year: "2008",
    title: "Certificação Técnica",
    description: "A equipa investe em formação profissional especializada através de cursos ministrados pelo INETI, garantindo instalações seguras e certificadas.",
  },
  {
    year: "Hoje",
    title: "Líderes Regionais",
    description: `Com mais de ${new Date().getFullYear() - COMPANY_FOUNDED} anos de experiência, somos o parceiro de confiança para aquecimento e climatização na região Centro de Portugal.`,
  },
];

const values = [
  { title: "Qualidade", description: "Trabalhamos apenas com marcas e materiais de comprovada qualidade e fiabilidade." },
  { title: "Profissionalismo", description: "Técnicos certificados e formados para garantir instalações seguras e eficientes." },
  { title: "Proximidade", description: "Atendimento personalizado e acompanhamento do cliente em todas as fases do projeto." },
  { title: "Confiança", description: "Mais de 30 anos de história ao serviço das famílias da região Centro." },
];

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Empresa</span>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C8980C]/10 border border-[#C8980C]/20 rounded-full px-4 py-1.5 text-[#C8980C] text-sm font-medium mb-6">
              Desde {COMPANY_FOUNDED}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O Seu Conforto é<br />
              <span className="text-[#C8980C]">a Nossa Prioridade</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos especialistas em recuperadores de calor, salamandras, lareiras e sistemas de climatização,
              com mais de {new Date().getFullYear() - COMPANY_FOUNDED} anos a melhorar o conforto dos lares portugueses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6">A Nossa História</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Tecnolareiras foi fundada em 1992 no coração de Entroncamento como <em>Mármores &amp; Decorações</em>,
                onde demos os primeiros passos na venda de recuperadores, salamandras e churrasqueiras.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Em novembro de 2005, a empresa evoluiu para <strong>{COMPANY_FULL_NAME}</strong>,
                trazendo novas marcas, maior diversidade de produtos e um foco ainda maior na satisfação do cliente.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hoje, somos representantes das principais marcas portuguesas do setor — Fogo Montanha, Solzaima,
                Metlor, Chamilar e C&amp;A Chama — e oferecemos um serviço completo: desde a consultoria e venda,
                até à instalação e manutenção por técnicos certificados pelo INETI.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: `${new Date().getFullYear() - COMPANY_FOUNDED}+`, label: "Anos de experiência" },
                  { value: "2000+", label: "Instalações realizadas" },
                  { value: "5", label: "Marcas representadas" },
                  { value: "98%", label: "Clientes satisfeitos" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100">
                    <div className="text-3xl font-bold text-[#C8980C]">{s.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6">A Nossa Evolução</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-8">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 bg-[#C8980C] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {item.year.length === 4 ? item.year.slice(2) : "↑"}
                      </div>
                      <div className="font-bold text-[#C8980C] text-sm mb-1">{item.year} — {item.title}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Os Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#C8980C]/30 transition-colors">
                <CheckCircle size={24} className="text-[#C8980C] mb-4" />
                <h3 className="font-bold text-[#111111] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-8">Visite-nos</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#C8980C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111]">Morada</p>
                    <p className="text-gray-500 text-sm">{CONTACT_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#C8980C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111]">Telefone</p>
                    <a href={`tel:+351${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-gray-500 text-sm hover:text-[#C8980C]">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#C8980C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111]">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-500 text-sm hover:text-[#C8980C]">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8980C]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#C8980C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111]">Horário</p>
                    {OPENING_HOURS.map((h) => (
                      <p key={h.days} className="text-gray-500 text-sm">{h.days}: <strong>{h.hours}</strong></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#111111] mb-4">Fale connosco</h3>
              <p className="text-gray-500 text-sm mb-6">
                Precisa de um orçamento, tem alguma dúvida ou quer agendar uma visita à nossa loja?
                Contacte-nos — respondemos em menos de 24 horas.
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="accent" asChild>
                  <Link href="/pedir-orcamento">Pedir Orçamento Grátis</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contactos">Enviar Mensagem</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
