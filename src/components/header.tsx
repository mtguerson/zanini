import Image from 'next/image';
import br from '@/assets/brazil-flag.gif';
import { SearchInput } from './ui/search-input';
import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header>
      <div className="bg-primary text-center flex justify-center items-center w-full">
        <span className="text-primary-foreground py-2 text-sm">
          Bem-vindo à Zanini Comunicação Visual!
        </span>
        <Image
          unoptimized
          width={20}
          height={20}
          alt="Bandeira do Brasil"
          className="ms-2"
          src={br}
        />
      </div>
      <div className="py-4 px-24 w-full items-center justify-between flex border-b">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Zanini</h1>
          <h2 className="text-sm hover:underline cursor-pointer">Categorias</h2>
          <h2 className="text-sm hover:underline cursor-pointer">Produtos</h2>
          <h2 className="text-sm hover:underline cursor-pointer">Sobre</h2>
        </div>
        <div className="flex gap-4 items-center">
          <SearchInput />
          <div className="bg-primary rounded-full p-2 hover:bg-primary/90 transition-colors cursor-pointer">
            <ShoppingCart color="white" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}
