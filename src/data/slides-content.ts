// Tipos para definição dos slides
export type SlideType = 
  | "cover" 
  | "two-columns" 
  | "three-cards" 
  | "list-with-highlight" 
  | "grid-cards"
  | "team"
  | "conclusion"
  | "image-text"

export interface SlideContent {
  id: string
  type: SlideType
  transition: TransitionType
  background: {
    gradient: string
  }
  badge?: {
    text: string
    colors: string
  }
  title: string
  subtitle?: string
  icon?: string
  image?: string
  imageCaption?: string
  content?: ContentBlock[]
  cards?: CardData[]
  listItems?: ListItem[]
  highlight?: HighlightBlock
  teamMembers?: TeamMember[]
  footer?: FooterData
}

export type TransitionType = 
  | "zoom-rotate"
  | "slide-blur"
  | "flip-3d"
  | "curtain"
  | "explosion"
  | "diagonal"
  | "portal"
  | "flip-x"
  | "morph"
  | "spiral"

export interface ContentBlock {
  type: "text" | "list" | "quote"
  title?: string
  titleColor?: string
  text?: string
  items?: string[]
  emphasis?: string[]
}

export interface CardData {
  emoji?: string
  icon?: string
  title: string
  titleColor?: string
  description: string
  badge?: { text: string; color: string }
  progress?: { label: string; value: number }
}

export interface ListItem {
  emoji: string
  title: string
  description: string
}

export interface HighlightBlock {
  emoji?: string
  text: string
  emphasis?: string
}

export interface TeamMember {
  name: string
  role: string
  emoji: string
  image?: string
}

export interface FooterData {
  lines: string[]
  highlight?: string
}

// ============================================
// DEFINIÇÃO DOS SLIDES
// ============================================

