import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Users,
  Leaf,
  Clock,
  Shield,
  Heart,
  Zap,
  Target,
} from 'lucide-react';

export function AboutValues() {
  const values = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Selecionamos apenas os melhores produtos, testados e aprovados por nossa equipe.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description:
        'Cada cliente é único. Oferecemos suporte dedicado e soluções sob medida.',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description:
        'Comprometidos com práticas sustentáveis e produtos eco-friendly.',
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description:
        'Processamento rápido e entrega eficiente para sua comodidade.',
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description:
        'Produtos com garantia estendida e política de devolução facilitada.',
    },
    {
      icon: Heart,
      title: 'Transparência',
      description:
        'Comunicação clara, preços justos e processos transparentes.',
    },
    {
      icon: Zap,
      title: 'Inovação',
      description:
        'Sempre buscando novas tecnologias e melhorias para nossos clientes.',
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description:
        'Cada decisão é tomada pensando no melhor para nossos clientes.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium">
              Nossos Valores
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que nos guia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossos valores são a base de tudo que fazemos e refletem nosso
              compromisso com a excelência e o bem-estar dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Promessa
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Cada produto que vendemos, cada atendimento que realizamos e
                cada decisão que tomamos é guiada por esses valores. Eles não
                são apenas palavras em uma página - são a essência da Zanini."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
