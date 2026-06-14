import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog | Dicas e Conselhos sobre Aquecimento",
  description:
    "Artigos, dicas e conselhos sobre recuperadores de calor, salamandras, pellets e sistemas de aquecimento a biomassa.",
};

const categories = [
  "Conselhos", "Instalação", "Manutenção", "Pellets", "Aquecimento a Lenha", "Lareiras", "Eficiência Energética"
];

const posts = [
  {
    slug: "como-escolher-recuperador-de-calor",
    title: "Como Escolher o Recuperador de Calor Ideal para a Sua Casa",
    excerpt: "Descubra os fatores essenciais a considerar ao escolher um recuperador de calor: área a aquecer, potência necessária, eficiência e design. Guia completo para fazer a melhor escolha.",
    category: "Conselhos",
    author: "Equipa Tecnolareiras",
    date: "2024-01-15",
    readTime: 8,
    image: null,
    featured: true,
  },
  {
    slug: "pellets-ou-lenha-qual-escolher",
    title: "Pellets ou Lenha: Qual o Combustível Mais Económico?",
    excerpt: "Comparação detalhada entre salamandras a pellets e a lenha. Análise de custos, comodidade, eficiência e impacto ambiental para ajudá-lo a fazer a escolha certa.",
    category: "Pellets",
    author: "Equipa Tecnolareiras",
    date: "2024-01-08",
    readTime: 6,
    image: null,
    featured: false,
  },
  {
    slug: "manutencao-anual-recuperador",
    title: "Manutenção Anual do Recuperador de Calor: O Que Fazer",
    excerpt: "Guia completo de manutenção preventiva para o seu recuperador de calor. Saiba o que verificar, quando limpar e como manter o equipamento em perfeitas condições.",
    category: "Manutenção",
    author: "Equipa Tecnolareiras",
    date: "2023-12-20",
    readTime: 10,
    image: null,
    featured: false,
  },
  {
    slug: "instalacao-recuperador-normas",
    title: "Instalação de Recuperadores: Normas e Regras em Portugal",
    excerpt: "Tudo o que precisa de saber sobre as normas legais para instalação de recuperadores de calor em Portugal. Certificações, distâncias de segurança e requisitos técnicos.",
    category: "Instalação",
    author: "Equipa Tecnolareiras",
    date: "2023-12-10",
    readTime: 12,
    image: null,
    featured: false,
  },
  {
    slug: "eficiencia-energetica-rotulo",
    title: "Rótulo Energético: O que Significam as Classes A, A+ e A++",
    excerpt: "Descodifique o rótulo energético dos recuperadores de calor e salamandras. Entenda as diferenças entre as classes e porquê um equipamento mais eficiente pode poupar centenas de euros por ano.",
    category: "Eficiência Energética",
    author: "Equipa Tecnolareiras",
    date: "2023-11-28",
    readTime: 7,
    image: null,
    featured: false,
  },
  {
    slug: "lareiras-design-moderno",
    title: "Lareiras Modernas: Tendências de Design para 2024",
    excerpt: "As últimas tendências em design de lareiras e recuperadores de calor para 2024. Modelos suspensos, dupla face e design minimalista que transformam qualquer espaço.",
    category: "Lareiras",
    author: "Equipa Tecnolareiras",
    date: "2023-11-15",
    readTime: 5,
    image: null,
    featured: false,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#D97706]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Blog & Dicas</h1>
          <p className="text-gray-300 max-w-xl">
            Artigos, guias e conselhos de especialistas sobre aquecimento a biomassa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#D97706] text-white">
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm text-gray-600 bg-white border border-gray-200 hover:border-[#D97706] hover:text-[#D97706] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-white rounded-2xl border border-gray-100 hover:border-[#D97706] hover:shadow-lg transition-all overflow-hidden mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">🔥</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="accent">{featured.category}</Badge>
                  <Badge variant="secondary">Destaque</Badge>
                </div>
                <h2 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#D97706] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} min</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[#D97706] hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-gray-50 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="secondary" className="self-start mb-3">{post.category}</Badge>
                  <h3 className="font-bold text-[#111111] mb-2 text-sm leading-snug group-hover:text-[#D97706] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
