# 🎨 Zanini Comunicação Visual

> E-commerce moderno para comunicação visual, impressão digital, MDF e acrílico

[![Next.js](https://img.shields.io/badge/Next.js-15.4.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Shopify](https://img.shields.io/badge/Shopify-API-7AB55C?style=flat-square&logo=shopify)](https://shopify.dev/)

## 📋 Sobre o Projeto

A **Zanini Comunicação Visual** é uma plataforma de e-commerce moderna desenvolvida para oferecer soluções em comunicação visual, incluindo impressão digital, letreiros, MDF, acrílico e outros produtos personalizados. O projeto combina design moderno, performance otimizada e experiência de usuário excepcional.

### 🎯 Principais Funcionalidades

- **🛍️ E-commerce Completo**: Catálogo de produtos com carrinho de compras
- **🎨 Design Personalizado**: Upload de imagens para personalização
- **📱 Responsivo**: Interface otimizada para todos os dispositivos
- **🌙 Modo Escuro**: Suporte completo a temas claro/escuro
- **⚡ Performance**: Otimizado com Next.js 15 e Turbopack
- **🔍 SEO Otimizado**: Meta tags, sitemap e estrutura semântica
- **📊 Analytics**: Integração com Google Tag Manager
- **🛒 Shopify Integration**: Integração completa com Shopify Storefront API

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15.4.7** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface
- **TypeScript 5.0** - Tipagem estática
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Motion** - Animações fluidas
- **Embla Carousel** - Carrosséis responsivos

### Backend & Integrações

- **Shopify Storefront API** - E-commerce backend
- **Cloudflare R2** - Armazenamento de arquivos
- **TanStack Query** - Gerenciamento de estado servidor
- **Zod** - Validação de schemas

### Ferramentas de Desenvolvimento

- **Turbopack** - Bundler ultra-rápido
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **PNPM** - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
zanini/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── api/               # API Routes
│   │   ├── categorias/        # Página de categorias
│   │   ├── produto/[handle]/  # Páginas dinâmicas de produtos
│   │   ├── produtos/          # Listagem de produtos
│   │   ├── search/            # Busca e filtros
│   │   └── sobre-nos/         # Página institucional
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base (Design System)
│   │   ├── hero.tsx          # Seção principal
│   │   ├── shopping-cart.tsx # Carrinho de compras
│   │   └── ...               # Outros componentes
│   ├── contexts/             # Contextos React
│   ├── hooks/                # Custom Hooks
│   ├── lib/                  # Utilitários e configurações
│   │   ├── shopify/          # Integração Shopify
│   │   └── cloudflare/       # Integração Cloudflare
│   └── providers/            # Providers React
├── public/                   # Arquivos estáticos
└── ...                      # Configurações do projeto
```

## 🎨 Design System

O projeto segue um design system consistente baseado em:

### Cores

- **Primary**: Cor principal da marca
- **Secondary**: Cor secundária
- **Accent**: Cor de destaque
- **Muted**: Cores suaves para textos secundários

### Tipografia

- **Font**: Inter (Google Fonts)
- **Escalas**: Responsivas com Tailwind CSS
- **Hierarquia**: H1-H6 bem definidos

### Componentes

- **Atomic Design**: Componentes atômicos reutilizáveis
- **Acessibilidade**: ARIA labels e navegação por teclado
- **Responsividade**: Mobile-first approach

## 📱 Páginas e Funcionalidades

### 🏠 Página Inicial

- Hero section com animações
- Showcase de produtos promocionais
- Produtos mais vendidos
- Seção de coleções
- Depoimentos de clientes

### 🛍️ E-commerce

- **Catálogo de Produtos**: Listagem com filtros e ordenação
- **Página do Produto**: Detalhes, galeria e personalização
- **Carrinho de Compras**: Gerenciamento de itens
- **Busca**: Sistema de busca avançada
- **Categorias**: Organização por categorias

### 📄 Páginas Institucionais

- **Sobre Nós**: História, valores e equipe
- **Categorias**: Listagem de categorias de produtos

### 🎨 Personalização

- **Upload de Imagens**: Sistema de upload para personalização
- **Preview**: Visualização em tempo real
- **Validação**: Validação de formatos e tamanhos

### SEO e Performance

- **Meta Tags**: Otimizadas para cada página
- **Sitemap**: Geração automática
- **Robots.txt**: Configuração de crawlers
- **Open Graph**: Compartilhamento social
- **Schema Markup**: Dados estruturados

## 🔧 Integrações e Configurações

### Shopify Storefront API

- **GraphQL Queries**: Otimizadas para produtos e coleções
- **Carrinho de Compras**: Gerenciamento completo de estado
- **Checkout**: Redirecionamento seguro para finalização
- **Webhooks**: Sincronização automática de dados

### Cloudflare R2

- **Upload de Arquivos**: Sistema para personalização de produtos
- **CDN Global**: Distribuição otimizada de assets
- **Armazenamento Seguro**: Backup de imagens personalizadas

### Google Analytics

- **Google Tag Manager**: Rastreamento completo de eventos
- **E-commerce Tracking**: Monitoramento de conversões
- **Performance Monitoring**: Métricas de Core Web Vitals

## ⚙️ Funcionalidades Técnicas Implementadas

### Sistema de Carrinho

- **Context API**: Gerenciamento global de estado
- **Persistência Local**: Dados salvos no localStorage
- **Sincronização Shopify**: Integração com API do Shopify
- **Validação**: Verificação de disponibilidade de produtos

### Upload e Personalização

- **Validação de Arquivos**: Tipos e tamanhos permitidos
- **Preview em Tempo Real**: Visualização instantânea
- **Compressão de Imagens**: Otimização automática
- **Armazenamento Seguro**: Upload para Cloudflare R2

### Sistema de Busca e Filtros

- **Busca Semântica**: Pesquisa inteligente de produtos
- **Filtros Avançados**: Por categoria, preço, disponibilidade
- **Ordenação**: Múltiplos critérios de ordenação
- **Paginação**: Navegação otimizada de resultados

### Responsividade e Acessibilidade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Sistema responsivo com Tailwind CSS
- **ARIA Labels**: Navegação acessível para screen readers
- **Keyboard Navigation**: Suporte completo ao teclado

## 📊 Performance

### Métricas Otimizadas

- **Lighthouse Score**: 90+ em todas as categorias
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Minimizado com tree-shaking
- **Images**: Otimizadas com Next.js Image

### Estratégias de Performance

- **Code Splitting**: Carregamento sob demanda
- **Lazy Loading**: Componentes e imagens
- **Caching**: Estratégias de cache otimizadas
- **CDN**: Distribuição global de assets

## 🧪 Qualidade e Padrões

### Linting e Formatação

- **ESLint**: Configurado com regras do Next.js
- **TypeScript**: Verificação de tipos em tempo de compilação
- **Prettier**: Formatação automática de código

### Padrões de Código

- **Conventional Commits**: Mensagens de commit padronizadas
- **TypeScript**: Tipagem obrigatória em todo o projeto
- **Componentes Funcionais**: Uso de hooks e functional components
- **Clean Code**: Código limpo e bem documentado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:

- **Email**: mtguerson@gmail.com
- **Website**: [zaninidigital.com.br](https://zaninidigital.com.br)
- **Issues**: Use o sistema de issues do GitHub

---

**Desenvolvido com ❤️ por @mtguerson**
