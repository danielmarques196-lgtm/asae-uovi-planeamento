import type { Metadata } from "next";
import Link from "next/link";
import { Search, Eye, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { QUOTATION_STATUSES } from "@/lib/constants";

export const metadata: Metadata = { title: "Orçamentos | Admin" };

const quotations = [
  { id: "ORC-2024-0001", customer: "Ana Sousa", title: "Salamandra a pellets para sala 45m²", status: "SUBMITTED", createdAt: new Date("2024-01-20") },
  { id: "ORC-2024-0002", customer: "Pedro Santos", title: "Recuperador de calor + instalação", status: "UNDER_REVIEW", createdAt: new Date("2024-01-19") },
  { id: "ORC-2024-0003", customer: "Maria Costa", title: "Manutenção anual + limpeza chaminé", status: "PROPOSAL_SENT", createdAt: new Date("2024-01-15") },
  { id: "ORC-2024-0004", customer: "João Ferreira", title: "Lareira suspensa + instalação", status: "ACCEPTED", createdAt: new Date("2024-01-10") },
];

const statusVariants: Record<string, "default" | "secondary" | "accent" | "destructive" | "success"> = {
  SUBMITTED: "accent",
  UNDER_REVIEW: "default",
  PROPOSAL_SENT: "secondary",
  ACCEPTED: "success",
  REJECTED: "destructive",
  EXPIRED: "secondary",
};

export default function AdminOrcamentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#111111]">Orçamentos</h1>
        <p className="text-sm text-gray-500 mt-1">{quotations.length} orçamentos</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar orçamentos..." className="pl-9 h-9" />
        </div>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none">
          <option>Todos os estados</option>
          {Object.entries(QUOTATION_STATUSES).map(([key, { label }]) => (
            <option key={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Referência</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Cliente</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Pedido</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Estado</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Data</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {quotations.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs font-medium text-[#111111]">{q.id}</td>
                <td className="px-4 py-3 font-medium text-[#111111] text-xs">{q.customer}</td>
                <td className="px-4 py-3 text-xs text-gray-500 max-w-48 truncate">{q.title}</td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={statusVariants[q.status] || "secondary"}>
                    {QUOTATION_STATUSES[q.status as keyof typeof QUOTATION_STATUSES]?.label || q.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{formatDate(q.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/admin/orcamentos/${q.id}`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <Eye size={14} />
                    </Link>
                    <Link href={`/admin/orcamentos/${q.id}#comment`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <MessageSquare size={14} />
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
