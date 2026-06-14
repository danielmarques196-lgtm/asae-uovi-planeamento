"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Assunto obrigatório"),
  message: z.string().min(10, "Mensagem muito curta"),
  consent: z.boolean().refine((v) => v === true, "Obrigatório"),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSent(true);
      toast.success("Mensagem enviada com sucesso!");
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
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
        <h3 className="font-bold text-[#111111] mb-2">Mensagem enviada!</h3>
        <p className="text-sm text-gray-500">Responderemos em breve para o seu email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" placeholder="João Silva" className="mt-1" {...register("name")} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="seu@email.pt" className="mt-1" {...register("email")} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" placeholder="+351 900 000 000" className="mt-1" {...register("phone")} />
        </div>
        <div>
          <Label htmlFor="subject">Assunto *</Label>
          <select
            id="subject"
            className="mt-1 flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8980C]/50"
            {...register("subject")}
          >
            <option value="">Selecione...</option>
            <option>Informações sobre produtos</option>
            <option>Pedido de orçamento</option>
            <option>Assistência técnica</option>
            <option>Reclamação</option>
            <option>Outro assunto</option>
          </select>
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea id="message" placeholder="Descreva a sua questão ou pedido..." className="mt-1 min-h-[120px]" {...register("message")} />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input id="consent" type="checkbox" className="mt-1 accent-[#C8980C]" {...register("consent")} />
        <label htmlFor="consent" className="text-xs text-gray-500">
          Aceito que os meus dados sejam tratados para resposta ao contacto, de acordo com a{" "}
          <a href="/privacidade" className="text-[#C8980C] hover:underline">Política de Privacidade</a>.
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs">{errors.consent.message}</p>}

      <Button type="submit" variant="accent" disabled={isLoading}>
        {isLoading ? <><Loader2 size={16} className="animate-spin" /> A enviar...</> : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
