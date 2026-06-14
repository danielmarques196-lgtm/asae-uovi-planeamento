"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { NAV_LINKS, CONTACT_PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PRODUCT_MENU = [
  { label: "Recuperadores de Calor", href: "/produtos/recuperadores-de-calor" },
  { label: "Salamandras a Lenha", href: "/produtos/salamandras-a-lenha" },
  { label: "Salamandras a Pellets", href: "/produtos/salamandras-a-pellets" },
  { label: "Lareiras", href: "/produtos/lareiras" },
  { label: "Lareiras Suspensas", href: "/produtos/lareiras-suspensas" },
  { label: "Churrasqueiras", href: "/produtos/churrasqueiras" },
  { label: "Tubagens", href: "/produtos/tubagens" },
  { label: "Acessórios", href: "/produtos/acessorios" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#111111] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Especialistas em aquecimento a biomassa em Portugal</span>
          <div className="flex items-center gap-4">
            <Link
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-1 hover:text-[#C8980C] transition-colors"
            >
              <Phone size={12} />
              {CONTACT_PHONE}
            </Link>
            <Link href="/assistencia" className="hover:text-[#C8980C] transition-colors">
              Assistência Técnica
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 flex-shrink-0">
                <circle cx="20" cy="20" r="20" fill="#CC3300"/>
                <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">TL</text>
              </svg>
              <div className="hidden sm:flex flex-col leading-none gap-0.5">
                <span className="font-black text-[17px] text-[#111111] tracking-tight uppercase">Tecnolareiras</span>
                <span className="text-[9px] text-[#C8980C] font-bold tracking-[0.15em] uppercase">Aquecimento Premium</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.label === "Produtos") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setProductMenuOpen(true)}
                      onMouseLeave={() => setProductMenuOpen(false)}
                    >
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#C8980C] transition-colors rounded-md hover:bg-gray-50 cursor-pointer">
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn("transition-transform", productMenuOpen && "rotate-180")}
                        />
                      </button>
                      {productMenuOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                          {PRODUCT_MENU.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8980C] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <Link
                              href="/produtos"
                              className="block px-4 py-2 text-sm font-medium text-[#C8980C] hover:bg-gray-50 transition-colors"
                            >
                              Ver todos os produtos →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#C8980C] transition-colors rounded-md hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-[#C8980C] transition-colors hidden md:flex cursor-pointer">
                <Search size={18} />
              </button>
              <Link
                href="/area-cliente"
                className="p-2 text-gray-600 hover:text-[#C8980C] transition-colors hidden md:flex"
              >
                <User size={18} />
              </Link>
              <Link
                href="/loja/carrinho"
                className="p-2 text-gray-600 hover:text-[#C8980C] transition-colors relative hidden md:flex"
              >
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C8980C] text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
              <Button variant="accent" size="sm" className="hidden lg:flex" asChild>
                <Link href="/pedir-orcamento">Pedir Orçamento</Link>
              </Button>
              <button
                className="p-2 text-gray-600 lg:hidden cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#C8980C] border-b border-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="accent" asChild>
                  <Link href="/pedir-orcamento" onClick={() => setMobileOpen(false)}>
                    Pedir Orçamento
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/area-cliente" onClick={() => setMobileOpen(false)}>
                    Área de Cliente
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
