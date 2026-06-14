import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos e Condições",
  robots: { index: false, follow: false },
};

export default function TermosPage() {
  return (
    <>
      <section className="bg-[#111111] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Termos e Condições</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Termos e Condições</h1>
          <p className="text-gray-400 text-sm mt-2">Última atualização: Janeiro 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {[
              {
                title: "1. Identificação",
                content: "Tecnolareiras – Comércio e Instalação de Equipamentos de Aquecimento Lda. Operamos o website tecnolareiras.pt e a loja online.",
              },
              {
                title: "2. Âmbito de Aplicação",
                content: "Os presentes Termos e Condições aplicam-se a todas as compras efetuadas através do nosso website e a todos os serviços prestados pela Tecnolareiras.",
              },
              {
                title: "3. Encomendas",
                content: "Ao efetuar uma encomenda, confirma ter pelo menos 18 anos e aceitar estes Termos. A encomenda só é confirmada após receção do pagamento. Reservamos o direito de recusar encomendas em caso de erro de preço manifesto.",
              },
              {
                title: "4. Preços e Pagamento",
                content: "Todos os preços incluem IVA à taxa legal em vigor (23%). Os pagamentos são processados de forma segura. Aceitamos cartão de crédito/débito, transferência bancária, Multibanco, MB Way e PayPal.",
              },
              {
                title: "5. Prazo de Entrega",
                content: "Os prazos de entrega indicados são estimativas. Produtos em stock: 3-5 dias úteis. Produtos sob encomenda: 2-6 semanas. Não nos responsabilizamos por atrasos causados por terceiros (transportadoras, fornecedores).",
              },
              {
                title: "6. Direito de Arrependimento",
                content: "Dispõe de 14 dias após receção do produto para exercer o direito de arrependimento, sem necessidade de justificação, nos termos do Decreto-Lei n.º 24/2014. O produto deve ser devolvido em condições originais e não instalado.",
              },
              {
                title: "7. Garantia",
                content: "Todos os produtos têm garantia mínima de 2 anos nos termos da lei. Produtos instalados pela Tecnolareiras beneficiam de garantia adicional na mão de obra de instalação. A garantia não cobre danos por uso inadequado ou falta de manutenção.",
              },
              {
                title: "8. Responsabilidade",
                content: "A Tecnolareiras não se responsabiliza por danos indiretos ou lucros cessantes. A nossa responsabilidade limita-se ao valor da encomenda em causa.",
              },
              {
                title: "9. Resolução de Litígios",
                content: "Em caso de litígio, pode recorrer ao Centro de Arbitragem de Conflitos de Consumo (CACCL) ou à plataforma europeia de resolução de litígios em linha (ODR): http://ec.europa.eu/consumers/odr/",
              },
              {
                title: "10. Lei Aplicável",
                content: "Os presentes Termos são regidos pela legislação portuguesa. Para qualquer litígio será competente o tribunal da comarca de Lisboa.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-[#111111] mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
