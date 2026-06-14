import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Perguntas Frequentes",
  description: "Respostas às perguntas mais frequentes sobre recuperadores de calor, instalação, manutenção e serviços Tecnolareiras.",
};

const faqs = [
  {
    category: "Produtos",
    questions: [
      {
        q: "Qual a diferença entre um recuperador de calor e uma salamandra?",
        a: "Um recuperador de calor é instalado dentro de uma lareira existente ou numa estrutura própria, aproveitando o espaço da chaminé. Uma salamandra é um equipamento autónomo que pode ser instalado em qualquer divisão com saída de gases. Ambos funcionam como fonte de calor principal ou complementar.",
      },
      {
        q: "Quanto tempo dura um recuperador de calor?",
        a: "Com uma manutenção adequada, um recuperador de calor de qualidade pode durar 20 a 30 anos. A durabilidade depende muito da qualidade do equipamento, da frequência de uso e da manutenção realizada.",
      },
      {
        q: "Qual a potência necessária para aquecer a minha casa?",
        a: "Como regra geral, calcula-se 1 kW por cada 10-12 m² em casas bem isoladas. Para casas com isolamento médio, considere 1 kW por 8-10 m². Aconselhamos sempre uma consulta técnica para dimensionamento preciso.",
      },
    ],
  },
  {
    category: "Instalação",
    questions: [
      {
        q: "Preciso de licença para instalar um recuperador de calor?",
        a: "Em Portugal, a instalação de recuperadores de calor requer um certificado de instalação emitido por um técnico credenciado. Em condomínios, pode ser necessária autorização da administração. A Tecnolareiras trata de toda a documentação necessária.",
      },
      {
        q: "Quanto tempo demora a instalação?",
        a: "Uma instalação standard demora geralmente entre 1 a 2 dias. Instalações mais complexas, com construção de chaminé ou trabalhos adicionais de alvenaria, podem demorar mais tempo. Daremos sempre uma estimativa antes do início dos trabalhos.",
      },
      {
        q: "Posso instalar em apartamento?",
        a: "A instalação em apartamentos é possível mas requer condições específicas, como a existência de uma chaminé individual ou a possibilidade de criar uma saída de fumos pelo exterior. É necessária uma análise técnica prévia e a autorização do condomínio.",
      },
    ],
  },
  {
    category: "Manutenção",
    questions: [
      {
        q: "Com que frequência devo fazer a manutenção?",
        a: "Recomendamos uma manutenção preventiva anual, preferencialmente no final da época de aquecimento (primavera/verão), para preparar o equipamento para a próxima temporada. A chaminé deve ser limpa pelo menos uma vez por ano.",
      },
      {
        q: "Posso fazer a manutenção eu mesmo?",
        a: "Algumas operações básicas como limpar o vidro e remover as cinzas podem ser feitas pelo utilizador. No entanto, a manutenção completa (limpeza interna, verificação de vedantes, análise de combustão) deve ser realizada por técnico especializado.",
      },
    ],
  },
  {
    category: "Encomendas e Pagamentos",
    questions: [
      {
        q: "Quais os métodos de pagamento aceites?",
        a: "Aceitamos cartão de crédito/débito (Visa, Mastercard), transferência bancária, Multibanco, MB Way e PayPal. Para valores superiores, é possível negociar condições de pagamento.",
      },
      {
        q: "Qual o prazo de entrega?",
        a: "O prazo de entrega varia consoante o produto e a disponibilidade em stock. Produtos em stock são entregues em 3-5 dias úteis. Produtos sob encomenda podem demorar 2-4 semanas. Será sempre informado do prazo antes de confirmar a compra.",
      },
      {
        q: "Qual a política de devoluções?",
        a: "Dispõe de 14 dias de direito de arrependimento nos termos da lei portuguesa. O produto deve estar em condições originais e não instalado. Contacte-nos para iniciar o processo de devolução. Não são aceites devoluções de produtos instalados.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Perguntas Frequentes</h1>
          <p className="text-gray-300 max-w-xl">
            Encontre respostas às dúvidas mais comuns sobre os nossos produtos e serviços.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#D97706] rounded-full flex items-center justify-center text-white text-xs">
                    {section.category[0]}
                  </span>
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.questions.map((item, i) => (
                    <details
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 group"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="font-medium text-sm text-[#111111] pr-4">{item.q}</span>
                        <ChevronDown
                          size={16}
                          className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                        />
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#D97706]/10 border border-[#D97706]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#111111] mb-2">Não encontrou a sua resposta?</h3>
            <p className="text-sm text-gray-600 mb-4">
              A nossa equipa está disponível para responder a todas as suas questões.
            </p>
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 bg-[#D97706] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#B45309] transition-colors"
            >
              Contactar-nos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
