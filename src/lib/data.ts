export const WHATSAPP_NUMBER = "5519999999999" // Substitua pelo número real
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export const whatsappLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

export const COMPANY = {
  name: "Amana Interiores",
  tagline: "Sob Medida, Designer, Planejados",
  story: "Há 30 anos somos uma família realizando sonhos de outras famílias.",
  address: "Rua Capitão Ulisses Masotti, 554 - Centro, Jaguariúna 13910-041",
  instagram: "https://instagram.com/amanasobmedida",
  instagramHandle: "@amanasobmedida",
  mapsLink: "https://bit.ly/amanainterioresjaguariuna",
}

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  description: string
  image: string
  images?: string[]
  featured?: boolean
  details?: string[]
}

export const CATEGORIES = [
  { id: "cadeiras", name: "Cadeiras", slug: "cadeiras", image: "/images/cadeira-1.jpg", description: "Elegância e conforto em cada assento" },
  { id: "mesas", name: "Mesas", slug: "mesas", image: "/images/mesa.jpg", description: "Peças centrais que reúnem famílias" },
  { id: "sofas", name: "Sofás & Poltronas", slug: "sofas", image: "/images/sofas.jpg", description: "Conforto premium para sua sala" },
  { id: "armazenamento", name: "Armários & Buffets", slug: "armazenamento", image: "/images/buffet.jpg", description: "Organização com alto design" },
]

export const PRODUCTS: Product[] = [
  {
    id: "cadeira-classica",
    name: "Cadeira Clássica",
    category: "Cadeiras",
    categorySlug: "cadeiras",
    description: "Design atemporal com madeira nobre e estofamento em tecido de alta qualidade. Perfeita para salas de jantar sofisticadas.",
    image: "/images/cadeira-1.jpg",
    images: ["/images/cadeira-1.jpg", "/images/cadeira-2.jpg"],
    featured: true,
    details: ["Madeira maciça", "Estofamento premium", "Sob medida disponível", "Entrega em todo Brasil"],
  },
  {
    id: "cadeira-moderna",
    name: "Cadeira Contemporânea",
    category: "Cadeiras",
    categorySlug: "cadeiras",
    description: "Linhas modernas e estrutura robusta. Uma declaração de estilo para ambientes contemporâneos.",
    image: "/images/cadeira-2.jpg",
    images: ["/images/cadeira-2.jpg", "/images/cadeira-3.jpg"],
    featured: true,
    details: ["Design exclusivo", "Alta durabilidade", "Certificação de qualidade", "Personalização de cores"],
  },
  {
    id: "cadeira-elegante",
    name: "Cadeira Elegante",
    category: "Cadeiras",
    categorySlug: "cadeiras",
    description: "Sofisticação e conforto em harmonia perfeita. Ideal para salas de jantar e espaços gourmet.",
    image: "/images/cadeira-3.jpg",
    images: ["/images/cadeira-3.jpg", "/images/cadeira-4.jpg"],
    details: ["Estrutura em metal", "Couro natural", "Design italiano", "Garantia 2 anos"],
  },
  {
    id: "cadeira-premium",
    name: "Cadeira Premium",
    category: "Cadeiras",
    categorySlug: "cadeiras",
    description: "O máximo em conforto e exclusividade. Feita artesanalmente para quem exige o melhor.",
    image: "/images/cadeira-4.jpg",
    images: ["/images/cadeira-4.jpg", "/images/cadeira-5.jpg"],
    details: ["Produção artesanal", "Tecido importado", "Estrutura reforçada", "Personalização total"],
  },
  {
    id: "cadeira-luxo",
    name: "Cadeira Luxo",
    category: "Cadeiras",
    categorySlug: "cadeiras",
    description: "Exclusividade em cada detalhe. Uma peça que transforma qualquer ambiente.",
    image: "/images/cadeira-5.jpg",
    images: ["/images/cadeira-5.jpg", "/images/cadeira-1.jpg"],
    details: ["Edição limitada", "Acabamento premium", "Design exclusivo", "Certificado de autenticidade"],
  },
  {
    id: "mesa-jantar",
    name: "Mesa de Jantar",
    category: "Mesas",
    categorySlug: "mesas",
    description: "O centro de reunião da sua família. Mesa de madeira nobre com acabamento impecável e design atemporal.",
    image: "/images/mesa.jpg",
    images: ["/images/mesa.jpg", "/images/ambiente-1.jpg"],
    featured: true,
    details: ["Madeira maciça certificada", "Acabamento verniz", "6 a 12 lugares disponível", "Pés ajustáveis"],
  },
  {
    id: "sofa-sala",
    name: "Sofá de Sala",
    category: "Sofás & Poltronas",
    categorySlug: "sofas",
    description: "Conforto e beleza para a sua sala. Tecido premium com estrutura robusta para anos de uso.",
    image: "/images/sofas.jpg",
    images: ["/images/sofas.jpg", "/images/poltrona.jpg"],
    featured: true,
    details: ["Tecido anti-manchas", "Espuma D33", "Estrutura em madeira", "Diversas configurações"],
  },
  {
    id: "poltrona-design",
    name: "Poltrona Design",
    category: "Sofás & Poltronas",
    categorySlug: "sofas",
    description: "Uma poltrona que é obra de arte. Combina ergonomia, elegância e materiais nobres.",
    image: "/images/poltrona.jpg",
    images: ["/images/poltrona.jpg", "/images/sofas.jpg"],
    details: ["Design premiado", "Couro natural", "Estrutura em carvalho", "Rotatória 360°"],
  },
  {
    id: "buffet-classico",
    name: "Buffet Clássico",
    category: "Armários & Buffets",
    categorySlug: "armazenamento",
    description: "Armazenamento com elegância. Buffet em madeira nobre com detalhes dourados e amplo espaço interno.",
    image: "/images/buffet.jpg",
    images: ["/images/buffet.jpg", "/images/produto-6.jpg"],
    details: ["Madeira carvalho", "Puxadores dourados", "3 portas / 6 gavetas", "Interior forrado"],
  },
  {
    id: "ambiente-completo",
    name: "Ambiente Completo",
    category: "Armários & Buffets",
    categorySlug: "armazenamento",
    description: "Solução completa para o seu espaço. Móveis planejados e integrados com design unificado.",
    image: "/images/ambiente-1.jpg",
    images: ["/images/ambiente-1.jpg", "/images/produto-6.jpg"],
    featured: true,
    details: ["Projeto personalizado", "Medição gratuita", "Instalação inclusa", "Garantia 5 anos"],
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured)
