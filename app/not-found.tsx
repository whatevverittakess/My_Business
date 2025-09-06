'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dumbbell } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Dumbbell className="h-16 w-16 text-[#D4AF37] mx-auto mb-8" />
        
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-[#D4AF37]"
        >
          404
        </motion.h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <Button
          size="lg"
          className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold"
          asChild
        >
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}