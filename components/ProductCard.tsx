'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  affiliateLink: string;
}

interface ProductCardProps {
  product: Product;
  buyNowText: string;
}

export function ProductCard({ product, buyNowText }: ProductCardProps) {
  const handleBuyNow = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center"
          initial={false}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleBuyNow}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold transform scale-95 hover:scale-100 transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {buyNowText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300"
        >
          {product.name}
        </motion.h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between">
          <motion.span
            className="text-2xl font-bold text-[#D4AF37]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            ${product.price}
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleBuyNow}
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 transition-all duration-300"
            >
              {buyNowText}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}