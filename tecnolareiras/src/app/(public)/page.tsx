import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Phone,
  CheckCircle,
  Award,
  Users,
  Clock,
  Snowflake,
  Sun,
} from "lucide-react";
import {
  PRODUCT_CATEGORIES, BRANDS, SERVICES,
  CONTACT_PHONE_DISPLAY, CONTACT_ADDRESS, OPENING_HOURS, COMPANY_FOUNDED,
} from "@/lib/constants";

const stats = [
  { value: `${new Date().getFullYear() - COMPANY_FOUNDED}+`, label: "Anos de Experiência" },
  { value: "2000+", label: "Instalações Realizadas" },
  { value: "5", label: "Marcas Parceiras" },
  { value: "98%", label: "Clientes Satisfeitos" },
];

const features = [
  {
    icon: Award,
    title: "Marcas Portuguesas de Topo",
    description: "Representantes exclusivos da Fogo Montanha, Solzaima, Metlor e outras marcas nacionais de referência.",
  },
  {
    icon: Wrench,
    title: "Instalação Certificada",
    description: "Técnicos especializados e certificados pelo INETI para instalação segura e conforme a norma.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Garantia alargada nos equipamentos e nos trabalhos de instalação e manutenção.",
  },
  {
    icon: Clock,
    title: "Assistência Rápida",
    description: "Equipa de assistência técnica ao domicílio para resposta rápida na região Centro.",
  },
];

const testimonials = [
  {
    name: "Ana Sousa",
    location: "Entroncamento",
    rating: 5,
    text: "Excelente serviço! A equipa da Tecnolareiras foi muito profissional desde o primeiro contacto até à instalação. O recuperador de calor transformou completamente a nossa sala.",
  },
  {
    name: "João Ferreira",
    location: "Tomar",
    rating: 5,
    text: "Recomendo vivamente. Atendimento personalizado, ótima seleção de produtos e instalação impecável. A salamandra a pellets que comprei é silenciosa e muito eficiente.",
  },
  {
    name: "Maria Costa",
    location: "Abrantes",
    rating: 5,
    text: "Muito satisfeita com o trabalho realizado. A equipa foi pontual, cuidadosa e explicou tudo detalhadamente. O espaço ficou exatamente como imaginava.",
  },
];

const serviceIcons: Record<string, typeof Wrench> = {
  instalacao: Wrench,
  manutencao: Shield,
  assistencia: Phone,
  consultoria: Award,
  "ar-condicionado": Snowflake,
  "energia-solar": Sun,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8980C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#C8980C]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C8980C]/10 border border-[#C8980C]/20 rounded-full px-4 py-1.5 text-[#C8980C] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8980C] animate-pulse" />
              Desde {COMPANY_FOUNDED} · Entroncamento
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              O Seu Conforto é{" "}
              <span className="text-[#C8980C]">a Nossa Prioridade</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Recuperadores de calor, salamandras, lareiras, ar condicionado e energia solar.
              Venda, instalação e manutenção profissional em Entroncamento e região Centro.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" variant="accent" asChild>
                <Link href="/produtos">
                  Ver Produtos <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/pedir-orcamento">Pedir Orçamento Grátis</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#C8980C]">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* INFO BAR */}
      <div className="bg-[#C8980C]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-white text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <a href={`tel:+351${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`} className="font-semibold hover:underline">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <div className="hidden sm:block">{CONTACT_ADDRESS}</div>
          <div className="flex items-center gap-4">
            {OPENING_HOURS.filter(h => h.hours !== "Encerrado").map(h => (
              <span key={h.days}><strong>{h.days}:</strong> {h.hours}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              O que Vendemos
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Gama completa de soluções de aquecimento, climatização e energia para a sua casa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/produtos/${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-[#C8980C]/10 transition-colors">
                  {cat.icon}
                </div>
                <span className="text-xs font-medium text-center text-gray-700 group-hover:text-[#C8980C] transition-colors leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Os Nossos Serviços
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Muito mais do que vender — acompanhamos o cliente desde a escolha do equipamento até à manutenção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#C8980C]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#C8980C]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C8980C]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/servicos">Ver Todos os Serviços <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Por que escolher a Tecnolareiras?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Mais de {new Date().getFullYear() - COMPANY_FOUNDED} anos de experiência ao serviço dos nossos clientes, com qualidade e profissionalismo reconhecidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#C8980C]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#C8980C]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C8980C]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marcas que Representamos
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Representantes das principais marcas portuguesas de recuperadores, salamandras e lareiras.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marcas/${brand.slug}`}
                className="group flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-white/10 hover:border-[#C8980C] hover:bg-[#C8980C]/5 transition-all duration-300"
              >
                <span className="text-sm font-bold text-gray-400 group-hover:text-[#C8980C] transition-colors text-center">
                  {brand.name}
                </span>
                <span className="text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded">{brand.country}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="border border-white/20 bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="/marcas">
                Ver Todas as Marcas <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES BANNER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8980C]/10 border border-[#C8980C]/20 rounded-full px-4 py-1.5 text-[#C8980C] text-sm font-medium mb-6">
                <Wrench size={14} />
                Instalação &amp; Manutenção
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Técnicos Certificados pelo INETI
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                A nossa equipa técnica recebeu formação especializada através de cursos ministrados pelo INETI.
                Realizamos instalações conforme todas as normas de segurança em vigor, com serviço de manutenção
                preventiva e corretiva para maximizar a vida útil do seu equipamento.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Instalação de recuperadores e salamandras",
                  "Instalação de ar condicionado",
                  "Instalação de painéis solares e fotovoltaico",
                  "Manutenção preventiva anual",
                  "Assistência técnica ao domicílio",
                  "Vistoria e certificação de instalações",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={16} className="text-[#C8980C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button variant="accent" asChild>
                  <Link href="/servicos">Ver Serviços</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pedir-orcamento">Pedir Orçamento</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Técnicos Certificados", value: "Equipa" },
                { icon: Award, label: "Anos no Mercado", value: `${new Date().getFullYear() - COMPANY_FOUNDED}+` },
                { icon: CheckCircle, label: "Instalações", value: "2000+" },
                { icon: Star, label: "Avaliação Média", value: "4.9/5" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-[#C8980C]/30 transition-colors"
                  >
                    <Icon size={28} className="text-[#C8980C] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#111111] mb-1">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              O que dizem os nossos clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#C8980C] fill-[#C8980C]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C8980C]/10 rounded-full flex items-center justify-center text-[#C8980C] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-[#C8980C]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar o seu espaço?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Ligue-nos ou passe pela nossa loja em Entroncamento. A nossa equipa está pronta para ajudar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#111111] hover:bg-gray-100 font-bold" asChild>
              <a href={`tel:+351${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`}>
                <Phone size={18} /> {CONTACT_PHONE_DISPLAY}
              </a>
            </Button>
            <Button size="lg" className="border-2 border-white text-white hover:bg-white/10" asChild>
              <Link href="/pedir-orcamento">Pedir Orçamento Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
