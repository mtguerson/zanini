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
              Quase 40 anos de comunicação visual
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos no ramo de comunicação visual há quase 40 anos, sempre com
              a qualidade acima de tudo. Investimos na loja online para ampliar
              nosso alcance e atender com agilidade quem precisa em qualquer
              lugar do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="px-8 py-4 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Origem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A família Zanini chegou a Chapadão do Sul - MS em 1986 e
                  começou com pequenas pinturas em paredes, faixas e banners em
                  tecido. Evoluímos para um parque produtivo com impressão
                  digital, corte a laser e recorte eletrônico.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="px-8 py-4 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  O Problema
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Muitas pessoas precisam de materiais que nem sempre estão
                  disponíveis em suas cidades. Com a loja online, oferecemos
                  acesso rápido, com qualidade e personalização, a quem está em
                  qualquer região.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="px-8 py-4 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Evolução
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crescemos com o tempo, aperfeiçoando processos, tecnologias e
                  atendimento. Mantemos o compromisso com a excelência e com a
                  identidade visual de cada cliente.
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
                "Oferecer soluções criativas e personalizadas em comunicação
                visual que fortaleçam a identidade das marcas, transmitam
                mensagens de forma clara e impactante e contribuam para o
                sucesso dos nossos clientes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
