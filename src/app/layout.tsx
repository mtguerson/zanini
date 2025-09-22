import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { CartProvider } from '@/contexts/cart';
import { Toaster } from '@/components/ui/sonner';
import { ReactQueryProvider } from '@/providers/react-query';
import { Footer } from '@/components/footer';

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
  authors: [{ name: 'Zanini Comunicação Visual', url: 'https://zaninidigital.com.br' }],
  creator: 'Zanini Comunicação Visual',
  publisher: 'Zanini Comunicação Visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${inter.className}`}>
        <ReactQueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ReactQueryProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
