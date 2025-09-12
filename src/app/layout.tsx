import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { CartProvider } from '@/contexts/cart';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zanini - Comunicação Visual',
  description:
    'Como pioneira no ramo da Comunicação Visual, a Zanini tem se tornado referência no mercado de impressão digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${inter.className}`}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
