import Link from "next/link";
import {
  LayoutDashboard, Package, FileText, Ticket, Heart,
  Settings, LogOut, Wrench, ClipboardList
} from "lucide-react";

const navItems = [
  { href: "/area-cliente", label: "Dashboard", icon: LayoutDashboard },
  { href: "/area-cliente/encomendas", label: "Encomendas", icon: Package },
  { href: "/area-cliente/orcamentos", label: "Orçamentos", icon: ClipboardList },
  { href: "/area-cliente/tickets", label: "Suporte", icon: Ticket },
  { href: "/area-cliente/instalacoes", label: "Instalações", icon: Wrench },
  { href: "/area-cliente/favoritos", label: "Favoritos", icon: Heart },
  { href: "/area-cliente/documentos", label: "Documentos", icon: FileText },
  { href: "/area-cliente/conta", label: "Conta", icon: Settings },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portal Header */}
      <header className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#D97706] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">TL</span>
            </div>
            <span className="font-bold">Tecnolareiras</span>
            <span className="text-gray-400 text-sm ml-2">· Área de Cliente</span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-400">Olá, Cliente</span>
            <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
              <LogOut size={14} /> Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 hidden md:block">
          <nav className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#D97706] transition-colors border-b border-gray-50 last:border-0"
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
