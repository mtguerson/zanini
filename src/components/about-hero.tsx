import { Badge } from '@/components/ui/badge';
import { Heart, Star, Shield, Truck } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm font-medium">
                Desde 1986
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sobre a <span className="text-primary">ZANINI</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A família Zanini chegou a Chapadão do Sul - MS em 1986,
                iniciando com pequenas pinturas em paredes, faixas e banners em
                tecido. Hoje, contamos com impressão digital, corte e gravação a
                laser e recorte eletrônico para entregar soluções completas em
                comunicação visual.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Paixão</h3>
                <p className="text-sm text-muted-foreground">
                  Pelo que fazemos
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Qualidade</h3>
                <p className="text-sm text-muted-foreground">
                  Sempre em primeiro lugar
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Confiança</h3>
                <p className="text-sm text-muted-foreground">Em cada produto</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Entrega</h3>
                <p className="text-sm text-muted-foreground">Rápida e segura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
