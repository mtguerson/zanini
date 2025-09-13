'use server';

import { createCart, getCheckoutUrl } from '@/lib/shopify';

interface CreateCartActionProps {
  lines: {
    quantity: number;
    merchandiseId: string;
  }[];
}

export async function createCartAction({ lines }: CreateCartActionProps) {
  try {
    const cart = await createCart({ lines });

    console.log(cart);

    if (cart) {
      const checkoutUrl = await getCheckoutUrl(cart.id);

      return checkoutUrl;
    }

    return null;
  } catch (error) {
    console.error(error);
  }
}
