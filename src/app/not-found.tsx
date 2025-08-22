import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="bg-background min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi removida.
          </p>
        </div>

        <Button asChild>
          <Link href="/">Voltar ao Início</Link>
        </Button>
      </div>
    </div>
  );
}