export const slidesContent: SlideContent[] = [
  // SLIDE 1: CAPA
  {
    id: "capa",
    type: "cover",
    transition: "zoom-rotate",
    background: {
      gradient: "from-[#001020] via-[#001F3F] to-[#00301a]"
    },
    badge: {
      text: "ODS 7 • Agenda 2030",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Energia Acessível e Limpa",
    subtitle: "Garantir acesso a energia barata, confiável, sustentável e renovável para todos",
    icon: "7",
    footer: {
      lines: [
        "Disciplina: ICT – Introdução à Ciência e Tecnologia",
        "Universidade Federal do Rio Grande do Norte (UFRN)"
      ],
      highlight: "Bacharelado Interdisciplinar em Ciência e Tecnologia (BCT) • Escola de Ciências e Tecnologia (ECT)"
    }
  },

  // SLIDE 2: O QUE SÃO AS ODS
  {
    id: "ods",
    type: "two-columns",
    transition: "slide-blur",
    background: {
      gradient: "from-[#000a1a] via-[#001030] to-[#000a1a]"
    },
    badge: {
      text: "Organização das Nações Unidas",
      colors: "bg-[#1E488F] text-white"
    },
    title: "O que são as ODS?",
    icon: "globe",
    cards: [
      {
        title: "Agenda 2030",
        titleColor: "text-[#DBE64C]",
        description: "As ODS (Objetivos de Desenvolvimento Sustentável) fazem parte da Agenda 2030 da ONU, um plano global criado para promover o desenvolvimento sustentável em áreas sociais, ambientais e econômicas."
      },
      {
        title: "17 Objetivos",
        titleColor: "text-[#DBE64C]",
        description: "Ao todo, existem 17 ODS, cada uma com metas específicas que orientam governos, organizações e cidadãos a enfrentar desafios como pobreza, desigualdade, degradação ambiental e energia limpa."
      }
    ],
    highlight: {
      emoji: "💡",
      text: "As ODS buscam garantir condições dignas de vida para todas as pessoas, sem comprometer os recursos das futuras gerações.",
      emphasis: "condições dignas de vida para todas as pessoas"
    }
  },

  // SLIDE 3: ODS 7 - PILARES
  {
    id: "ods7",
    type: "three-cards",
    transition: "flip-3d",
    background: {
      gradient: "from-[#001a0d] via-[#002a15] to-[#000a1a]"
    },
    badge: {
      text: "ODS 7",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Energia Acessível e Limpa",
    subtitle: "Os três pilares fundamentais",
    cards: [
      {
        icon: "zap",
        title: "Acesso Universal",
        titleColor: "text-[#DBE64C]",
        description: "Assegurar que todos tenham acesso a fontes de energia estáveis, seguras e acessíveis, especialmente em regiões vulneráveis."
      },
      {
        icon: "leaf",
        title: "Energia Renovável",
        titleColor: "text-[#74C365]",
        description: "Ampliar fontes como solar, eólica, hídrica e biomassa na matriz energética global."
      },
      {
        icon: "target",
        title: "Eficiência Energética",
        titleColor: "text-[#74C365]",
        description: "Reduzir o consumo de energia sem comprometer o desempenho, diminuindo custos e impactos ambientais."
      }
    ]
  },

  // SLIDE 4: METAS DA ODS 7
  {
    id: "metas",
    type: "grid-cards",
    transition: "curtain",
    background: {
      gradient: "from-[#000a1a] via-[#001030] to-[#000a1a]"
    },
    badge: {
      text: "Metas até 2030",
      colors: "bg-[#74C365] text-[#001F3F]"
    },
    title: "Metas da ODS 7",
    cards: [
      {
        badge: { text: "Meta 7.1", color: "bg-[#DBE64C] text-[#001F3F]" },
        title: "Acesso Universal à Energia",
        titleColor: "text-[#DBE64C]",
        description: "Assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia."
      },
      {
        badge: { text: "Meta 7.2", color: "bg-[#74C365] text-[#001F3F]" },
        title: "Energias Renováveis",
        titleColor: "text-[#74C365]",
        description: "Aumentar substancialmente a participação de energias renováveis na matriz energética global."
      },
      {
        badge: { text: "Meta 7.3", color: "bg-[#00804C] text-white" },
        title: "Eficiência Energética",
        titleColor: "text-[#74C365]",
        description: "Dobrar a taxa global de melhoria da eficiência energética."
      },
      {
        badge: { text: "Meta 7.a", color: "bg-[#1E488F] text-white" },
        title: "Cooperação Internacional",
        titleColor: "text-[#DBE64C]",
        description: "Facilitar o acesso a pesquisa e tecnologias de energia limpa, promovendo investimentos em infraestrutura."
      }
    ],
    highlight: {
      text: "Expandir a infraestrutura e modernizar a tecnologia para o fornecimento de serviços de energia modernos e sustentáveis para todos nos países em desenvolvimento.",
      emphasis: "Meta 7.b - Infraestrutura e Tecnologia"
    }
  },

  // SLIDE 5: ENERGIA EÓLICA
  {
    id: "eolica",
    type: "two-columns",
    transition: "explosion",
    background: {
      gradient: "from-[#000a1a] via-[#001020] to-[#001a0d]"
    },
    badge: {
      text: "Energia Renovável",
      colors: "bg-[#74C365] text-[#001F3F]"
    },
    title: "Energia Eólica",
    icon: "wind",
    cards: [
      {
        title: "O que é?",
        titleColor: "text-[#74C365]",
        description: "A energia eólica é obtida pela conversão da energia cinética do vento em energia elétrica por meio de aerogeradores (turbinas eólicas)."
      },
      {
        title: "Como funciona?",
        titleColor: "text-[#74C365]",
        description: "1. O vento gira as pás do aerogerador\n2. O movimento aciona um gerador elétrico\n3. A energia é transmitida para a rede elétrica"
      }
    ],
    listItems: [
      { emoji: "✅", title: "Vantagens", description: "Fonte inesgotável e renovável • Não emite gases poluentes • Baixo custo de operação • Pode coexistir com atividades agrícolas" },
      { emoji: "🌍", title: "Brasil", description: "O Brasil possui grande potencial eólico, especialmente na região Nordeste, onde os ventos são constantes e intensos ao longo do ano." }
    ]
  },

  // SLIDE 6: AEROGERADORES
  {
    id: "aerogerador",
    type: "three-cards",
    transition: "diagonal",
    background: {
      gradient: "from-[#001a0d] via-[#000a1a] to-[#001020]"
    },
    badge: {
      text: "Nosso Projeto",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Aerogeradores",
    subtitle: "A tecnologia por trás da energia eólica",
    cards: [
      {
        emoji: "🔄",
        title: "Rotor",
        titleColor: "text-[#74C365]",
        description: "Composto pelas pás que captam a energia do vento e transferem para o eixo."
      },
      {
        emoji: "⚙️",
        title: "Nacele",
        titleColor: "text-[#74C365]",
        description: "Abriga o gerador, multiplicador de velocidade e sistemas de controle."
      },
      {
        emoji: "🗼",
        title: "Torre",
        titleColor: "text-[#74C365]",
        description: "Estrutura que eleva o rotor para captar ventos mais fortes e constantes."
      }
    ],
    highlight: {
      emoji: "🎯",
      text: "Nosso grupo desenvolveu uma maquete funcional de um aerogerador para demonstrar o funcionamento desta tecnologia limpa e sustentável, destacando a importância das energias renováveis para o desenvolvimento sustentável.",
      emphasis: "maquete funcional de um aerogerador"
    }
  },

  // SLIDE 7: IMPORTÂNCIA
  {
    id: "importancia",
    type: "grid-cards",
    transition: "portal",
    background: {
      gradient: "from-[#000a1a] via-[#001020] to-[#001a0d]"
    },
    badge: {
      text: "Reflexão",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Por que a ODS 7 é importante?",
    cards: [
      {
        emoji: "💡",
        title: "Desenvolvimento",
        titleColor: "text-[#74C365]",
        description: "A energia está ligada ao desenvolvimento econômico, saúde, educação e qualidade de vida."
      },
      {
        emoji: "🌡️",
        title: "Clima",
        titleColor: "text-[#74C365]",
        description: "A expansão de energia renovável contribui para reduzir emissões de gases de efeito estufa e combater as mudanças climáticas."
      },
      {
        emoji: "🌍",
        title: "Inclusão Social",
        titleColor: "text-[#74C365]",
        description: "A falta de acesso à energia ainda afeta milhões de pessoas no mundo, limitando seu desenvolvimento social e econômico."
      },
      {
        emoji: "🔮",
        title: "Futuro",
        titleColor: "text-[#74C365]",
        description: "Incentiva a transição global para energias limpas, garantindo que ninguém fique sem acesso aos benefícios que a energia moderna proporciona."
      }
    ],
    highlight: {
      text: "A energia é a base de toda atividade humana e econômica"
    }
  },

  // SLIDE 8: PAPEL DAS ENGENHARIAS
  {
    id: "engenharias",
    type: "grid-cards",
    transition: "flip-x",
    background: {
      gradient: "from-[#001020] via-[#001a0d] to-[#000a1a]"
    },
    badge: {
      text: "Papel das Engenharias",
      colors: "bg-[#74C365] text-[#001F3F]"
    },
    title: "Como as Engenharias contribuem?",
    cards: [
      {
        emoji: "⚡",
        title: "Engenharia Elétrica",
        titleColor: "text-[#DBE64C]",
        description: "Projeta usinas solares, eólicas e hidrelétricas. Moderniza redes de transmissão e distribuição de energia."
      },
      {
        emoji: "⚙️",
        title: "Engenharia Mecânica",
        titleColor: "text-[#74C365]",
        description: "Desenvolve turbinas e aerogeradores mais eficientes, reduzindo desperdícios e aumentando o aproveitamento."
      },
      {
        emoji: "🔋",
        title: "Engenharia de Energia",
        titleColor: "text-[#74C365]",
        description: "Planeja a expansão de fontes limpas, analisa viabilidade e cria estratégias para tecnologias sustentáveis."
      },
      {
        emoji: "🏗️",
        title: "Engenharia Civil",
        titleColor: "text-[#DBE64C]",
        description: "Constrói torres eólicas, fundações de painéis solares e estruturas de usinas de energia renovável."
      },
      {
        emoji: "💻",
        title: "Eng. Computação/Software",
        titleColor: "text-[#74C365]",
        description: "Cria smart grids e sistemas de automação que tornam o fornecimento mais seguro e eficiente."
      },
      {
        emoji: "🌿",
        title: "Engenharia Ambiental",
        titleColor: "text-[#74C365]",
        description: "Avalia impactos ambientais e propõe soluções sustentáveis para o crescimento energético."
      }
    ],
    highlight: {
      text: "No Brasil: parques eólicos no Nordeste, usinas solares em MG e PB, projetos de biogás e microgeração solar em residências."
    }
  },

  // SLIDE 9: MATRIZ ENERGÉTICA MUNDIAL
  {
    id: "matriz-energetica-mundial",
    type: "image-text",
    transition: "curtain",
    background: {
      gradient: "from-[#000a1a] via-[#001030] to-[#001a0d]"
    },
    badge: {
      text: "Matriz Energética",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Matriz Energética Mundial 2022",
    image: "/images/Captura de imagem_20251127_210819.png",
    imageCaption: "IEA, 2023 • Total: 622 milhões de TJ",
    cards: [
      {
        emoji: "🛢️",
        title: "Petróleo e derivados",
        titleColor: "text-[#DBE64C]",
        description: "30,2% - Principal fonte mundial"
      },
      {
        emoji: "⛏️",
        title: "Carvão Mineral",
        titleColor: "text-[#74C365]",
        description: "27,6% - Segunda maior fonte"
      },
      {
        emoji: "🔥",
        title: "Gás Natural",
        titleColor: "text-[#74C365]",
        description: "23,1% - Terceira maior fonte"
      }
    ],
    highlight: {
      emoji: "⚠️",
      text: "Apenas 14% da matriz mundial é renovável! Combustíveis fósseis dominam com mais de 80%.",
      emphasis: "80%"
    }
  },

  // SLIDE 10: MATRIZ ENERGÉTICA BRASILEIRA
  {
    id: "matriz-energetica-brasil",
    type: "image-text",
    transition: "diagonal",
    background: {
      gradient: "from-[#001a0d] via-[#002515] to-[#001020]"
    },
    badge: {
      text: "🇧🇷 Brasil",
      colors: "bg-[#74C365] text-[#001F3F]"
    },
    title: "Matriz Energética Brasileira 2024",
    image: "/images/Captura de imagem_20251127_212233.png",
    imageCaption: "BEN, 2025 • Total: 322 milhões de tep",
    cards: [
      {
        emoji: "🛢️",
        title: "Petróleo e derivados",
        titleColor: "text-[#DBE64C]",
        description: "34,0% - Principal fonte"
      },
      {
        emoji: "🌾",
        title: "Derivados da cana",
        titleColor: "text-[#74C365]",
        description: "16,7% - Etanol e biomassa"
      },
      {
        emoji: "💧",
        title: "Hidráulica",
        titleColor: "text-[#74C365]",
        description: "11,6% - Energia limpa"
      }
    ],
    highlight: {
      emoji: "✅",
      text: "Brasil tem 47,4% de fontes renováveis vs apenas 14,3% do mundo!",
      emphasis: "47,4% de fontes renováveis"
    }
  },

  // SLIDE 11: COMPARAÇÃO MATRIZ ENERGÉTICA
  {
    id: "comparacao-energetica",
    type: "image-text",
    transition: "flip-3d",
    background: {
      gradient: "from-[#000a1a] via-[#001020] to-[#001a0d]"
    },
    badge: {
      text: "Comparação 2022",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Matriz Energética: Brasil vs Mundo",
    image: "/images/Captura de imagem_20251127_211847.png",
    imageCaption: "Comparação de fontes renováveis e não renováveis",
    cards: [
      {
        emoji: "🇧🇷",
        title: "Brasil 2022",
        titleColor: "text-[#74C365]",
        description: "47,4% Renováveis • 52,7% Não Renováveis"
      },
      {
        emoji: "🌍",
        title: "Mundo 2022",
        titleColor: "text-[#DBE64C]",
        description: "14,3% Renováveis • 85,7% Não Renováveis"
      }
    ],
    highlight: {
      emoji: "🏆",
      text: "O Brasil é 3x mais renovável que a média mundial na matriz energética!",
      emphasis: "3x mais renovável"
    }
  },

  // SLIDE 12: MATRIZ ELÉTRICA MUNDIAL
  {
    id: "matriz-eletrica-mundial",
    type: "image-text",
    transition: "portal",
    background: {
      gradient: "from-[#001020] via-[#001a30] to-[#000a1a]"
    },
    badge: {
      text: "Matriz Elétrica",
      colors: "bg-[#1E488F] text-white"
    },
    title: "Matriz Elétrica Mundial 2022",
    image: "/images/Captura de imagem_20251127_212337.png",
    imageCaption: "IEA, 2023 • Total: 29,3 milhões de GWh",
    cards: [
      {
        emoji: "⛏️",
        title: "Carvão Mineral",
        titleColor: "text-[#DBE64C]",
        description: "35,8% - Maior fonte elétrica mundial"
      },
      {
        emoji: "🔥",
        title: "Gás Natural",
        titleColor: "text-[#74C365]",
        description: "22,3% - Segunda maior fonte"
      },
      {
        emoji: "💧",
        title: "Hidráulica",
        titleColor: "text-[#74C365]",
        description: "15,3% - Principal renovável"
      }
    ],
    highlight: {
      emoji: "⚠️",
      text: "Carvão + Gás = 58% da eletricidade mundial vem de combustíveis fósseis!",
      emphasis: "58% da eletricidade mundial"
    }
  },

  // SLIDE 13: MATRIZ ELÉTRICA BRASILEIRA
  {
    id: "matriz-eletrica-brasil",
    type: "image-text",
    transition: "explosion",
    background: {
      gradient: "from-[#001a0d] via-[#000a1a] to-[#001020]"
    },
    badge: {
      text: "🇧🇷 Brasil",
      colors: "bg-[#74C365] text-[#001F3F]"
    },
    title: "Matriz Elétrica Brasileira 2024",
    image: "/images/Captura de imagem_20251127_212346.png",
    imageCaption: "BEN, 2025 • Total: 751,3 TWh",
    cards: [
      {
        emoji: "💧",
        title: "Hidráulica",
        titleColor: "text-[#74C365]",
        description: "55,3% - Mais da metade!"
      },
      {
        emoji: "💨",
        title: "Eólica",
        titleColor: "text-[#74C365]",
        description: "14,1% - Em forte crescimento"
      },
      {
        emoji: "☀️",
        title: "Solar",
        titleColor: "text-[#DBE64C]",
        description: "9,3% - Expansão acelerada"
      }
    ],
    highlight: {
      emoji: "🌱",
      text: "A matriz elétrica brasileira é 86,1% renovável! Líder mundial em energia limpa.",
      emphasis: "86,1% renovável"
    }
  },

  // SLIDE 14: COMPARAÇÃO MATRIZ ELÉTRICA
  {
    id: "comparacao-eletrica",
    type: "image-text",
    transition: "slide-blur",
    background: {
      gradient: "from-[#000a1a] via-[#001030] to-[#001a0d]"
    },
    badge: {
      text: "Comparação 2022",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Matriz Elétrica: Brasil vs Mundo",
    image: "/images/Captura de imagem_20251127_212318.png",
    imageCaption: "Comparação de fontes renováveis e não renováveis",
    cards: [
      {
        emoji: "🇧🇷",
        title: "Brasil 2022",
        titleColor: "text-[#74C365]",
        description: "86,1% Renováveis • 13,9% Não Renováveis"
      },
      {
        emoji: "🌍",
        title: "Mundo 2022",
        titleColor: "text-[#DBE64C]",
        description: "29,5% Renováveis • 70,5% Não Renováveis"
      }
    ],
    highlight: {
      emoji: "🏆",
      text: "Brasil tem quase 3x mais eletricidade renovável que o mundo! 86% vs 30%",
      emphasis: "3x mais eletricidade renovável"
    }
  },

  // SLIDE 15: AÇÕES DA ONU NO BRASIL
  {
    id: "acoes-onu",
    type: "grid-cards",
    transition: "portal",
    background: {
      gradient: "from-[#000a1a] via-[#001020] to-[#001a0d]"
    },
    badge: {
      text: "ONU no Brasil",
      colors: "bg-[#1E488F] text-white"
    },
    title: "Ações das Nações Unidas no Brasil",
    subtitle: "6 iniciativas em implementação para a ODS 7",
    cards: [
      {
        emoji: "🏭",
        title: "IDDI - Descarbonização Industrial",
        titleColor: "text-[#DBE64C]",
        description: "Coligação para descarbonizar indústrias pesadas: aço, cimento e concreto com baixo carbono."
      },
      {
        emoji: "📊",
        title: "ICAT - Transparência Climática",
        titleColor: "text-[#74C365]",
        description: "Elaboração de planos setoriais de mitigação e sistema de Monitoramento, Relato e Verificação."
      },
      {
        emoji: "❄️",
        title: "Redução de HFC - Kigali",
        titleColor: "text-[#74C365]",
        description: "Plano para reduzir consumo de HFC em 10% até 2029, cumprindo a Emenda de Kigali."
      },
      {
        emoji: "🚀",
        title: "A2D - Acelerar para Demonstrar",
        titleColor: "text-[#DBE64C]",
        description: "Comercialização de tecnologias de energia limpa: minerais críticos, hidrogênio limpo e descarbonização."
      },
      {
        emoji: "🎯",
        title: "Parceria Net Zero 2050",
        titleColor: "text-[#74C365]",
        description: "Visão de longo prazo para descarbonização industrial, facilitando parcerias público-privadas."
      },
      {
        emoji: "🌾",
        title: "Biogás para Agroindústria",
        titleColor: "text-[#74C365]",
        description: "Promoção da mobilidade baseada em biogás e soluções energéticas para cadeias agroindustriais."
      }
    ]
  },

  // SLIDE 12: BRASIL E A ODS 7
  {
    id: "brasil",
    type: "list-with-highlight",
    transition: "explosion",
    background: {
      gradient: "from-[#001a0d] via-[#002010] to-[#000a1a]"
    },
    badge: {
      text: "🇧🇷 Brasil",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "O Brasil e a ODS 7",
    subtitle: "Metas adaptadas à realidade nacional",
    cards: [
      {
        badge: { text: "7.2 Brasil", color: "bg-[#74C365] text-[#001F3F]" },
        title: "Manter elevada",
        description: "a participação de energias renováveis na matriz energética nacional.",
        progress: { label: "Matriz Renovável", value: 83 }
      },
      {
        badge: { text: "7.3 Brasil", color: "bg-[#00804C] text-white" },
        title: "Aumentar a taxa",
        description: "de melhoria da eficiência energética da economia brasileira."
      },
      {
        badge: { text: "7.b Brasil", color: "bg-[#1E488F] text-white" },
        title: "Expandir a infraestrutura",
        description: "e aprimorar a tecnologia para serviços de energia sustentáveis."
      }
    ],
    listItems: [
      { emoji: "💧", title: "Hidrelétrica", description: "Principal fonte renovável" },
      { emoji: "💨", title: "Eólica", description: "Crescimento acelerado" },
      { emoji: "☀️", title: "Solar", description: "Grande potencial" }
    ]
  },

  // SLIDE 9: EQUIPE
  {
    id: "equipe",
    type: "team",
    transition: "morph",
    background: {
      gradient: "from-[#000a1a] via-[#001020] to-[#001a0d]"
    },
    badge: {
      text: "ICT - UFRN",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Nossa Equipe",
    icon: "users",
    teamMembers: [
      { name: "Davi dos Santos Passos", role: "Desenvolvedor do Site e Pesquisa", emoji: "👨‍💻", image: "/componentes do Grupo/davi.jpeg" },
      { name: "José Pedro Barros dos Santos", role: "Banner e Pesquisa", emoji: "🎨", image: "/componentes do Grupo/jose.jpeg" },
      { name: "Luiz Guilherme Marinho Da Cunha", role: "Maquete", emoji: "🔧", image: "/componentes do Grupo/luiz.png" },
      { name: "Igor Daniel Meneses Fonseca", role: "Banner e Maquete", emoji: "🛠️", image: "/componentes do Grupo/igor.png" },
      { name: "Senildo Edson da Silva Junior", role: "Maquete", emoji: "⚡", image: "/componentes do Grupo/senildo.png" },
      { name: "Novo Participante", role: "Participante", emoji: "👋", image: "/componentes do Grupo/novo_participante.jpeg" }
    ],
    footer: {
      lines: ["ICT – Introdução à Ciência e Tecnologia"],
      highlight: "BCT • Escola de Ciências e Tecnologia (ECT) • UFRN"
    }
  },

  // SLIDE 10: CONCLUSÃO
  {
    id: "conclusao",
    type: "conclusion",
    transition: "spiral",
    background: {
      gradient: "from-[#001a0d] via-[#000a1a] to-[#001020]"
    },
    badge: {
      text: "Conclusão",
      colors: "bg-[#DBE64C] text-[#001F3F]"
    },
    title: "Um Futuro Mais Sustentável",
    content: [
      {
        type: "text",
        text: "A ODS 7 é essencial para preparar um futuro mais sustentável, eficiente e acessível energeticamente."
      },
      {
        type: "text",
        text: "Ela incentiva a transição global para energias limpas, ao mesmo tempo em que busca garantir que ninguém fique sem acesso aos benefícios que a energia moderna proporciona."
      }
    ],
    highlight: {
      emoji: "🌱",
      text: "A energia renovável é o caminho para um mundo melhor!"
    },
    listItems: [
      { emoji: "☀️", title: "Solar", description: "" },
      { emoji: "💨", title: "Eólica", description: "" },
      { emoji: "💧", title: "Hidrelétrica", description: "" },
      { emoji: "🌿", title: "Biomassa", description: "" }
    ],
    footer: {
      lines: ["Obrigado pela atenção!", "ICT • UFRN • 2025"]
    }
  }
]
