'use client';

import { Star, ThumbsUp, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Dados fake para reviews
const REVIEWS = [
  {
    id: 1,
    author: 'Maria Silva',
    rating: 5,
    date: '2 semanas atrás',
    content:
      'Produto excelente! A qualidade superou minhas expectativas. O acabamento é impecável e a durabilidade está sendo muito boa. Com certeza comprarei novamente.',
    verified: true,
    likes: 12,
  },
  {
    id: 2,
    author: 'João Souza',
    rating: 5,
    date: '1 mês atrás',
    content:
      'Entrega super rápida e o produto veio muito bem embalado. A qualidade do material é excelente e atendeu perfeitamente às minhas necessidades. Recomendo!',
    verified: true,
    likes: 8,
  },
  {
    id: 3,
    author: 'Ana Oliveira',
    rating: 4,
    date: '1 mês atrás',
    content:
      'Gostei muito do produto, mas achei a cor um pouco diferente da foto. Mesmo assim, a funcionalidade é ótima e estou satisfeita com a compra.',
    verified: true,
    likes: 5,
  },
  {
    id: 4,
    author: 'Pedro Santos',
    rating: 5,
    date: '2 meses atrás',
    content:
      'Simplesmente apaixonado! O produto é exatamente como descrito e a qualidade é superior. Comprarei mais vezes com certeza. Atendimento nota 10.',
    verified: false,
    likes: 3,
  },
];

export function ProductReviews() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Avaliações dos Clientes</h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-semibold text-lg">4.8 de 5</span>
            <span className="text-muted-foreground">(124 avaliações)</span>
          </div>
          <p className="text-muted-foreground max-w-md">
            Veja o que nossos clientes estão dizendo sobre este produto. Sua
            opinião é muito importante para nós!
          </p>
        </div>

        {/* <Button>Escrever Avaliação</Button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((review) => (
          <Card key={review.id} className="bg-card">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {review.author}
                      {review.verified && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1 py-0 h-5"
                        >
                          Verificado
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-muted text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {review.content}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Útil ({review.likes})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
