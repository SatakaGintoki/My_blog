'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Comments() {
  // 评论功能暂时禁用
  // 如需启用，请配置 Giscus：
  // 1. 在 GitHub 仓库安装 Giscus App: https://github.com/apps/giscus
  // 2. 启用仓库的 Discussions 功能
  // 3. 在下方 script 标签中填写正确的 data-repo、data-repo-id、data-category-id

  return null;

  /*
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle size={20} className="text-blue-500" />
        <h3 className="text-lg font-semibold">评论</h3>
      </div>

      <div className="glass-card overflow-hidden">
        <script
          src="https://giscus.app/client.js"
          data-repo="your-username/your-repo"
          data-repo-id="your-repo-id"
          data-category="Announcements"
          data-category-id="your-category-id"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="zh-CN"
          crossOrigin="anonymous"
          async
        />
      </div>
    </motion.div>
  );
  */
}