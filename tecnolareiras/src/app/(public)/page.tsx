import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, CheckCircle, Wrench, Settings, Lightbulb } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import {
  PRODUCT_CATEGORIES,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  CONTACT_ADDRESS,
  OPENING_HOURS,
  BRANDS,
} from "@/lib/constants";
import { ProductCard } from "@/components/cart/product-card";

const CATEGORY_DISPLAY = [
  { slug: "recuperadores-de-calor", name: "Recuperadores de Calor", icon: "🔥", count: 15, desc: "Aquecimento eficiente a lenha e pellets" },
  { slug: "salamandras-a-lenha", name: "Salamandras a Lenha", icon: "🪵", count: 5, desc: "Design e calor radiante para a sua sala" },
  { slug: "salamandras-a-pellets", name: "Salamandras a Pellets", icon: "🔵", count: 4, desc: "Aquecimento automático sem esforço" },
  { slug: "churrasqueiras", name: "Churrasqueiras", icon: "🍖", count: 3, desc: "Para os melhores momentos ao ar livre" },
];

const SERVICES_DISPLAY = [
  {
    icon: <Wrench size={28} className="text-[#C8980C]" />,
    title: "Instalação",
    desc: "Instalação profissional por técnicos certificados, com todos os acabamentos incluídos.",
  },
  {
    icon: <Settings size={28} className="text-[#C8980C]" />,
    title: "Manutenção",
    desc: "Manutenção preventiva e corretiva para garantir segurança e máximo desempenho.",
  },
  {
    icon: <Lightbulb size={28} className="text-[#C8980C]" />,
    title: "Consultoria",
    desc: "Aconselhamento personalizado para escolher a solução certa para o seu espaço e orçamento.",
  },
];

const INFO_ITEMS = [
  { icon: "🏆", label: "30+ Anos de Experiência", sub: "Desde 1992 no mercado" },
  { icon: "📦", label: "26 Produtos em Stock", sub: "Entrega imediata" },
  { icon: "🔧", label: "Instalação Profissional", sub: "Técnicos certificados" },
  { icon: "🛡️", label: "Garantia 2 Anos", sub: "Em todos os produtos" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#C8980C]/20 text-[#C8980C] text-xs font-semibold rounded-full mb-5 tracking-wide uppercase">
              Especialistas desde 1992
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              O Calor Certo{" "}
              <span className="text-[#C8980C]">para a Sua Casa</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Recuperadores de calor, salamandras e lareiras das melhores marcas portuguesas. Venda, instalação e manutenção profissional em Entroncamento e arredores.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/produtos"
                className="px-6 py-3 bg-[#C8980C] text-white font-semibold rounded-xl hover:bg-[#A67A09] transition-colors flex items-center gap-2"
              >
                Ver Produtos <ArrowRight size={18} />
              </Link>
              <Link
                href="/pedir-orcamento"
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Pedir Orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Info row */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-4 md:gap-8 text-sm text-white/60">
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 hover:text-[#C8980C] transition-colors">
              <Phone size={14} className="text-[#C8980C]" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C8980C]" />
              {CONTACT_ADDRESS}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#C8980C]" />
              {OPENING_HOURS[0].days}: {OPENING_HOURS[0].hours}
            </span>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-[#F7F2EA] border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INFO_ITEMS.map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm">{item.label}</p>
                  <p className="text-xs text-[#737373]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-3">Os Nossos Produtos</h2>
            <p className="text-[#737373] max-w-xl mx-auto">
              Encontre a solução de aquecimento ideal para o seu espaço, dentro do seu orçamento.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORY_DISPLAY.map(cat => (
              <Link
                key={cat.slug}
                href={`/produtos?categoria=${cat.slug}`}
                className="group p-6 border border-[#E5DDD0] rounded-2xl hover:border-[#C8980C] hover:shadow-md transition-all bg-[#FAFAF8]"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="font-semibold text-[#1C1C1C] mb-1">{cat.name}</h3>
                <p className="text-xs text-[#737373] mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C8980C]">{cat.count} produtos</span>
                  <ArrowRight size={16} className="text-[#C8980C] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/produtos" className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5DDD0] text-[#1C1C1C] font-medium rounded-xl hover:border-[#C8980C] hover:text-[#C8980C] transition-colors text-sm">
              Ver todos os produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-16 bg-[#F7F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-2">Mais Procurados</h2>
              <p className="text-[#737373]">Os equipamentos mais populares da nossa loja</p>
            </div>
            <Link href="/produtos" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#C8980C] hover:text-[#A67A09] transition-colors">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/produtos" className="inline-flex items-center gap-2 text-sm font-medium text-[#C8980C]">
              Ver todos os produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Os Nossos Serviços</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Acompanhamos o cliente em todo o processo — da escolha do equipamento à manutenção anual.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_DISPLAY.map(service => (
              <div key={service.title} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/servicos" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 hover:bg-white/5 transition-colors text-sm">
              Saber mais sobre serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-3">Marcas Parceiras</h2>
            <p className="text-[#737373]">Trabalhamos exclusivamente com marcas portuguesas de referência</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRANDS.map(brand => (
              <Link
                key={brand.slug}
                href={`/marcas/${brand.slug}`}
                className="group flex flex-col items-center justify-center p-6 border border-[#E5DDD0] rounded-2xl hover:border-[#C8980C] hover:shadow-sm transition-all bg-[#FAFAF8]"
              >
                <span className="text-3xl mb-2">🔥</span>
                <span className="font-semibold text-sm text-[#1C1C1C] text-center group-hover:text-[#C8980C] transition-colors">{brand.name}</span>
                <span className="text-xs text-[#737373] mt-1">🇵🇹 Portugal</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#C8980C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Precisa de Ajuda?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            A nossa equipa está disponível para o aconselhar sobre a melhor solução de aquecimento para a sua casa.
          </p>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-block text-3xl font-bold text-white mb-6 hover:opacity-80 transition-opacity"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contactos"
              className="px-6 py-3 bg-white text-[#C8980C] font-semibold rounded-xl hover:bg-[#F7F2EA] transition-colors"
            >
              Falar Connosco
            </Link>
            <Link
              href="/pedir-orcamento"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Pedir Orçamento Grátis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
