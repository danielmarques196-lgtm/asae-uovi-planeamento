import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/cart/product-card";

export const metadata: Metadata = {
  title: "Produtos | Recuperadores de Calor, Salamandras e Lareiras",
  description:
    "Catálogo completo de recuperadores de calor, salamandras a lenha e pellets, lareiras e churrasqueiras das marcas Fogo Montanha, Solzaima, Metlor, C&A Chama e Chamilar. Venda e instalação em Entroncamento.",
};

const allProducts = PRODUCTS.map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  category: p.categoryName,
  brand: p.brand,
  price: p.price,
  salePrice: p.salePrice ?? null,
  image: null,
  power: p.power ?? null,
  fuel: p.fuel ?? null,
  featured: p.featured ?? false,
  new: p.new ?? false,
}));

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
            {PRODUCTS.length} produtos das marcas portuguesas de referência — Fogo Montanha, Solzaima,
            Metlor, C&amp;A Chama e Chamilar. Instalação profissional incluída.
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
                  {PRODUCT_CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
                    if (count === 0) return null;
                    return (
                      <li key={cat.slug}>
                        <Link
                          href={`/produtos/${cat.slug}`}
                          className="flex justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#C8980C] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs text-gray-400">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-sm text-[#111111] uppercase tracking-wider mb-4">
                    Marcas
                  </h3>
                  <ul className="space-y-1">
                    {["Fogo Montanha", "Solzaima", "Metlor", "C&A Chama", "Chamilar"].map((brand) => {
                      const count = PRODUCTS.filter((p) => p.brand === brand).length;
                      return (
                        <li key={brand}>
                          <Link
                            href={`/marcas/${brand.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`}
                            className="flex justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#C8980C] transition-colors"
                          >
                            <span>{brand}</span>
                            <span className="text-xs text-gray-400">{count}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6 bg-white rounded-xl border border-gray-100 p-4">
                <span className="text-sm text-gray-500">
                  A mostrar <strong>{allProducts.length}</strong> produtos
                </span>
                <div className="flex items-center gap-3">
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#C8980C]/50">
                    <option>Ordenar: Destaque</option>
                    <option>Preço: Crescente</option>
                    <option>Preço: Decrescente</option>
                    <option>Mais recentes</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {allProducts.map((product) => (
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
