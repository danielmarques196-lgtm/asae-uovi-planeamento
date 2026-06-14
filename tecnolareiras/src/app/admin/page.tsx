import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart, Users, Package, Euro, TrendingUp, TrendingDown,
  Ticket, ClipboardList, ArrowRight, AlertCircle
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard | Admin Tecnolareiras",
};

const statsCards = [
  {
    label: "Vendas Este Mês",
    value: "€ 28.450",
    change: "+12%",
    trend: "up",
    icon: Euro,
    color: "green",
  },
  {
    label: "Novas Encomendas",
    value: "34",
    change: "+5%",
    trend: "up",
    icon: ShoppingCart,
    color: "blue",
  },
  {
    label: "Novos Clientes",
    value: "18",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "purple",
  },
  {
    label: "Produtos Ativos",
    value: "124",
    change: "-2",
    trend: "down",
    icon: Package,
    color: "amber",
  },
];

const recentOrders = [
  { id: "TL-2024-0034", customer: "Ana Sousa", product: "MCZ Suite 12", total: 2890, status: "CONFIRMED" },
  { id: "TL-2024-0033", customer: "João Ferreira", product: "Jøtul F 370", total: 1590, status: "SHIPPED" },
  { id: "TL-2024-0032", customer: "Maria Costa", product: "Kit Limpeza", total: 29.90, status: "DELIVERED" },
  { id: "TL-2024-0031", customer: "Pedro Santos", product: "Edilkamin Plisse", total: 3200, status: "PENDING" },
  { id: "TL-2024-0030", customer: "Sofia Lima", product: "Tubagem 200mm", total: 135, status: "PROCESSING" },
];

const statusColors: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  PROCESSING: "bg-indigo-100 text-indigo-700",
  SHIPPED: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

const statusLabels: Record<string, string> = {
  PENDING: "Pendente",
  CONFIRMED: "Confirmado",
  PROCESSING: "Em Processamento",
  SHIPPED: "Enviado",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado",
};

const alerts = [
  { type: "warning", message: "3 encomendas aguardam confirmação de pagamento" },
  { type: "info", message: "5 pedidos de orçamento sem resposta há mais de 48h" },
  { type: "error", message: "2 produtos com stock em ruptura" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-[#111111]">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Visão geral da plataforma Tecnolareiras</p>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${
              alert.type === "warning"
                ? "bg-yellow-50 text-yellow-800 border border-yellow-100"
                : alert.type === "error"
                ? "bg-red-50 text-red-800 border border-red-100"
                : "bg-blue-50 text-blue-800 border border-blue-100"
            }`}
          >
            <AlertCircle size={14} />
            {alert.message}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  stat.color === "green" ? "bg-green-50" :
                  stat.color === "blue" ? "bg-blue-50" :
                  stat.color === "purple" ? "bg-purple-50" :
                  "bg-amber-50"
                }`}>
                  <Icon size={18} className={
                    stat.color === "green" ? "text-green-600" :
                    stat.color === "blue" ? "text-blue-600" :
                    stat.color === "purple" ? "text-purple-600" :
                    "text-amber-600"
                  } />
                </div>
                <span className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-500"
                }`}>
                  {stat.trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-[#111111]">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-50">
            <h2 className="font-bold text-sm text-[#111111]">Encomendas Recentes</h2>
            <Link href="/admin/encomendas" className="text-xs text-[#C8980C] hover:underline flex items-center gap-1">
              Ver todas <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">{order.id}</div>
                    <div className="text-xs text-gray-400">{order.customer} · {order.product}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[order.status]}`}>
                    {statusLabels[order.status]}
                  </span>
                  <span className="text-sm font-bold text-[#111111]">{formatPrice(order.total)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h2 className="font-bold text-sm text-[#111111] mb-4">Ações Rápidas</h2>
            <div className="space-y-2">
              {[
                { href: "/admin/produtos/novo", label: "Novo Produto", icon: Package },
                { href: "/admin/clientes", label: "Ver Clientes", icon: Users },
                { href: "/admin/orcamentos", label: "Ver Orçamentos", icon: ClipboardList },
                { href: "/admin/tickets", label: "Ver Tickets", icon: Ticket },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#C8980C] transition-colors"
                  >
                    <Icon size={15} />
                    {action.label}
                    <ArrowRight size={13} className="ml-auto" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Pending items */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h2 className="font-bold text-sm text-[#111111] mb-4">A Aguardar Ação</h2>
            <div className="space-y-3">
              {[
                { label: "Orçamentos por responder", count: 5, color: "amber" },
                { label: "Tickets abertos", count: 3, color: "blue" },
                { label: "Encomendas pendentes", count: 3, color: "yellow" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.color === "amber" ? "bg-amber-100 text-amber-700" :
                    item.color === "blue" ? "bg-blue-100 text-blue-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
