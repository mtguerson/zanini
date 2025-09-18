'use client';

import Image from 'next/image';
import { useState, useEffect, Suspense } from 'react';
import br from '@/assets/brazil-flag.gif';
import { SearchInput } from './ui/search-input';
import { Menu, X } from 'lucide-react';
import { ShoppingCart } from './shopping-cart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Fecha o menu quando a rota muda
  useEffect(() => {
    if (isMenuOpen) {
      closeMenu();
    }
  }, [path]);

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
            <Link
              href="/produtos"
              className={
                path === '/produtos'
                  ? 'text-primary font-semibold underline underline-offset-2'
                  : 'hover:underline transition-colors underline-offset-2'
              }
            >
              Produtos
            </Link>
            <Link
              href="/categorias"
              className={
                path === '/categorias'
                  ? 'text-primary font-semibold underline underline-offset-2'
                  : 'hover:underline transition-colors underline-offset-2'
              }
            >
              Categorias
            </Link>
            <Link
              href="/sobre-nos"
              className={
                path === '/sobre-nos'
                  ? 'text-primary font-semibold underline underline-offset-2'
                  : 'hover:underline transition-colors underline-offset-2'
              }
            >
              Sobre
            </Link>
          </nav>
        </div>

        {/* Ações do lado direito */}
        <div className="flex gap-2 sm:gap-4 items-center">
          {/* Search Input - oculto em mobile muito pequeno */}
          <div className="hidden sm:block">
            <Suspense>
              <SearchInput />
            </Suspense>
          </div>

          {/* Carrinho */}
          <div className="relative">
            <ShoppingCart />
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'tween',
            }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="px-4 py-4 space-y-4"
            >
              {/* Navegação mobile */}
              <nav className="flex flex-col space-y-3">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  <Link
                    href="/produtos"
                    className={`text-base hover:text-primary cursor-pointer transition-all duration-200 py-2 border-b border-gray-100 ${
                      path === '/produtos'
                        ? 'text-primary font-semibold'
                        : 'hover:bg-gray-50 rounded-md px-2 -mx-2'
                    }`}
                    onClick={closeMenu}
                  >
                    Produtos
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                >
                  <Link
                    href="/categorias"
                    className={`text-base hover:text-primary cursor-pointer transition-all duration-200 py-2 border-b border-gray-100 ${
                      path === '/categorias'
                        ? 'text-primary font-semibold'
                        : 'hover:bg-gray-50 rounded-md px-2 -mx-2'
                    }`}
                    onClick={closeMenu}
                  >
                    Categorias
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                >
                  <Link
                    href="/sobre-nos"
                    className={`text-base hover:text-primary cursor-pointer transition-all duration-200 py-2 border-b border-gray-100 ${
                      path === '/sobre-nos'
                        ? 'text-primary font-semibold'
                        : 'hover:bg-gray-50 rounded-md px-2 -mx-2'
                    }`}
                    onClick={closeMenu}
                  >
                    Sobre
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='md:hidden flex w-full justify-center items-center mt-4'>
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
    </header>
  );
}
