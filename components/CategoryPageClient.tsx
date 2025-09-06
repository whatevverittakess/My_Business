'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { SearchAndFilter } from '@/components/SearchAndFilter';
import { categories, products, translations } from '@/data/products';

interface CategoryPageClientProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

export function CategoryPageClient({ category }: CategoryPageClientProps) {
  const [currentLang, setCurrentLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const t = translations[currentLang as keyof typeof translations];
  
  const categoryProducts = products.filter(product => product.category === category.id);
  
  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm, categoryProducts]);

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
        translations={t} 
      />

      {/* Category Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D4AF37]">
              {category.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            translations={t}
          />
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} buyNowText={t.buyNow} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer translations={t} />
    </div>
  );
}