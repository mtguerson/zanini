export type Menu = {
  title: string;
  path: string;
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type SEO = {
  title: string;
  description: string;
};

export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  image?: Image;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  metafield: {
    value: boolean;
  };
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type Collection = ShopifyCollection & {
  path: string;
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

// Cart Types
export type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: Money;
    product: {
      id: string;
      title: string;
      handle: string;
      images: Connection<Image>;
    };
  };
};

export type CartCost = {
  totalAmount: Money;
  subtotalAmount: Money;
  totalTaxAmount: Money;
  totalDutyAmount: Money;
};

export type CartBuyerIdentity = {
  email?: string;
  countryCode?: string;
  deliveryAddressPreferences?: {
    oneTimeUse: boolean;
    deliveryAddress: {
      address1: string;
      address2?: string;
      city: string;
      province: string;
      country: string;
      zip: string;
    };
  };
  preferences?: {
    delivery?: {
      deliveryMethod: 'PICK_UP' | 'SHIP';
    };
  };
};

export type CartAttribute = {
  key: string;
  value: string;
};

export type Cart = {
  id: string;
  createdAt: string;
  updatedAt: string;
  lines: Connection<CartLine>;
  buyerIdentity?: CartBuyerIdentity;
  attributes: CartAttribute[];
  cost: CartCost;
};

export type ShopifyCartCreateOperation = {
  data: {
    cartCreate: {
      cart: Cart;
    };
  };
  variables: {
    input: {
      lines: Array<{
        quantity: number;
        merchandiseId: string;
      }>;
      buyerIdentity?: CartBuyerIdentity;
      attributes?: CartAttribute[];
    };
  };
};

export type ShopifyCartGetCheckoutUrlOperation = {
  data: {
    cart: {
      checkoutUrl: string;
    };
  };
  variables: {
    cartId: string;
  };
};
