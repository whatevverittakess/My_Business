'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#D4AF37] hover:bg-white/10"
      >
        <Globe className="h-4 w-4 mr-2" />
        {currentLang.toUpperCase()}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
          <button
            onClick={() => {
              onLanguageChange('en');
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-t-lg ${
              currentLang === 'en' ? 'bg-[#D4AF37] text-white' : 'text-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              onLanguageChange('ar');
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-b-lg ${
              currentLang === 'ar' ? 'bg-[#D4AF37] text-white' : 'text-gray-700'
            }`}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
}