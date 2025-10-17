export const categories = [
  {
    id: 'motivation-apparel',
    name: 'Motivation Apparel',
    description: 'Premium gym wear that speaks your mindset',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'gym-fitness',
    name: 'Gym & Fitness Gear',
    description: 'Professional equipment for champions',
    image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ebooks-courses',
    name: 'Ebooks & Courses',
    description: 'Knowledge that transforms lives',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'luxury-lifestyle',
    name: 'Luxury Lifestyle',
    description: 'Live the life you deserve',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products = [
  // Motivation Apparel
  {
    id: 1,
    name: 'BEAST Mode Hoodie',
    category: 'motivation-apparel',
    price: 49.99,
    description: 'Premium heavyweight hoodie for the relentless',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/beast-mode-hoodie',
    featured: true
  },
  {
    id: 2,
    name: 'NO EXCUSES T-Shirt',
    category: 'motivation-apparel',
    price: 24.99,
    description: 'Cotton blend tee with bold motivational design',
    image: 'https://images.pexels.com/photos/8844325/pexels-photo-8844325.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/no-excuses-tshirt',
    featured: true
  },
  {
    id: 3,
    name: 'GRIND Gym Shorts',
    category: 'motivation-apparel',
    price: 34.99,
    description: 'Performance shorts for intense workouts',
    image: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/grind-gym-shorts'
  },
  
  // Gym & Fitness Gear
  {
    id: 4,
    name: 'Elite Resistance Bands Set',
    category: 'gym-fitness',
    price: 39.99,
    description: 'Professional grade resistance training kit',
    image: 'https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/elite-resistance-bands',
    featured: true
  },
  {
    id: 5,
    name: 'Premium Protein Shaker',
    category: 'gym-fitness',
    price: 19.99,
    description: 'Leak-proof shaker with measurement marks',
    image: 'https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/premium-protein-shaker'
  },
  {
    id: 6,
    name: 'Heavy Duty Lifting Gloves',
    category: 'gym-fitness',
    price: 29.99,
    description: 'Professional grip and wrist support',
    image: 'https://images.pexels.com/photos/7335257/pexels-photo-7335257.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/heavy-duty-lifting-gloves',
    featured: true
  },
  
  // Ebooks & Courses
  {
    id: 7,
    name: 'Mental Fortress Ebook',
    category: 'ebooks-courses',
    price: 29.99,
    description: 'Build unbreakable mental strength',
    image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://gumroad.com/mental-fortress-ebook',
    featured: true
  },
  {
    id: 8,
    name: 'Elite Nutrition Course',
    category: 'ebooks-courses',
    price: 97.00,
    description: 'Complete guide to peak performance nutrition',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://udemy.com/elite-nutrition-course'
  },
  
  // Luxury Lifestyle
  {
    id: 9,
    name: 'Diamond Elite Watch',
    category: 'luxury-lifestyle',
    price: 299.99,
    description: 'Luxury timepiece for champions',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/diamond-elite-watch',
    featured: true
  },
  {
    id: 10,
    name: 'Success Journal - Gold Edition',
    category: 'luxury-lifestyle',
    price: 59.99,
    description: 'Premium leather-bound goal tracking journal',
    image: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=600',
    affiliateLink: 'https://amazon.com/success-journal-gold'
  }
];

export const translations = {
  en: {
    title: 'What Ever It Takes',
    heroTitle: 'WHATEVER IT TAKES',
    heroSubtitle: 'Premium gear for the relentless pursuit of greatness',
    heroDescription: 'Discover our curated collection of motivation apparel, elite fitness gear, transformational courses, and luxury lifestyle products.',
    ctaButton: 'Explore Collection',
    featuredTitle: 'Featured Products',
    categoriesTitle: 'Shop by Category',
    viewAll: 'View All',
    buyNow: 'Buy Now',
    search: 'Search products...',
    allCategories: 'All Categories',
    price: 'Price',
    footer: {
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      followUs: 'Follow Us'
    }
  },
  ar: {
    title: 'مهما كان الأمر',
    heroTitle: 'مهما كان الأمر',
    heroSubtitle: 'معدات فاخرة للسعي اللامتناهي نحو العظمة',
    heroDescription: 'اكتشف مجموعتنا المنتقاة من ملابس التحفيز ومعدات اللياقة النخبة والدورات التحويلية ومنتجات نمط الحياة الفاخرة.',
    ctaButton: 'استكشف المجموعة',
    featuredTitle: 'المنتجات المميزة',
    categoriesTitle: 'تسوق حسب الفئة',
    viewAll: 'عرض الكل',
    buyNow: 'اشتري الآن',
    search: 'البحث عن المنتجات...',
    allCategories: 'جميع الفئات',
    price: 'السعر',
    footer: {
      about: 'معلومات عنا',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      followUs: 'تابعنا'
    }
  }
};
