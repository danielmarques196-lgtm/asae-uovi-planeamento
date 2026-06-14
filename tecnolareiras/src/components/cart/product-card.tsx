"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string | null;
  price: number;
  salePrice: number | null;
  image: null;
  power: string | null;
  fuel: string | null;
  featured: boolean;
  new: boolean;
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const hasDiscount = product.salePrice !== null && product.salePrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.salePrice!) / product.price) * 100)
    : 0;
  const finalPrice = product.salePrice ?? product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id: product.id, name: product.name, price: finalPrice, slug: product.slug });
    setAdded(true);
    toast.success(`${product.name} adicionado ao carrinho`, {
      action: { label: "Ver Carrinho", onClick: openCart },
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <Link href={`/produtos/${product.slug}`} className="block">
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
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gray-400 mb-1">{product.brand || product.category}</div>
        <Link href={`/produtos/${product.slug}`}>
          <h3 className="font-semibold text-sm text-[#111111] mb-2 line-clamp-2 group-hover:text-[#C8980C] transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        {product.power && (
          <div className="text-xs text-gray-500 mb-3">
            {product.power} · {product.fuel}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2">
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
          <button
            onClick={handleAddToCart}
            className={`p-2 rounded-lg border transition-all duration-200 shrink-0 ${
              added
                ? "bg-green-50 border-green-300 text-green-600"
                : "border-gray-200 text-gray-400 hover:border-[#C8980C] hover:text-[#C8980C]"
            }`}
            title="Adicionar ao carrinho"
          >
            {added ? <Check size={16} /> : <ShoppingCart size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
