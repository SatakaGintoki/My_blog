'use client';

import { motion } from 'framer-motion';
import PostCard from '@/components/PostCard';
import TagList from '@/components/TagList';
import SearchBox from '@/components/SearchBox';
import { FileText } from 'lucide-react';
import { PostSummary } from '@/lib/posts';

interface BlogPageContentProps {
  posts: PostSummary[];
  tags: string[];
}

export default function BlogPageContent({ posts, tags }: BlogPageContentProps) {
  // 计算每个标签的文章数量
  const tagCounts: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
          <FileText size={28} className="text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">博客文章</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          共 {posts.length} 篇文章，记录学习与成长
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-md mx-auto mb-10"
      >
        <SearchBox posts={posts} placeholder="搜索标题、内容或标签..." />
      </motion.div>

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            按标签筛选
          </h2>
          <TagList tags={tags} counts={tagCounts} />
        </motion.div>
      )}

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.slug} {...post} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card p-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">暂无文章</p>
        </motion.div>
      )}
    </div>
  );
}