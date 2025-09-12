import { env } from '@/env';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';
import { client } from './client';

export async function uploadFile(file: File) {
  const uploadId = randomUUID();
  const uniqueFileName = `${file.name}-${uploadId}`;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await client.send(
      new PutObjectCommand({
        Bucket: env.AWS_BUCKET_NAME,
        Key: uniqueFileName,
        ContentType: file.type,
        Body: buffer,
        ContentLength: buffer.length,
      })
    );

    const url = `${env.CLOUDFLARE_PUBLIC_URL}/${uniqueFileName}`;

    return {
      url,
    };
  } catch (error) {
    console.error('R2 Upload Error:', error);
    throw new Error(
      `Falha no upload para R2: ${
        error instanceof Error ? error.message : 'Erro desconhecido'
      }`
    );
  }
}
