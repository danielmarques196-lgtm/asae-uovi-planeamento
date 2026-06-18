"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { PRODUCT_CATEGORIES, BRANDS } from "@/lib/constants";
import { ProductCard } from "@/components/cart/product-card";

const FUEL_TYPES = ["Lenha", "Pellets", "Gás", "Elétrico"];
const SORT_OPTIONS = [
  { value: "featured", label: "Destaque" },
  { value: "price-asc", label: "Preço ↑" },
  { value: "price-desc", label: "Preço ↓" },
  { value: "new", label: "Novidades" },
];

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let results = [...PRODUCTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          (p.tags?.some(t => t.toLowerCase().includes(q)) ?? false)
      );
    }

    if (selectedCategory) {
      results = results.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand) {
      results = results.filter(p => p.brand === selectedBrand);
    }

    if (selectedFuel) {
      results = results.filter(p => p.fuel === selectedFuel);
    }

    switch (sortBy) {
      case "price-asc":
        results.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case "price-desc":
        results.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case "new":
        results.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return results;
  }, [search, selectedCategory, selectedBrand, selectedFuel, sortBy]);

  const activeFiltersCount = [selectedCategory, selectedBrand, selectedFuel].filter(Boolean).length;
  const clearAll = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedFuel("");
    setSearch("");
    setSortBy("featured");
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-sm text-[#1C1C1C] mb-3 uppercase tracking-wide">Categoria</h3>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedCategory("")}
            className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
              !selectedCategory ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
            }`}
          >
            Todas as categorias
          </button>
          {PRODUCT_CATEGORIES.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors flex items-center gap-2 ${
                selectedCategory === cat.slug ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold text-sm text-[#1C1C1C] mb-3 uppercase tracking-wide">Marca</h3>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedBrand("")}
            className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
              !selectedBrand ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
            }`}
          >
            Todas as marcas
          </button>
          {BRANDS.map(brand => (
            <button
              key={brand.slug}
              onClick={() => setSelectedBrand(brand.name)}
              className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
                selectedBrand === brand.name ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel type */}
      <div>
        <h3 className="font-semibold text-sm text-[#1C1C1C] mb-3 uppercase tracking-wide">Combustível</h3>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedFuel("")}
            className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
              !selectedFuel ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
            }`}
          >
            Todos
          </button>
          {FUEL_TYPES.map(fuel => (
            <button
              key={fuel}
              onClick={() => setSelectedFuel(fuel)}
              className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-colors ${
                selectedFuel === fuel ? "bg-[#C8980C] text-white font-medium" : "text-[#737373] hover:bg-[#F7F2EA]"
              }`}
            >
              {fuel}
            </button>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearAll}
          className="w-full px-3 py-2 text-sm text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Page header */}
      <div className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white">Produtos</span>
          </nav>
          <h1 className="text-3xl font-bold mb-2">Todos os Produtos</h1>
          <p className="text-white/60">Recuperadores de calor, salamandras, lareiras e muito mais</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373]" />
            <input
              type="text"
              placeholder="Pesquisar produtos, marcas..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#E5DDD0] rounded-xl text-sm bg-white focus:outline-none focus:border-[#C8980C] focus:ring-2 focus:ring-[#C8980C]/20 placeholder:text-[#737373]"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#1C1C1C]">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filters toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 border border-[#E5DDD0] rounded-xl text-sm font-medium bg-white hover:border-[#C8980C] transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-[#C8980C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 border border-[#E5DDD0] rounded-xl text-sm bg-white focus:outline-none focus:border-[#C8980C] cursor-pointer font-medium text-[#1C1C1C]"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active filter chips */}
        {(selectedCategory || selectedBrand || selectedFuel || search) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {search && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm rounded-full">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")}><X size={12} /></button>
              </span>
            )}
            {selectedCategory && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm rounded-full">
                {PRODUCT_CATEGORIES.find(c => c.slug === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory("")}><X size={12} /></button>
              </span>
            )}
            {selectedBrand && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm rounded-full">
                {selectedBrand}
                <button onClick={() => setSelectedBrand("")}><X size={12} /></button>
              </span>
            )}
            {selectedFuel && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm rounded-full">
                {selectedFuel}
                <button onClick={() => setSelectedFuel("")}><X size={12} /></button>
              </span>
            )}
            <button onClick={clearAll} className="text-xs text-[#737373] hover:text-red-500 underline">
              Limpar tudo
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile Filters */}
          {filtersOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="ml-auto w-72 bg-white h-full overflow-y-auto p-5 relative">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-[#1C1C1C]">Filtros</h2>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-[#737373] mb-5">
              <span className="font-semibold text-[#1C1C1C]">{filtered.length}</span> produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-5xl mb-4 block">🔍</span>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">Nenhum produto encontrado</h3>
                <p className="text-sm text-[#737373] mb-4">Tente ajustar os filtros ou o termo de pesquisa.</p>
                <button onClick={clearAll} className="px-4 py-2 bg-[#C8980C] text-white text-sm font-medium rounded-xl hover:bg-[#A67A09] transition-colors">
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
