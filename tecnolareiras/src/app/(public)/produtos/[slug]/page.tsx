import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, Download, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado | Tecnolareiras",
    };
  }

  const descriptionPreview = product.shortDescription;

  return {
    title: `${product.name} | Tecnolareiras`,
    description: `${product.name} — ${product.fuel ?? ""} ${product.power ?? ""}. ${descriptionPreview}`,
    openGraph: {
      title: `${product.name} | Tecnolareiras`,
      description: descriptionPreview,
      type: "website",
    },
    keywords: product.tags?.join(", "),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      price: product.salePrice ?? product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Tecnolareiras",
      },
    },
    ...(product.energyLabel && {
      additionalProperty: {
        "@type": "PropertyValue",
        name: "Classe Energética",
        value: product.energyLabel,
      },
    }),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <ChevronRight size={14} />
            <Link href="/produtos" className="hover:text-[#C8980C]">Produtos</Link>
            <ChevronRight size={14} />
            <Link
              href={`/produtos/${product.category}`}
              className="hover:text-[#C8980C]"
            >
              {product.categoryName}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#111111] truncate">{product.name}</span>
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
                    href={`/marcas/${product.brand.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="text-sm text-[#C8980C] font-semibold hover:underline"
                  >
                    {product.brand}
                  </Link>
                </div>
                <Badge variant="success">Em Stock</Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">
                {product.name}
              </h1>

              {product.new && (
                <Badge variant="accent" className="mb-3">Novidade</Badge>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#C8980C] fill-[#C8980C]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">(avaliações verificadas)</span>
              </div>

              {/* Quick specs */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.power && <Badge variant="secondary">{product.power}</Badge>}
                {product.fuel && <Badge variant="secondary">{product.fuel}</Badge>}
                {product.efficiency && (
                  <Badge variant="secondary">Eficiência {product.efficiency}</Badge>
                )}
                {product.energyLabel && (
                  <Badge variant="accent">Classe {product.energyLabel}</Badge>
                )}
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#111111]">
                    {formatPrice(product.salePrice ?? product.price)}
                  </span>
                  {product.salePrice !== undefined && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">Preço IVA incluído (23%). Instalação não incluída.</p>
              </div>

              {/* Short description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* SKU */}
              <p className="text-xs text-gray-400 mb-6">Ref: {product.sku}</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <AddToCartButton
                  product={{
                    id: product.sku,
                    name: product.name,
                    price: product.salePrice ?? product.price,
                    slug: product.slug,
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
                {product.features.map((feature) => (
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
                {product.specs.map((spec, i) => (
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
