'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { SearchAndFilter } from '@/components/SearchAndFilter';
import { BlogCard } from '@/components/BlogCard';
import { categories, products, translations } from '@/data/products';
import { blogPosts } from '@/data/blogs';

export default function Home() {
  const [currentLang, setCurrentLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const t = translations[currentLang as keyof typeof translations];
  
  const featuredProducts = products.filter(product => product.featured);
  const featuredBlogs = blogPosts.filter(post => post.featured).slice(0, 3);
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
        translations={t} 
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full text-[#D4AF37] mb-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Star className="h-4 w-4 mr-2" />
              </motion.div>
              Premium Quality Guaranteed
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-[#D4AF37]">{t.heroTitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
              {t.heroSubtitle}
            </p>
            
            <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
                asChild
              >
                <Link href="#featured">
                  {t.ctaButton}
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
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

      {/* Featured Products */}
      <section id="featured" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.featuredTitle}
            </h2>
            <motion.div
              className="w-24 h-1 bg-[#D4AF37] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchTerm || selectedCategory ? filteredProducts : featuredProducts).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <ProductCard product={product} buyNowText={t.buyNow} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {!searchTerm && !selectedCategory && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.categoriesTitle}
              </h2>
              <motion.div
                className="w-24 h-1 bg-[#D4AF37] mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                >
                  <CategoryCard category={category} viewAllText={t.viewAll} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Blog Posts */}
      {!searchTerm && !selectedCategory && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <motion.div
                className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fuel your journey with powerful insights and motivational content
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredBlogs.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <BlogCard post={post} readMoreText="Read More" />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  asChild
                >
                  <Link href="/blog">
                    View All Posts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer translations={t} />
    </div>
  );
}