import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marcas | Fogo Montanha, Solzaima, Metlor, Chamilar, C&A Chama",
  description:
    "Representantes oficiais das principais marcas portuguesas de recuperadores de calor, salamandras e lareiras: Fogo Montanha, Solzaima, Metlor, Chamilar e C&A Chama.",
};

const brandDetails = [
  {
    slug: "fogo-montanha",
    name: "Fogo Montanha",
    country: "Portugal",
    description: "Marca portuguesa de referência na produção de recuperadores de calor e salamandras a lenha e pellets. Combina inovação tecnológica e design contemporâneo, com gamas Classic, Vision e Square para todos os espaços.",
    categories: ["Recuperadores de Calor", "Salamandras a Lenha", "Recuperadores a Pellets"],
    founded: "1993",
    emoji: "🔥",
    highlight: "Gama Classic · Vision · Square",
  },
  {
    slug: "solzaima",
    name: "Solzaima",
    country: "Portugal",
    description: "Fundada em 1978, a Solzaima é líder nacional em soluções de aquecimento a biomassa. Especialista em recuperadores a lenha e pellets para aquecimento local e central, com certificação TÜV e classes energéticas A+ e A++.",
    categories: ["Recuperadores de Calor", "Aquecimento Central", "Salamandras a Pellets"],
    founded: "1978",
    emoji: "🌟",
    highlight: "Linha Mytho · Zaima · Atlantic",
  },
  {
    slug: "metlor",
    name: "Metlor",
    country: "Portugal",
    description: "Fabricante português com décadas de experiência em recuperadores de calor de alta potência. A gama Quina e Elos destaca-se pela robustez e capacidade de aquecimento de grandes espaços, com soluções até 25 kW.",
    categories: ["Recuperadores de Calor", "Aquecimento Central", "Salamandras a Lenha"],
    founded: "1980",
    emoji: "⚙️",
    highlight: "Linha Quina · Elos · LLAR",
  },
  {
    slug: "ca-chama",
    name: "C&A Chama",
    country: "Portugal",
    description: "Marca portuguesa que une design moderno com tecnologia eficiente. Os recuperadores Cristal em ferro fundido e os modelos de aquecimento central W4 distinguem-se pela elegância e durabilidade.",
    categories: ["Recuperadores de Calor", "Ferro Fundido", "Aquecimento Central"],
    founded: "2000",
    emoji: "🏆",
    highlight: "Linha Cristal · W4 Central",
  },
  {
    slug: "chamilar",
    name: "Chamilar",
    country: "Portugal",
    description: "Com 35 anos de experiência na importação e distribuição de energias renováveis, a Chamilar oferece salamandras, recuperadores a pellets e soluções de ar condicionado, bomba de calor e solar.",
    categories: ["Salamandras a Lenha", "Recuperadores a Pellets", "Energias Renováveis"],
    founded: "1989",
    emoji: "🌱",
    highlight: "Linha Petit Cube · Zefiro · Kami",
  },
];

export default function MarcasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Marcas</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">As Nossas Marcas</h1>
          <p className="text-gray-300 max-w-xl">
            Representantes oficiais das principais marcas portuguesas de recuperadores de calor,
            salamandras e lareiras. Equipamentos fabricados em Portugal, com qualidade e garantia.
          </p>
        </div>
      </section>

      {/* Made in Portugal badge */}
      <div className="bg-[#C8980C]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
          <span className="text-white font-bold text-sm">🇵🇹 Todas as marcas são de origem portuguesa</span>
          <span className="text-white/70 text-sm">— fabricadas em Portugal, com certificação europeia</span>
        </div>
      </div>

      {/* Brands Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandDetails.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marcas/${brand.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all duration-300 p-8 flex gap-6"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-[#C8980C]/10 transition-colors">
                  {brand.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-[#111111] group-hover:text-[#C8980C] transition-colors">
                        {brand.name}
                      </h2>
                      <span className="text-sm text-gray-400">{brand.country} · Desde {brand.founded}</span>
                    </div>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#C8980C] transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-[#C8980C] font-medium">{brand.highlight}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
