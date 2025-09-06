import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'What Ever It Takes - Premium Motivation & Fitness Gear',
  description: 'Premium gear for the relentless pursuit of greatness. Discover our curated collection of motivation apparel, elite fitness gear, transformational courses, and luxury lifestyle products.',
  keywords: 'motivation, fitness, gym wear, luxury lifestyle, affiliate marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
