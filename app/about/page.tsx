'use client';

import { motion } from 'framer-motion';
import { Github, Mail, MapPin, Calendar, Code2, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

const skills = [
  { name: 'TypeScript', level: 90 },
  { name: 'React / Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'CSS / Tailwind', level: 85 },
];

const stats = [
  { label: '文章', value: '50+', icon: Sparkles },
  { label: '项目', value: '20+', icon: Code2 },
  { label: '经验', value: '3年+', icon: Calendar },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
        >
          <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">关于我</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          一名热爱技术的开发者
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-16"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <Icon size={24} className="mx-auto mb-2 text-blue-500" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">个人简介</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            我是一个蒟蒻小白，没有什么经验，请多指教
          </p>
          <p>
            这个博客是我记录学习和成长的地方。
            希望我的文章能够帮助到你！
          </p>
        </div>

        {/* Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MapPin size={18} className="text-blue-500" />
            <span>中国</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <Mail size={18} className="text-blue-500" />
            <a href="mailto:your@email.com" className="hover:text-blue-500 transition-colors">
              your@email.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <Github size={18} className="text-blue-500" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-8 mb-8"
      >
        <h2 className="text-2xl font-bold mb-6">技术栈</h2>
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-8"
      >
        <h2 className="text-2xl font-bold mb-6">关于本站</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          本站使用以下技术构建：
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Next.js 14+ (App Router)',
            'TypeScript',
            'Tailwind CSS',
            'MDX',
            'Framer Motion',
            'Giscus 评论',
          ].map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </div>
  );
}