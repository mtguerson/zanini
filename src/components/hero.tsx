'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Palette, Camera, PenTool } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroTexts = [
    'Ideia',
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
    <section className="py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/5">
      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforme sua{' '}
            <span
              className={`relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-600 to-amber-600 transition-all duration-500 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {heroTexts[currentText]}
              {/* Efeito Shining */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na Zanini, criamos soluções visuais que contam histórias, conectam
            pessoas e impulsionam resultados através do design criativo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Link href={'/sobre-nos'} title="Sobre nós">Sobre Nós</Link>
          </Button>
        </div>

        {/* Features Grid */}
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
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0" />
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
