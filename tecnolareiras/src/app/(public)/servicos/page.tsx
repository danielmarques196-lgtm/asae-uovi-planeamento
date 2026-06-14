import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serviços | Instalação e Manutenção",
  description:
    "Serviços profissionais de instalação, manutenção e assistência técnica de recuperadores de calor, salamandras e lareiras em Portugal.",
};

const services = [
  {
    id: "instalacao",
    icon: "🔧",
    title: "Instalação",
    description:
      "Instalação profissional de recuperadores de calor, salamandras a lenha e pellets, lareiras e churrasqueiras por técnicos certificados.",
    includes: [
      "Avaliação técnica do espaço",
      "Dimensionamento da tubagem",
      "Instalação do equipamento",
      "Montagem de tubagens e chaminé",
      "Testes de funcionamento",
      "Formação ao cliente",
      "Certificado de instalação",
    ],
  },
  {
    id: "manutencao",
    icon: "⚙️",
    title: "Manutenção Preventiva",
    description:
      "Manutenção anual preventiva para garantir a segurança, eficiência e longevidade do seu equipamento de aquecimento.",
    includes: [
      "Limpeza completa do equipamento",
      "Verificação de vedantes e juntas",
      "Limpeza da chaminé e tubagens",
      "Verificação de sensores e controlos",
      "Ajuste de parâmetros de combustão",
      "Verificação de segurança",
      "Relatório de manutenção",
    ],
  },
  {
    id: "assistencia",
    icon: "🛠️",
    title: "Assistência Técnica",
    description:
      "Serviço de assistência técnica rápida para resolução de avarias e problemas técnicos nos seus equipamentos.",
    includes: [
      "Diagnóstico de avaria",
      "Reparação no local",
      "Substituição de peças originais",
      "Garantia nas reparações",
      "Resposta rápida (24-48h)",
      "Técnicos especializados por marca",
    ],
  },
  {
    id: "vistoria",
    icon: "📋",
    title: "Vistoria e Certificação",
    description:
      "Realização de vistorias técnicas e emissão de certificados de conformidade para instalações existentes.",
    includes: [
      "Avaliação da instalação existente",
      "Verificação de conformidade legal",
      "Relatório técnico detalhado",
      "Emissão de certificado",
      "Recomendações de melhorias",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Serviços</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Os Nossos Serviços</h1>
          <p className="text-gray-300 max-w-xl">
            Da instalação à manutenção, temos todos os serviços que precisa para o seu sistema de aquecimento funcionar na perfeição.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-[#111111] mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Button variant="accent" asChild>
                    <Link href="/pedir-orcamento">
                      Solicitar {service.title} <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-bold text-[#111111] mb-4 text-sm uppercase tracking-wider">
                    O que inclui:
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-[#D97706] mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D97706]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Precisa de um serviço?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Entre em contacto connosco para agendar um serviço ou pedir um orçamento sem compromisso.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-[#D97706] hover:bg-gray-100" size="lg" asChild>
              <Link href="/pedir-orcamento">Pedir Orçamento</Link>
            </Button>
            <Button className="border border-white/40 bg-white/10 text-white hover:bg-white/20" size="lg" asChild>
              <Link href="/contactos">
                <Phone size={18} /> Contactar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
