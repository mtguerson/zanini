import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Shield, Zap } from 'lucide-react';

export function AboutValues() {
  const values = [
    {
      icon: Zap,
      title: 'Criatividade',
      description: 'Buscar constantemente inovação em cada projeto.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description:
        'Entregar produtos e serviços com excelência em todos os detalhes.',
    },
    {
      icon: Clock,
      title: 'Comprometimento',
      description: 'Honrar prazos e expectativas dos clientes.',
    },
    {
      icon: Shield,
      title: 'Ética e Transparência',
      description: 'Relações baseadas em respeito, clareza e honestidade.',
    },
    {
      icon: Users,
      title: 'Valorização do Cliente',
      description: 'Entender e atender as necessidades de forma personalizada.',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Incentivar a colaboração e o crescimento coletivo.',
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                "Cada projeto e cada atendimento são guiados por esses valores.
                Eles representam quem somos na{' '}
                <span className="text-primary font-bold">ZANINI</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
