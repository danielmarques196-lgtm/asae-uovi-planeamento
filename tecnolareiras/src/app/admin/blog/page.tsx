import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Blog | Admin" };

const posts = [
  { id: "1", slug: "como-escolher-recuperador", title: "Como Escolher o Recuperador de Calor Ideal", category: "Conselhos", author: "Admin", published: true, featured: true, createdAt: new Date("2024-01-15") },
  { id: "2", slug: "pellets-ou-lenha", title: "Pellets ou Lenha: Qual o Combustível Mais Económico?", category: "Pellets", author: "Admin", published: true, featured: false, createdAt: new Date("2024-01-08") },
  { id: "3", slug: "manutencao-anual", title: "Manutenção Anual do Recuperador: O Que Fazer", category: "Manutenção", author: "Admin", published: false, featured: false, createdAt: new Date("2024-01-03") },
];

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Blog</h1>
          <p className="text-sm text-gray-500 mt-1">{posts.length} artigos</p>
        </div>
        <Button variant="accent" asChild>
          <Link href="/admin/blog/novo">
            <Plus size={16} /> Novo Artigo
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Pesquisar artigos..." className="pl-9 h-9" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Título</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Categoria</th>
              <th className="text-center px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Estado</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Data</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-[#111111] text-sm">{post.title}</div>
                  <div className="text-xs text-gray-400">/{post.slug}</div>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">{post.category}</td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={post.published ? "success" : "secondary"}>
                    {post.published ? "Publicado" : "Rascunho"}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{formatDate(post.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/blog/${post.slug}`} target="_blank" className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <Eye size={14} />
                    </Link>
                    <Link href={`/admin/blog/${post.id}/editar`} className="p-1.5 text-gray-400 hover:text-[#D97706] transition-colors">
                      <Edit size={14} />
                    </Link>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
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
