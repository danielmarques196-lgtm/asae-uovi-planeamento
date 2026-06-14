import Link from "next/link";
import {
  LayoutDashboard, Package, Tag, Users, ShoppingCart, FileText,
  ClipboardList, Ticket, BookOpen, Image, BarChart2, Settings,
  LogOut, Shield, Wrench, Bell
} from "lucide-react";

const navSections = [
  {
    label: "Principal",
    items: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
      { href: "/admin/relatorios", label: "Relatórios", icon: BarChart2 },
    ],
  },
  {
    label: "Catálogo",
    items: [
      { href: "/admin/produtos", label: "Produtos", icon: Package },
      { href: "/admin/categorias", label: "Categorias", icon: Tag },
      { href: "/admin/marcas", label: "Marcas", icon: Shield },
    ],
  },
  {
    label: "Vendas",
    items: [
      { href: "/admin/encomendas", label: "Encomendas", icon: ShoppingCart },
      { href: "/admin/orcamentos", label: "Orçamentos", icon: ClipboardList },
      { href: "/admin/faturas", label: "Faturas", icon: FileText },
    ],
  },
  {
    label: "CRM",
    items: [
      { href: "/admin/clientes", label: "Clientes", icon: Users },
      { href: "/admin/tickets", label: "Tickets", icon: Ticket },
      { href: "/admin/instalacoes", label: "Instalações", icon: Wrench },
    ],
  },
  {
    label: "Conteúdo",
    items: [
      { href: "/admin/blog", label: "Blog", icon: BookOpen },
      { href: "/admin/media", label: "Media", icon: Image },
    ],
  },
  {
    label: "Sistema",
    items: [
      { href: "/admin/utilizadores", label: "Utilizadores", icon: Users },
      { href: "/admin/definicoes", label: "Definições", icon: Settings },
    ],
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#111111] flex flex-col shrink-0 fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="h-14 flex items-center px-4 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 flex-shrink-0">
              <circle cx="20" cy="20" r="20" fill="#CC3300"/>
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">TL</text>
            </svg>
            <span className="text-white font-bold text-sm">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {navSections.map((section) => (
            <div key={section.label} className="mb-4">
              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                {section.label}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors mb-0.5"
                  >
                    <Icon size={15} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors mb-3"
          >
            Ver Website →
          </Link>
          <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-400 transition-colors w-full">
            <LogOut size={13} /> Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 pl-60">
        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
          <div />
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-[#111111] transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#C8980C] rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C8980C] rounded-full flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Administrador</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
