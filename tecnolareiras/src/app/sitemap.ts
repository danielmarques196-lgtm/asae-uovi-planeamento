import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://tecnolareiras.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/empresa`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/produtos`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/marcas`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/projetos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contactos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/pedir-orcamento`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/assistencia`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const categories = [
    "recuperadores-de-calor", "salamandras-a-lenha", "salamandras-a-pellets",
    "lareiras", "lareiras-suspensas", "churrasqueiras", "tubagens",
    "acessorios", "produtos-de-limpeza", "pecas-de-substituicao",
  ];

  const categoryPages = categories.map((slug) => ({
    url: `${BASE_URL}/produtos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const brands = ["mcz", "jotul", "edilkamin", "piazzetta", "biofire", "romotop"];
  const brandPages = brands.map((slug) => ({
    url: `${BASE_URL}/marcas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPosts = [
    "como-escolher-recuperador-de-calor",
    "pellets-ou-lenha-qual-escolher",
    "manutencao-anual-recuperador",
    "instalacao-recuperador-normas",
    "eficiencia-energetica-rotulo",
    "lareiras-design-moderno",
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...brandPages, ...blogPages];
}
