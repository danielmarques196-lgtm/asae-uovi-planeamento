import type { Metadata } from "next";
import Link from "next/link";
import { Search, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatPrice } from "@/lib/utils";
import { ORDER_STATUSES } from "@/lib/constants";

export const metadata: Metadata = { title: "Encomendas | Admin" };

const orders = [
  { id: "TL-2024-0034", customer: "Ana Sousa", email: "ana@email.pt", items: 1, total: 2890, status: "CONFIRMED", payment: "PAID", createdAt: new Date("2024-01-20") },
  { id: "TL-2024-0033", customer: "João Ferreira", email: "joao@email.pt", items: 2, total: 1620, status: "SHIPPED", payment: "PAID", createdAt: new Date("2024-01-19") },
  { id: "TL-2024-0032", customer: "Maria Costa", email: "maria@email.pt", items: 3, total: 89.70, status: "DELIVERED", payment: "PAID", createdAt: new Date("2024-01-18") },
  { id: "TL-2024-0031", customer: "Pedro Santos", email: "pedro@email.pt", items: 1, total: 3200, status: "PENDING", payment: "PENDING", createdAt: new Date("2024-01-18") },
  { id: "TL-2024-0030", customer: "Sofia Lima", email: "sofia@email.pt", items: 5, total: 225, status: "PROCESSING", payment: "PAID", createdAt: new Date("2024-01-17") },
];

const statusVariants: Record<string, "default" | "secondary" | "accent" | "destructive" | "success"> = {
  PENDING: "accent",
  CONFIRMED: "default",
  PROCESSING: "default",
  SHIPPED: "secondary",
  DELIVERED: "success",
  CANCELLED: "destructive",
};

export default function AdminEncomendasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#111111]">Encomendas</h1>
        <p className="text-sm text-gray-500 mt-1">{orders.length} encomendas</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar por nº, cliente ou produto..." className="pl-9 h-9" />
        </div>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none">
          <option>Todos os estados</option>
          {Object.entries(ORDER_STATUSES).map(([key, { label }]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Nº Encomenda</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Cliente</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Itens</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Total</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Estado</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Pagamento</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Data</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-[#111111] text-xs">{order.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-[#111111] text-xs">{order.customer}</div>
                  <div className="text-xs text-gray-400">{order.email}</div>
                </td>
                <td className="px-4 py-3 text-center text-xs text-gray-500">{order.items}</td>
                <td className="px-4 py-3 text-right font-bold text-[#111111]">{formatPrice(order.total)}</td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={statusVariants[order.status] || "secondary"}>
                    {ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES]?.label || order.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    order.payment === "PAID" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {order.payment === "PAID" ? "Pago" : "Pendente"}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{formatDate(order.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end">
                    <Link href={`/admin/encomendas/${order.id}`} className="p-1.5 text-gray-400 hover:text-[#C8980C] transition-colors">
                      <Eye size={14} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
