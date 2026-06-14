export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string; // slug of the category
  categoryName: string;
  price: number;
  salePrice?: number;
  sku: string;
  power?: string;
  efficiency?: string;
  fuel?: string;
  energyLabel?: string;
  heatedVolume?: string;
  consumption?: string;
  maxLogLength?: string;
  chimney?: string;
  dimensions?: string;
  weight?: string;
  minPower?: string;
  maxPower?: string;
  waterPower?: string;
  airPower?: string;
  tank?: string;
  description: string;
  shortDescription: string;
  features: string[];
  specs: { key: string; value: string }[];
  featured?: boolean;
  new?: boolean;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  // ─── FOGO MONTANHA ────────────────────────────────────────────────────────────

  {
    id: "fm-classic-e601",
    slug: "fogo-montanha-classic-e601",
    name: "Fogo Montanha Classic E601",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 890,
    sku: "FM-CLASSIC-E601",
    power: "8 kW",
    efficiency: "81.4%",
    fuel: "Lenha",
    energyLabel: "A+",
    heatedVolume: "182 m³",
    consumption: "2.4 kg/h",
    maxLogLength: "40 cm",
    chimney: "Ø 150mm",
    description:
      "O Fogo Montanha Classic E601 é a porta de entrada ideal para quem quer aquecimento a lenha eficiente e a um preço acessível. Com 8 kW de potência e câmara selada para ligação a ar exterior canalizado, adequa-se a habitações modernas com ventilação controlada. O vidro panorâmico e a dupla combustão garantem chamas vivas com consumo reduzido — uma solução equilibrada para salas e espaços até 180 m³.",
    shortDescription:
      "Recuperador a lenha de 8 kW com câmara selada e dupla combustão, ideal para espaços até 182 m³.",
    features: [
      "Dupla combustão para maior eficiência e menos fumo",
      "Porta com fecho automático de segurança",
      "Ligação a ar exterior canalizado (câmara selada)",
      "Vidro panorâmico de grande dimensão",
      "Câmara de combustão em aço refratário",
      "Compatível com condutas de fumos Ø 150 mm",
      "Classe energética A+ (ErP 2022)",
      "Fabricado em Portugal",
    ],
    specs: [
      { key: "Potência Nominal", value: "8 kW" },
      { key: "Eficiência", value: "81,4%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Volume Aquecível", value: "182 m³" },
      { key: "Consumo Horário", value: "2,4 kg/h" },
      { key: "Comprimento Máx. Toro", value: "40 cm" },
      { key: "Saída de Fumos", value: "Ø 150 mm" },
    ],
    featured: true,
    tags: [
      "recuperador a lenha",
      "recuperador 8kw",
      "recuperador calor barato",
      "fogo montanha classic",
      "recuperador câmara selada",
      "recuperador ar exterior",
    ],
  },

  {
    id: "fm-classic-e701",
    slug: "fogo-montanha-classic-e701",
    name: "Fogo Montanha Classic E701",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1050,
    sku: "FM-CLASSIC-E701",
    power: "10 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Fogo Montanha Classic E701 sobe um degrau em termos de potência sem abrir mão da elegância discreta da linha Classic. Com 10 kW, cobre confortavelmente zonas de habitação abertas entre 200 e 250 m³. A eficiência de 82% e a classificação A+ traduzem-se em menos lenha consumida e mais calor aproveitado — perfeito para quem aquece o espaço principal da casa.",
    shortDescription:
      "Recuperador a lenha de 10 kW com 82% de eficiência, ideal para casas de dimensão média.",
    features: [
      "Potência de 10 kW para espaços médio-grandes",
      "Eficiência de 82% — menos lenha, mais calor",
      "Dupla combustão com ar secundário",
      "Porta com fecho automático",
      "Vidro panorâmico com sistema de autolimpeza",
      "Câmara de combustão revestida a vermiculite",
      "Classe energética A+",
      "Fabricado em Portugal",
    ],
    specs: [
      { key: "Potência Nominal", value: "10 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
    ],
    tags: [
      "recuperador a lenha 10kw",
      "fogo montanha classic e701",
      "recuperador calor 10kw",
      "aquecimento a lenha",
    ],
  },

  {
    id: "fm-classic-e801",
    slug: "fogo-montanha-classic-e801",
    name: "Fogo Montanha Classic E801",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1190,
    sku: "FM-CLASSIC-E801",
    power: "12 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    heatedVolume: "280 m³",
    chimney: "Ø 150mm",
    description:
      "O topo de gama da linha Classic da Fogo Montanha, o E801 oferece 12 kW de potência calorífica para aquecer até 280 m³ com um único aparelho. Mantém os pontos fortes da família — dupla combustão, câmara selada e vidro panorâmico — e acrescenta uma câmara de combustão mais espaçosa que aceita toros maiores e proporciona sessões de aquecimento mais longas.",
    shortDescription:
      "Recuperador a lenha de 12 kW da linha Classic, aquece até 280 m³ com alta eficiência.",
    features: [
      "12 kW para grandes espaços habitacionais",
      "Câmara de combustão ampliada para toros maiores",
      "Dupla combustão com postcombustão de gases",
      "Câmara selada com ligação a ar exterior",
      "Vidro panorâmico tratado para autolimpeza",
      "Porta com fecho automático de segurança",
      "Classe energética A+",
      "Compatível com condutas Ø 150 mm",
    ],
    specs: [
      { key: "Potência Nominal", value: "12 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Volume Aquecível", value: "280 m³" },
      { key: "Saída de Fumos", value: "Ø 150 mm" },
    ],
    tags: [
      "recuperador a lenha 12kw",
      "fogo montanha classic e801",
      "recuperador calor grande",
      "aquecimento casa grande",
    ],
  },

  {
    id: "fm-vision-m850-pv",
    slug: "fogo-montanha-vision-m850-pv",
    name: "Fogo Montanha Vision M850 PV",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1890,
    sku: "FM-VISION-M850-PV",
    power: "14.5 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "Quando o design faz parte da decoração, o Vision M850 PV responde com uma porta de abertura vertical tipo guilhotina que revela uma janela de fogo impressionante. Os seus 14,5 kW e a eficiência de 83% garantem um desempenho robusto, enquanto o sistema de cortina de ar mantém o vidro vitrocerâmico — resistente a 750 °C — limpo e cristalino ao longo de toda a sessão.",
    shortDescription:
      "Recuperador de design premium com porta vertical e vidro vitrocerâmico, 14,5 kW de potência.",
    features: [
      "Porta de abertura vertical tipo elevador",
      "Vidro vitrocerâmico resistente a 750 °C",
      "Sistema de cortina de ar para limpeza contínua do vidro",
      "Vista panorâmica do fogo sem obstruções",
      "14,5 kW para espaços de grande dimensão",
      "Eficiência de 83% — classe A+",
      "Câmara de combustão em material refratário",
      "Design contemporâneo — fabricado em Portugal",
    ],
    specs: [
      { key: "Potência Nominal", value: "14,5 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Tipo de Porta", value: "Vertical (elevador)" },
      { key: "Vidro", value: "Vitrocerâmico 750 °C" },
    ],
    featured: true,
    tags: [
      "recuperador porta vertical",
      "recuperador design moderno",
      "fogo montanha vision",
      "recuperador 14kw",
      "recuperador premium",
    ],
  },

  {
    id: "fm-vision-m850-ph",
    slug: "fogo-montanha-vision-m850-ph",
    name: "Fogo Montanha Vision M850 PH",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1790,
    sku: "FM-VISION-M850-PH",
    power: "14.5 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "A variante de porta horizontal da linha Vision partilha os mesmos 14,5 kW e a mesma eficiência de 83% do modelo PV, mas com uma abertura abatível clássica. Ideal para instalações onde a altura livre sobre o aparelho é limitada, o M850 PH combina o desempenho de topo da família Vision com a praticidade de uma abertura frontal tradicional.",
    shortDescription:
      "Recuperador Vision de 14,5 kW com porta horizontal, para instalações com espaço vertical limitado.",
    features: [
      "Porta de abertura horizontal (abatível)",
      "Vidro vitrocerâmico com sistema de cortina de ar",
      "14,5 kW para espaços amplos",
      "Eficiência de 83% — Classe A+",
      "Vista panorâmica do fogo",
      "Câmara de combustão refratária",
      "Fabrico português",
    ],
    specs: [
      { key: "Potência Nominal", value: "14,5 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Tipo de Porta", value: "Horizontal (abatível)" },
    ],
    tags: [
      "recuperador porta horizontal",
      "fogo montanha vision m850",
      "recuperador 14kw lenha",
    ],
  },

  {
    id: "fm-vision-m1100-pv",
    slug: "fogo-montanha-vision-m1100-pv",
    name: "Fogo Montanha Vision M1100 PV",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2290,
    sku: "FM-VISION-M1100-PV",
    power: "18 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Vision M1100 PV é o membro mais poderoso da família Vision. Com 18 kW de potência calorífica, é capaz de aquecer moradias de grande dimensão ou espaços comerciais de forma autónoma. A câmara de combustão alargada (1100 mm de largura de firebox) permite toros de grandes dimensões, reduzindo a frequência de recarga e aumentando a autonomia do aparelho.",
    shortDescription:
      "Recuperador Vision de 18 kW com câmara extra-larga, para moradias grandes e espaços comerciais.",
    features: [
      "18 kW para habitações de grande dimensão",
      "Câmara de combustão extra-larga (1100 mm)",
      "Porta de abertura vertical tipo elevador",
      "Vidro vitrocerâmico resistente a 750 °C",
      "Sistema de cortina de ar para vidro limpo",
      "Eficiência de 83% — classe A+",
      "Aceita toros de maior comprimento",
      "Design premium — fabrico português",
    ],
    specs: [
      { key: "Potência Nominal", value: "18 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Tipo de Porta", value: "Vertical (elevador)" },
      { key: "Largura da Câmara", value: "1100 mm" },
    ],
    tags: [
      "recuperador 18kw",
      "recuperador grande potência",
      "fogo montanha vision m1100",
      "recuperador moradia grande",
    ],
  },

  {
    id: "fm-square-d9kw",
    slug: "fogo-montanha-square-d9kw",
    name: "Fogo Montanha Square D9KW",
    brand: "Fogo Montanha",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2490,
    sku: "FM-SQUARE-D9KW",
    power: "9 kW",
    efficiency: "90%",
    fuel: "Pellets",
    energyLabel: "A++",
    description:
      "O Square D9KW é a proposta da Fogo Montanha para quem quer comodidade máxima sem abrir mão de um design geométrico e moderno. Com carga de pellets pelo topo e controlo por smartphone, o utilizador programa o horário de aquecimento a partir de qualquer lugar. A eficiência de 90% e a etiqueta A++ colocam-no entre os aparelhos a pellets mais económicos do mercado — ideal para quem valoriza conforto e poupança.",
    shortDescription:
      "Recuperador a pellets de 9 kW com controlo por app, 90% de eficiência e design geométrico minimalista.",
    features: [
      "Controlo via app para smartphone",
      "Carga de pellets pelo topo (mais ergonómica)",
      "Ecrã programável com temporizador semanal",
      "Sistema de autolimpeza da porta",
      "Vários anéis de acabamento disponíveis",
      "Eficiência de 90% — classe A++",
      "Teleguiado por controlo remoto",
      "Design geométrico contemporâneo",
    ],
    specs: [
      { key: "Potência Nominal", value: "9 kW" },
      { key: "Eficiência", value: "90%" },
      { key: "Classe Energética", value: "A++" },
      { key: "Combustível", value: "Pellets" },
      { key: "Controlo", value: "App + Telecomando" },
      { key: "Carga de Pellets", value: "Pelo topo" },
    ],
    new: true,
    tags: [
      "recuperador pellets app",
      "recuperador pellets programável",
      "fogo montanha square",
      "recuperador pellets eficiente",
      "aquecimento automático",
    ],
  },

  {
    id: "fm-core",
    slug: "fogo-montanha-core",
    name: "Fogo Montanha Core",
    brand: "Fogo Montanha",
    category: "salamandras-a-lenha",
    categoryName: "Salamandras a Lenha",
    price: 990,
    sku: "FM-CORE",
    power: "9.4 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    consumption: "2.8 kg/h",
    maxLogLength: "60 cm",
    description:
      "A Fogo Montanha Core é uma salamandra a lenha de coluna com personalidade própria. As suas linhas rectas e o acabamento robusto integram-se tanto em interiores rústicos como contemporâneos. Com 9,4 kW de potência e a capacidade para toros até 60 cm, é especialmente prática em casas de campo ou garagens onde a lenha está disponível em secções maiores. A eficiência de 82% garante que cada toro rende o máximo.",
    shortDescription:
      "Salamandra a lenha de 9,4 kW que aceita toros até 60 cm, eficiência A+ e design versátil.",
    features: [
      "Aceita toros até 60 cm de comprimento",
      "9,4 kW de potência calorífica",
      "Eficiência de 82% — Classe A+",
      "Câmara de combustão espaçosa",
      "Vidro panorâmico com autolimpeza",
      "Design de coluna adaptável a vários estilos",
      "Pés reguláveis para nivelamento",
      "Fabricada em Portugal",
    ],
    specs: [
      { key: "Potência Nominal", value: "9,4 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Consumo Horário", value: "2,8 kg/h" },
      { key: "Comprimento Máx. Toro", value: "60 cm" },
    ],
    tags: [
      "salamandra a lenha",
      "salamandra 9kw",
      "fogo montanha core",
      "salamandra toros grandes",
      "aquecimento sala",
    ],
  },

  {
    id: "fm-natura-s500h",
    slug: "fogo-montanha-natura-s500h",
    name: "Fogo Montanha Natura S500H",
    brand: "Fogo Montanha",
    category: "salamandras-a-lenha",
    categoryName: "Salamandras a Lenha",
    price: 1290,
    sku: "FM-NATURA-S500H",
    power: "11 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "A Natura S500H é a salamandra de topo de gama da Fogo Montanha. Com 11 kW de potência, aquece espaços amplos com conforto, enquanto o acabamento premium e as proporções equilibradas a tornam num ponto focal decorativo de qualquer sala. É a escolha certa para quem não quer compromissos entre estética e desempenho no aquecimento a lenha.",
    shortDescription:
      "Salamandra premium de 11 kW com acabamentos de alta qualidade, perfeita para salas amplas.",
    features: [
      "11 kW de potência — para grandes espaços",
      "Eficiência de 82% — Classe A+",
      "Acabamentos premium de alta durabilidade",
      "Vidro panorâmico com sistema de limpeza por ar",
      "Câmara de combustão em vermiculite",
      "Porta com vedação perfeita e fecho robusto",
      "Design equilibrado — linha Natura",
      "Produção portuguesa",
    ],
    specs: [
      { key: "Potência Nominal", value: "11 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
    ],
    featured: true,
    tags: [
      "salamandra 11kw",
      "salamandra premium",
      "fogo montanha natura",
      "salamandra lenha casa grande",
    ],
  },

  // ─── SOLZAIMA ─────────────────────────────────────────────────────────────────

  {
    id: "sz-loki-eco-70",
    slug: "solzaima-loki-eco-70",
    name: "Solzaima Loki Eco 70",
    brand: "Solzaima",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 820,
    sku: "SZ-LOKI-ECO-70",
    power: "9.3 kW",
    efficiency: "81%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "Com mais de 45 anos de experiência na fabricação em Portugal, a Solzaima apresenta o Loki Eco 70 como uma solução de recuperador a lenha de entrada de gama com verdadeira qualidade de marca. Os seus 9,3 kW e 81% de eficiência cobrem a maioria das salas e cozinhas abertas. O preço competitivo não compromete a robustez que caracteriza todos os aparelhos saídos das fábricas Solzaima.",
    shortDescription:
      "Recuperador a lenha de 9,3 kW da conceituada marca portuguesa Solzaima — qualidade comprovada a preço acessível.",
    features: [
      "9,3 kW de potência — espaços até ~200 m³",
      "Eficiência de 81% — Classe A+",
      "Dupla combustão Solzaima",
      "Vidro resistente de grande dimensão",
      "Câmara de combustão revestida a ficha refratária",
      "Marca portuguesa desde 1978",
      "Fácil manutenção e limpeza",
    ],
    specs: [
      { key: "Potência Nominal", value: "9,3 kW" },
      { key: "Eficiência", value: "81%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
    ],
    tags: [
      "recuperador solzaima",
      "solzaima loki eco",
      "recuperador a lenha barato",
      "recuperador marca portuguesa",
    ],
  },

  {
    id: "sz-caramulo-70",
    slug: "solzaima-caramulo-70",
    name: "Solzaima Caramulo 70",
    brand: "Solzaima",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 780,
    sku: "SZ-CARAMULO-70",
    power: "8.6 kW",
    efficiency: "81%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Solzaima Caramulo 70 presta homenagem à Serra do Caramulo com um design discreto e funcional que serve gerações. Com 8,6 kW e 81% de eficiência, é uma escolha sólida para quem pretende entrar no mundo do aquecimento a lenha com uma marca de confiança e sem grandes investimentos iniciais. Simples de instalar e de manter, o Caramulo 70 é sinónimo de durabilidade.",
    shortDescription:
      "Recuperador a lenha económico de 8,6 kW da Solzaima — fiabilidade portuguesa ao melhor preço.",
    features: [
      "8,6 kW de potência — espaços até ~180 m³",
      "Eficiência de 81% — Classe A+",
      "Construção robusta em aço de alta espessura",
      "Câmara refratária de fácil acesso",
      "Vidro panorâmico de boa dimensão",
      "Marca portuguesa com décadas de experiência",
    ],
    specs: [
      { key: "Potência Nominal", value: "8,6 kW" },
      { key: "Eficiência", value: "81%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
    ],
    tags: [
      "recuperador solzaima caramulo",
      "recuperador barato portugal",
      "recuperador 8kw lenha",
      "solzaima recuperador",
    ],
  },

  {
    id: "sz-mytho-eco",
    slug: "solzaima-mytho-eco",
    name: "Solzaima Mytho Eco 21.7 kW",
    brand: "Solzaima",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2890,
    sku: "SZ-MYTHO-ECO",
    power: "21.7 kW",
    efficiency: "80%",
    fuel: "Lenha",
    energyLabel: "A+",
    heatedVolume: "493 m³",
    consumption: "6.2 kg/h",
    maxLogLength: "50 cm",
    waterPower: "15.4 kW",
    airPower: "6.3 kW",
    weight: "225 kg",
    tank: "63 L",
    chimney: "Ø 200mm",
    dimensions: "101,7 × 79,5 × 60,5 cm (A×L×P)",
    description:
      "O Solzaima Mytho Eco combina aquecimento central a lenha com a simplicidade de um recuperador. A maioria da sua potência de 21,7 kW (15,4 kW) vai diretamente para o circuito de água, aquecendo radiadores e piso radiante em toda a casa, enquanto os restantes 6,3 kW aquecem o espaço onde está instalado. O depósito de 63 litros garante inércia térmica suficiente para manter a temperatura mesmo depois de o fogo baixar.",
    shortDescription:
      "Recuperador hidráulico a lenha de 21,7 kW com 63 L de depósito — aquecimento central + ambiente.",
    features: [
      "21,7 kW totais (15,4 kW para água + 6,3 kW para ar)",
      "Depósito de 63 L integrado para aquecimento central",
      "Aquece até 493 m³ em toda a habitação",
      "Toros até 50 cm de comprimento",
      "Câmara de combustão de grande volume",
      "Compatível com piso radiante e radiadores",
      "Classe energética A+",
      "Fabricado em Portugal pela Solzaima",
    ],
    specs: [
      { key: "Potência Total", value: "21,7 kW" },
      { key: "Potência para Água", value: "15,4 kW" },
      { key: "Potência para Ar", value: "6,3 kW" },
      { key: "Eficiência", value: "80%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Volume do Depósito", value: "63 L" },
      { key: "Volume Aquecível", value: "493 m³" },
      { key: "Consumo Horário", value: "6,2 kg/h" },
      { key: "Comp. Máx. Toro", value: "50 cm" },
      { key: "Peso", value: "225 kg" },
      { key: "Saída de Fumos", value: "Ø 200 mm" },
      { key: "Dimensões (A×L×P)", value: "101,7 × 79,5 × 60,5 cm" },
    ],
    featured: true,
    tags: [
      "recuperador aquecimento central lenha",
      "solzaima mytho eco",
      "recuperador hidráulico",
      "aquecimento central lareira",
      "recuperador com boiler",
    ],
  },

  {
    id: "sz-zaima-eco",
    slug: "solzaima-zaima-eco",
    name: "Solzaima Zaima Eco 21.7 kW",
    brand: "Solzaima",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2990,
    sku: "SZ-ZAIMA-ECO",
    power: "21.7 kW",
    efficiency: "80%",
    fuel: "Lenha",
    energyLabel: "A+",
    heatedVolume: "493 m³",
    consumption: "6.2 kg/h",
    maxLogLength: "50 cm",
    waterPower: "15.4 kW",
    airPower: "6.3 kW",
    weight: "245 kg",
    tank: "63 L",
    chimney: "Ø 200mm",
    description:
      "O Solzaima Zaima Eco partilha a mesma filosofia de aquecimento central a lenha do Mytho Eco, mas com construção mais robusta (245 kg) e acabamentos diferenciadores. A distribuição de potência idêntica — 15,4 kW para o circuito de água e 6,3 kW para o espaço — torna-o igualmente eficaz para aquecimento central, mas com uma presença visual mais imponente na sala.",
    shortDescription:
      "Recuperador hidráulico a lenha Zaima Eco — versão premium do Mytho com construção mais robusta.",
    features: [
      "21,7 kW totais — aquecimento central + ambiente",
      "Depósito de 63 L com inércia térmica elevada",
      "Construção em aço de alta espessura (245 kg)",
      "Toros até 50 cm de comprimento",
      "Câmara de combustão espaçosa",
      "Compatível com sistemas de piso radiante e radiadores",
      "Classe energética A+",
      "Fabricação Solzaima — desde 1978",
    ],
    specs: [
      { key: "Potência Total", value: "21,7 kW" },
      { key: "Potência para Água", value: "15,4 kW" },
      { key: "Potência para Ar", value: "6,3 kW" },
      { key: "Eficiência", value: "80%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Volume do Depósito", value: "63 L" },
      { key: "Volume Aquecível", value: "493 m³" },
      { key: "Consumo Horário", value: "6,2 kg/h" },
      { key: "Peso", value: "245 kg" },
      { key: "Comp. Máx. Toro", value: "50 cm" },
      { key: "Saída de Fumos", value: "Ø 200 mm" },
    ],
    tags: [
      "recuperador hidráulico lenha",
      "solzaima zaima eco",
      "recuperador central lenha",
      "aquecimento central recuperador",
    ],
  },

  {
    id: "sz-atlantic-22kw",
    slug: "solzaima-atlantic-22kw",
    name: "Solzaima Atlantic 22 kW",
    brand: "Solzaima",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 4290,
    sku: "SZ-ATLANTIC-22KW",
    power: "22.1 kW",
    efficiency: "93.8%",
    fuel: "Pellets",
    energyLabel: "A++",
    minPower: "5.1 kW",
    waterPower: "18.8 kW",
    heatedVolume: "502 m³",
    description:
      "O Solzaima Atlantic 22 kW é o equipamento de aquecimento central a pellets de maior potência do portefólio Solzaima. Com 93,8% de eficiência e classe A++, é uma alternativa séria à caldeira de gás ou gasóleo — totalmente automática, limpa e renovável. Os 18,8 kW direcionados para o circuito de água cobrem habitações generosas, enquanto a porta disponível em preto ou espelhado adapta-se a qualquer ambiente.",
    shortDescription:
      "Recuperador hidráulico a pellets de 22 kW com 93,8% de eficiência — aquecimento central automático e sustentável.",
    features: [
      "22,1 kW totais — 18,8 kW para aquecimento central",
      "Eficiência de 93,8% — classe A++",
      "Porta disponível em preto ou acabamento espelhado",
      "Abertura de porta esquerda ou direita",
      "Funcionamento totalmente automático",
      "Aquece até 502 m³ (habitações amplas)",
      "Potência mínima de 5,1 kW (modulação automática)",
      "Alternativa ecológica à caldeira tradicional",
    ],
    specs: [
      { key: "Potência Total", value: "22,1 kW" },
      { key: "Potência para Água", value: "18,8 kW" },
      { key: "Potência Mínima", value: "5,1 kW" },
      { key: "Eficiência", value: "93,8%" },
      { key: "Classe Energética", value: "A++" },
      { key: "Combustível", value: "Pellets" },
      { key: "Volume Aquecível", value: "502 m³" },
      { key: "Acabamento da Porta", value: "Preto / Espelhado" },
    ],
    featured: true,
    tags: [
      "recuperador hidráulico pellets",
      "solzaima atlantic",
      "aquecimento central pellets",
      "recuperador pellets central heating",
      "caldeira pellets lareira",
    ],
  },

  {
    id: "sz-tek-round-eco",
    slug: "solzaima-tek-round-eco",
    name: "Solzaima Tek Round Eco",
    brand: "Solzaima",
    category: "salamandras-a-lenha",
    categoryName: "Salamandras a Lenha",
    price: 690,
    sku: "SZ-TEK-ROUND-ECO",
    power: "7.3 kW",
    efficiency: "81%",
    fuel: "Lenha",
    energyLabel: "A+",
    minPower: "5.1 kW",
    maxPower: "9.5 kW",
    consumption: "2 kg/h",
    heatedVolume: "166 m³",
    description:
      "A Solzaima Tek Round Eco surpreende pela forma cilíndrica que a distingue numa categoria dominada por linhas retas. Testada pelo instituto TÜV da Alemanha, comprova na prática os seus níveis baixos de emissões de CO2 e a eficiência de 81%. O sistema de dupla combustão TEK desenvolvido pela Solzaima otimiza a queima dos gases libertados pela lenha, tornando cada sessão mais limpa e rendível.",
    shortDescription:
      "Salamandra a lenha de design cilíndrico e 7,3 kW, certificada TÜV e com dupla combustão TEK.",
    features: [
      "Design cilíndrico exclusivo — ponto focal decorativo",
      "Sistema de dupla combustão TEK Solzaima",
      "Certificação TÜV Alemanha — baixas emissões CO2",
      "Potência regulável entre 5,1 e 9,5 kW",
      "Consumo de apenas 2 kg/h na potência nominal",
      "Aquece até 166 m³",
      "Eficiência de 81% — Classe A+",
      "Vidro panorâmico 360° (formato cilíndrico)",
    ],
    specs: [
      { key: "Potência Nominal", value: "7,3 kW" },
      { key: "Potência Mínima", value: "5,1 kW" },
      { key: "Potência Máxima", value: "9,5 kW" },
      { key: "Eficiência", value: "81%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Consumo Horário", value: "2 kg/h" },
      { key: "Volume Aquecível", value: "166 m³" },
      { key: "Certificação", value: "TÜV Alemanha" },
    ],
    tags: [
      "salamandra cilíndrica",
      "solzaima tek round",
      "salamandra design redonda",
      "salamandra baixas emissões",
      "salamandra certificada tuv",
    ],
  },

  {
    id: "sz-amazon-9",
    slug: "solzaima-amazon-9",
    name: "Solzaima Amazon 9",
    brand: "Solzaima",
    category: "salamandras-a-pellets",
    categoryName: "Salamandras a Pellets",
    price: 1490,
    sku: "SZ-AMAZON-9",
    power: "9 kW",
    efficiency: "92%",
    fuel: "Pellets",
    energyLabel: "A+",
    description:
      "A Solzaima Amazon 9 traz o conforto do aquecimento automático a pellets para um formato de salamandra elegante. Com 9 kW de potência e uma eficiência de 92%, aquece sem que o utilizador precise de pensar em lenha — basta carregar o depósito de pellets e programar o horário desejado. Ideal para quem tem um estilo de vida ocupado e quer regressar a casa já aquecida.",
    shortDescription:
      "Salamandra a pellets de 9 kW com 92% de eficiência — aquecimento automático e sem esforço.",
    features: [
      "9 kW de potência com alimentação automática a pellets",
      "Eficiência de 92% — Classe A+",
      "Programação horária e semanal",
      "Auto-ignição e auto-limpeza do queimador",
      "Controlo remoto incluído",
      "Funcionamento silencioso",
      "Design de salamandra elegante da Solzaima",
      "Baixas emissões — combustão limpa",
    ],
    specs: [
      { key: "Potência Nominal", value: "9 kW" },
      { key: "Eficiência", value: "92%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Pellets" },
    ],
    tags: [
      "salamandra pellets",
      "solzaima amazon",
      "salamandra automática",
      "aquecimento pellets programável",
    ],
  },

  // ─── METLOR ───────────────────────────────────────────────────────────────────

  {
    id: "mt-quina-guilhotina",
    slug: "metlor-quina-guilhotina",
    name: "Metlor Quina Guilhotina",
    brand: "Metlor",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1590,
    sku: "MT-QUINA-GUILHOTINA",
    power: "14 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    heatedVolume: "340 m³",
    dimensions: "490 × 775 × 470 mm (frente) / 1231 × 904 × 655 mm total",
    description:
      "A Metlor Quina Guilhotina destaca-se pela porta de abertura vertical — o mecanismo de guilhotina que lhe dá o nome facilita a introdução de lenha sem obstruir o espaço em frente ao recuperador. Com 14 kW de potência e 83% de eficiência, cobre habitações de dimensão considerável (até 340 m³). A marca Metlor, de origem portuguesa, é sinónimo de robustez industrial e acabamentos de excelência.",
    shortDescription:
      "Recuperador a lenha Metlor de 14 kW com porta guilhotina — design funcional para espaços até 340 m³.",
    features: [
      "Porta de abertura tipo guilhotina (vertical)",
      "14 kW para espaços até 340 m³",
      "Eficiência de 83% — Classe A+",
      "Construção Metlor em aço de alta qualidade",
      "Câmara de combustão refratária de grande volume",
      "Vidro panorâmico resistente",
      "Design robusto com acabamento duradouro",
    ],
    specs: [
      { key: "Potência Nominal", value: "14 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Volume Aquecível", value: "340 m³" },
      { key: "Dimensões (frente)", value: "490 × 775 × 470 mm" },
      { key: "Dimensões (total)", value: "1231 × 904 × 655 mm" },
    ],
    tags: [
      "recuperador metlor",
      "recuperador porta guilhotina",
      "metlor quina",
      "recuperador 14kw lenha",
    ],
  },

  {
    id: "mt-quina-900",
    slug: "metlor-quina-900",
    name: "Metlor Quina 900",
    brand: "Metlor",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 3234,
    sku: "MT-QUINA-900",
    power: "19 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "A Metlor Quina 900 é um recuperador de alta potência para quem precisa de aquecer espaços muito amplos ou residências de grande dimensão. Os seus 19 kW e a eficiência de 83% fazem dele um dos aparelhos mais poderosos da linha a lenha da Metlor. A câmara de combustão de 900 mm aceita toros de grandes dimensões, reduzindo a frequência de alimentação do fogo.",
    shortDescription:
      "Recuperador a lenha de alta potência Metlor — 19 kW para grandes espaços e câmara de 900 mm.",
    features: [
      "19 kW de potência para grandes habitações",
      "Câmara de combustão de 900 mm de largura",
      "Eficiência de 83% — Classe A+",
      "Aceita toros de grandes dimensões",
      "Construção robusta Metlor em aço espesso",
      "Vidro panorâmico de grande dimensão",
      "Acabamentos de qualidade superior",
    ],
    specs: [
      { key: "Potência Nominal", value: "19 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Largura da Câmara", value: "900 mm" },
    ],
    tags: [
      "recuperador metlor quina 900",
      "recuperador 19kw",
      "recuperador potência alta",
      "metlor recuperador lenha",
    ],
  },

  {
    id: "mt-elos-98",
    slug: "metlor-elos-98",
    name: "Metlor Elos 98",
    brand: "Metlor",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1190,
    sku: "MT-ELOS-98",
    power: "11 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Metlor Elos 98 é o recuperador de entrada de gama da Metlor que não compromete a qualidade que a marca é conhecida. Com 11 kW e 82% de eficiência, oferece desempenho sólido para salas e espaços abertos de dimensão média. As linhas contemporâneas do Elos integram-se com facilidade em diferentes estilos de decoração, tornando-o numa escolha popular entre os clientes que chegam à Metlor pela primeira vez.",
    shortDescription:
      "Recuperador a lenha Metlor de 11 kW — entrada de gama com qualidade de construção garantida.",
    features: [
      "11 kW de potência calorífica",
      "Eficiência de 82% — Classe A+",
      "Construção Metlor em aço de qualidade",
      "Design contemporâneo de linhas limpas",
      "Vidro panorâmico com boa visibilidade do fogo",
      "Câmara refratária de manutenção fácil",
      "Fabrico português com garantia de qualidade",
    ],
    specs: [
      { key: "Potência Nominal", value: "11 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
    ],
    tags: [
      "metlor elos",
      "recuperador 11kw metlor",
      "recuperador lenha moderno",
      "metlor recuperador entrada gama",
    ],
  },

  {
    id: "mt-llar-l-lda",
    slug: "metlor-llar-l-lda",
    name: "Metlor LLAR L LDA",
    brand: "Metlor",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2490,
    sku: "MT-LLAR-L-LDA",
    power: "17.12 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Metlor LLAR L LDA é um recuperador hidráulico a lenha concebido para substituir ou complementar sistemas de aquecimento central. Com 17,12 kW de potência e 82% de eficiência, envia calor para os radiadores ou piso radiante da casa através de circuito de água integrado, ao mesmo tempo que aquece o espaço onde está instalado. Uma solução de dupla função para quem quer independência energética com combustível sólido.",
    shortDescription:
      "Recuperador hidráulico a lenha Metlor de 17 kW — aquecimento central e ambiente numa só unidade.",
    features: [
      "17,12 kW para aquecimento central e ambiente",
      "Circuito de água integrado para radiadores/piso radiante",
      "Eficiência de 82% — Classe A+",
      "Construção Metlor de alta robustez",
      "Câmara de combustão em aço refratário",
      "Compatible com sistemas de aquecimento central existentes",
      "Vidro panorâmico de grande dimensão",
    ],
    specs: [
      { key: "Potência Total", value: "17,12 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Tipo", value: "Hidráulico (aquecimento central)" },
    ],
    tags: [
      "recuperador hidráulico metlor",
      "metlor llar aquecimento central",
      "recuperador central lenha",
      "lareira aquecimento central",
    ],
  },

  {
    id: "mt-llar-xl-vitrus",
    slug: "metlor-llar-xl-vitrus",
    name: "Metlor LLAR XL Vitrus",
    brand: "Metlor",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 3190,
    sku: "MT-LLAR-XL-VITRUS",
    power: "25.06 kW",
    efficiency: "83%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O Metlor LLAR XL Vitrus é o recuperador hidráulico de maior potência da gama Metlor. Com 25,06 kW e eficiência de 83%, é capaz de alimentar um sistema de aquecimento central de uma moradia de grande dimensão, substituindo completamente a caldeira convencional. O nome Vitrus remete para o vidro vitrocerâmico de alto desempenho que proporciona uma janela de fogo generosa e de longa durabilidade.",
    shortDescription:
      "O recuperador hidráulico mais potente da Metlor — 25 kW de aquecimento central a lenha com vidro vitrocerâmico.",
    features: [
      "25,06 kW — máxima potência da gama Metlor",
      "Vidro vitrocerâmico de alta performance",
      "Aquecimento central completo para grandes moradias",
      "Eficiência de 83% — Classe A+",
      "Câmara XL para toros de grande comprimento",
      "Construção robusta em aço de espessura máxima",
      "Integração com sistemas de piso radiante e radiadores",
    ],
    specs: [
      { key: "Potência Total", value: "25,06 kW" },
      { key: "Eficiência", value: "83%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Vidro", value: "Vitrocerâmico de alta performance" },
      { key: "Tipo", value: "Hidráulico (aquecimento central)" },
    ],
    tags: [
      "recuperador 25kw",
      "metlor llar xl",
      "recuperador hidráulico potente",
      "aquecimento central lenha grande moradia",
    ],
  },

  // ─── C&A CHAMA ────────────────────────────────────────────────────────────────

  {
    id: "ca-cristal-69",
    slug: "ca-chama-cristal-69",
    name: "C&A Chama Cristal 69 Fundição",
    brand: "C&A Chama",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1090,
    sku: "CA-CRISTAL-69",
    power: "9.8 kW",
    efficiency: "84%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "O C&A Chama Cristal 69 Fundição é construído em ferro fundido — um material que acumula e irradia calor de forma excecional, mantendo a temperatura ambiente mesmo depois de o fogo diminuir de intensidade. Com 9,8 kW e 84% de eficiência, supera a maioria dos concorrentes em aço da mesma gama de preço. O vidro panorâmico e o design contemporâneo tornam-no num recuperador que serve tanto pela função como pela estética.",
    shortDescription:
      "Recuperador a lenha em ferro fundido de 9,8 kW com 84% de eficiência — inércia térmica superior ao aço.",
    features: [
      "Construção em ferro fundido — inércia térmica superior",
      "9,8 kW com 84% de eficiência (acima da média)",
      "Vidro panorâmico de grande dimensão",
      "Design contemporâneo elegante",
      "Ventilação convectiva silenciosa",
      "Calor radiante de qualidade superior ao aço",
      "Classe energética A+",
      "Acabamentos de alta durabilidade",
    ],
    specs: [
      { key: "Potência Nominal", value: "9,8 kW" },
      { key: "Eficiência", value: "84%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Material", value: "Ferro fundido" },
    ],
    tags: [
      "recuperador ferro fundido",
      "ca chama cristal",
      "recuperador fundição lenha",
      "recuperador 9kw fundição",
    ],
  },

  {
    id: "ca-w4-700",
    slug: "ca-chama-w4-700",
    name: "C&A Chama W4-700 Aquecimento Central",
    brand: "C&A Chama",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 1890,
    sku: "CA-W4-700",
    power: "13.1 kW",
    efficiency: "82%",
    fuel: "Lenha",
    energyLabel: "A+",
    tank: "46 L",
    description:
      "O C&A Chama W4-700 é um recuperador hidráulico que integra um depósito de 46 litros para aquecimento central, posicionado a um preço muito competitivo para a categoria. Com 13,1 kW e capacidade de produção de água quente, serve como suporte ou substituição parcial da caldeira convencional. Uma opção acessível para quem quer dar os primeiros passos no aquecimento central a lenha.",
    shortDescription:
      "Recuperador hidráulico C&A Chama de 13,1 kW com depósito de 46 L — aquecimento central acessível.",
    features: [
      "13,1 kW com circuito de água integrado",
      "Depósito de 46 L para aquecimento central",
      "Produção de água quente sanitária (AQS)",
      "Eficiência de 82% — Classe A+",
      "Preço competitivo para a categoria hidráulica",
      "Vidro panorâmico com boa visibilidade",
      "Compatível com radiadores e piso radiante",
    ],
    specs: [
      { key: "Potência Total", value: "13,1 kW" },
      { key: "Eficiência", value: "82%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Volume do Depósito", value: "46 L" },
      { key: "Tipo", value: "Hidráulico (aquecimento central)" },
    ],
    tags: [
      "ca chama w4",
      "recuperador hidráulico barato",
      "recuperador aquecimento central acessível",
      "lareira hidráulica 13kw",
    ],
  },

  // ─── CHAMILAR ─────────────────────────────────────────────────────────────────

  {
    id: "ch-petit-cube",
    slug: "chamilar-petit-cube",
    name: "Chamilar Petit Cube",
    brand: "Chamilar",
    category: "salamandras-a-lenha",
    categoryName: "Salamandras a Lenha",
    price: 590,
    sku: "CH-PETIT-CUBE",
    power: "7 kW",
    efficiency: "80%",
    fuel: "Lenha",
    energyLabel: "A+",
    description:
      "A Chamilar Petit Cube é prova de que bom aquecimento não tem de ocupar muito espaço. Com o seu formato cúbico compacto e os seus 7 kW de potência, cabe em qualquer sala sem dominar a decoração. É a escolha certa para apartamentos, quartos ou espaços secundários onde uma salamandra de grande porte seria excessiva. A simplicidade de operação e o preço contenido tornam-na numa das salamandras mais populares que comercializamos.",
    shortDescription:
      "Salamandra a lenha compacta de 7 kW em formato cúbico — ideal para apartamentos e espaços pequenos.",
    features: [
      "Formato cúbico compacto — ocupa pouco espaço",
      "7 kW de potência para espaços até ~150 m³",
      "Eficiência de 80% — Classe A+",
      "Design minimalista adaptável a qualquer decoração",
      "Vidro panorâmico frontal",
      "Operação simples — sem tecnologia desnecessária",
      "Opção acessível para primeiro aquecimento a lenha",
    ],
    specs: [
      { key: "Potência Nominal", value: "7 kW" },
      { key: "Eficiência", value: "80%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Lenha" },
      { key: "Formato", value: "Cúbico compacto" },
    ],
    tags: [
      "salamandra compacta",
      "chamilar petit cube",
      "salamandra pequena apartamento",
      "salamandra barata lenha",
      "aquecimento pequeno espaço",
    ],
  },

  {
    id: "ch-zefiro-3",
    slug: "chamilar-zefiro-3",
    name: "Chamilar Zefiro 3",
    brand: "Chamilar",
    category: "recuperadores-de-calor",
    categoryName: "Recuperadores de Calor",
    price: 2190,
    sku: "CH-ZEFIRO-3",
    power: "9.26 kW",
    efficiency: "90%",
    fuel: "Pellets",
    energyLabel: "A++",
    description:
      "O Chamilar Zefiro 3 é um recuperador a pellets de design quadrangular minimalista com 90% de eficiência e etiqueta A++. O telecomando incluído e a programação semanal integrada permitem gerir o aquecimento sem sair do sofá. A Chamilar, distribuidora com larga experiência no mercado português, garante suporte técnico completo e peças de substituição para este modelo ao longo do tempo.",
    shortDescription:
      "Recuperador a pellets de 9,26 kW com design quadrado moderno, 90% de eficiência e controlo remoto.",
    features: [
      "9,26 kW de potência a pellets",
      "Eficiência de 90% — Classe A++",
      "Design quadrangular contemporâneo",
      "Controlo remoto e programação semanal",
      "Auto-ignição e auto-limpeza",
      "Funcionamento silencioso e económico",
      "Assistência técnica Chamilar em Portugal",
    ],
    specs: [
      { key: "Potência Nominal", value: "9,26 kW" },
      { key: "Eficiência", value: "90%" },
      { key: "Classe Energética", value: "A++" },
      { key: "Combustível", value: "Pellets" },
      { key: "Controlo", value: "Telecomando + Programador" },
    ],
    tags: [
      "recuperador pellets quadrado",
      "chamilar zefiro",
      "recuperador pellets moderno",
      "recuperador a++ pellets",
    ],
  },

  {
    id: "ch-kami",
    slug: "chamilar-kami",
    name: "Chamilar Kami",
    brand: "Chamilar",
    category: "salamandras-a-pellets",
    categoryName: "Salamandras a Pellets",
    price: 1290,
    sku: "CH-KAMI",
    power: "8 kW",
    efficiency: "92%",
    fuel: "Pellets",
    energyLabel: "A+",
    description:
      "A Chamilar Kami é uma salamandra a pellets de 8 kW pensada para quem quer aquecimento automático numa solução de porte contido. A sua eficiência de 92% garante que cada quilo de pellets é aproveitado ao máximo, reduzindo os custos de operação ao mínimo. Basta programar a temperatura desejada e o horário de funcionamento — a Kami trata do resto.",
    shortDescription:
      "Salamandra a pellets de 8 kW com 92% de eficiência — aquecimento automático de alto rendimento.",
    features: [
      "8 kW de potência automática a pellets",
      "Eficiência de 92% — Classe A+",
      "Programação horária e de temperatura",
      "Auto-ignição e autogestão da combustão",
      "Controlo remoto incluído",
      "Design compacto e elegante",
      "Baixo custo de operação com pellets",
    ],
    specs: [
      { key: "Potência Nominal", value: "8 kW" },
      { key: "Eficiência", value: "92%" },
      { key: "Classe Energética", value: "A+" },
      { key: "Combustível", value: "Pellets" },
    ],
    tags: [
      "salamandra pellets 8kw",
      "chamilar kami",
      "salamandra automática pellets",
      "aquecimento pellets eficiente",
    ],
  },
];

// Helper: find product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Helper: get products by category
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

// Helper: get featured products
export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
