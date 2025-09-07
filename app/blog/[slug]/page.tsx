import { notFound } from 'next/navigation';
import { BlogPostClient } from '@/components/BlogPostClient';
import { blogPosts } from '@/data/blogs';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - What Ever It Takes',
    };
  }

  return {
    title: `${post.title} - What Ever It Takes Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}