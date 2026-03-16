'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Twitter, MapPin } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { PostSummary } from '@/lib/posts';

interface HomePageProps {
  posts: PostSummary[];
  tags: string[];
}

// 个人信息配置
const profile = {
  name: 'Kuronya~',
  bio: '学生 / 新手小白',
  location: '中国',
  avatar: '/avatar.jpg', // 可以替换成你自己的头像
  social: {
    github: 'https://github.com',
    email: 'mailto:hello@example.com',
    twitter: 'https://twitter.com',
  },
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div className="page-transition">
      {/* Hero Section - 个人信息展示 */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* 装饰背景 - 更柔和的 Mac 风格 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* 头像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white/80 dark:ring-gray-800/80 shadow-xl shadow-gray-200/50 dark:shadow-black/30"
              >
                {/* 默认头像占位符 */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {profile.name.charAt(0)}
                  </span>
                </div>
              </motion.div>
              {/* 在线状态指示器 */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
              />
            </div>
          </motion.div>

          {/* 名字 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
          >
            {profile.name}
          </motion.h1>

          {/* 简介 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-3"
          >
            {profile.bio}
          </motion.p>

          {/* 位置 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-1 text-sm text-gray-400 dark:text-gray-500 mb-6"
          >
            <MapPin size={14} />
            <span>{profile.location}</span>
          </motion.div>

          {/* 社交链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={profile.social.email}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </motion.a>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                阅读文章
                <ArrowRight size={16} />
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                关于我
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 最新文章 Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">最新文章</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">记录学习与成长</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              查看全部
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <p className="text-gray-400 dark:text-gray-500">
                暂无文章，请添加 MDX 文件到 content/posts 目录
              </p>
            </motion.div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                查看全部文章
                <ArrowRight size={16} className="ml-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}