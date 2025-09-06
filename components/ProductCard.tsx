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
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={handleBuyNow}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold transform scale-95 hover:scale-100 transition-transform"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {buyNowText}
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#D4AF37]">
            ${product.price}
          </span>
          <Button
            onClick={handleBuyNow}
            className="bg-black hover:bg-gray-800 text-white font-semibold px-6"
          >
            {buyNowText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}