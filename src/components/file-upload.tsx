'use client';

import { AlertCircleIcon, ImageUpIcon, XIcon, Loader2 } from 'lucide-react';
import { useState } from 'react';

import { useFileUpload } from '@/hooks/use-file-upload';
import { uploadFileAction } from '@/actions/upload-file';

interface FileUploadProps {
  onUploadSuccess?: (url: string) => void;
  onUploadError?: (error: string) => void;
}

export default function FileUpload({
  onUploadSuccess,
  onUploadError,
}: FileUploadProps) {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: 'image/*',
    maxSize,
    onFilesAdded: async (addedFiles) => {
      if (addedFiles.length > 0) {
        const file = addedFiles[0].file;
        if (file instanceof File) {
          await handleFileUpload(file);
        }
      }
    },
  });

  const previewUrl = files[0]?.preview || null;

  async function handleFileUpload(file: File) {
    try {
      setIsUploading(true);
      const url = await uploadFileAction(file);
      setUploadedUrl(url);
      onUploadSuccess?.(url);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Erro ao fazer upload da imagem';
      onUploadError?.(errorMessage);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* Drop area */}
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload file"
          />
          {isUploading ? (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <Loader2 className="size-4 animate-spin opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Fazendo upload da imagem...
              </p>
              <p className="text-muted-foreground text-xs">
                Aguarde um momento
              </p>
            </div>
          ) : previewUrl ? (
            <div className="absolute inset-0">
              <img
                src={previewUrl}
                alt={files[0]?.file?.name || 'Uploaded image'}
                className="size-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Arraste e solte a imagem aqui ou clique para buscar
              </p>
              <p className="text-muted-foreground text-xs">
                Tamanho máximo: {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>
        {(previewUrl || uploadedUrl) && !isUploading && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={() => {
                removeFile(files[0]?.id);
                setUploadedUrl(null);
              }}
              aria-label="Remove image"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
