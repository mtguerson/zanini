import { cn } from '@/lib/utils';
import { Marquee } from './marquee';
import { Button } from './ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface Review {
  id: string;
  name: string;
  description: string;
  photo?: string;
  rating: number;
  productName: string;
  productHandle: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Maria Silva',
    description:
      'Troféu em acrílico 3mm perfeito: corte a laser preciso, bordas polidas e personalização impecável. Valorizou nossa premiação.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    productName: 'Troféu em Acrílico 3mm',
    productHandle: 'trofeu-em-acrilico-3mm',
  },
  {
    id: '2',
    name: 'João Santos',
    description:
      'Comprei o Porta Retrato Mãe para presentear e ficou emocionante. Gravação nítida, ótimo acabamento e excelente estabilidade na mesa.',
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    productName: 'Porta Retrato Mãe',
    productHandle: 'porta-retrato-mae',
  },
  {
    id: '3',
    name: 'Ana Costa',
    description:
      'O Enfeite em MDF tem corte limpo e pintura uniforme. Deu um toque aconchegante à decoração e chegou muito bem embalado.',
      photo: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
      productName: 'Enfeite em MDF',
    productHandle: 'enfeite-em-mdf',
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    description:
      'A imagem de Nossa Senhora Aparecida é linda, com detalhes delicados e acabamento brilhante. Presente perfeito para quem tem devoção.',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    productName: 'Nossa Senhora Aparecida',
    productHandle: 'nossa-senhora-aparecida',
  },
  {
    id: '5',
    name: 'Carla Ferreira',
    description:
      'A Medalha São Bento é muito bem acabada, com gravações definidas e brilho elegante. Transmite proteção e veio com excelente qualidade.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productName: 'Medalha São Bento',
    productHandle: 'medalha-sao-bento',
  },
  {
    id: '6',
    name: 'Roberto Lima',
    description:
      'O Troféu Beach Tennis ficou incrível no campeonato: design moderno, personalização fiel e material resistente. Recomendo para eventos.',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    productName: 'Troféu Beach Tennis',
    productHandle: 'trofeu-beach-tennis',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ review }: { review: Review }) {
  const { name, description, photo, rating, productName, productHandle } =
    review;

  function renderStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          )}
        />
      );
    }
    return stars;
  }

  return (
    <figure
      className={cn(
        'relative w-80 overflow-hidden rounded-xl border p-6 shadow-sm',
        'border-border bg-card hover:shadow-md transition-shadow duration-200',
        'flex flex-col gap-4'
      )}
    >
      <div className="flex items-center gap-3">
        {photo ? (
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={photo}
            alt={`Foto de ${name}`}
            title={`Foto de ${name}`}
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground font-medium text-lg">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex-1">
          <figcaption className="font-semibold text-card-foreground">
            {name}
          </figcaption>
          <div className="flex items-center gap-1 mt-1">{renderStars()}</div>
        </div>
      </div>

      <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
        "{description}"
      </blockquote>

      {/* Informações do produto */}
      <div className="flex items-center justify-between gap-4 pt-2 border-t border-border">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">
            Produto avaliado:
          </p>
          <p className="font-medium text-card-foreground text-sm">
            {productName}
          </p>
        </div>

        <Button asChild size="sm" variant="outline" className="shrink-0">
          <Link href={`/produto/${productHandle}`} title={`Ver produto ${productName}`}>Ver Produto</Link>
        </Button>
      </div>
    </figure>
  );
}

export function TestImonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl bg-gradient-to-r text-center from-primary to-sidebar-foreground bg-clip-text text-transparent font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Milhares de clientes satisfeitos compartilham suas experiências com
            nossos produtos
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
