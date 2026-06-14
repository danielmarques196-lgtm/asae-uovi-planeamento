"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Password deve ter pelo menos 8 caracteres"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine((v) => v === true, "Deve aceitar os termos"),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords não coincidem",
  path: ["confirmPassword"],
});

type RegisterData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { acceptTerms: false },
  });

  const onSubmit = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, password: data.password }),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error || "Erro ao criar conta");
        return;
      }

      toast.success("Conta criada com sucesso! Pode agora iniciar sessão.");
      router.push("/login");
    } catch {
      toast.error("Ocorreu um erro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" placeholder="João Silva" className="mt-1" {...register("name")} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seu@email.pt" className="mt-1" {...register("email")} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative mt-1">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 8 caracteres"
            {...register("password")}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirmar password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Repetir password"
          className="mt-1"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="acceptTerms"
          type="checkbox"
          className="mt-1 accent-[#D97706]"
          {...register("acceptTerms")}
        />
        <label htmlFor="acceptTerms" className="text-sm text-gray-600">
          Li e aceito os{" "}
          <Link href="/termos" className="text-[#D97706] hover:underline">Termos e Condições</Link>
          {" "}e a{" "}
          <Link href="/privacidade" className="text-[#D97706] hover:underline">Política de Privacidade</Link>
        </label>
      </div>
      {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms.message}</p>}

      <Button type="submit" variant="accent" className="w-full" disabled={isLoading}>
        {isLoading ? <><Loader2 size={16} className="animate-spin" /> A criar conta...</> : "Criar Conta"}
      </Button>
    </form>
  );
}
