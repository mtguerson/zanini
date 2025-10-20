import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ShoppingBag,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

export function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Pronto para conhecer nossos produtos?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Explore nossa seleção cuidadosamente curada e descubra por que
                milhares de clientes confiam na Zanini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Explore Nossos Produtos
                    </h3>
                    <p className="text-muted-foreground">
                      Descubra nossa seleção de produtos de qualidade,
                      cuidadosamente escolhidos para você.
                    </p>
                    <Link href="/produtos" title="Ver produtos">
                      <Button size="lg" className="w-full group text-white">
                        Ver Produtos
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Fale Conosco
                    </h3>
                    <p className="text-muted-foreground">
                      Tem dúvidas? Quer sugestões? Nossa equipe está pronta para
                      te ajudar.
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full group"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Entrar em Contato
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Obrigado por fazer parte da nossa história
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada cliente é especial para nós. Obrigado por confiar na Zanini
                e por nos permitir fazer parte da sua jornada. Juntos,
                construímos algo maior que uma simples loja - construímos
                relacionamentos duradouros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
