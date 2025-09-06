'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  translations: any;
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Motivation Apparel', href: '/category/motivation-apparel' },
    { name: 'Gym & Fitness', href: '/category/gym-fitness' },
    { name: 'Ebooks & Courses', href: '/category/ebooks-courses' },
    { name: 'Luxury Lifestyle', href: '/category/luxury-lifestyle' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-[#D4AF37]" />
            <span className="text-xl font-bold">{translations.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}