import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Download, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";

const productSlugs = [
  "mcz-suite-comfort-air-12", "jotul-f-370-advance", "edilkamin-plisse-h-air",
  "piazzetta-p951t", "romotop-heat-r-45-s", "mcz-musa-comfort-air-14",
  "jotul-f-162", "lareira-suspensa-premium", "churrasqueira-inox-premium",
  "tubagem-simples-200mm", "kit-limpeza-recuperador", "vedante-ceramico-6mm",
];

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Sample product data (in production this would come from DB)
const sampleProduct = {
  name: "MCZ Suite Comfort Air 12",
  slug: "mcz-suite-comfort-air-12",
  brand: "MCZ",
  category: "Salamandras a Pellets",
  price: 2890,
  salePrice: null,
  sku: "MCZ-SUITE-CA12",
  power: "12 kW",
  efficiency: "93%",
  fuel: "Pellets",
  weight: "98 kg",
  dimensions: "49 × 36,5 × 113,5 cm",
  energyLabel: "A++",
  description: `A MCZ Suite Comfort Air 12 é uma salamandra a pellets de design contemporâneo e
    desempenho excecional. Com uma potência de 12 kW e eficiência de 93%, é a escolha ideal para
    aquecer espaços de médio a grande dimensão. O sistema Comfort Air permite a distribuição
    uniforme do calor através de ventilação forçada inteligente.`,
  features: [
    "Sistema Comfort Air para distribuição uniforme do calor",
    "Ecrã LCD com controlo de temperatura",
    "Compatível com controlo remoto e smartphone",
    "Auto-ignição e auto-limpeza do queimador",
    "Depósito de pellets de grande capacidade (30 kg)",
    "Vidro panorâmico auto-limpante",
    "Baixas emissões de CO2",
    "Certificação CE e ErP 2022",
  ],
  specs: [
    { key: "Potência Nominal", value: "12 kW" },
    { key: "Potência Mínima", value: "3,2 kW" },
    { key: "Eficiência", value: "93%" },
    { key: "Classe Energética", value: "A++" },
    { key: "Combustível", value: "Pellets 6mm" },
    { key: "Depósito", value: "30 kg" },
    { key: "Consumo Máx.", value: "2,7 kg/h" },
    { key: "Peso", value: "98 kg" },
    { key: "Dimensões (L×P×A)", value: "49 × 36,5 × 113,5 cm" },
    { key: "Saída de Gases", value: "Ø 80mm" },
    { key: "Temperatura Máx. Gases", value: "180°C" },
    { key: "Alimentação", value: "230V / 50Hz" },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // In production, fetch product by slug
  void slug;
  return {
    title: `${sampleProduct.name} | Tecnolareiras`,
    description: `${sampleProduct.name} - ${sampleProduct.fuel} ${sampleProduct.power}. ${sampleProduct.description.substring(0, 150)}...`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  // In production, fetch product by slug
  void slug;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <ChevronRight size={14} />
            <Link href="/produtos" className="hover:text-[#C8980C]">Produtos</Link>
            <ChevronRight size={14} />
            <Link href="/produtos/salamandras-a-pellets" className="hover:text-[#C8980C]">
              {sampleProduct.category}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#111111] truncate">{sampleProduct.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
                <span className="text-8xl">🔥</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 cursor-pointer hover:border-[#C8980C] transition-colors"
                  >
                    <span className="text-2xl">🔥</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Link
                    href={`/marcas/${sampleProduct.brand.toLowerCase()}`}
                    className="text-sm text-[#C8980C] font-semibold hover:underline"
                  >
                    {sampleProduct.brand}
                  </Link>
                </div>
                <Badge variant="success">Em Stock</Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">
                {sampleProduct.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#C8980C] fill-[#C8980C]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">(24 avaliações)</span>
              </div>

              {/* Quick specs */}
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge variant="secondary">{sampleProduct.power}</Badge>
                <Badge variant="secondary">{sampleProduct.fuel}</Badge>
                <Badge variant="secondary">Eficiência {sampleProduct.efficiency}</Badge>
                {sampleProduct.energyLabel && (
                  <Badge variant="accent">Classe {sampleProduct.energyLabel}</Badge>
                )}
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#111111]">
                    {formatPrice(sampleProduct.salePrice ?? sampleProduct.price)}
                  </span>
                  {sampleProduct.salePrice !== null && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(sampleProduct.price)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">Preço IVA incluído (23%). Instalação não incluída.</p>
              </div>

              {/* Short description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {sampleProduct.description}
              </p>

              {/* SKU */}
              <p className="text-xs text-gray-400 mb-6">Ref: {sampleProduct.sku}</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <AddToCartButton
                  product={{
                    id: sampleProduct.sku,
                    name: sampleProduct.name,
                    price: sampleProduct.salePrice ?? sampleProduct.price,
                    slug: sampleProduct.slug,
                  }}
                />
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pedir-orcamento">Pedir Orçamento</Link>
                </Button>
                <button className="p-3 border border-gray-200 rounded-lg hover:border-[#C8980C] transition-colors">
                  <Heart size={18} className="text-gray-500" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100">
                {[
                  { icon: "🚚", label: "Entrega Gratuita", sub: "Acima de 150€" },
                  { icon: "🛡️", label: "Garantia", sub: "2 anos mínimo" },
                  { icon: "📞", label: "Suporte", sub: "Segunda a Sábado" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-medium text-[#111111]">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Description, Specs, Manuals */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Tab headers */}
            <div className="flex border-b border-gray-100">
              {["Características", "Especificações Técnicas", "Documentos"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    i === 0
                      ? "text-[#C8980C] border-b-2 border-[#C8980C]"
                      : "text-gray-500 hover:text-[#111111]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Features tab */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sampleProduct.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-[#C8980C] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-gray-50 p-8">
              <h3 className="font-bold text-[#111111] mb-4">Especificações Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-xl overflow-hidden">
                {sampleProduct.specs.map((spec, i) => (
                  <div
                    key={spec.key}
                    className={`flex justify-between px-4 py-3 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } border-b border-gray-100 last:border-0`}
                  >
                    <span className="text-sm text-gray-500">{spec.key}</span>
                    <span className="text-sm font-medium text-[#111111]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div className="border-t border-gray-100 p-8">
              <h3 className="font-bold text-[#111111] mb-4">Documentos para Download</h3>
              <div className="flex flex-wrap gap-3">
                {["Manual do Utilizador (PT)", "Manual de Instalação (PT)", "Ficha Técnica", "Certificado CE"].map((doc) => (
                  <button
                    key={doc}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-[#C8980C] hover:text-[#C8980C] transition-colors"
                  >
                    <Download size={14} />
                    {doc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
