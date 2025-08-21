import { CartContext } from '@/contexts/cart';
import { useContext } from 'react';

export function useCart() {
  return useContext(CartContext);
}
