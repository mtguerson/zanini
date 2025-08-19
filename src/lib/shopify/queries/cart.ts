export const getCheckoutUrlQuery = /* GraphQL */ `
  query getCheckoutUrl($cartId: ID!) {
    cart(id: $cartId) {
      checkoutUrl
    }
  }
`;
