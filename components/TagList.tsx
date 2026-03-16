'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hash } from 'lucide-react';

interface TagListProps {
  tags: string[];
  currentTag?: string;
  counts?: Record<string, number>;
}

export default function TagList({ tags, currentTag, counts }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.div
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.03 }}
        >
          <Link href={`/tags/${tag}/`}>
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                currentTag === tag
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Hash size={12} />
              {tag}
              {counts && counts[tag] > 0 && (
                <span className={`text-xs ${currentTag === tag ? 'text-white/80' : 'text-gray-400'}`}>
                  {counts[tag]}
                </span>
              )}
            </motion.span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}