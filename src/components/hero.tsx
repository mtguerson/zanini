'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Palette, Camera, PenTool } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroTexts = [
    'Nova Ideia',
    'Identidade Visual',
    'Arte Personalizada',
    'Marca em Sucesso',
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length);
        setIsTransitioning(false);
      }, 250); // Delay para a transição
    }, 3000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const features = [
    {
      icon: Palette,
      title: 'Design Gráfico',
      description: 'Criação de identidades visuais únicas',
    },
    {
      icon: Camera,
      title: 'Fotografia',
      description: 'Captura de momentos especiais',
    },
    {
      icon: PenTool,
      title: 'Ilustração',
      description: 'Arte personalizada para seu projeto',
    },
  ];

  return (
    <section className="md:py-12 py-6 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Conteúdo Principal - Lado Esquerdo */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Hero Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforme sua{' '}
                <span
                  className={`relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-600 to-amber-600 transition-all duration-500 ${
                    isTransitioning
                      ? 'opacity-0 scale-95'
                      : 'opacity-100 scale-100'
                  }`}
                >
                  {heroTexts[currentText]}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Na Zanini, criamos soluções visuais que contam histórias,
                conectam pessoas e impulsionam resultados através do design
                criativo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/produtos" title="Ver produtos">
                  Ver Produtos
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Link href={'/sobre-nos'} title="Sobre nós">
                  Sobre Nós
                </Link>
              </Button>
            </div>
          </div>

          {/* Banner - Lado Direito */}
          <div className="relative order-first lg:order-last">
            <div className="relative group">
              {/* Elemento Decorativo de Fundo */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Banner Principal */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-card border-0 transform group-hover:scale-[1.02] transition-all duration-700 ease-out">
                <div className="aspect-[1200/630] relative">
                  <Image
                    src="/promotional/banner.webp"
                    alt="Banner promocional Zanini"
                    quality={100}
                    fill
                    className="object-contain"
                    priority
                    title="Banner promocional Zanini"
                  />
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Elementos Decorativos Flutuantes */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/15 rounded-full blur-xl animate-bounce opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Features Grid - Abaixo das colunas principais */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-6 lg:p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mx-auto">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Custom para o efeito Shining */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
