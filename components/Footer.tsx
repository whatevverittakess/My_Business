import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Dumbbell } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export function Footer({ translations }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-xl font-bold">{translations.title}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium gear for the relentless pursuit of greatness. Whatever it takes to achieve your dreams.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/category/motivation-apparel" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                Motivation Apparel
              </Link>
              <Link href="/category/gym-fitness" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                Gym & Fitness
              </Link>
              <Link href="/category/ebooks-courses" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                Ebooks & Courses
              </Link>
              <Link href="/category/luxury-lifestyle" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                Luxury Lifestyle
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                {translations.footer.about}
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                {translations.footer.contact}
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                {translations.footer.privacy}
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">
                {translations.footer.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 What Ever It Takes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}