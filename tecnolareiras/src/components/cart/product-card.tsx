"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const price = product.salePrice ?? product.price;

  return (
    <div className="group bg-white border border-[#E5DDD0] rounded-2xl overflow-hidden hover:border-[#C8980C] hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Image area */}
      <div className="relative bg-[#F7F2EA] aspect-[4/3] flex items-center justify-center">
        <span className="text-6xl">🔥</span>
        <div className="absolute top-3 left-3 flex gap-2">
          {product.new && (
            <span className="px-2 py-0.5 bg-[#C8980C] text-white text-xs font-semibold rounded-full">
              Novidade
            </span>
          )}
          {product.featured && !product.new && (
            <span className="px-2 py-0.5 bg-[#1C1C1C] text-white text-xs font-semibold rounded-full">
              Destaque
            </span>
          )}
          {product.salePrice !== undefined && (
            <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
              Promoção
            </span>
          )}
        </div>
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/80 text-[#737373] text-xs rounded-full border border-[#E5DDD0]">
          {product.categoryName}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="mb-1">
          <span className="text-xs font-semibold text-[#C8980C] uppercase tracking-wide">{product.brand}</span>
        </div>
        <h3 className="font-semibold text-[#1C1C1C] mb-2 leading-snug text-sm line-clamp-2">
          {product.name}
        </h3>

        {/* Specs chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.fuel && (
            <span className="px-2 py-0.5 bg-[#F7F2EA] text-[#737373] text-xs rounded-md border border-[#E5DDD0]">
              {product.fuel}
            </span>
          )}
          {product.power && (
            <span className="px-2 py-0.5 bg-[#F7F2EA] text-[#737373] text-xs rounded-md border border-[#E5DDD0]">
              {product.power}
            </span>
          )}
          {product.energyLabel && (
            <span className="px-2 py-0.5 bg-[#C8980C]/10 text-[#C8980C] text-xs font-semibold rounded-md">
              {product.energyLabel}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-[#1C1C1C]">{formatPrice(price)}</span>
            {product.salePrice !== undefined && (
              <span className="text-sm text-[#737373] line-through">{formatPrice(product.price)}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link
              href={`/produtos/${product.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-[#E5DDD0] text-[#1C1C1C] text-sm font-medium rounded-xl hover:border-[#C8980C] hover:text-[#C8980C] transition-colors"
            >
              Ver Produto <ArrowRight size={14} />
            </Link>
            <AddToCartButton
              product={{
                id: product.sku,
                name: product.name,
                price,
                slug: product.slug,
              }}
              className="!flex-none px-3 py-2 !rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
