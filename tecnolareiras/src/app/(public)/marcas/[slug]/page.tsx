import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return ["mcz", "jotul", "edilkamin", "piazzetta", "biofire", "romotop"].map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const brandData: Record<string, {
  name: string; country: string; founded: string; description: string; history: string;
  emoji: string; website: string;
  products: { name: string; slug: string; price: number; power: string }[];
  catalogues: { title: string; year: string }[];
}> = {
  mcz: {
    name: "MCZ",
    country: "Itália",
    founded: "1987",
    emoji: "🇮🇹",
    website: "https://www.mcz.it",
    description: "Fundada em 1987, a MCZ é uma das marcas italianas mais inovadoras no setor das salamandras a pellets e lareiras. Reconhecida internacionalmente pela sua tecnologia avançada e design sofisticado.",
    history: `A MCZ foi fundada em 1987 em Porcia, Itália, com o objetivo de criar produtos de aquecimento que combinassem design italiano com tecnologia de ponta. Ao longo dos anos, a MCZ cresceu para se tornar uma das marcas de referência no mercado europeu de aquecimento a biomassa.

    A empresa investiu fortemente em investigação e desenvolvimento, criando tecnologias proprietárias como o sistema Comfort Air, que revolucionou a distribuição do calor nas salamandras a pellets. Hoje, a MCZ exporta para mais de 50 países e é sinónimo de qualidade, inovação e design.`,
    products: [
      { name: "MCZ Suite Comfort Air 12", slug: "mcz-suite-comfort-air-12", price: 2890, power: "12 kW" },
      { name: "MCZ Musa Comfort Air 14", slug: "mcz-musa-comfort-air-14", price: 2450, power: "14 kW" },
      { name: "MCZ Club Comfort Air 14", slug: "mcz-club-comfort-air-14", price: 3200, power: "14 kW" },
    ],
    catalogues: [
      { title: "Catálogo Geral MCZ 2024", year: "2024" },
      { title: "Salamandras a Pellets MCZ 2024", year: "2024" },
    ],
  },
  jotul: {
    name: "Jøtul",
    country: "Noruega",
    founded: "1853",
    emoji: "🇳🇴",
    website: "https://www.jotul.com",
    description: "A Jøtul é a mais antiga fabricante de salamandras e lareiras do mundo. Os seus produtos são sinónimo de qualidade escandinava, durabilidade e design atemporal.",
    history: `Fundada em 1853 na Noruega, a Jøtul é a mais antiga fabricante de salamandras e lareiras do mundo. Com mais de 170 anos de experiência, a empresa acumulou um conhecimento ímpar na produção de equipamentos de aquecimento de alta qualidade.

    A Jøtul é conhecida pela sua filosofia de design simples e funcional, inspirada na tradição escandinava. Os seus produtos são fabricados com ferro fundido de alta qualidade e são reconhecidos pela sua durabilidade e longevidade excecional.`,
    products: [
      { name: "Jøtul F 370 Advance", slug: "jotul-f-370-advance", price: 1890, power: "8 kW" },
      { name: "Jøtul F 162", slug: "jotul-f-162", price: 1290, power: "6 kW" },
      { name: "Jøtul F 373", slug: "jotul-f-373", price: 2100, power: "10 kW" },
    ],
    catalogues: [
      { title: "Catálogo Jøtul 2024", year: "2024" },
    ],
  },
  edilkamin: {
    name: "Edilkamin",
    country: "Itália",
    founded: "1986",
    emoji: "🇮🇹",
    website: "https://www.edilkamin.com",
    description: "A Edilkamin é especialista em aquecimento a pellets desde 1986. Os seus produtos destacam-se pela tecnologia patenteada e pelo compromisso com a sustentabilidade e eficiência energética.",
    history: `A Edilkamin foi fundada em 1986 em Itália e rapidamente se estabeleceu como uma referência no setor do aquecimento a pellets. A empresa apostou desde cedo na inovação tecnológica e na qualidade dos materiais utilizados nos seus produtos.

    Com décadas de experiência, a Edilkamin desenvolveu tecnologias patenteadas que aumentam significativamente a eficiência dos seus equipamentos, reduzindo o consumo de pellets e as emissões para a atmosfera.`,
    products: [
      { name: "Edilkamin Plisse H Air", slug: "edilkamin-plisse-h-air", price: 3200, power: "14 kW" },
      { name: "Edilkamin Pathos H Air", slug: "edilkamin-pathos-h-air", price: 2800, power: "11 kW" },
    ],
    catalogues: [
      { title: "Catálogo Edilkamin 2024", year: "2024" },
    ],
  },
  piazzetta: {
    name: "Piazzetta",
    country: "Itália",
    founded: "1980",
    emoji: "🇮🇹",
    website: "https://www.piazzetta.it",
    description: "A Piazzetta destaca-se pelo design exclusivo e pela qualidade premium dos seus produtos. Especialista em recuperadores de calor a pellets com tecnologia de combustão avançada.",
    history: `A Piazzetta foi fundada em 1980 em Itália e ao longo dos anos tornou-se sinónimo de excelência no setor do aquecimento a pellets. Os seus produtos combinam design exclusivo com tecnologia de combustão avançada.

    A marca é reconhecida internacionalmente pela qualidade dos seus materiais e pelo rigor no processo de fabrico, garantindo equipamentos com elevada fiabilidade e durabilidade.`,
    products: [
      { name: "Piazzetta P951T", slug: "piazzetta-p951t", price: 4100, power: "20 kW" },
      { name: "Piazzetta P963", slug: "piazzetta-p963", price: 3600, power: "16 kW" },
    ],
    catalogues: [
      { title: "Catálogo Piazzetta 2024", year: "2024" },
    ],
  },
  biofire: {
    name: "Biofire",
    country: "Portugal",
    founded: "2005",
    emoji: "🇵🇹",
    website: "",
    description: "Marca portuguesa especializada em lareiras e churrasqueiras em aço inoxidável. Os produtos Biofire são fabricados com os mais elevados padrões de qualidade e acabamento.",
    history: `A Biofire é uma marca portuguesa fundada em 2005, especializada na produção de lareiras e churrasqueiras em aço inoxidável. Desde a sua fundação, a empresa tem apostado na qualidade dos materiais e no design funcional dos seus produtos.

    Orgulhosamente fabricado em Portugal, os produtos Biofire são reconhecidos pela sua robustez e pela qualidade do acabamento em aço inoxidável, adequados tanto para uso doméstico como profissional.`,
    products: [
      { name: "Lareira Suspensa Premium", slug: "lareira-suspensa-premium", price: 3800, power: "15 kW" },
      { name: "Churrasqueira Inox Premium", slug: "churrasqueira-inox-premium", price: 890, power: "" },
    ],
    catalogues: [],
  },
  romotop: {
    name: "Romotop",
    country: "República Checa",
    founded: "1993",
    emoji: "🇨🇿",
    website: "https://www.romotop.cz",
    description: "A Romotop é um dos maiores fabricantes europeus de recuperadores de calor a lenha. Os seus produtos destacam-se pela solidez da construção e pela eficiência energética superior.",
    history: `A Romotop foi fundada em 1993 na República Checa e cresceu para se tornar um dos maiores fabricantes europeus de recuperadores de calor a lenha. A empresa produz anualmente dezenas de milhar de equipamentos exportados para toda a Europa.

    Os recuperadores de calor Romotop são reconhecidos pela sua solidez de construção, com corpos em aço de alta espessura e acabamentos de qualidade superior. A marca oferece uma das mais amplas gamas de modelos do mercado.`,
    products: [
      { name: "Romotop Heat R 45 S", slug: "romotop-heat-r-45-s", price: 2200, power: "10 kW" },
      { name: "Romotop Heat R 60 S", slug: "romotop-heat-r-60-s", price: 2600, power: "14 kW" },
    ],
    catalogues: [
      { title: "Catálogo Romotop 2024", year: "2024" },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandData[slug] ?? brandData.mcz;
  return {
    title: `${brand.name} | Marcas`,
    description: brand.description.substring(0, 160),
  };
}

export default async function MarcaPage({ params }: Props) {
  const { slug } = await params;
  const brand = brandData[slug] ?? brandData.mcz;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/marcas" className="hover:text-[#D97706]">Marcas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{brand.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-4xl shrink-0">
              {brand.emoji}
            </div>
            <div>
              <div className="text-[#D97706] text-sm font-medium mb-1">{brand.country} · Desde {brand.founded}</div>
              <h1 className="text-4xl font-bold text-white mb-3">{brand.name}</h1>
              <p className="text-gray-300 max-w-xl">{brand.description}</p>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D97706] text-sm mt-3 hover:underline"
                >
                  Website oficial <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">História da Marca</h2>
              <div className="prose prose-gray max-w-none">
                {brand.history.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{para.trim()}</p>
                ))}
              </div>
            </div>

            <div>
              {/* Catalogues */}
              {brand.catalogues.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-[#111111] mb-4">Catálogos</h3>
                  <ul className="space-y-2">
                    {brand.catalogues.map((cat) => (
                      <li key={cat.title}>
                        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#D97706] transition-colors w-full text-left">
                          <Download size={14} />
                          <span>{cat.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-[#D97706]/10 border border-[#D97706]/20 rounded-xl p-6">
                <h3 className="font-bold text-[#111111] mb-2">Interessado nos produtos {brand.name}?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Peça um orçamento personalizado ou visite a nossa loja para ver os produtos em exposição.
                </p>
                <Button variant="accent" size="sm" asChild>
                  <Link href="/pedir-orcamento">Pedir Orçamento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#111111]">Produtos {brand.name}</h2>
            <Link href={`/produtos?marca=${slug}`} className="text-sm text-[#D97706] hover:underline flex items-center gap-1">
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.products.map((product) => (
              <Link
                key={product.slug}
                href={`/produtos/${product.slug}`}
                className="bg-white rounded-xl border border-gray-100 hover:border-[#D97706] hover:shadow-md transition-all p-6 group"
              >
                <div className="w-full aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-5xl">🔥</span>
                </div>
                <h3 className="font-semibold text-[#111111] group-hover:text-[#D97706] transition-colors mb-1">
                  {product.name}
                </h3>
                {product.power && (
                  <div className="text-sm text-gray-400 mb-3">{product.power}</div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#111111]">{product.price.toLocaleString("pt-PT")} €</span>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D97706] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
