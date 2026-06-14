import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";

const BRAND_SLUGS = ["fogo-montanha", "solzaima", "metlor", "ca-chama", "chamilar"];

export function generateStaticParams() {
  return BRAND_SLUGS.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const brandData: Record<string, {
  name: string; country: string; founded: string; description: string; history: string;
  emoji: string; website: string; highlight: string;
  products: { name: string; slug: string; price: number; power?: string; fuel?: string }[];
}> = {
  "fogo-montanha": {
    name: "Fogo Montanha",
    country: "Portugal",
    founded: "1993",
    emoji: "🔥",
    website: "https://www.fogo-montanha.com",
    highlight: "Gama Classic · Vision · Square",
    description: "Marca portuguesa de referência em recuperadores de calor e salamandras a lenha e pellets. Combina inovação tecnológica, design contemporâneo e fabricação nacional.",
    history: `A Fogo Montanha é uma marca portuguesa com décadas de experiência na conceção e fabrico de equipamentos de aquecimento a biomassa. A empresa destaca-se pela inovação constante, com gamas que vão desde os recuperadores clássicos (série Classic) até aos modelos panorâmicos de última geração (série Vision) e os recuperadores a pellets inteligentes (série Square).

Todos os produtos Fogo Montanha são fabricados em Portugal, com materiais de alta qualidade e submetidos a rigorosos controlos de qualidade. A marca é reconhecida pela câmara de combustão eficiente, o vidro vitrocerâmico resistente a 750°C e o sistema de ar externo canalizável — características que garantem segurança, conforto e economia energética.`,
    products: [
      { name: "Classic E601", slug: "fogo-montanha-classic-e601", price: 890, power: "8 kW", fuel: "Lenha" },
      { name: "Classic E701", slug: "fogo-montanha-classic-e701", price: 1050, power: "10 kW", fuel: "Lenha" },
      { name: "Classic E801", slug: "fogo-montanha-classic-e801", price: 1190, power: "12 kW", fuel: "Lenha" },
      { name: "Vision M850 PV", slug: "fogo-montanha-vision-m850-pv", price: 1890, power: "14.5 kW", fuel: "Lenha" },
      { name: "Vision M850 PH", slug: "fogo-montanha-vision-m850-ph", price: 1790, power: "14.5 kW", fuel: "Lenha" },
      { name: "Vision M1100 PV", slug: "fogo-montanha-vision-m1100-pv", price: 2290, power: "18 kW", fuel: "Lenha" },
      { name: "Square D9KW", slug: "fogo-montanha-square-d9kw", price: 2490, power: "9 kW", fuel: "Pellets" },
      { name: "Core", slug: "fogo-montanha-core", price: 990, power: "9.4 kW", fuel: "Lenha" },
      { name: "Natura S500H", slug: "fogo-montanha-natura-s500h", price: 1290, power: "11 kW", fuel: "Lenha" },
    ],
  },
  "solzaima": {
    name: "Solzaima",
    country: "Portugal",
    founded: "1978",
    emoji: "🌟",
    website: "https://www.solzaima.pt",
    highlight: "Linha Mytho · Zaima · Atlantic",
    description: "Líder nacional em soluções de aquecimento a biomassa desde 1978. Especialista em recuperadores a lenha e pellets para aquecimento local e central, com certificação TÜV.",
    history: `A Solzaima foi fundada em 1978 com uma missão clara: criar soluções de aquecimento a biomassa eficientes e acessíveis para os lares portugueses. Ao longo de mais de 45 anos, tornou-se líder de mercado em Portugal, exportando os seus produtos para vários países europeus.

A empresa distingue-se pela inovação contínua, com tecnologias como o TEK System ECO para dupla combustão de alta eficiência, e pela gama completa de soluções — desde salamandras a lenha e pellets para aquecimento local, até recuperadores de aquecimento central com potências até 22 kW. Todos os produtos são certificados pelo TÜV (laboratório alemão) e cumprem as normas europeias ErP 2022.`,
    products: [
      { name: "Loki Eco 70", slug: "solzaima-loki-eco-70", price: 820, power: "9.3 kW", fuel: "Lenha" },
      { name: "Caramulo 70", slug: "solzaima-caramulo-70", price: 780, power: "8.6 kW", fuel: "Lenha" },
      { name: "Mytho Eco 21.7kW", slug: "solzaima-mytho-eco", price: 2890, power: "21.7 kW", fuel: "Lenha" },
      { name: "Zaima Eco 21.7kW", slug: "solzaima-zaima-eco", price: 2990, power: "21.7 kW", fuel: "Lenha" },
      { name: "Atlantic 22kW", slug: "solzaima-atlantic-22kw", price: 4290, power: "22.1 kW", fuel: "Pellets" },
      { name: "Tek Round Eco", slug: "solzaima-tek-round-eco", price: 690, power: "7.3 kW", fuel: "Lenha" },
      { name: "Amazon 9", slug: "solzaima-amazon-9", price: 1490, power: "9 kW", fuel: "Pellets" },
    ],
  },
  "metlor": {
    name: "Metlor",
    country: "Portugal",
    founded: "1980",
    emoji: "⚙️",
    website: "https://metlor.com",
    highlight: "Linha Quina · Elos · LLAR",
    description: "Fabricante português de recuperadores de calor de alta potência. A gama Quina e Elos destaca-se pela robustez para grandes espaços, com soluções até 25 kW.",
    history: `A Metlor é uma empresa portuguesa especializada no fabrico de recuperadores de calor a lenha de alta performance. A sua gama de produtos cobre desde recuperadores de média potência, como o Elos 98 (11 kW), até equipamentos de grande potência para aquecimento central, como o LLAR XL Vitrus (25 kW).

A linha Quina distingue-se pelo design sólido e pela elevada eficiência térmica (até 83%), sendo uma escolha popular para habitações de médio e grande porte. Os produtos Metlor são fabricados com aço de alta espessura e vidro vitrocerâmico resistente, garantindo durabilidade e segurança.`,
    products: [
      { name: "Quina Guilhotina", slug: "metlor-quina-guilhotina", price: 1590, power: "14 kW", fuel: "Lenha" },
      { name: "Quina 900", slug: "metlor-quina-900", price: 3234, power: "19 kW", fuel: "Lenha" },
      { name: "Elos 98", slug: "metlor-elos-98", price: 1190, power: "11 kW", fuel: "Lenha" },
      { name: "LLAR L LDA", slug: "metlor-llar-l-lda", price: 2490, power: "17.12 kW", fuel: "Lenha" },
      { name: "LLAR XL Vitrus", slug: "metlor-llar-xl-vitrus", price: 3190, power: "25.06 kW", fuel: "Lenha" },
    ],
  },
  "ca-chama": {
    name: "C&A Chama",
    country: "Portugal",
    founded: "2000",
    emoji: "🏆",
    website: "https://cea-chama.com",
    highlight: "Linha Cristal · W4 Central",
    description: "Recuperadores em ferro fundido e aquecimento central de design contemporâneo. Os modelos Cristal e W4 unem elegância e eficiência para lares modernos.",
    history: `A C&A Chama é uma marca portuguesa que se posiciona no segmento premium dos equipamentos de aquecimento a lenha. Os recuperadores Cristal, fabricados em ferro fundido, são o ex-libris da marca — combinam um design contemporâneo com um sistema de ventilação silencioso de elevado caudal, garantindo uma distribuição uniforme e eficiente do calor.

A linha W4 de aquecimento central permite integrar o recuperador na caldeira da habitação, produzindo água quente para radiadores e piso radiante. Com classe energética A+ e rendimentos até 84%, os produtos C&A Chama representam uma solução de alta qualidade para quem procura conforto e eficiência.`,
    products: [
      { name: "Cristal 69 Fundição", slug: "ca-chama-cristal-69", price: 1090, power: "9.8 kW", fuel: "Lenha" },
      { name: "W4-700 Aquecimento Central", slug: "ca-chama-w4-700", price: 1890, power: "13.1 kW", fuel: "Lenha" },
    ],
  },
  "chamilar": {
    name: "Chamilar",
    country: "Portugal",
    founded: "1989",
    emoji: "🌱",
    website: "https://www.chamilar.pt",
    highlight: "Linha Petit Cube · Zefiro · Kami",
    description: "35 anos de experiência em energias renováveis. Distribuidor de salamandras, recuperadores a pellets, ar condicionado e soluções solares em Portugal.",
    history: `Com 35 anos de experiência na importação e distribuição de energias renováveis, a Chamilar consolidou-se como um dos distribuidores de referência em Portugal. A empresa representa marcas de qualidade europeia em recuperadores a pellets, salamandras a lenha, ar condicionado, bombas de calor e painéis solares.

A gama Petit Cube destaca-se pelo design compacto e elegante, ideal para espaços mais pequenos. O recuperador a pellets Zefiro 3 (9.26 kW, classe A++) oferece controlo inteligente por smartphone. As salamandras Kami são uma escolha versátil para aquecimento a pellets com alto rendimento.`,
    products: [
      { name: "Petit Cube", slug: "chamilar-petit-cube", price: 590, power: "7 kW", fuel: "Lenha" },
      { name: "Zefiro 3", slug: "chamilar-zefiro-3", price: 2190, power: "9.26 kW", fuel: "Pellets" },
      { name: "Kami", slug: "chamilar-kami", price: 1290, power: "8 kW", fuel: "Pellets" },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandData[slug];
  if (!brand) return { title: "Marca não encontrada" };
  return {
    title: `${brand.name} | Recuperadores e Salamandras`,
    description: brand.description,
    keywords: `${brand.name}, recuperadores de calor, salamandras, ${brand.country}, aquecimento`,
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = brandData[slug];
  if (!brand) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/marcas" className="hover:text-[#C8980C]">Marcas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{brand.name}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-3xl">
              {brand.emoji}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{brand.name}</h1>
              <p className="text-gray-400 text-sm">{brand.country} · Desde {brand.founded} · {brand.highlight}</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl">{brand.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#111111] mb-8">
            Produtos {brand.name} disponíveis na Tecnolareiras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.products.map((product) => (
              <Link
                key={product.slug}
                href={`/produtos/${product.slug}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all duration-300 p-5 flex gap-4"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🔥
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-[#111111] group-hover:text-[#C8980C] transition-colors mb-1">
                    {brand.name} {product.name}
                  </h3>
                  {product.power && (
                    <p className="text-xs text-gray-400 mb-2">{product.power} · {product.fuel}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#C8980C]">{formatPrice(product.price)}</span>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-[#C8980C] transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="accent" asChild>
              <Link href="/pedir-orcamento">Pedir Orçamento para {brand.name}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Sobre a {brand.name}</h2>
            {brand.history.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">
                {para.trim()}
              </p>
            ))}
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C8980C] text-sm font-medium hover:underline mt-2"
            >
              Site oficial {brand.name} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
