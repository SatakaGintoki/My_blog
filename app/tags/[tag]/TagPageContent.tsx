'use client';

import { motion } from 'framer-motion';
import { Hash, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { PostSummary } from '@/lib/posts';

interface TagPageContentProps {
  tag: string;
  posts: PostSummary[];
}

export default function TagPageContent({ tag, posts }: TagPageContentProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>返回文章列表</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
          <Hash size={28} className="text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">{tag}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          共 {posts.length} 篇文章
        </p>
      </motion.div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <PostCard key={post.slug} {...post} index={index} />
        ))}
      </div>
    </div>
  );
}