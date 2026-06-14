import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marcas | As Melhores Marcas de Aquecimento",
  description:
    "Descubra as marcas que representamos: MCZ, Jøtul, Edilkamin, Piazzetta e muitas mais. Parceiros exclusivos das melhores marcas europeias.",
};

const brandDetails = [
  {
    slug: "mcz",
    name: "MCZ",
    country: "Itália",
    description: "Fundada em 1987, a MCZ é uma das marcas italianas mais inovadoras no setor das salamandras a pellets e lareiras. Reconhecida internacionalmente pela sua tecnologia avançada e design sofisticado.",
    categories: ["Salamandras a Pellets", "Recuperadores de Calor", "Lareiras a Gás"],
    founded: "1987",
    emoji: "🇮🇹",
  },
  {
    slug: "jotul",
    name: "Jøtul",
    country: "Noruega",
    description: "A Jøtul é a mais antiga fabricante de salamandras e lareiras do mundo, fundada em 1853 na Noruega. Os seus produtos são sinónimo de qualidade escandinava, durabilidade e design atemporal.",
    categories: ["Salamandras a Lenha", "Lareiras", "Recuperadores de Calor"],
    founded: "1853",
    emoji: "🇳🇴",
  },
  {
    slug: "edilkamin",
    name: "Edilkamin",
    country: "Itália",
    description: "A Edilkamin é especialista em aquecimento a pellets desde 1986. Os seus produtos destacam-se pela tecnologia patenteada e pelo compromisso com a sustentabilidade e eficiência energética.",
    categories: ["Salamandras a Pellets", "Recuperadores de Calor", "Caldeiras a Pellets"],
    founded: "1986",
    emoji: "🇮🇹",
  },
  {
    slug: "piazzetta",
    name: "Piazzetta",
    country: "Itália",
    description: "A Piazzetta destaca-se pelo design exclusivo e pela qualidade premium dos seus produtos. Especialista em recuperadores de calor a pellets com tecnologia de combustão avançada.",
    categories: ["Recuperadores de Calor", "Salamandras a Pellets", "Lareiras"],
    founded: "1980",
    emoji: "🇮🇹",
  },
  {
    slug: "biofire",
    name: "Biofire",
    country: "Portugal",
    description: "Marca portuguesa especializada em lareiras e churrasqueiras em aço inoxidável. Os produtos Biofire são fabricados com os mais elevados padrões de qualidade e acabamento.",
    categories: ["Lareiras", "Churrasqueiras", "Lareiras Suspensas"],
    founded: "2005",
    emoji: "🇵🇹",
  },
  {
    slug: "romotop",
    name: "Romotop",
    country: "República Checa",
    description: "A Romotop é um dos maiores fabricantes europeus de recuperadores de calor a lenha. Os seus produtos destacam-se pela solidez da construção e pela eficiência energética superior.",
    categories: ["Recuperadores de Calor", "Salamandras a Lenha"],
    founded: "1993",
    emoji: "🇨🇿",
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
            Parceiros exclusivos das melhores marcas europeias de aquecimento a biomassa.
            Qualidade e inovação ao serviço do seu conforto.
          </p>
        </div>
      </section>

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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
