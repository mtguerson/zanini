'use client';

import { Product } from '@/lib/shopify/types';
import { createContext, ReactNode, useState, useEffect } from 'react';

export interface CartProduct extends Product {
  quantity: number;
  customImageUrl?: string;
}

interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  total: number;
  totalPrice: number;
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProduct: (productId: string) => void;
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
    setProducts(storedProducts);
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

  const addProduct = (product: CartProduct) => {
    const productIsAlreadyInTheCart = products.some(
      (prevProduct) => prevProduct.id === product.id
    );

    if (!productIsAlreadyInTheCart) {
      return setProducts((prev) => [...prev, product]);
    }

    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
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

  const increaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }
        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        };
      });
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((prevProduct) => prevProduct.id !== productId);
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
