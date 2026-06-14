import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Livro de Reclamações",
};

export default function ReclamacoesPage() {
  return (
    <>
      <section className="bg-[#111111] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Livro de Reclamações</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Livro de Reclamações</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
            <div className="text-5xl mb-4">📕</div>
            <h2 className="text-xl font-bold text-[#111111] mb-3">Livro de Reclamações Eletrónico</h2>
            <p className="text-gray-600 mb-6">
              Nos termos do Decreto-Lei n.º 74/2017, de 21 de junho, a Tecnolareiras disponibiliza
              o Livro de Reclamações Eletrónico para registo de reclamações de consumidores.
            </p>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8980C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B45309] transition-colors"
            >
              Aceder ao Livro de Reclamações Eletrónico
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-[#111111] mb-3">Alternativas para resolução de litígios</h3>
            <p className="text-sm text-gray-600 mb-4">
              Em caso de litígio, pode também recorrer às seguintes entidades de resolução alternativa de litígios de consumo:
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <strong>CACCL</strong> – Centro de Arbitragem de Conflitos de Consumo de Lisboa
                <br />
                <a href="https://www.centroarbitragemlisboa.pt" className="text-[#C8980C] hover:underline" target="_blank" rel="noopener noreferrer">
                  www.centroarbitragemlisboa.pt
                </a>
              </li>
              <li>
                <strong>Plataforma ODR</strong> – Resolução de Litígios em Linha (UE)
                <br />
                <a href="https://ec.europa.eu/consumers/odr" className="text-[#C8980C] hover:underline" target="_blank" rel="noopener noreferrer">
                  ec.europa.eu/consumers/odr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
