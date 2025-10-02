import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Factory } from 'lucide-react';

export function AboutCommitments() {
  const differentials = [
    {
      icon: Sparkles,
      title: 'Qualidade, agilidade e respeito',
      description:
        'Somos uma empresa consolidada no mercado, com foco em qualidade, agilidade e respeito ao cliente.',
    },
    {
      icon: Factory,
      title: 'Fabricação própria e personalizada',
      description:
        'Todos os produtos são de fabricação própria e personalizados conforme o pedido do cliente.',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-l from-muted/30 via-muted/40 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Diferenciais */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="text-sm font-medium">
              Nossos Diferenciais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que nos torna únicos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Por que escolher a ZANINI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {differentials.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 p-1 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
