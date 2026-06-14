import type { Metadata } from "next";
import Link from "next/link";
import { Search, Eye, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Clientes | Admin" };

const clients = [
  { id: "1", name: "Ana Sousa", email: "ana.sousa@email.pt", phone: "+351 912 000 001", orders: 3, spent: 4250, role: "CUSTOMER", createdAt: new Date("2023-06-15") },
  { id: "2", name: "João Ferreira", email: "joao.f@email.pt", phone: "+351 912 000 002", orders: 1, spent: 1590, role: "CUSTOMER", createdAt: new Date("2023-08-20") },
  { id: "3", name: "Maria Costa", email: "m.costa@empresa.pt", phone: "+351 912 000 003", orders: 5, spent: 12800, role: "CUSTOMER", createdAt: new Date("2022-12-01") },
  { id: "4", name: "Pedro Santos", email: "pedro.s@email.pt", phone: "+351 912 000 004", orders: 2, spent: 5400, role: "CUSTOMER", createdAt: new Date("2024-01-10") },
];

export default function AdminClientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Clientes</h1>
          <p className="text-sm text-gray-500 mt-1">{clients.length} clientes registados</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar clientes..." className="pl-9 h-9" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Cliente</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Contacto</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Encomendas</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Total Gasto</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Registado em</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#D97706]/10 rounded-full flex items-center justify-center text-[#D97706] font-bold text-sm">
                      {client.name[0]}
                    </div>
                    <span className="font-medium text-[#111111]">{client.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-xs text-gray-500">{client.email}</div>
                  <div className="text-xs text-gray-400">{client.phone}</div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="text-sm font-medium">{client.orders}</span>
                </td>
                <td className="px-4 py-3 text-right font-bold text-[#111111]">
                  {client.spent.toLocaleString("pt-PT")} €
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">
                  {formatDate(client.createdAt)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/admin/clientes/${client.id}`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <Eye size={14} />
                    </Link>
                    <a href={`mailto:${client.email}`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <Mail size={14} />
                    </a>
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
