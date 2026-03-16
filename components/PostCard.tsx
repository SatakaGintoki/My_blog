'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  index?: number;
}

export default function PostCard({ slug, title, date, tags, description, index = 0 }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/blog/${slug}/`} className="block group">
        <div className="glass-card p-6 h-full flex flex-col">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 text-sm flex-grow">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100/80 dark:border-gray-800/80">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <Calendar size={12} />
              <time dateTime={date}>{date}</time>
            </div>

            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, x: 2 }}
              className="flex items-center gap-0.5 text-xs text-blue-500 font-medium"
            >
              阅读
              <ArrowUpRight size={12} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}