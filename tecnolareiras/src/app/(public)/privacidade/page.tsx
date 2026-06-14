import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  robots: { index: false, follow: false },
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="bg-[#111111] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Política de Privacidade</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
          <p className="text-gray-400 text-sm mt-2">Última atualização: Janeiro 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <div className="space-y-8">
            {[
              {
                title: "1. Responsável pelo Tratamento",
                content: "A Tecnolareiras é responsável pelo tratamento dos seus dados pessoais. Os seus dados são tratados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD – Regulamento (UE) 2016/679) e a legislação nacional aplicável.",
              },
              {
                title: "2. Dados que Recolhemos",
                content: "Recolhemos os seguintes tipos de dados pessoais: dados de identificação (nome, email, telefone, morada), dados de navegação (endereço IP, cookies, páginas visitadas), dados de transação (histórico de encomendas, pagamentos) e dados de comunicação (mensagens de contacto, tickets de suporte).",
              },
              {
                title: "3. Finalidade do Tratamento",
                content: "Os seus dados são tratados para: gestão de conta e área de cliente, processamento de encomendas e pagamentos, resposta a contactos e pedidos de assistência, comunicações de marketing (com o seu consentimento), cumprimento de obrigações legais e fiscais.",
              },
              {
                title: "4. Base Legal",
                content: "O tratamento dos seus dados baseia-se em: execução de contrato (encomendas e serviços), consentimento (marketing e cookies), obrigação legal (faturação e contabilidade), e interesse legítimo (segurança e prevenção de fraude).",
              },
              {
                title: "5. Partilha de Dados",
                content: "Os seus dados podem ser partilhados com: prestadores de serviços de pagamento, empresas de logística e transporte, ferramentas de marketing (com o seu consentimento), autoridades fiscais e judiciais (quando legalmente exigido).",
              },
              {
                title: "6. Prazo de Conservação",
                content: "Os dados são conservados pelo prazo necessário para as finalidades que motivaram a recolha, ou pelo prazo legalmente obrigatório (10 anos para documentos fiscais). Os dados de marketing são eliminados após revogação do consentimento.",
              },
              {
                title: "7. Os Seus Direitos",
                content: "Tem direito a: acesso aos seus dados, retificação de dados incorretos, apagamento dos dados ('direito a ser esquecido'), limitação do tratamento, portabilidade dos dados, oposição ao tratamento, revogação do consentimento. Para exercer estes direitos, contacte: privacidade@tecnolareiras.pt",
              },
              {
                title: "8. Cookies",
                content: "Utilizamos cookies para melhorar a sua experiência de navegação. Pode gerir as suas preferências de cookies através do nosso gestor de cookies ou nas definições do seu browser. Consulte a nossa Política de Cookies para mais informações.",
              },
              {
                title: "9. Contacto",
                content: "Para questões sobre privacidade, contacte-nos em privacidade@tecnolareiras.pt. Tem também o direito de apresentar reclamação à autoridade de controlo nacional: Comissão Nacional de Proteção de Dados (CNPD) – www.cnpd.pt",
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
