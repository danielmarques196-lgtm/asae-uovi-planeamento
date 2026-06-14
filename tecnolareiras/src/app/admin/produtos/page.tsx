import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, Package, Edit, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = { title: "Produtos | Admin" };

const products = [
  { id: "1", sku: "MCZ-SUITE-CA12", name: "MCZ Suite Comfort Air 12", category: "Salamandras a Pellets", brand: "MCZ", price: 2890, stock: 5, active: true, featured: true },
  { id: "2", sku: "JOT-F370", name: "Jøtul F 370 Advance", category: "Salamandras a Lenha", brand: "Jøtul", price: 1890, stock: 3, active: true, featured: true },
  { id: "3", sku: "EDK-PLISSE-H", name: "Edilkamin Plisse H Air", category: "Salamandras a Pellets", brand: "Edilkamin", price: 3200, stock: 2, active: true, featured: false },
  { id: "4", sku: "PIA-P951T", name: "Piazzetta P951T", category: "Recuperadores de Calor", brand: "Piazzetta", price: 4100, stock: 1, active: true, featured: true },
  { id: "5", sku: "ROM-HEAT-45S", name: "Romotop Heat R 45 S", category: "Recuperadores de Calor", brand: "Romotop", price: 2200, stock: 0, active: false, featured: false },
  { id: "6", sku: "BIO-LAR-SUSP", name: "Lareira Suspensa Premium", category: "Lareiras Suspensas", brand: "Biofire", price: 3800, stock: 2, active: true, featured: false },
];

export default function AdminProdutosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Produtos</h1>
          <p className="text-sm text-gray-500 mt-1">{products.length} produtos no catálogo</p>
        </div>
        <Button variant="accent" asChild>
          <Link href="/admin/produtos/novo">
            <Plus size={16} /> Novo Produto
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar produtos..." className="pl-9 h-9" />
        </div>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/50">
          <option>Todas as categorias</option>
        </select>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/50">
          <option>Todas as marcas</option>
        </select>
        <select className="h-9 border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/50">
          <option>Estado: Todos</option>
          <option>Ativo</option>
          <option>Inativo</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Produto</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Categoria</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Marca</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Preço</th>
                <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Stock</th>
                <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Estado</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                        <Package size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-[#111111]">{product.name}</div>
                        <div className="text-xs text-gray-400">{product.sku}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{product.category}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{product.brand}</td>
                  <td className="px-4 py-3 text-right font-bold text-[#111111]">{formatPrice(product.price)}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium ${product.stock === 0 ? "text-red-500" : product.stock <= 2 ? "text-amber-500" : "text-green-600"}`}>
                      {product.stock === 0 ? "Esgotado" : product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Badge variant={product.active ? "success" : "secondary"}>
                      {product.active ? "Ativo" : "Inativo"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/produtos/${product.id}`} target="_blank" className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors rounded">
                        <Eye size={14} />
                      </Link>
                      <Link href={`/admin/produtos/${product.id}/editar`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors rounded">
                        <Edit size={14} />
                      </Link>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-50">
          <span className="text-xs text-gray-400">Mostrando 1-6 de 6 produtos</span>
          <div className="flex gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded text-xs bg-[#D97706] text-white">1</button>
          </div>
        </div>
      </div>
    </div>
  );
}
