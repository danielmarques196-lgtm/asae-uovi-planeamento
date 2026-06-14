import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Assistência Técnica | Suporte Pós-Venda",
  description: "Serviço de assistência técnica para recuperadores de calor, salamandras e lareiras. Abra um ticket ou contacte-nos diretamente.",
};

const supportOptions = [
  {
    icon: "📞",
    title: "Suporte Telefónico",
    description: "Fale diretamente com um técnico especializado.",
    action: "Ligar Agora",
    href: "tel:+351XXXXXXXXX",
    available: "Seg-Sex: 9h-18h",
  },
  {
    icon: "🎫",
    title: "Ticket de Suporte",
    description: "Abra um ticket e anexe fotos ou vídeos do problema.",
    action: "Abrir Ticket",
    href: "/area-cliente/tickets/novo",
    available: "24h/7 dias",
  },
  {
    icon: "📧",
    title: "Email de Suporte",
    description: "Envie-nos um email com a descrição do problema.",
    action: "Enviar Email",
    href: "mailto:assistencia@tecnolareiras.pt",
    available: "Resposta em 24h",
  },
];

const commonIssues = [
  { title: "Salamandra não ignita", steps: ["Verificar se há pellets no depósito", "Limpar o queimador de resíduos", "Verificar a tomada elétrica", "Contactar assistência se persistir"] },
  { title: "Vidro da lareira ficou preto", steps: ["Usar lenha seca com humidade < 20%", "Abrir mais o registro de ar", "Limpar o vidro com produto específico", "Verificar vedante do vidro"] },
  { title: "Fumo a entrar na divisão", steps: ["Verificar se a chaminé está obstruída", "Verificar a vedação da porta", "Limpar a chaminé", "Chamar assistência técnica"] },
  { title: "Mensagem de erro no ecrã", steps: ["Anotar o código de erro", "Consultar o manual de utilizador", "Desligar e ligar novamente", "Contactar assistência se persistir"] },
];

export default function AssistenciaPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Assistência</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Assistência Técnica</h1>
          <p className="text-gray-300 max-w-xl">
            A nossa equipa técnica está disponível para ajudar com qualquer problema relacionado com os seus equipamentos.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="border border-gray-100 rounded-2xl p-6 text-center hover:border-[#C8980C] hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-bold text-[#111111] mb-2">{option.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{option.description}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-5">
                  <Clock size={12} /> {option.available}
                </div>
                <Button variant="accent" size="sm" asChild>
                  <a href={option.href}>{option.action}</a>
                </Button>
              </div>
            ))}
          </div>

          {/* Common Issues */}
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Problemas Comuns e Soluções</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonIssues.map((issue) => (
                <div key={issue.title} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle size={18} className="text-[#C8980C] mt-0.5 shrink-0" />
                    <h3 className="font-bold text-[#111111]">{issue.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {issue.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#C8980C] font-bold shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgent */}
      <section className="py-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Problema urgente?</h3>
            <p className="text-gray-400 text-sm">Para urgências ligue-nos diretamente.</p>
          </div>
          <Button variant="accent" size="lg" asChild>
            <a href="tel:+351XXXXXXXXX">
              <Phone size={18} /> Ligar Agora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
