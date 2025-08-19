import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
