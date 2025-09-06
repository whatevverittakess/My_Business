'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
  translations: any;
}

export function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  translations
}: SearchAndFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder={translations.search}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === '' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('')}
            className={selectedCategory === '' ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black' : ''}
          >
            {translations.allCategories}
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category.id)}
              className={selectedCategory === category.id ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black' : ''}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}