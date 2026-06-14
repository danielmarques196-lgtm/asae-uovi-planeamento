import type { Metadata } from "next";
import Link from "next/link";
import { Package, ClipboardList, Ticket, ArrowRight, ShoppingBag, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Área de Cliente | Dashboard",
};

const quickLinks = [
  { href: "/area-cliente/encomendas", icon: Package, label: "Encomendas", count: "2 ativas", color: "blue" },
  { href: "/area-cliente/orcamentos", icon: ClipboardList, label: "Orçamentos", count: "1 pendente", color: "amber" },
  { href: "/area-cliente/tickets", icon: Ticket, label: "Suporte", count: "0 abertos", color: "green" },
  { href: "/area-cliente/instalacoes", icon: Wrench, label: "Instalações", count: "1 agendada", color: "purple" },
];

const recentOrders = [
  { id: "TL-2024-0001", date: "10/01/2024", product: "MCZ Suite Comfort Air 12", status: "Entregue", total: "2.890,00 €" },
  { id: "TL-2024-0002", date: "15/01/2024", product: "Kit Limpeza Recuperador", status: "Em Processamento", total: "29,90 €" },
];

export default function AreaClientePage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-[#111111] to-[#2A2A2A] rounded-2xl p-6 text-white">
        <h1 className="text-xl font-bold mb-1">Bem-vindo de volta! 👋</h1>
        <p className="text-gray-400 text-sm">Gerencie as suas encomendas, orçamentos e pedidos de assistência.</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#D97706] hover:shadow-md transition-all group"
            >
              <Icon size={22} className="text-[#D97706] mb-3" />
              <div className="font-semibold text-sm text-[#111111] group-hover:text-[#D97706] transition-colors">
                {item.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{item.count}</div>
            </Link>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-50">
          <h2 className="font-bold text-[#111111]">Encomendas Recentes</h2>
          <Link href="/area-cliente/encomendas" className="text-sm text-[#D97706] hover:underline flex items-center gap-1">
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-medium text-sm text-[#111111]">{order.id}</div>
                <div className="text-xs text-gray-400">{order.product} · {order.date}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  order.status === "Entregue"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}>
                  {order.status}
                </span>
                <span className="text-sm font-bold text-[#111111]">{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/pedir-orcamento"
          className="bg-[#D97706]/10 border border-[#D97706]/20 rounded-xl p-5 hover:bg-[#D97706]/15 transition-colors group"
        >
          <ShoppingBag size={22} className="text-[#D97706] mb-2" />
          <div className="font-semibold text-[#111111] group-hover:text-[#D97706] transition-colors">Pedir Novo Orçamento</div>
          <div className="text-xs text-gray-500 mt-0.5">Solicite uma proposta personalizada</div>
        </Link>
        <Link
          href="/assistencia"
          className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-[#D97706] transition-colors group"
        >
          <Wrench size={22} className="text-gray-400 mb-2 group-hover:text-[#D97706] transition-colors" />
          <div className="font-semibold text-[#111111] group-hover:text-[#D97706] transition-colors">Assistência Técnica</div>
          <div className="text-xs text-gray-500 mt-0.5">Abrir um novo ticket de suporte</div>
        </Link>
      </div>
    </div>
  );
}
