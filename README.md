# 🎨 Zanini Visual Communication

> Modern e-commerce for visual communication, digital printing, MDF and acrylic

[![Next.js](https://img.shields.io/badge/Next.js-15.4.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Shopify](https://img.shields.io/badge/Shopify-API-7AB55C?style=flat-square&logo=shopify)](https://shopify.dev/)

## 📋 About the Project

**Zanini Visual Communication** is a modern e-commerce platform developed to offer visual communication solutions, including digital printing, signs, MDF, acrylic and other personalized products. The project combines modern design, optimized performance and exceptional user experience.

### 🎯 Main Features

- **🛍️ Complete E-commerce**: Product catalog with shopping cart
- **🎨 Custom Design**: Image upload for personalization
- **📱 Responsive**: Interface optimized for all devices
- **🌙 Dark Mode**: Full support for light/dark themes
- **⚡ Performance**: Optimized with Next.js 15 and Turbopack
- **🔍 SEO Optimized**: Meta tags, sitemap and semantic structure
- **📊 Analytics**: Google Tag Manager integration
- **🛒 Shopify Integration**: Complete integration with Shopify Storefront API

## 🚀 Technologies Used

### Frontend

- **Next.js 15.4.7** - React framework with App Router
- **React 19.1.0** - Interface library
- **TypeScript 5.0** - Static typing
- **Tailwind CSS 4.0** - Utility CSS framework
- **Radix UI** - Accessible components
- **Lucide React** - Modern icons
- **Motion** - Fluid animations
- **Embla Carousel** - Responsive carousels

### Backend & Integrations

- **Shopify Storefront API** - E-commerce backend
- **Cloudflare R2** - File storage
- **TanStack Query** - Server state management
- **Zod** - Schema validation

### Development Tools

- **Turbopack** - Ultra-fast bundler
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **PNPM** - Package manager

## 📁 Project Structure

```
zanini/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── api/               # API Routes
│   │   ├── categorias/        # Categories page
│   │   ├── produto/[handle]/  # Dynamic product pages
│   │   ├── produtos/          # Products listing
│   │   ├── search/            # Search and filters
│   │   └── sobre-nos/         # About us page
│   ├── components/            # React components
│   │   ├── ui/               # Base components (Design System)
│   │   ├── hero.tsx          # Main section
│   │   ├── shopping-cart.tsx # Shopping cart
│   │   └── ...               # Other components
│   ├── contexts/             # React contexts
│   ├── hooks/                # Custom Hooks
│   ├── lib/                  # Utilities and configurations
│   │   ├── shopify/          # Shopify integration
│   │   └── cloudflare/       # Cloudflare integration
│   └── providers/            # React providers
├── public/                   # Static files
└── ...                      # Project configurations
```

## 🎨 Design System

The project follows a consistent design system based on:

### Colors

- **Primary**: Main brand color
- **Secondary**: Secondary color
- **Accent**: Highlight color
- **Muted**: Soft colors for secondary text

### Typography

- **Font**: Inter (Google Fonts)
- **Scales**: Responsive with Tailwind CSS
- **Hierarchy**: Well-defined H1-H6

### Components

- **Atomic Design**: Reusable atomic components
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsiveness**: Mobile-first approach

## 📱 Pages and Features

### 🏠 Homepage

- Hero section with animations
- Promotional products showcase
- Best-selling products
- Collections section
- Customer testimonials

### 🛍️ E-commerce

- **Product Catalog**: Listing with filters and sorting
- **Product Page**: Details, gallery and personalization
- **Shopping Cart**: Item management
- **Search**: Advanced search system
- **Categories**: Organization by categories

### 📄 Institutional Pages

- **About Us**: History, values and team
- **Categories**: Product categories listing

### 🎨 Personalization

- **Image Upload**: Upload system for personalization
- **Preview**: Real-time visualization
- **Validation**: Format and size validation

### SEO and Performance

- **Meta Tags**: Optimized for each page
- **Sitemap**: Automatic generation
- **Robots.txt**: Crawler configuration
- **Open Graph**: Social sharing
- **Schema Markup**: Structured data

## 🔧 Integrations and Configurations

### Shopify Storefront API

- **GraphQL Queries**: Optimized for products and collections
- **Shopping Cart**: Complete state management
- **Checkout**: Secure redirection for completion
- **Webhooks**: Automatic data synchronization

### Cloudflare R2

- **File Upload**: System for product personalization
- **Global CDN**: Optimized asset distribution
- **Secure Storage**: Backup of personalized images

### Google Analytics

- **Google Tag Manager**: Complete event tracking
- **E-commerce Tracking**: Conversion monitoring
- **Performance Monitoring**: Core Web Vitals metrics

## ⚙️ Technical Features Implemented

### Shopping Cart System

- **Context API**: Global state management
- **Local Persistence**: Data saved in localStorage
- **Shopify Sync**: Integration with Shopify API
- **Validation**: Product availability verification

### Upload and Personalization

- **File Validation**: Allowed types and sizes
- **Real-time Preview**: Instant visualization
- **Image Compression**: Automatic optimization
- **Secure Storage**: Upload to Cloudflare R2

### Search and Filter System

- **Semantic Search**: Intelligent product search
- **Advanced Filters**: By category, price, availability
- **Sorting**: Multiple sorting criteria
- **Pagination**: Optimized result navigation

### Responsiveness and Accessibility

- **Mobile First**: Design optimized for mobile devices
- **Breakpoints**: Responsive system with Tailwind CSS
- **ARIA Labels**: Accessible navigation for screen readers
- **Keyboard Navigation**: Complete keyboard support

## 📊 Performance

### Optimized Metrics

- **Lighthouse Score**: 90+ in all categories
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with tree-shaking
- **Images**: Optimized with Next.js Image

### Performance Strategies

- **Code Splitting**: On-demand loading
- **Lazy Loading**: Components and images
- **Caching**: Optimized caching strategies
- **CDN**: Global asset distribution

## 🧪 Quality and Standards

### Linting and Formatting

- **ESLint**: Configured with Next.js rules
- **TypeScript**: Type checking at compile time
- **Prettier**: Automatic code formatting

### Code Standards

- **Conventional Commits**: Standardized commit messages
- **TypeScript**: Mandatory typing throughout the project
- **Functional Components**: Use of hooks and functional components
- **Clean Code**: Clean and well-documented code

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 📞 Support

For support and questions:

- **Website**: [zaninidigital.com.br](https://zaninidigital.com.br)
- **Issues**: Use the GitHub issues system

---

**Developed with ❤️ by @mtguerson**
