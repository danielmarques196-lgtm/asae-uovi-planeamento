import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return [
    "como-escolher-recuperador-de-calor", "pellets-ou-lenha-qual-escolher",
    "manutencao-anual-recuperador", "instalacao-recuperador-normas",
    "eficiencia-energetica-rotulo", "lareiras-design-moderno",
  ].map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Artigo | Blog Tecnolareiras` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D97706]">Blog</Link>
            <span>/</span>
            <span className="text-[#111111]">Artigo</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Badge variant="accent" className="mb-4">Conselhos</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 leading-tight">
              Como Escolher o Recuperador de Calor Ideal para a Sua Casa
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> 15 de Janeiro 2024</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de leitura</span>
              <span>Por Equipa Tecnolareiras</span>
            </div>
          </div>

          <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
            <span className="text-8xl">🔥</span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Escolher o recuperador de calor certo para a sua casa pode ser uma tarefa desafiante
              dado o vasto leque de opções disponíveis no mercado. Neste guia, explicamos os fatores
              mais importantes a considerar para fazer a melhor escolha.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-8 mb-4">1. Calcule a Área a Aquecer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O primeiro passo é determinar a área total que pretende aquecer. Como regra geral,
              necessita de 1 kW de potência para cada 10-12 m² em casas bem isoladas, ou 1 kW
              para cada 7-8 m² em casas com isolamento deficiente.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-8 mb-4">2. Lenha ou Pellets?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Os recuperadores a lenha oferecem a experiência clássica da lareira com custos de
              combustível geralmente mais baixos. Os modelos a pellets são mais práticos, com
              ignição automática e programmação horária, mas têm um custo inicial mais elevado.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-8 mb-4">3. Eficiência Energética</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Opte sempre por equipamentos com classe energética A+ ou A++. Um recuperador com
              90% de eficiência vai poupar significativamente na quantidade de combustível
              necessário face a um modelo com 70% de eficiência.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-8 mb-4">4. Distribuição do Calor</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Decida se prefere calor por convecção natural (mais silencioso) ou por ventilação
              forçada (distribui o calor de forma mais uniforme e rápida). Para habitações com
              open space, a ventilação forçada é geralmente mais eficaz.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#D97706] transition-colors">
              <ArrowLeft size={16} /> Voltar ao Blog
            </Link>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#D97706] transition-colors">
              <Share2 size={16} /> Partilhar
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
