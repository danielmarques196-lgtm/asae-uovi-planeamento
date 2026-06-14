"use client";

import React, { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart, CartItem } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  product: Omit<CartItem, "quantity">;
  className?: string;
};

export function AddToCartButton({ product, className }: Props) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    toast.success(`${product.name} adicionado ao carrinho`, {
      action: {
        label: "Ver Carrinho",
        onClick: openCart,
      },
    });
    setTimeout(() => setAdded(false), 2000);
    setTimeout(openCart, 300);
  };

  return (
    <Button
      variant="accent"
      size="lg"
      className={`flex-1 ${className ?? ""}`}
      onClick={handleAdd}
    >
      {added ? (
        <><Check size={18} /> Adicionado!</>
      ) : (
        <><ShoppingCart size={18} /> Adicionar ao Carrinho</>
      )}
    </Button>
  );
}
