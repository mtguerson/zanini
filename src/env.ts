import { z } from 'zod';

const envSchema = z.object({
  SHOPIFY_STORE_DOMAIN: z.string().min(1),
  SHOPIFY_PUBLIC_ACCESS_KEY: z.string().min(1),
  SHOPIFY_SECRET_ACCESS_KEY: z.string().min(1),
  CLOUDFLARE_ACCOUNT_ID: z.string().min(1),
  AWS_BUCKET_NAME: z.string().min(1),
  AWS_ACCESS_KEY_ID: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  CLOUDFLARE_PUBLIC_URL: z.string().min(1),
  // SHOPIFY_WEBHOOK_SECRET: z.string().min(1),
});

export const env = envSchema.parse(process.env);
