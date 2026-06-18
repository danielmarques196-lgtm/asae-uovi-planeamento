"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Phone, Flame } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/lib/constants";

const NAV = [
  { label: "Produtos", href: "/produtos" },
  { label: "Marcas", href: "/marcas" },
  { label: "Serviços", href: "/servicos" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contactos", href: "/contactos" },
];

export function Header() {
  const { itemCount, openCart } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-[#E5DDD0]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#C8980C] rounded-lg flex items-center justify-center">
              <Flame size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg text-[#1C1C1C] tracking-tight">Tecnolareiras</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="px-4 py-2 text-sm font-medium text-[#737373] hover:text-[#1C1C1C] hover:bg-[#F7F2EA] rounded-lg transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-1.5 text-sm font-medium text-[#737373] hover:text-[#C8980C] transition-colors">
              <Phone size={14} />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <button onClick={openCart} className="relative p-2 hover:bg-[#F7F2EA] rounded-lg transition-colors">
              <ShoppingCart size={20} className="text-[#1C1C1C]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8980C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <Link href="/pedir-orcamento" className="px-4 py-2 bg-[#C8980C] text-white text-sm font-semibold rounded-lg hover:bg-[#A67A09] transition-colors">
              Orçamento
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={openCart} className="relative p-2">
              <ShoppingCart size={20} className="text-[#1C1C1C]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8980C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(true)} className="p-2">
              <Menu size={22} className="text-[#1C1C1C]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="ml-auto w-72 bg-white h-full flex flex-col relative">
            <div className="flex items-center justify-between p-4 border-b border-[#E5DDD0]">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#C8980C] rounded-md flex items-center justify-center">
                  <Flame size={14} className="text-white" />
                </div>
                <span className="font-bold text-[#1C1C1C]">Tecnolareiras</span>
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 hover:bg-[#F7F2EA] rounded-lg">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1C1C1C] hover:bg-[#F7F2EA] rounded-xl transition-colors">
                  {n.label}
                </Link>
              ))}
              <Link href="/pedir-orcamento" onClick={() => setOpen(false)} className="block px-4 py-3 text-base font-semibold text-[#C8980C] hover:bg-[#F7F2EA] rounded-xl transition-colors">
                Pedir Orçamento
              </Link>
            </nav>
            <div className="p-4 border-t border-[#E5DDD0] bg-[#F7F2EA]">
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 text-sm font-medium text-[#1C1C1C]">
                <Phone size={16} className="text-[#C8980C]" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
