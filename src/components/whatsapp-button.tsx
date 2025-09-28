'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import whatsappIcon from '@/assets/whatsapp-icon.webp';

export function WhatsAppButton() {
  return (
    <>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50"
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=556796163013&text=Olá, gostaria de falar com a Zanini Comunicação visual!&type=phone_number&app_absent=0"
      >
        <Image
          src={whatsappIcon}
          alt="Logo do WhatsApp"
          className="object-contain drop-shadow-sm"
          width={60}
          height={60}
          priority
        />

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </motion.a>
    </>
  );
}
