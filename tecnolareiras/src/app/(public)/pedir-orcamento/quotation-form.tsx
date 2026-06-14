"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9, "Telefone obrigatório"),
  type: z.string().min(1, "Selecione um tipo"),
  title: z.string().min(5, "Descrição muito curta"),
  area: z.string().optional(),
  description: z.string().min(20, "Descrição deve ter pelo menos 20 caracteres"),
  consent: z.boolean().refine((v) => v === true),
});

type FormData = z.infer<typeof schema>;

export function QuotationForm() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setSent(true);
    } catch {
      toast.error("Erro ao enviar pedido. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">Pedido Recebido!</h3>
        <p className="text-gray-500 mb-6">
          O seu pedido de orçamento foi submetido com sucesso.
          A nossa equipa entrará em contacto em até 24 horas úteis.
        </p>
        <Link href="/" className="text-[#D97706] hover:underline text-sm">← Voltar à página inicial</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h2 className="text-xl font-bold text-[#111111] mb-2">Dados de Contacto</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nome completo *</Label>
          <Input id="name" placeholder="João Silva" className="mt-1" {...register("name")} />
          {errors.name && <p className="text-red-500 text-xs mt-1">Nome obrigatório</p>}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="seu@email.pt" className="mt-1" {...register("email")} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefone *</Label>
          <Input id="phone" placeholder="+351 900 000 000" className="mt-1" {...register("phone")} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="type">Tipo de pedido *</Label>
          <select
            id="type"
            className="mt-1 flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/50"
            {...register("type")}
          >
            <option value="">Selecione...</option>
            <option>Recuperador de Calor</option>
            <option>Salamandra a Lenha</option>
            <option>Salamandra a Pellets</option>
            <option>Lareira</option>
            <option>Churrasqueira</option>
            <option>Instalação</option>
            <option>Manutenção</option>
            <option>Outro</option>
          </select>
          {errors.type && <p className="text-red-500 text-xs mt-1">Selecione um tipo</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="title">Resumo do pedido *</Label>
        <Input id="title" placeholder="Ex: Salamandra a pellets para sala de 40m²" className="mt-1" {...register("title")} />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <Label htmlFor="area">Área a aquecer (m²)</Label>
        <Input id="area" placeholder="Ex: 80" type="number" className="mt-1" {...register("area")} />
      </div>

      <div>
        <Label htmlFor="description">Descrição detalhada *</Label>
        <Textarea
          id="description"
          placeholder="Descreva o seu espaço, requisitos e preferências. Inclua informações sobre o tipo de habitação, área, isolamento, etc."
          className="mt-1 min-h-[120px]"
          {...register("description")}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#D97706] transition-colors cursor-pointer">
        <Upload size={24} className="text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-500">Clique para adicionar fotos, plantas ou documentos</p>
        <p className="text-xs text-gray-400 mt-1">JPG, PNG, PDF até 10MB</p>
      </div>

      <div className="flex items-start gap-2">
        <input id="consent" type="checkbox" className="mt-1 accent-[#D97706]" {...register("consent")} />
        <label htmlFor="consent" className="text-xs text-gray-500">
          Aceito que os meus dados sejam processados para resposta ao pedido de orçamento,
          de acordo com a <a href="/privacidade" className="text-[#D97706] hover:underline">Política de Privacidade</a>.
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs">Obrigatório</p>}

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? <><Loader2 size={16} className="animate-spin" /> A enviar...</> : "Enviar Pedido de Orçamento"}
      </Button>
    </form>
  );
}
