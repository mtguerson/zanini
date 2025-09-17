import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Leaf,
  Recycle,
  Heart,
  Users,
  Globe,
  Shield,
  Truck,
  Award,
} from 'lucide-react';

export function AboutCommitments() {
  const commitments = [
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description:
        'Priorizamos fornecedores que utilizam práticas sustentáveis e materiais eco-friendly.',
      details: [
        'Embalagens recicláveis',
        'Produtos biodegradáveis',
        'Redução de desperdício',
      ],
    },
    {
      icon: Recycle,
      title: 'Economia Circular',
      description: 'Incentivamos a reutilização e reciclagem de produtos.',
      details: [
        'Programa de troca',
        'Reciclagem de embalagens',
        'Produtos recondicionados',
      ],
    },
    {
      icon: Heart,
      title: 'Responsabilidade Social',
      description: 'Apoiamos causas sociais e comunidades locais.',
      details: [
        'Apoio a pequenos produtores',
        'Doações para ONGs',
        'Trabalho justo',
      ],
    },
    {
      icon: Globe,
      title: 'Impacto Local',
      description: 'Contribuímos para o desenvolvimento da nossa comunidade.',
      details: [
        'Geração de empregos locais',
        'Apoio ao comércio local',
        'Desenvolvimento regional',
      ],
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description:
        'Todos os produtos têm garantia de 1 ano contra defeitos de fabricação.',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description:
        'Frete grátis para compras acima de R$ 199 e entrega em até 48h.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description:
        'Produtos testados e aprovados por nossa equipe de qualidade.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-l from-muted/30 via-muted/40 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium">
              Nossos Compromissos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Responsabilidade e Sustentabilidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acreditamos que uma empresa deve ser responsável não apenas pelos
              produtos que vende, mas também pelo impacto que causa no mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {commitments.map((commitment, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <commitment.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {commitment.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {commitment.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossas Garantias
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Além dos nossos compromissos sociais e ambientais, garantimos a
                qualidade e satisfação em cada compra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guarantees.map((guarantee, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <guarantee.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground">
                      {guarantee.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nosso Compromisso com o Futuro
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Estamos constantemente buscando formas de reduzir nosso impacto
                ambiental, apoiar nossa comunidade e criar um negócio que seja
                não apenas lucrativo, mas também positivo para o mundo ao nosso
                redor."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
