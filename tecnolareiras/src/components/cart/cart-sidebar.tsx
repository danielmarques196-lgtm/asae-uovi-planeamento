"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const [loading, setLoading] = React.useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erro ao criar sessão de pagamento");
      }
      const { url } = await res.json();
      if (!url) throw new Error("URL de pagamento inválido");
      window.location.href = url;
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Erro ao processar pagamento");
      setLoading(false);
    }
  };

  const shipping = subtotal >= 150 ? 0 : 9.90;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#C8980C]" />
            <h2 className="font-bold text-[#111111]">Carrinho</h2>
            {itemCount > 0 && (
              <span className="bg-[#C8980C] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-[#111111] transition-colors rounded-lg hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gray-200 mb-4" />
              <p className="font-medium text-gray-400 mb-2">O seu carrinho está vazio</p>
              <p className="text-sm text-gray-400 mb-6">Explore os nossos produtos e adicione ao carrinho</p>
              <Button variant="accent" size="sm" onClick={closeCart} asChild>
                <Link href="/produtos">
                  Ver Produtos <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-50">
                  {/* Image placeholder */}
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/produtos/${item.slug}`}
                      className="text-sm font-medium text-[#111111] hover:text-[#C8980C] line-clamp-2 transition-colors"
                      onClick={closeCart}
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm font-bold text-[#C8980C] mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#C8980C] hover:text-[#C8980C] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#C8980C] hover:text-[#C8980C] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4 bg-gray-50">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Envio</span>
                <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium"}>
                  {shipping === 0 ? "Grátis" : formatPrice(shipping)}
                </span>
              </div>
              {subtotal < 150 && (
                <p className="text-xs text-gray-400">
                  Adicione {formatPrice(150 - subtotal)} para envio grátis
                </p>
              )}
              <div className="flex justify-between font-bold text-[#111111] pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <Button
              variant="accent"
              className="w-full"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> A processar...</>
              ) : (
                <>Finalizar Compra <ArrowRight size={16} /></>
              )}
            </Button>
            <p className="text-xs text-gray-400 text-center">
              Pagamento seguro via Stripe · SSL encriptado
            </p>
          </div>
        )}
      </div>
    </>
  );
}
