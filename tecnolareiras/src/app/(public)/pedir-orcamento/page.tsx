import type { Metadata } from "next";
import Link from "next/link";
import { QuotationForm } from "./quotation-form";

export const metadata: Metadata = {
  title: "Pedir Orçamento | Proposta Personalizada",
  description: "Solicite um orçamento personalizado para recuperadores de calor, salamandras, lareiras ou serviços de instalação.",
};

export default function PedirOrcamentoPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Pedir Orçamento</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Pedir Orçamento</h1>
          <p className="text-gray-300 max-w-xl">
            Preencha o formulário e a nossa equipa preparará uma proposta personalizada para si.
            Resposta garantida em 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <QuotationForm />
          </div>
        </div>
      </section>
    </>
  );
}
