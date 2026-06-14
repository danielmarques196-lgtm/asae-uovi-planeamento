import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Criar Conta",
  description: "Crie a sua conta Tecnolareiras",
};

export default function RegisterPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#111111]">Criar Conta</h1>
        <p className="text-gray-500 text-sm mt-1">
          Registe-se para aceder à área de cliente.
        </p>
      </div>
      <RegisterForm />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#C8980C] hover:underline font-medium">
            Iniciar sessão
          </Link>
        </p>
      </div>
    </div>
  );
}
