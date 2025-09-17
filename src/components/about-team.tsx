import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-tr from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium">
              Nossa Equipe
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Conheça quem está por trás da Zanini
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos uma equipe apaixonada e dedicada, trabalhando todos os dias
              para oferecer a melhor experiência possível aos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Pequena equipe, grande impacto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que o tamanho da equipe não define a qualidade do
                  serviço. Nossa equipe compacta e especializada nos permite ser
                  mais ágeis, personalizados e focados em cada cliente.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Equipe Especializada
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Profissionais dedicados
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Atendimento Direto
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sem intermediários
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Resposta Rápida
                    </p>
                    <p className="text-sm text-muted-foreground">Até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Presença Local
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Conhecemos o mercado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Fundador & CEO
                    </h4>
                    <p className="text-muted-foreground">
                      "Acreditamos que cada cliente merece ser tratado com
                      respeito, transparência e dedicação. Essa é a base da
                      nossa empresa."
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">
                      Entre em contato conosco:
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>contato@zanini.com.br</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>(11) 99999-9999</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar conosco
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Filosofia
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Não somos apenas uma loja online. Somos uma empresa que
                acredita no poder das relações humanas, na qualidade dos
                produtos e na satisfação genuína do cliente. Cada venda é o
                início de um relacionamento."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
