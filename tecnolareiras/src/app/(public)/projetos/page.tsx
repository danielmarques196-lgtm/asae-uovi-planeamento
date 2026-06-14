import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Projetos | Portfolio de Instalações",
  description: "Veja alguns dos nossos projetos de instalação de recuperadores de calor, salamandras e lareiras em Portugal.",
};

const projects = [
  {
    id: "1",
    title: "Recuperador MCZ em Moradia T4",
    location: "Lisboa",
    category: "Recuperadores de Calor",
    date: "Janeiro 2024",
    description: "Instalação de recuperador MCZ Suite Comfort Air 12 em sala de estar de 55m², com tubagem em aço inoxidável e acabamento em pedra natural.",
    emoji: "🏠",
    products: ["MCZ Suite Comfort Air 12", "Tubagem Inox Ø150mm"],
  },
  {
    id: "2",
    title: "Salamandra Jøtul em Apartamento T3",
    location: "Porto",
    category: "Salamandras a Lenha",
    date: "Dezembro 2023",
    description: "Instalação de salamandra Jøtul F 370 Advance em apartamento, com saída de fumos pela fachada e sistema de dupla parede.",
    emoji: "🏢",
    products: ["Jøtul F 370 Advance", "Kit Saída Dupla Parede"],
  },
  {
    id: "3",
    title: "Lareira Suspensa em Vivenda de Luxo",
    location: "Cascais",
    category: "Lareiras Suspensas",
    date: "Novembro 2023",
    description: "Instalação de lareira suspensa Biofire em vivenda de luxo, com sistema de chaminé exterior em inox escovado.",
    emoji: "⭐",
    products: ["Lareira Suspensa Biofire Premium", "Chaminé Exterior Inox"],
  },
  {
    id: "4",
    title: "Salamandra a Pellets Edilkamin em Moradia",
    location: "Braga",
    category: "Salamandras a Pellets",
    date: "Outubro 2023",
    description: "Instalação de salamandra a pellets Edilkamin Plisse H Air com sistema de canalização de ar quente para três divisões.",
    emoji: "🏡",
    products: ["Edilkamin Plisse H Air", "Kit Canalização 3 Saídas"],
  },
  {
    id: "5",
    title: "Churrasqueira de Jardim em Aço Inox",
    location: "Sintra",
    category: "Churrasqueiras",
    date: "Setembro 2023",
    description: "Instalação de churrasqueira premium em aço inoxidável em jardim de moradia, com exaustor exterior e bancada em pedra.",
    emoji: "🌿",
    products: ["Churrasqueira Inox Premium", "Exaustor Exterior"],
  },
  {
    id: "6",
    title: "Recuperador Piazzetta em Restaurante",
    location: "Évora",
    category: "Recuperadores de Calor",
    date: "Agosto 2023",
    description: "Instalação de recuperador Piazzetta P951T em zona de entrada de restaurante, com chaminé em pedra mármore.",
    emoji: "🍽️",
    products: ["Piazzetta P951T", "Revestimento Pedra Mármore"],
  },
];

export default function ProjetosPage() {
  return (
    <>
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8980C]">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Projetos</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Os Nossos Projetos</h1>
          <p className="text-gray-300 max-w-xl">
            Alguns exemplos do nosso trabalho. Mais de 2.000 instalações realizadas em todo o Portugal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-100 hover:border-[#C8980C] hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="aspect-video bg-gray-50 flex items-center justify-center">
                  <span className="text-6xl">{project.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#C8980C] font-medium">{project.category}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin size={11} /> {project.location}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2 group-hover:text-[#C8980C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={11} /> {project.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 py-12 bg-white rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Quer fazer parte do nosso portfolio?</h3>
            <p className="text-gray-500 text-sm mb-6">Contacte-nos para uma consulta gratuita.</p>
            <Link
              href="/pedir-orcamento"
              className="inline-flex items-center gap-2 bg-[#C8980C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B45309] transition-colors"
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
