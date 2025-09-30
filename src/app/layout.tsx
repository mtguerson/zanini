import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { CartProvider } from '@/contexts/cart';
import { Toaster } from '@/components/ui/sonner';
import { ReactQueryProvider } from '@/providers/react-query';
import { Footer } from '@/components/footer';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppButton } from '@/components/whatsapp-button';

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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WVNX9GSD');`}
        </Script>
        {/* End Google Tag Manager */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVNX9GSD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
    </html>
  );
}
