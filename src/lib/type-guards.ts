export interface ShopifyErrorLike {
  cause: Error;
  status: number;
  message: Error;
}

export function isShopifyError(error: unknown): error is ShopifyErrorLike {
  return (
    typeof error === "object" &&
    error !== null &&
    "cause" in error &&
    "status" in error &&
    "message" in error &&
    "query" in error
  );
}
