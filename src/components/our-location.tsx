'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from './ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function OurLocation() {
  return (
    <motion.section
      className="py-12 px-6 bg-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h3 className="text-3xl font-bold mb-4 text-card-foreground">
            Nossa Localização
          </h3>
          <p className="text-muted-foreground">
            Venha nos visitar em nossa loja em Chapadão do Sul
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-6 text-card-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Endereço Completo
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-card-foreground">
                      Zanini Comunicação Visual
                    </p>
                    <p className="text-muted-foreground">
                      Av. Ângelo Antônio Gasparetto, 691
                    </p>
                    <p className="text-muted-foreground">Polo Empresarial</p>
                    <p className="text-muted-foreground">
                      Chapadão do Sul - MS
                    </p>
                    <p className="text-muted-foreground">CEP: 79560-000</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">(67) 9 9616-3013</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Segunda a Sexta: 7h30 às 12h, 13h30 às 18:00
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() =>
                      window.open(
                        'https://www.google.com/maps/place/Zanini+Comunica%C3%A7%C3%A3o+Visual/@-18.7942959,-52.6025231,17z/data=!3m1!4b1!4m6!3m5!1s0x949d3206bb9d01e1:0xba794dd3ed812c9e!8m2!3d-18.7942959!4d-52.6025231!16s%2Fg%2F1q2wf5_7x?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D',
                        '_blank'
                      )
                    }
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Como Chegar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} className="transition-opacity duration-300">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.086548635139!2d-52.6025231!3d-18.794295899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949d3206bb9d01e1%3A0xba794dd3ed812c9e!2sZanini%20Comunica%C3%A7%C3%A3o%20Visual!5e0!3m2!1spt-BR!2sbr!4v1760291294225!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
