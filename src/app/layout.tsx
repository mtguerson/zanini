import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { CartProvider } from '@/contexts/cart';
import { ReactQueryProvider } from '@/providers/react-query';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zaninidigital.com.br'),
  title: 'Zanini Comunicação Visual – Impressão Digital, MDF e Acrílico',
  description:
    'Especialistas em comunicação visual: impressão digital, letreiros, MDF e acrílico. Qualidade, prazos rápidos e atendimento completo para destacar sua marca.',
  keywords: [
    'Comunicação Visual',
    'Impressão Digital',
    'Adesivos',
    'MDF',
    'Acrílico',
    'Letreiros',
    'Enfeitados',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Zanini Comunicação Visual',
    title: 'Zanini Comunicação Visual – Impressão Digital, MDF e Acrílico',
    description:
      'Especialistas em comunicação visual: impressão digital, letreiros, MDF e acrílico. Qualidade, prazos rápidos e atendimento completo para destacar sua marca.',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Zanini Comunicação Visual',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanini Comunicação Visual – Impressão Digital, MDF e Acrílico',
    description:
      'Especialistas em comunicação visual: impressão digital, letreiros, MDF e acrílico. Qualidade, prazos rápidos e atendimento completo para destacar sua marca.',
    images: ['/og-image.jpeg'],
    creator: '@zaninidigital',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    { name: 'Zanini Comunicação Visual', url: 'https://zaninidigital.com.br' },
  ],
  creator: 'Zanini Comunicação Visual',
  publisher: 'Zanini Comunicação Visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Dados estruturados: Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zanini Comunicação Visual',
            url: 'https://zaninidigital.com.br',
            logo: 'https://zaninidigital.com.br/og-image.jpeg',
            sameAs: [
              // Adicione perfis oficiais quando existirem
            ],
          })}
        </Script>
        {/* Dados estruturados: WebSite com Sitelinks SearchBox */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Zanini Comunicação Visual',
            url: 'https://zaninidigital.com.br',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://zaninidigital.com.br/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body className={`antialiased ${inter.className}`}>
        <ThemeProvider defaultTheme="system">
          <ReactQueryProvider>
            <CartProvider>
              <Header />
              {children}
              <Footer />
              <WhatsAppButton />
            </CartProvider>
          </ReactQueryProvider>
        </ThemeProvider>
        <Toaster richColors />
      </body>
      <GoogleTagManager gtmId="G-JH6QPH2248" />
    </html>
  );
}
