# Engenharia de Energia - Site Interativo

Site interativo sobre Engenharia de Energia desenvolvido com Next.js e shadcn/ui para o projeto de ICT.

## 🌟 Funcionalidades

- **Fontes de Energia**: Explore diferentes fontes de energia (Solar, Eólica, Hidrelétrica, Biomassa) com informações detalhadas sobre vantagens, desvantagens e estatísticas
- **Conceitos Fundamentais**: Aprenda sobre eficiência energética, matriz energética, smart grids e armazenamento de energia
- **Matriz Energética Brasileira**: Visualização interativa da distribuição de fontes de energia no Brasil
- **FAQ**: Perguntas frequentes sobre engenharia de energia com respostas detalhadas

## 🚀 Tecnologias

- [Next.js 16](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de interface
- [Lucide React](https://lucide.dev/) - Ícones

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Emanuel0505/projeto-de-ICT-de-davi.git

# Entre na pasta do projeto
cd projeto-de-ICT-de-davi

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css     # Estilos globais e variáveis CSS
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal interativa
├── components/
│   └── ui/             # Componentes shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── tabs.tsx
└── lib/
    └── utils.ts        # Utilitários (cn function)
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.