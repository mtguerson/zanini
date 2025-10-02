'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
    image: '/promotional/1.webp',
    title: 'Um brinde',
    subtitle: 'personalizado pode',
    description: 'carregar uma história.',
    accent: 'personalizado',
  },
  {
    id: 2,
    image: '/promotional/2.webp',
    title: 'Um enfeite',
    subtitle: 'exclusivo',
    description: 'pode tornar especial qualquer data.',
    accent: 'exclusivo',
  },
  {
    id: 3,
    image: '/promotional/3.webp',
    title: 'Uma lembrança',
    subtitle: 'religiosa...',
    description: 'pode marcar a fé de uma vida!',
    accent: 'marcar',
  },
  {
    id: 4,
    image: '/promotional/4.webp',
    title: 'Transforme',
    subtitle: 'momentos',
    description: 'em lembranças únicas com a Zanini',
    accent: 'Transforme',
  },
  {
    id: 5,
    image: '/promotional/5.webp',
    title: 'Presentes que',
    subtitle: 'transformam',
    description: 'Lembranças em emoção!',
    accent: 'transformam',
  },
];

export function PromotionalShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const currentItem = useMemo(
    () => promotionalItems[currentIndex],
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % promotionalItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + promotionalItems.length) % promotionalItems.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case ' ':
          event.preventDefault();
          togglePlayPause();
          break;
      }
    },
    [nextSlide, prevSlide, togglePlayPause]
  );

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-background/95 to-muted/20 overflow-hidden relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Showcase de produtos promocionais"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 relative">
              Momentos que{' '}
              <span className="relative">
                <span className="text-primary">inspiram</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"></div>
              </span>
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada presente conta uma história única. Descubra como transformamos
            momentos especiais em lembranças eternas.
          </p>
        </div>

        {/* Showcase Principal */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Conteúdo Textual */}
            <div
              className={`space-y-6 lg:space-y-8 order-2 lg:order-1 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                    <span className="md:justify-start flex items-center justify-center">
                      {currentItem.title}
                    </span>
                    <span className="md:justify-start flex items-center justify-center text-primary">
                      {currentItem.subtitle}
                    </span>
                  </h3>
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed md:justify-start flex items-center justify-center">
                    {currentItem.description}
                  </p>
                </div>

                {/* Controles de navegação */}
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  {/* Botões de navegação */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevSlide}
                      className="h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Slide anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={togglePlayPause}
                      className="h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={
                        isPlaying ? 'Pausar slideshow' : 'Reproduzir slideshow'
                      }
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextSlide}
                      className="h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Próximo slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Indicadores melhorados */}
                  <div className="flex space-x-2">
                    {promotionalItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative transition-all duration-300 ${
                          index === currentIndex ? 'w-8 h-3' : 'w-3 h-3'
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-primary'
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA melhorado */}
                <div className="pt-6 flex justify-center md:justify-start">
                  <Button
                    asChild
                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Link
                      href="/produtos"
                      title="Explore nossa coleção de produtos"
                      className="flex items-center"
                    >
                      <span>Explore Nossa Coleção</span>
                      <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Imagem Showcase */}
            <div
              className={`relative order-1 lg:order-2 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative group">
                {/* Elemento Decorativo de Fundo */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Card Principal */}
                <Card className="relative overflow-hidden rounded-3xl shadow-2xl bg-card border-0 transform group-hover:scale-[1.02] transition-all duration-700 ease-out">
                  <div className="aspect-square relative">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      quality={100}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      priority
                      title={currentItem.title}
                    />
                    {/* Overlay Gradiente melhorado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Badge de destaque */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                      {currentIndex + 1}/{promotionalItems.length}
                    </div>
                  </div>
                </Card>

                {/* Elementos Decorativos Flutuantes melhorados */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/15 rounded-full blur-xl animate-bounce opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Miniaturas melhorado */}
        <div className="hidden md:block mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {promotionalItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`group relative overflow-hidden p-2 rounded-2xl transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? 'ring-4 ring-primary shadow-xl scale-105 bg-primary/5'
                    : 'hover:scale-105 hover:shadow-lg opacity-70 hover:opacity-100 hover:bg-muted/50'
                }`}
                aria-label={`Ir para slide ${index + 1}: ${item.title}`}
              >
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    quality={90}
                    fill
                    className="transition-all duration-500 object-cover group-hover:scale-110"
                    title={item.title}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary/20'
                        : 'bg-black/20 group-hover:bg-black/10'
                    }`}
                  ></div>

                  {/* Indicador de slide ativo */}
                  {index === currentIndex && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Produtos Únicos', icon: '🎁' },
              { value: '10k+', label: 'Clientes Felizes', icon: '😊' },
              { value: '35+', label: 'Anos de Experiência', icon: '⭐' },
              { value: '100%', label: 'Personalização', icon: '✨' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
