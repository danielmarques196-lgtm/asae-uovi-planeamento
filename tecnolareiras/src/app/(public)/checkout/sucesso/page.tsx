"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export default function CheckoutSucessoPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-[#111111] mb-3">Encomenda Confirmada!</h1>
        <p className="text-gray-500 mb-8">
          O seu pagamento foi processado com sucesso. Vai receber um email de confirmação
          com os detalhes da sua encomenda.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#C8980C]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <Mail size={16} className="text-[#C8980C]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#111111]">Email de confirmação</p>
              <p className="text-xs text-gray-400">Verifique a sua caixa de entrada</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#C8980C]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <Package size={16} className="text-[#C8980C]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#111111]">Prazo de entrega</p>
              <p className="text-xs text-gray-400">3 a 7 dias úteis após confirmação</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" asChild>
            <Link href="/produtos">
              Continuar a Comprar <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/area-cliente">Área de Cliente</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
