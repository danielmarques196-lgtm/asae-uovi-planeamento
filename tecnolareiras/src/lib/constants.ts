export const SITE_NAME = "Tecnolareiras";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://tecnolareiras.pt";
export const SITE_DESCRIPTION = "Loja especializada em recuperadores de calor, salamandras, lareiras, churrasqueiras e sistemas de aquecimento. Instalação e manutenção profissional.";
export const SITE_KEYWORDS = "recuperadores de calor, salamandras, lareiras, churrasqueiras, pellets, aquecimento, instalação, manutenção";

export const CONTACT_EMAIL = "geral@tecnolareiras.pt";
export const CONTACT_PHONE = "+351 XXX XXX XXX";
export const CONTACT_ADDRESS = "Portugal";

export const PRODUCT_CATEGORIES = [
  { name: "Recuperadores de Calor", slug: "recuperadores-de-calor" },
  { name: "Salamandras a Lenha", slug: "salamandras-a-lenha" },
  { name: "Salamandras a Pellets", slug: "salamandras-a-pellets" },
  { name: "Lareiras", slug: "lareiras" },
  { name: "Lareiras Suspensas", slug: "lareiras-suspensas" },
  { name: "Churrasqueiras", slug: "churrasqueiras" },
  { name: "Tubagens", slug: "tubagens" },
  { name: "Acessórios", slug: "acessorios" },
  { name: "Produtos de Limpeza", slug: "produtos-de-limpeza" },
  { name: "Peças de Substituição", slug: "pecas-de-substituicao" },
];

export const BRANDS = [
  { name: "MCZ", slug: "mcz" },
  { name: "Jøtul", slug: "jotul" },
  { name: "Edilkamin", slug: "edilkamin" },
  { name: "Piazzetta", slug: "piazzetta" },
  { name: "Biofire", slug: "biofire" },
  { name: "Romotop", slug: "romotop" },
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
    { label: "Assistência", href: "/assistencia" },
    { label: "Orçamentos", href: "/pedir-orcamento" },
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
