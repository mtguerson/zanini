import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Facebook, Instagram } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import Image from 'next/image';
import logo from '@/assets/logo.webp';
import Link from 'next/link';

export async function Footer() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative flex justify-center items-center">
            <Link href="/" title="Ir para a página inicial">
              <Image
                src={logo}
                quality={100}
                alt="Zanini Comunicação Visual"
                title="Zanini Comunicação Visual"
                width={200}
                height={200}
              />
            </Link>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links rápidos</h3>
            <NavigationMenu className="max-w-none *:w-full">
              <NavigationMenuList className="flex-col items-start gap-0">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/categorias" className="py-1">
                    Categorias
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/sobre-nos" className="py-1">
                    Sobre nós
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Av. Ângelo Antônio Gasparetto, 691</p>
              <p>Chapadão do Sul, MS</p>
              <p>Telefone: (67) 99855-1446</p>
              <p>Email: zaninilaserdigital@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a
                        href="https://www.facebook.com/zaninicv"
                        title="Siga-nos no Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a
                        href="https://www.instagram.com/cvzanini/"
                        title="Siga-nos no Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Zanini Comunicação Visual. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
