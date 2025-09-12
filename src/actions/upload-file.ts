'use server';

import { uploadFile } from '@/lib/cloudfare';

export async function uploadFileAction(file: File) {
  const { url } = await uploadFile(file);

  return url;
}
