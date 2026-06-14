import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Admin user
  const adminPassword = await bcrypt.hash("Admin@123456", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@tecnolareiras.pt" },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@tecnolareiras.pt",
      password: adminPassword,
      role: "ADMINISTRATOR",
      active: true,
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // Demo customer
  const customerPassword = await bcrypt.hash("Cliente@123", 12);
  const customerUser = await prisma.user.upsert({
    where: { email: "cliente@exemplo.pt" },
    update: {},
    create: {
      name: "João Silva",
      email: "cliente@exemplo.pt",
      password: customerPassword,
      role: "CUSTOMER",
      active: true,
      customer: {
        create: {
          phone: "+351 912 000 000",
          marketingConsent: true,
          newsletter: true,
        },
      },
    },
  });
  console.log("✅ Customer user created:", customerUser.email);

  // Brands
  const brands = [
    { name: "MCZ", slug: "mcz", description: "Líder italiano em salamandras a pellets", country: "Itália", featured: true },
    { name: "Jøtul", slug: "jotul", description: "A mais antiga marca de salamandras do mundo", country: "Noruega", featured: true },
    { name: "Edilkamin", slug: "edilkamin", description: "Especialista em aquecimento a pellets", country: "Itália", featured: true },
    { name: "Piazzetta", slug: "piazzetta", description: "Design exclusivo e tecnologia avançada", country: "Itália", featured: false },
    { name: "Biofire", slug: "biofire", description: "Fabricante português de lareiras e churrasqueiras", country: "Portugal", featured: false },
    { name: "Romotop", slug: "romotop", description: "Líder europeu em recuperadores a lenha", country: "República Checa", featured: false },
  ];

  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { slug: brand.slug },
      update: {},
      create: { ...brand, active: true },
    });
  }
  console.log("✅ Brands created:", brands.length);

  // Categories
  const categories = [
    { name: "Recuperadores de Calor", slug: "recuperadores-de-calor", sortOrder: 1, featured: true },
    { name: "Salamandras a Lenha", slug: "salamandras-a-lenha", sortOrder: 2, featured: true },
    { name: "Salamandras a Pellets", slug: "salamandras-a-pellets", sortOrder: 3, featured: true },
    { name: "Lareiras", slug: "lareiras", sortOrder: 4, featured: false },
    { name: "Lareiras Suspensas", slug: "lareiras-suspensas", sortOrder: 5, featured: false },
    { name: "Churrasqueiras", slug: "churrasqueiras", sortOrder: 6, featured: false },
    { name: "Tubagens", slug: "tubagens", sortOrder: 7, featured: false },
    { name: "Acessórios", slug: "acessorios", sortOrder: 8, featured: false },
    { name: "Produtos de Limpeza", slug: "produtos-de-limpeza", sortOrder: 9, featured: false },
    { name: "Peças de Substituição", slug: "pecas-de-substituicao", sortOrder: 10, featured: false },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: { ...cat, active: true },
    });
  }
  console.log("✅ Categories created:", categories.length);

  // Get brand and category IDs
  const mczBrand = await prisma.brand.findUnique({ where: { slug: "mcz" } });
  const jotulBrand = await prisma.brand.findUnique({ where: { slug: "jotul" } });
  const pelletsCat = await prisma.category.findUnique({ where: { slug: "salamandras-a-pellets" } });
  const lenhaCat = await prisma.category.findUnique({ where: { slug: "salamandras-a-lenha" } });

  // Sample products
  const products = [
    {
      name: "MCZ Suite Comfort Air 12",
      slug: "mcz-suite-comfort-air-12",
      shortDescription: "Salamandra a pellets de alto desempenho com 12 kW",
      description: "A MCZ Suite Comfort Air 12 combina design contemporâneo com tecnologia avançada para um aquecimento eficiente e confortável.",
      sku: "MCZ-SUITE-CA12",
      categoryId: pelletsCat!.id,
      brandId: mczBrand!.id,
      price: 2890,
      stock: 5,
      power: "12 kW",
      efficiency: "93%",
      fuelType: "PELLET" as const,
      energyLabel: "A++",
      featured: true,
      active: true,
    },
    {
      name: "Jøtul F 370 Advance",
      slug: "jotul-f-370-advance",
      shortDescription: "Salamandra a lenha clássica com design escandinavo",
      description: "A Jøtul F 370 Advance oferece a experiência clássica da lareira escandinava com elevada eficiência energética.",
      sku: "JOT-F370-ADV",
      categoryId: lenhaCat!.id,
      brandId: jotulBrand!.id,
      price: 1890,
      salePrice: 1590,
      stock: 3,
      power: "8 kW",
      efficiency: "81%",
      fuelType: "WOOD" as const,
      energyLabel: "A+",
      featured: true,
      active: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }
  console.log("✅ Products created:", products.length);

  // Blog categories
  const blogCategories = [
    { name: "Conselhos", slug: "conselhos" },
    { name: "Instalação", slug: "instalacao" },
    { name: "Manutenção", slug: "manutencao" },
    { name: "Pellets", slug: "pellets" },
    { name: "Aquecimento a Lenha", slug: "aquecimento-a-lenha" },
    { name: "Eficiência Energética", slug: "eficiencia-energetica" },
  ];

  for (const cat of blogCategories) {
    await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log("✅ Blog categories created");

  // Sample blog post
  const conselhosCat = await prisma.blogCategory.findUnique({ where: { slug: "conselhos" } });
  await prisma.blogPost.upsert({
    where: { slug: "como-escolher-recuperador-de-calor" },
    update: {},
    create: {
      title: "Como Escolher o Recuperador de Calor Ideal para a Sua Casa",
      slug: "como-escolher-recuperador-de-calor",
      excerpt: "Descubra os fatores essenciais a considerar ao escolher um recuperador de calor.",
      content: "Escolher o recuperador de calor certo para a sua casa pode ser uma tarefa desafiante...",
      authorId: admin.id,
      categoryId: conselhosCat!.id,
      published: true,
      featured: true,
      publishedAt: new Date(),
      readTime: 8,
      tags: ["recuperadores", "conselhos", "guia"],
    },
  });
  console.log("✅ Blog posts created");

  // Settings
  const settings = [
    { key: "site_name", value: "Tecnolareiras", group: "general", label: "Nome do Site" },
    { key: "site_email", value: "geral@tecnolareiras.pt", group: "general", label: "Email Principal" },
    { key: "site_phone", value: "+351 XXX XXX XXX", group: "general", label: "Telefone" },
    { key: "free_shipping_threshold", value: "150", group: "shipping", label: "Envio Grátis a partir de (€)" },
    { key: "shipping_cost", value: "9.90", group: "shipping", label: "Custo de Envio (€)" },
    { key: "iva_rate", value: "0.23", group: "tax", label: "Taxa de IVA" },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log("✅ Settings created");

  console.log("\n🎉 Seeding complete!");
  console.log("\nAdmin credentials:");
  console.log("  Email: admin@tecnolareiras.pt");
  console.log("  Password: Admin@123456");
  console.log("\nCustomer credentials:");
  console.log("  Email: cliente@exemplo.pt");
  console.log("  Password: Cliente@123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
