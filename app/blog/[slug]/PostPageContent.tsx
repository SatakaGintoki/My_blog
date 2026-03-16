'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Comments from '@/components/Comments';
import { Post } from '@/lib/posts';

interface PostPageContentProps {
  post: Post;
  renderedContent: string;
}

// 估算阅读时间
function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.length;
  return Math.ceil(words / wordsPerMinute);
}

export default function PostPageContent({ post, renderedContent }: PostPageContentProps) {
  const { frontmatter, content } = post;
  const readTime = estimateReadTime(content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
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
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {frontmatter.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}/`}
              className="tag"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {frontmatter.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          </div>
          {frontmatter.author && (
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{frontmatter.author}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{readTime} 分钟阅读</span>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 sm:p-10"
      >
        <div
          className="prose max-w-none dark:prose-invert prose-code-block"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </motion.div>

      {/* Comments */}
      <Comments />
    </article>
  );
}