import type { Metadata } from "next";
import Link from "next/link";
import { Grid, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Produtos | Recuperadores, Salamandras e Lareiras",
  description:
    "Explore a nossa gama completa de recuperadores de calor, salamandras a lenha e pellets, lareiras e churrasqueiras das melhores marcas europeias.",
};

const sampleProducts = [
  {
    id: "1", slug: "mcz-suite-comfort-air-12", name: "MCZ Suite Comfort Air 12", category: "Recuperadores de Calor",
    brand: "MCZ", price: 2890, salePrice: null, image: null, power: "12 kW", fuel: "Pellets", featured: true, new: false
  },
  {
    id: "2", slug: "jotul-f-370-advance", name: "Jøtul F 370 Advance", category: "Salamandras a Lenha",
    brand: "Jøtul", price: 1890, salePrice: 1590, image: null, power: "8 kW", fuel: "Lenha", featured: true, new: true
  },
  {
    id: "3", slug: "edilkamin-plisse-h-air", name: "Edilkamin Plisse H Air", category: "Salamandras a Pellets",
    brand: "Edilkamin", price: 3200, salePrice: null, image: null, power: "14 kW", fuel: "Pellets", featured: false, new: false
  },
  {
    id: "4", slug: "piazzetta-p951t", name: "Piazzetta P951T", category: "Recuperadores de Calor",
    brand: "Piazzetta", price: 4100, salePrice: null, image: null, power: "20 kW", fuel: "Pellets", featured: true, new: false
  },
  {
    id: "5", slug: "romotop-heat-r-45-s", name: "Romotop Heat R 45 S", category: "Recuperadores de Calor",
    brand: "Romotop", price: 2200, salePrice: null, image: null, power: "10 kW", fuel: "Lenha", featured: false, new: true
  },
  {
    id: "6", slug: "mcz-musa-comfort-air-14", name: "MCZ Musa Comfort Air 14", category: "Salamandras a Pellets",
    brand: "MCZ", price: 2450, salePrice: 2150, image: null, power: "14 kW", fuel: "Pellets", featured: true, new: false
  },
  {
    id: "7", slug: "jotul-f-162", name: "Jøtul F 162", category: "Salamandras a Lenha",
    brand: "Jøtul", price: 1290, salePrice: null, image: null, power: "6 kW", fuel: "Lenha", featured: false, new: false
  },
  {
    id: "8", slug: "lareira-suspensa-premium", name: "Lareira Suspensa Premium", category: "Lareiras Suspensas",
    brand: "Biofire", price: 3800, salePrice: null, image: null, power: "15 kW", fuel: "Lenha", featured: false, new: true
  },
  {
    id: "9", slug: "churrasqueira-inox-premium", name: "Churrasqueira Inox Premium", category: "Churrasqueiras",
    brand: "Biofire", price: 890, salePrice: 750, image: null, power: null, fuel: "Carvão", featured: false, new: false
  },
  {
    id: "10", slug: "tubagem-simples-200mm", name: "Tubagem Simples 200mm Inox", category: "Tubagens",
    brand: null, price: 45, salePrice: null, image: null, power: null, fuel: null, featured: false, new: false
  },
  {
    id: "11", slug: "kit-limpeza-recuperador", name: "Kit Limpeza Recuperador de Calor", category: "Produtos de Limpeza",
    brand: null, price: 29.90, salePrice: null, image: null, power: null, fuel: null, featured: false, new: false
  },
  {
    id: "12", slug: "vedante-ceramico-6mm", name: "Vedante Cerâmico 6mm (metro)", category: "Peças de Substituição",
    brand: null, price: 8.50, salePrice: null, image: null, power: null, fuel: null, featured: false, new: false
  },
];

function ProductCard({ product }: { product: typeof sampleProducts[0] }) {
  const hasDiscount = product.salePrice !== null && product.salePrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.salePrice!) / product.price) * 100)
    : 0;

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="aspect-square bg-gray-50 relative flex items-center justify-center overflow-hidden">
        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-3xl">🔥</span>
        </div>
        {hasDiscount && (
          <Badge variant="destructive" className="absolute top-3 left-3">
            -{discountPercent}%
          </Badge>
        )}
        {product.new && (
          <Badge variant="accent" className="absolute top-3 right-3">
            Novo
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gray-400 mb-1">{product.brand || product.category}</div>
        <h3 className="font-semibold text-sm text-[#111111] mb-2 line-clamp-2 group-hover:text-[#C8980C] transition-colors leading-tight">
          {product.name}
        </h3>

        {product.power && (
          <div className="text-xs text-gray-500 mb-3">
            {product.power} · {product.fuel}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between">
          <div>
            {hasDiscount ? (
              <div>
                <span className="text-[#C8980C] font-bold">{formatPrice(product.salePrice)}</span>
                <span className="text-gray-400 text-xs line-through ml-1">{formatPrice(product.price)}</span>
              </div>
            ) : (
              <span className="text-[#111111] font-bold">{formatPrice(product.price)}</span>
            )}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-[#C8980C] transition-colors">
            Ver →
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProdutosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Produtos</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Os Nossos Produtos</h1>
          <p className="text-gray-300 max-w-xl">
            Descubra a nossa vasta gama de equipamentos de aquecimento das melhores marcas europeias.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 hidden lg:block">
              <div className="bg-white rounded-xl border border-gray-100 p-5 sticky top-24">
                <h3 className="font-bold text-sm text-[#111111] uppercase tracking-wider mb-4">
                  Categorias
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/produtos"
                      className="block px-3 py-2 rounded-lg text-sm font-medium bg-[#C8980C] text-white"
                    >
                      Todos os produtos
                    </Link>
                  </li>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/produtos/${cat.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#C8980C] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6 bg-white rounded-xl border border-gray-100 p-4">
                <span className="text-sm text-gray-500">
                  A mostrar <strong>12</strong> produtos
                </span>
                <div className="flex items-center gap-3">
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#C8980C]/50">
                    <option>Ordenar: Destaque</option>
                    <option>Preço: Crescente</option>
                    <option>Preço: Decrescente</option>
                    <option>Mais recentes</option>
                  </select>
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    <button className="p-2 bg-[#C8980C] text-white">
                      <Grid size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:bg-gray-50">
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {sampleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
