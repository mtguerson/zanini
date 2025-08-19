import { z } from 'zod';

const envSchema = z.object({
  SHOPIFY_STORE_DOMAIN: z.string().min(1),
  SHOPIFY_PUBLIC_ACCESS_KEY: z.string().min(1),
  SHOPIFY_SECRET_ACCESS_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
