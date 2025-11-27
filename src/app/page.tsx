"use client";

import { useState } from "react";
import {
  Sun,
  Wind,
  Droplets,
  Zap,
  Leaf,
  BarChart3,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface EnergySource {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  advantages: string[];
  disadvantages: string[];
  efficiency: number;
  brazilPercentage: number;
  color: string;
}

const energySources: EnergySource[] = [
  {
    id: "solar",
    name: "Energia Solar",
    icon: Sun,
    description:
      "A energia solar é obtida pela luz do sol e pode ser captada com painéis solares fotovoltaicos ou coletores solares térmicos.",
    advantages: [
      "Fonte renovável e abundante",
      "Baixo custo de manutenção",
      "Não emite poluentes",
      "Pode ser instalada em residências",
    ],
    disadvantages: [
      "Depende das condições climáticas",
      "Alto custo inicial",
      "Necessita de área para instalação",
      "Produção intermitente",
    ],
    efficiency: 22,
    brazilPercentage: 4.5,
    color: "bg-yellow-500",
  },
  {
    id: "wind",
    name: "Energia Eólica",
    icon: Wind,
    description:
      "A energia eólica é gerada através da força dos ventos que movimentam as pás de grandes turbinas, convertendo energia cinética em elétrica.",
    advantages: [
      "Fonte limpa e renovável",
      "Baixo impacto ambiental",
      "Tecnologia madura",
      "Custo competitivo",
    ],
    disadvantages: [
      "Dependente da velocidade do vento",
      "Impacto visual e sonoro",
      "Pode afetar aves migratórias",
      "Variabilidade na geração",
    ],
    efficiency: 35,
    brazilPercentage: 12.8,
    color: "bg-blue-500",
  },
  {
    id: "hydro",
    name: "Energia Hidrelétrica",
    icon: Droplets,
    description:
      "A energia hidrelétrica é gerada pelo aproveitamento do fluxo das águas dos rios através de barragens e turbinas.",
    advantages: [
      "Alta eficiência",
      "Fonte renovável",
      "Baixo custo operacional",
      "Controle de cheias",
    ],
    disadvantages: [
      "Grande impacto ambiental",
      "Alagamento de áreas",
      "Dependente do regime de chuvas",
      "Alto investimento inicial",
    ],
    efficiency: 90,
    brazilPercentage: 54.2,
    color: "bg-cyan-500",
  },
  {
    id: "biomass",
    name: "Biomassa",
    icon: Leaf,
    description:
      "A energia de biomassa é obtida a partir da queima de materiais orgânicos como bagaço de cana, madeira e resíduos agrícolas.",
    advantages: [
      "Reaproveitamento de resíduos",
      "Reduz emissões de metano",
      "Geração constante",
      "Desenvolvimento rural",
    ],
    disadvantages: [
      "Emite CO2 na queima",
      "Competição com agricultura",
      "Logística complexa",
      "Necessita de processamento",
    ],
    efficiency: 25,
    brazilPercentage: 8.7,
    color: "bg-green-600",
  },
];

interface Concept {
  title: string;
  description: string;
}

const engineeringConcepts: Concept[] = [
  {
    title: "Eficiência Energética",
    description:
      "Relação entre a energia útil obtida e a energia total consumida. Maximizar essa relação é um dos principais objetivos da engenharia de energia.",
  },
  {
    title: "Matriz Energética",
    description:
      "Conjunto de fontes de energia disponíveis em um país ou região. O Brasil possui uma das matrizes mais limpas do mundo, com predominância de fontes renováveis.",
  },
  {
    title: "Smart Grid",
    description:
      "Redes elétricas inteligentes que utilizam tecnologia digital para monitorar e gerenciar o transporte de eletricidade de forma mais eficiente.",
  },
  {
    title: "Armazenamento de Energia",
    description:
      "Tecnologias como baterias e hidrogênio que permitem guardar energia para uso posterior, essencial para fontes intermitentes como solar e eólica.",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que faz um engenheiro de energia?",
    answer:
      "O engenheiro de energia trabalha no planejamento, desenvolvimento e operação de sistemas de geração, transmissão e distribuição de energia, buscando soluções sustentáveis e eficientes.",
  },
  {
    question: "Qual a importância das energias renováveis?",
    answer:
      "As energias renováveis são fundamentais para reduzir as emissões de gases de efeito estufa, combater as mudanças climáticas e garantir segurança energética de longo prazo.",
  },
  {
    question: "Por que o Brasil tem uma matriz energética tão limpa?",
    answer:
      "O Brasil possui condições geográficas favoráveis: grande quantidade de rios para hidrelétricas, alta incidência solar, ventos constantes no Nordeste e vasta produção agrícola para biomassa.",
  },
  {
    question: "O que é transição energética?",
    answer:
      "É o processo de mudança do sistema energético baseado em combustíveis fósseis para um sistema baseado em fontes renováveis e sustentáveis, visando a descarbonização da economia.",
  },
];

export default function Home() {
  const [selectedSource, setSelectedSource] = useState<EnergySource>(
    energySources[0]
  );
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Engenharia de Energia</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#fontes"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Fontes de Energia
            </a>
            <a
              href="#conceitos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Conceitos
            </a>
            <a
              href="#estatisticas"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Estatísticas
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Projeto ICT
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Descubra o Mundo da
              <span className="text-primary block">Engenharia de Energia</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore as diferentes fontes de energia, entenda conceitos
              fundamentais e descubra como a engenharia está transformando o
              futuro energético do Brasil e do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#fontes">
                  Explorar Fontes <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#conceitos">Aprender Conceitos</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Energy Sources Section */}
        <section id="fontes" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fontes de Energia</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clique em cada fonte para aprender mais sobre suas
                características, vantagens e desvantagens.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {energySources.map((source) => {
                const Icon = source.icon;
                return (
                  <button
                    key={source.id}
                    onClick={() => setSelectedSource(source)}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      selectedSource.id === source.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon
                      className={`h-10 w-10 mx-auto mb-3 ${
                        selectedSource.id === source.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-medium text-sm">{source.name}</span>
                  </button>
                );
              })}
            </div>

            <Card className="overflow-hidden">
              <CardHeader className={`${selectedSource.color} text-white`}>
                <div className="flex items-center gap-3">
                  <selectedSource.icon className="h-8 w-8" />
                  <CardTitle className="text-2xl">
                    {selectedSource.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-white/90">
                  {selectedSource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="advantages" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="advantages">Vantagens</TabsTrigger>
                    <TabsTrigger value="disadvantages">Desvantagens</TabsTrigger>
                    <TabsTrigger value="stats">Estatísticas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="advantages" className="mt-4">
                    <ul className="space-y-2">
                      {selectedSource.advantages.map((adv, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="disadvantages" className="mt-4">
                    <ul className="space-y-2">
                      {selectedSource.disadvantages.map((dis, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          {dis}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="stats" className="mt-4 space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Eficiência Média
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {selectedSource.efficiency}%
                        </span>
                      </div>
                      <Progress value={selectedSource.efficiency} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Participação na Matriz Brasileira
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {selectedSource.brazilPercentage}%
                        </span>
                      </div>
                      <Progress value={selectedSource.brazilPercentage} />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Concepts Section */}
        <section id="conceitos" className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Conceitos Fundamentais
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entenda os principais conceitos que todo estudante de engenharia
                de energia precisa conhecer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {engineeringConcepts.map((concept, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>{concept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{concept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="estatisticas" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Matriz Energética Brasileira
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visualize a distribuição das fontes de energia na matriz
                elétrica do Brasil.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Distribuição por Fonte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {energySources.map((source) => (
                  <div key={source.id}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <source.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{source.name}</span>
                      </div>
                      <span className="text-sm font-bold">
                        {source.brazilPercentage}%
                      </span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${source.color} transition-all duration-1000`}
                        style={{ width: `${source.brazilPercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    * Outras fontes (gás natural, nuclear, carvão, etc.)
                    correspondem aos {(100 - energySources.reduce((acc, s) => acc + s.brazilPercentage, 0)).toFixed(1)}%
                    restantes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">
                Tire suas dúvidas sobre engenharia de energia.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card
                  key={index}
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFAQ === index && (
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold">Engenharia de Energia</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Projeto de ICT - Site interativo sobre Engenharia de Energia
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Desenvolvido com Next.js e shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
