import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium">
              Nossa História
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Como tudo começou
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Zanini nasceu de um sonho e de uma necessidade real do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  A Ideia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em 2020, identificamos uma lacuna no mercado: a falta de
                  produtos de qualidade com preços justos e atendimento
                  personalizado. Decidimos criar algo diferente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  O Problema
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Muitas pessoas procuravam produtos confiáveis, mas encontravam
                  apenas opções caras ou de qualidade duvidosa. Queríamos mudar
                  isso.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  A Evolução
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hoje, somos uma marca consolidada, mas mantemos o mesmo
                  espírito inicial: colocar o cliente no centro de tudo que
                  fazemos.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Oferecer produtos de qualidade excepcional, com preços justos e
                atendimento humanizado, criando uma experiência de compra única
                que gera confiança e satisfação em cada cliente."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
