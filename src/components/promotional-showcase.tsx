'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

interface PromotionalItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}

const promotionalItems: PromotionalItem[] = [
  {
    id: 1,
    image: '/promotional/1.png',
    title: 'Um brinde',
    subtitle: 'personalizado pode',
    description: 'carregar uma história.',
    accent: 'personalizado',
  },
  {
    id: 2,
    image: '/promotional/2.png',
    title: 'Um enfeite',
    subtitle: 'exclusivo',
    description: 'pode tornar especial qualquer data.',
    accent: 'exclusivo',
  },
  {
    id: 3,
    image: '/promotional/3.png',
    title: 'Uma lembrança',
    subtitle: 'religiosa...',
    description: 'pode marcar a fé de uma vida!',
    accent: 'marcar',
  },
  {
    id: 4,
    image: '/promotional/4.png',
    title: 'Transforme',
    subtitle: 'momentos',
    description: 'em lembranças únicas com a Zanini',
    accent: 'Transforme',
  },
  {
    id: 5,
    image: '/promotional/5.png',
    title: 'Presentes que',
    subtitle: 'transformam',
    description: 'Lembranças em emoção!',
    accent: 'transformam',
  },
];

export function PromotionalShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotionalItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = promotionalItems[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Momentos que <span className="text-primary">inspiram</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada presente conta uma história única. Descubra como transformamos
            momentos especiais em lembranças eternas.
          </p>
        </div>

        {/* Showcase Principal */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Conteúdo Textual */}
            <div
              className={`space-y-6 lg:space-y-8 order-2 lg:order-1 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {currentItem.title}
                  <br />
                  <span className="text-primary">{currentItem.subtitle}</span>
                </h3>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {currentItem.description}
                </p>
              </div>

              {/* Indicadores */}
              <div className="flex md:justify-start justify-center space-x-3">
                {promotionalItems.map((_, index) => (
                  <button
                    key={index}
                    title={`Visualizar momento ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 justify-center flex md:justify-start">
                <Button className="bg-primary hover:bg-primary/90 text-white p-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link
                    href="/produtos"
                    title="Explore nossa coleção de produtos"
                  >
                    Explore Nossa Coleção
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem Showcase */}
            <div
              className={`relative order-1 lg:order-2 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Elemento Decorativo de Fundo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>

                {/* Card Principal */}
                <Card className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border-0 transform hover:scale-105 transition-all duration-500">
                  <div className="aspect-square relative">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      quality={100}
                      fill
                      className="object-cover transition-all duration-700"
                      priority
                      title={currentItem.title}
                    />
                    {/* Overlay Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </Card>

                {/* Elementos Decorativos Flutuantes */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-bounce opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Miniaturas */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {promotionalItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`group relative overflow-hidden p-2 rounded-xl transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-primary shadow-lg scale-105'
                    : 'hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100'
                }`}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    quality={100}
                    fill
                    className="transition-transform object-cover duration-300"
                    title={item.title}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">
              500+
            </div>
            <div className="text-sm lg:text-base text-muted-foreground">
              Produtos Únicos
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">
              10k+
            </div>
            <div className="text-sm lg:text-base text-muted-foreground">
              Clientes Felizes
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">
              15+
            </div>
            <div className="text-sm lg:text-base text-muted-foreground">
              Anos de Experiência
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">
              100%
            </div>
            <div className="text-sm lg:text-base text-muted-foreground">
              Personalização
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
