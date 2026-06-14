import type { Metadata } from "next";
import Link from "next/link";
import { RecoverForm } from "./recover-form";

export const metadata: Metadata = {
  title: "Recuperar Password",
};

export default function RecuperarPasswordPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#111111]">Recuperar Password</h1>
        <p className="text-gray-500 text-sm mt-1">
          Introduza o seu email e enviaremos instruções para redefinir a sua password.
        </p>
      </div>
      <RecoverForm />
      <div className="mt-6 text-center">
        <Link href="/login" className="text-sm text-[#C8980C] hover:underline">
          ← Voltar ao login
        </Link>
      </div>
    </div>
  );
}
