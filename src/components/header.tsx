'use client';

import Image from 'next/image';
import { useState } from 'react';
import br from '@/assets/brazil-flag.gif';
import { SearchInput } from './ui/search-input';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="relative">
      {/* Banner superior */}
      <div className="bg-primary text-center flex justify-center items-center w-full">
        <span className="text-primary-foreground p-2 text-sm">
          Bem-vindo à{' '}
          <span className="font-bold">Zanini Comunicação Visual</span>!
        </span>
        <Image
          unoptimized
          width={20}
          height={20}
          alt="Bandeira do Brasil"
          src={br}
        />
      </div>

      {/* Header principal */}
      <div className="py-4 px-4 md:px-24 sm:px-6 lg:px-36 w-full items-center justify-between flex border-b">
        {/* Logo e navegação */}
        <div className="flex gap-4 items-center">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-bold">Zanini</h1>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-4 items-center">
            <h2 className="text-sm hover:underline cursor-pointer transition-colors">
              Categorias
            </h2>
            <h2 className="text-sm hover:underline cursor-pointer transition-colors">
              Produtos
            </h2>
            <h2 className="text-sm hover:underline cursor-pointer transition-colors">
              Sobre
            </h2>
          </nav>
        </div>

        {/* Ações do lado direito */}
        <div className="flex gap-2 sm:gap-4 items-center">
          {/* Search Input - oculto em mobile muito pequeno */}
          <div className="hidden sm:block">
            <SearchInput />
          </div>

          {/* Carrinho */}
          <div className="bg-primary rounded-full p-2 hover:bg-primary/90 transition-colors cursor-pointer">
            <ShoppingCart color="white" size={16} />
          </div>

          {/* Botão do menu hambúrguer */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-primary rounded-full p-2 hover:bg-primary/90 transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X color="white" size={16} />
            ) : (
              <Menu color="white" size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="px-4 py-4 space-y-4">
            {/* Search Input mobile */}
            <div className="sm:hidden">
              <SearchInput />
            </div>

            {/* Navegação mobile */}
            <nav className="flex flex-col space-y-3">
              <h2 className="text-base hover:text-primary cursor-pointer transition-colors py-2 border-b border-gray-100">
                Categorias
              </h2>
              <h2 className="text-base hover:text-primary cursor-pointer transition-colors py-2 border-b border-gray-100">
                Produtos
              </h2>
              <h2 className="text-base hover:text-primary cursor-pointer transition-colors py-2 border-b border-gray-100">
                Sobre
              </h2>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
