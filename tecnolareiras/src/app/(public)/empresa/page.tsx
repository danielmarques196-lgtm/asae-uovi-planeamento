import type { Metadata } from "next";
import { CheckCircle, Award, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós | A Nossa Empresa",
  description:
    "Conheça a Tecnolareiras: mais de 15 anos de experiência em recuperadores de calor, salamandras e lareiras em Portugal.",
};

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Trabalhamos apenas com marcas de referência europeia, garantindo produtos de excelência e durabilidade.",
  },
  {
    icon: Users,
    title: "Profissionalismo",
    description:
      "Equipa especializada e certificada com formação contínua nas mais recentes tecnologias.",
  },
  {
    icon: Target,
    title: "Compromisso",
    description:
      "Comprometemo-nos com cada cliente para encontrar a solução ideal para as suas necessidades.",
  },
  {
    icon: CheckCircle,
    title: "Confiança",
    description:
      "Anos de experiência e centenas de clientes satisfeitos são a nossa melhor referência.",
  },
];

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#D97706] text-sm font-semibold uppercase tracking-wider mb-3">
              A Nossa Empresa
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Especialistas em Aquecimento a Biomassa
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Há mais de 15 anos que a Tecnolareiras é sinónimo de qualidade, confiança e excelência
              no setor dos equipamentos de aquecimento em Portugal.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6">A Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Tecnolareiras nasceu da paixão pelo conforto e bem-estar em casa. Fundada por uma equipa
                  de técnicos especializados com vasta experiência no setor, a empresa rapidamente se afirmou
                  como referência nacional em equipamentos de aquecimento a biomassa.
                </p>
                <p>
                  Com uma filosofia centrada no cliente e na qualidade dos produtos que comercializamos,
                  tornámo-nos parceiros exclusivos das marcas mais conceituadas da Europa, como MCZ, Jøtul,
                  Edilkamin e muitas outras.
                </p>
                <p>
                  Hoje, contamos com uma equipa de mais de 20 técnicos certificados e realizámos mais de
                  2.000 instalações em todo o país. O nosso compromisso mantém-se o mesmo: oferecer as
                  melhores soluções de aquecimento com um serviço de excelência.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2009", label: "Ano de fundação" },
                { value: "20+", label: "Técnicos certificados" },
                { value: "2000+", label: "Instalações realizadas" },
                { value: "98%", label: "Satisfação dos clientes" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
                >
                  <div className="text-3xl font-bold text-[#D97706] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#D97706]/30 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 bg-[#D97706]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#D97706]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
