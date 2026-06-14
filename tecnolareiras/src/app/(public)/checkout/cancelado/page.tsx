import React from "react";
import Link from "next/link";
import { XCircle, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutCanceladoPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle size={40} className="text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-[#111111] mb-3">Pagamento Cancelado</h1>
        <p className="text-gray-500 mb-8">
          O pagamento foi cancelado. Os seus artigos continuam no carrinho — pode
          retomar a compra a qualquer momento.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" asChild>
            <Link href="/produtos">
              <ShoppingCart size={16} /> Ver Carrinho
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/produtos">
              <ArrowLeft size={16} /> Continuar a Comprar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
