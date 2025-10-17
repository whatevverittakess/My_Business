'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  readMoreText: string;
}

export function BlogCard({ post, readMoreText }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute top-4 left-4">
            <motion.span
              className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {post.category}
            </motion.span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.author}</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center text-[#D4AF37] font-semibold group-hover:text-[#B8941F] transition-colors duration-300">
            {readMoreText}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="h-4 w-4 ml-2" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}