'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LetterCustomizerProps {
  onChange?: (value: string) => void;
  maxLength?: number;
}

export function LetterCustomizer({
  onChange,
  maxLength = 10,
}: LetterCustomizerProps) {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const sanitized = e.target.value
        .replace(/[^A-Za-z]/g, '')
        .toUpperCase()
        .slice(0, maxLength);

      setValue(sanitized);
      onChange?.(sanitized);
    },
    [maxLength, onChange]
  );

  const isAtLimit = value.length >= maxLength;
  const hasContent = value.length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-3">
        <label
          htmlFor="letter-input"
          className="block text-sm font-medium text-foreground/80"
        >
          Personalize seu produto
        </label>

        <input
          id="letter-input"
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder="Digite até 10 letras..."
          className="w-full px-6 py-4 text-lg font-medium tracking-wide text-center bg-background border-2 border-border rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-ring/20 focus:border-foreground hover:border-foreground/50 placeholder:text-muted-foreground/50"
          aria-label="Campo de personalização de letras"
          aria-describedby="letter-counter"
        />

        <motion.div
          id="letter-counter"
          className="text-center text-sm font-medium"
          animate={{
            color: isAtLimit ? 'rgb(239, 68, 68)' : 'rgb(115, 115, 115)',
          }}
          transition={{ duration: 0.2 }}
        >
          {value.length} / {maxLength} letras
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-4"
          >
            <div className="text-center mb-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Pré-visualização
              </span>
            </div>

            <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-12 shadow-lg border border-border/50">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-foreground/20 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-foreground/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-foreground/20 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-foreground/20 rounded-br-lg" />

              <div className="flex justify-center items-center gap-3 flex-wrap">
                {value.split('').map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    className="text-5xl md:text-6xl font-bold text-foreground tracking-wider font-mono"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center text-xs text-muted-foreground/60 uppercase tracking-widest"
              >
                Gravação simulada
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hasContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-center py-16 border-2 border-dashed border-border rounded-2xl"
        >
          <div className="text-muted-foreground/40 space-y-2">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <p className="text-sm font-medium">
              Digite suas letras para ver a pré-visualização
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
