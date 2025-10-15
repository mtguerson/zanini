'use client';

import { Product } from '@/lib/shopify/types';
import { createContext, ReactNode, useState, useEffect } from 'react';

export interface CartProduct extends Product {
  quantity: number;
  customImageUrl?: string;
  customText?: string;
  lineId: string;
}

interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  total: number;
  totalPrice: number;
  toggleCart: () => void;
  addProduct: (product: Omit<CartProduct, 'lineId'>) => void;
  decreaseProductQuantity: (lineId: string) => void;
  increaseProductQuantity: (lineId: string) => void;
  removeProduct: (lineId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  total: 0,
  totalPrice: 0,
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

const CART_STORAGE_KEY = 'zanini-cart';

function getStoredCart(): CartProduct[] {
  if (typeof window === 'undefined') return [];

  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Erro ao carregar carrinho do localStorage:', error);
    return [];
  }
}

function setStoredCart(products: CartProduct[]): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Erro ao salvar carrinho no localStorage:', error);
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedProducts = getStoredCart();
    // Migração: garantir lineId para itens existentes
    const migrated = storedProducts.map((p: any) => {
      const customizations = `${p.customImageUrl ?? ''}:${p.customText ?? ''}`;
      const computedLineId = `${p.id}:${customizations}`;
      return {
        ...p,
        lineId: p.lineId ?? computedLineId,
      } as CartProduct;
    });
    setProducts(migrated);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setStoredCart(products);
    }
  }, [products, isLoaded]);

  const total = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const totalPrice = products.reduce((acc, product) => {
    return (
      acc + Number(product.priceRange.maxVariantPrice.amount) * product.quantity
    );
  }, 0);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const clearCart = () => {
    setProducts([]);
  };

  const addProduct = (product: Omit<CartProduct, 'lineId'>) => {
    // lineId único por variante + customizações (imagem + texto)
    const customizations = `${product.customImageUrl ?? ''}:${
      product.customText ?? ''
    }`;
    const computedLineId = `${product.id}:${customizations}`;

    const productIsAlreadyInTheCart = products.some(
      (prevProduct) => prevProduct.lineId === computedLineId
    );

    if (!productIsAlreadyInTheCart) {
      return setProducts((prev) => [
        ...prev,
        {
          ...product,
          lineId: computedLineId,
        },
      ]);
    }

    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.lineId === computedLineId) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const decreaseProductQuantity = (lineId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.lineId !== lineId) {
          return prevProduct;
        }
        if (prevProduct.quantity === 1) {
          return prevProduct;
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        };
      });
    });
  };

  const increaseProductQuantity = (lineId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.lineId !== lineId) {
          return prevProduct;
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        };
      });
    });
  };

  const removeProduct = (lineId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter(
        (prevProduct) => prevProduct.lineId !== lineId
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        total,
        totalPrice,
        toggleCart,
        addProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
