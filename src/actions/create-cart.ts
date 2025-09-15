'use server';

import { createCart, getCheckoutUrl } from '@/lib/shopify';

interface CreateCartActionProps {
  lines: {
    quantity: number;
    merchandiseId: string;
    attributes?: {
      key: string;
      value: string;
    }[];
  }[];
}

export async function createCartAction({ lines }: CreateCartActionProps) {
  try {
    const cart = await createCart({ lines });

    if (cart) {
      const checkoutUrl = await getCheckoutUrl(cart.id);

      return checkoutUrl;
    }

    return null;
  } catch (error) {
    console.error(error);
  }
}
