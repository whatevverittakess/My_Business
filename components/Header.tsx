'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  translations: any;
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Motivation Apparel', href: '/category/motivation-apparel' },
    { name: 'Gym & Fitness', href: '/category/gym-fitness' },
    { name: 'Ebooks & Courses', href: '/category/ebooks-courses' },
    { name: 'Luxury Lifestyle', href: '/category/luxury-lifestyle' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl backdrop-blur-sm bg-black/95' : 'shadow-lg'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-[#D4AF37]" />
            <span className="text-xl font-bold">{translations.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Language Selector and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-[#D4AF37]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-gray-800"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}