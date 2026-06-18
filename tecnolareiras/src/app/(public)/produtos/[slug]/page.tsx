import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Download, ChevronRight, Phone } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { CONTACT_PHONE } from "@/lib/constants";

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
    return { title: "Produto não encontrado | Tecnolareiras" };
  }

  return {
    title: `${product.name} | Tecnolareiras`,
    description: `${product.name} — ${product.fuel ?? ""} ${product.power ?? ""}. ${product.shortDescription}`,
    openGraph: {
      title: `${product.name} | Tecnolareiras`,
      description: product.shortDescription,
      type: "website",
    },
    keywords: product.tags?.join(", "),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      price: product.salePrice ?? product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Tecnolareiras" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F7F2EA] border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-[#737373]">
            <Link href="/" className="hover:text-[#C8980C] transition-colors">Início</Link>
            <ChevronRight size={14} />
            <Link href="/produtos" className="hover:text-[#C8980C] transition-colors">Produtos</Link>
            <ChevronRight size={14} />
            <Link
              href={`/produtos?categoria=${product.category}`}
              className="hover:text-[#C8980C] transition-colors"
            >
              {product.categoryName}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1C1C1C] font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Images */}
            <div>
              <div className="aspect-square bg-[#F7F2EA] rounded-2xl flex items-center justify-center mb-3 border border-[#E5DDD0]">
                <span className="text-9xl">🔥</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#F7F2EA] rounded-xl flex items-center justify-center border border-[#E5DDD0] cursor-pointer hover:border-[#C8980C] transition-colors"
                  >
                    <span className="text-2xl">🔥</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {/* Brand + badges */}
              <div className="flex items-center gap-3 mb-2">
                <Link
                  href={`/marcas/${product.brand.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="text-sm font-semibold text-[#C8980C] hover:underline"
                >
                  {product.brand}
                </Link>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Em Stock
                </span>
                {product.new && (
                  <span className="px-2 py-0.5 bg-[#C8980C] text-white text-xs font-semibold rounded-full">
                    Novidade
                  </span>
                )}
                {product.featured && (
                  <span className="px-2 py-0.5 bg-[#1C1C1C] text-white text-xs font-semibold rounded-full">
                    Destaque
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4 leading-snug">
                {product.name}
              </h1>

              {/* Spec chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.power && (
                  <span className="px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm text-[#1C1C1C] rounded-lg font-medium">
                    ⚡ {product.power}
                  </span>
                )}
                {product.fuel && (
                  <span className="px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm text-[#1C1C1C] rounded-lg font-medium">
                    🪵 {product.fuel}
                  </span>
                )}
                {product.efficiency && (
                  <span className="px-3 py-1 bg-[#F7F2EA] border border-[#E5DDD0] text-sm text-[#1C1C1C] rounded-lg font-medium">
                    Eficiência {product.efficiency}
                  </span>
                )}
                {product.energyLabel && (
                  <span className="px-3 py-1 bg-[#C8980C]/10 border border-[#C8980C]/30 text-sm text-[#C8980C] rounded-lg font-bold">
                    Classe {product.energyLabel}
                  </span>
                )}
              </div>

              {/* Price box */}
              <div className="bg-[#F7F2EA] border border-[#E5DDD0] rounded-xl p-5 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#1C1C1C]">
                    {formatPrice(product.salePrice ?? product.price)}
                  </span>
                  {product.salePrice !== undefined && (
                    <span className="text-lg text-[#737373] line-through">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#737373] mt-1">
                  Preço IVA incluído (23%). Instalação não incluída — consulte orçamento.
                </p>
              </div>

              {/* Description */}
              <p className="text-[#737373] text-sm leading-relaxed mb-3">
                {product.shortDescription}
              </p>

              {/* SKU */}
              <p className="text-xs text-[#737373] mb-5">Ref: {product.sku}</p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <AddToCartButton
                  product={{
                    id: product.sku,
                    name: product.name,
                    price: product.salePrice ?? product.price,
                    slug: product.slug,
                  }}
                />
                <Link
                  href="/pedir-orcamento"
                  className="flex items-center justify-center px-5 py-3 border-2 border-[#E5DDD0] text-[#1C1C1C] font-semibold rounded-xl hover:border-[#C8980C] hover:text-[#C8980C] transition-colors text-sm"
                >
                  Pedir Orçamento
                </Link>
                <a
                  href={`https://wa.me/351249717479?text=Olá%2C%20tenho%20interesse%20no%20produto%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.848L.073 23.27a.75.75 0 00.921.921l5.422-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.772-.524-5.348-1.437l-.383-.224-3.977 1.07 1.07-3.977-.224-.383A9.947 9.947 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[#E5DDD0]">
                {[
                  { icon: "🚚", label: "Entrega Gratuita", sub: "Acima de 150€" },
                  { icon: "🛡️", label: "Garantia", sub: "2 anos mínimo" },
                  { icon: "📞", label: "Suporte", sub: "Seg–Sáb" },
                ].map(item => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-semibold text-[#1C1C1C]">{item.label}</div>
                    <div className="text-xs text-[#737373]">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section className="py-12 bg-[#F7F2EA] border-t border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[#E5DDD0] overflow-hidden">
            {/* Tab headers */}
            <div className="flex border-b border-[#E5DDD0] overflow-x-auto">
              {["Características", "Especificações Técnicas", "Documentos"].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    i === 0
                      ? "text-[#C8980C] border-b-2 border-[#C8980C]"
                      : "text-[#737373]"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="p-6 md:p-8">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Características</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map(feature => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-[#C8980C] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#737373]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-[#E5DDD0] p-6 md:p-8">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Especificações Técnicas</h3>
              <div className="border border-[#E5DDD0] rounded-xl overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.key}
                    className={`flex justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-[#F7F2EA]" : "bg-white"
                    } ${i < product.specs.length - 1 ? "border-b border-[#E5DDD0]" : ""}`}
                  >
                    <span className="text-[#737373]">{spec.key}</span>
                    <span className="font-semibold text-[#1C1C1C]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div className="border-t border-[#E5DDD0] p-6 md:p-8">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Documentos</h3>
              <div className="flex flex-wrap gap-3">
                {["Manual do Utilizador (PT)", "Manual de Instalação (PT)", "Ficha Técnica", "Certificado CE"].map(doc => (
                  <button
                    key={doc}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E5DDD0] rounded-xl text-sm text-[#737373] hover:border-[#C8980C] hover:text-[#C8980C] transition-colors"
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

      {/* Contact CTA */}
      <section className="py-10 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bold text-xl mb-2">Tem dúvidas sobre este produto?</h2>
          <p className="text-white/60 text-sm mb-5">Fale com a nossa equipa — ajudamos a escolher a solução certa.</p>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8980C] text-white font-semibold rounded-xl hover:bg-[#A67A09] transition-colors"
          >
            <Phone size={16} />
            Ligar Agora
          </a>
        </div>
      </section>
    </>
  );
}
