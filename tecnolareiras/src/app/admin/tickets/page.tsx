import type { Metadata } from "next";
import Link from "next/link";
import { Search, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { TICKET_STATUSES, TICKET_PRIORITIES } from "@/lib/constants";

export const metadata: Metadata = { title: "Tickets | Admin" };

const tickets = [
  { id: "TKT-ABC123", customer: "Ana Sousa", subject: "Erro no ecrã da salamandra", category: "Avaria", priority: "HIGH", status: "OPEN", createdAt: new Date("2024-01-20") },
  { id: "TKT-DEF456", customer: "João Ferreira", subject: "Agendamento de manutenção anual", category: "Manutenção", priority: "NORMAL", status: "IN_PROGRESS", createdAt: new Date("2024-01-18") },
  { id: "TKT-GHI789", customer: "Maria Costa", subject: "Dúvida sobre pellets recomendados", category: "Informação", priority: "LOW", status: "RESOLVED", createdAt: new Date("2024-01-15") },
];

const priorityVariants: Record<string, "default" | "secondary" | "accent" | "destructive"> = {
  LOW: "secondary",
  NORMAL: "default",
  HIGH: "accent",
  URGENT: "destructive",
};

const statusVariants: Record<string, "default" | "secondary" | "accent" | "success"> = {
  OPEN: "accent",
  IN_PROGRESS: "default",
  WAITING_CUSTOMER: "secondary",
  RESOLVED: "success",
  CLOSED: "secondary",
};

export default function AdminTicketsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#111111]">Tickets de Suporte</h1>
        <p className="text-sm text-gray-500 mt-1">{tickets.length} tickets</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar tickets..." className="pl-9 h-9" />
        </div>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none">
          <option>Todos os estados</option>
        </select>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none">
          <option>Todas as prioridades</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ticket</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Assunto</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Cliente</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Prioridade</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Estado</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Data</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs font-medium text-[#111111]">{ticket.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-xs text-[#111111]">{ticket.subject}</div>
                  <div className="text-xs text-gray-400">{ticket.category}</div>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">{ticket.customer}</td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={priorityVariants[ticket.priority] || "secondary"}>
                    {TICKET_PRIORITIES[ticket.priority as keyof typeof TICKET_PRIORITIES]?.label || ticket.priority}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={statusVariants[ticket.status] || "secondary"}>
                    {TICKET_STATUSES[ticket.status as keyof typeof TICKET_STATUSES]?.label || ticket.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{formatDate(ticket.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end">
                    <Link href={`/admin/tickets/${ticket.id}`} className="p-1.5 text-gray-400 hover:text-[#C8980C] transition-colors">
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
