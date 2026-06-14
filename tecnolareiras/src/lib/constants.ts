export const SITE_NAME = "Tecnolareiras";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://tecnolareiras.pt";
export const SITE_DESCRIPTION = "Especialistas em recuperadores de calor, salamandras, lareiras e climatização em Entroncamento. Venda, instalação e manutenção de equipamentos das melhores marcas desde 1992.";
export const SITE_KEYWORDS = "recuperadores de calor, salamandras, lareiras, pellets, aquecimento, instalação, manutenção, entroncamento, fogo montanha, solzaima, ar condicionado, painéis solares";

export const CONTACT_EMAIL = "geral@tecnolareiras.pt";
export const CONTACT_PHONE = "+351 249 717 479";
export const CONTACT_PHONE_DISPLAY = "249 717 479";
export const CONTACT_ADDRESS = "Rua 31 de Janeiro nº2, 2330-091 Entroncamento";
export const CONTACT_ADDRESS_SHORT = "Entroncamento, Santarém";
export const COMPANY_FOUNDED = 1992;
export const COMPANY_FULL_NAME = "Tecnolareiras, Recuperadores e Climatização Lda";

export const OPENING_HOURS = [
  { days: "Segunda a Sexta", hours: "09:00 – 18:30" },
  { days: "Sábado", hours: "09:30 – 13:00" },
  { days: "Domingo", hours: "Encerrado" },
];

export const PRODUCT_CATEGORIES = [
  { name: "Recuperadores de Calor", slug: "recuperadores-de-calor", icon: "🔥" },
  { name: "Salamandras a Lenha", slug: "salamandras-a-lenha", icon: "🪵" },
  { name: "Salamandras a Pellets", slug: "salamandras-a-pellets", icon: "🔵" },
  { name: "Lareiras", slug: "lareiras", icon: "🏠" },
  { name: "Lareiras Suspensas", slug: "lareiras-suspensas", icon: "⛓️" },
  { name: "Churrasqueiras", slug: "churrasqueiras", icon: "🍖" },
  { name: "Ar Condicionado", slug: "ar-condicionado", icon: "❄️" },
  { name: "Painéis Solares", slug: "paineis-solares", icon: "☀️" },
  { name: "Bombas de Calor", slug: "bombas-de-calor", icon: "♨️" },
  { name: "Tubagens", slug: "tubagens", icon: "🔧" },
  { name: "Acessórios", slug: "acessorios", icon: "🛠️" },
  { name: "Peças de Substituição", slug: "pecas-de-substituicao", icon: "⚙️" },
];

export const BRANDS = [
  { name: "Fogo Montanha", slug: "fogo-montanha", country: "PT" },
  { name: "Solzaima", slug: "solzaima", country: "PT" },
  { name: "Metlor", slug: "metlor", country: "PT" },
  { name: "Chamilar", slug: "chamilar", country: "PT" },
  { name: "C&A Chama", slug: "ca-chama", country: "PT" },
];

export const SERVICES = [
  {
    slug: "instalacao",
    name: "Instalação",
    icon: "🔧",
    description: "Instalação profissional de recuperadores, salamandras, lareiras e sistemas de climatização por técnicos certificados.",
  },
  {
    slug: "manutencao",
    name: "Manutenção",
    icon: "🛠️",
    description: "Manutenção preventiva e corretiva para garantir o máximo desempenho e segurança dos seus equipamentos.",
  },
  {
    slug: "assistencia",
    name: "Assistência Técnica",
    icon: "📞",
    description: "Serviço de assistência técnica ao domicílio para reparações rápidas e eficientes.",
  },
  {
    slug: "consultoria",
    name: "Consultoria",
    icon: "💡",
    description: "Aconselhamento personalizado para escolher a solução de aquecimento mais adequada ao seu espaço e orçamento.",
  },
  {
    slug: "ar-condicionado",
    name: "Ar Condicionado",
    icon: "❄️",
    description: "Venda e instalação de sistemas de ar condicionado para climatização total da sua habitação.",
  },
  {
    slug: "energia-solar",
    name: "Energia Solar",
    icon: "☀️",
    description: "Instalação de painéis solares térmicos e fotovoltaicos para reduzir a sua fatura energética.",
  },
];

export const NAV_LINKS = [
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Marcas", href: "/marcas" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Contactos", href: "/contactos" },
];

export const FOOTER_LINKS = {
  empresa: [
    { label: "Sobre Nós", href: "/empresa" },
    { label: "Projetos", href: "/projetos" },
    { label: "Blog", href: "/blog" },
    { label: "Contactos", href: "/contactos" },
  ],
  servicos: [
    { label: "Instalação", href: "/servicos#instalacao" },
    { label: "Manutenção", href: "/servicos#manutencao" },
    { label: "Assistência Técnica", href: "/assistencia" },
    { label: "Ar Condicionado", href: "/servicos#ar-condicionado" },
    { label: "Energia Solar", href: "/servicos#energia-solar" },
    { label: "Pedir Orçamento", href: "/pedir-orcamento" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Política de Cookies", href: "/cookies" },
    { label: "Termos e Condições", href: "/termos" },
    { label: "Livro de Reclamações", href: "/reclamacoes" },
  ],
};

export const IVA_RATE = 0.23;
export const FREE_SHIPPING_THRESHOLD = 150;
export const SHIPPING_COST = 9.90;

export const ORDER_STATUSES = {
  PENDING: { label: "Pendente", color: "yellow" },
  CONFIRMED: { label: "Confirmado", color: "blue" },
  PROCESSING: { label: "Em Processamento", color: "indigo" },
  SHIPPED: { label: "Enviado", color: "purple" },
  DELIVERED: { label: "Entregue", color: "green" },
  CANCELLED: { label: "Cancelado", color: "red" },
  REFUNDED: { label: "Reembolsado", color: "gray" },
};

export const TICKET_STATUSES = {
  OPEN: { label: "Aberto", color: "green" },
  IN_PROGRESS: { label: "Em Progresso", color: "blue" },
  WAITING_CUSTOMER: { label: "Aguarda Cliente", color: "yellow" },
  RESOLVED: { label: "Resolvido", color: "purple" },
  CLOSED: { label: "Fechado", color: "gray" },
};

export const TICKET_PRIORITIES = {
  LOW: { label: "Baixa", color: "gray" },
  NORMAL: { label: "Normal", color: "blue" },
  HIGH: { label: "Alta", color: "orange" },
  URGENT: { label: "Urgente", color: "red" },
};

export const QUOTATION_STATUSES = {
  SUBMITTED: { label: "Submetido", color: "blue" },
  UNDER_REVIEW: { label: "Em Análise", color: "yellow" },
  PROPOSAL_SENT: { label: "Proposta Enviada", color: "purple" },
  ACCEPTED: { label: "Aceite", color: "green" },
  REJECTED: { label: "Rejeitado", color: "red" },
  EXPIRED: { label: "Expirado", color: "gray" },
};

export const FUEL_TYPES = {
  WOOD: { label: "Lenha", icon: "🪵" },
  PELLET: { label: "Pellets", icon: "🔵" },
  GAS: { label: "Gás", icon: "🔥" },
  ELECTRIC: { label: "Elétrico", icon: "⚡" },
  MULTI: { label: "Multi-combustível", icon: "♻️" },
};
