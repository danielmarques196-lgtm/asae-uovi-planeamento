import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Iniciar Sessão",
  description: "Aceda à sua conta Tecnolareiras",
};

export default function LoginPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#111111]">Iniciar Sessão</h1>
        <p className="text-gray-500 text-sm mt-1">
          Bem-vindo de volta! Aceda à sua conta.
        </p>
      </div>
      <LoginForm />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Não tem conta?{" "}
          <Link href="/registar" className="text-[#C8980C] hover:underline font-medium">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
