import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-[#111111] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Política de Cookies</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Política de Cookies</h1>
          <p className="text-gray-400 text-sm mt-2">Última atualização: Janeiro 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {[
              {
                title: "O que são Cookies?",
                content: "Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um website. Permitem que o website se lembre das suas preferências e melhore a sua experiência de navegação.",
              },
              {
                title: "Tipos de Cookies que Utilizamos",
                content: "Utilizamos: Cookies Essenciais (necessários para o funcionamento do website), Cookies de Desempenho (Google Analytics para análise de tráfego), Cookies de Funcionalidade (lembrar preferências), Cookies de Marketing (com o seu consentimento, para publicidade personalizada).",
              },
              {
                title: "Cookies de Terceiros",
                content: "Utilizamos Google Analytics (análise de tráfego) e Google Tag Manager. Estes serviços podem definir os seus próprios cookies. Consulte as políticas de privacidade da Google para mais informações.",
              },
              {
                title: "Gestão de Cookies",
                content: "Pode gerir as suas preferências de cookies através do nosso gestor de consentimento (disponível em rodapé) ou nas definições do seu browser. A desativação de cookies essenciais pode afetar o funcionamento do website.",
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
