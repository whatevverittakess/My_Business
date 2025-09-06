import { notFound } from 'next/navigation';
import { CategoryPageClient } from '@/components/CategoryPageClient';
import { categories } from '@/data/products';

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find(cat => cat.id === params.id);
  
  if (!category) {
    notFound();
  }

  return <CategoryPageClient category={category} />;
}