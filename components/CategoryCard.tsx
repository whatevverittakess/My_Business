'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
  viewAllText: string;
}

export function CategoryCard({ category, viewAllText }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="aspect-[4/3] relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-200 mb-4 text-sm">{category.description}</p>
            
            <motion.div
              className="inline-flex items-center text-[#D4AF37] font-semibold"
              whileHover={{ x: 5 }}
            >
              {viewAllText} →
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}