# Kuronya 的个人博客

> 一个基于 Next.js 构建的 Mac 风格个人技术博客

## 🌐 在线访问

**https://satakagintoki.github.io/My_blog/**

## ✨ 特性

- 🎨 **Mac 风格设计** - 毛玻璃效果、红黄绿窗口按钮、简洁优雅
- 📝 **Markdown 博客** - 支持 GitHub 风格 Markdown（表格、代码高亮等）
- 🌙 **深色模式** - 自动适配系统主题，一键切换
- 📱 **响应式设计** - 完美适配桌面端和移动端
- ⚡ **静态生成** - 极速加载，SEO 友好
- 🔍 **文章搜索** - 快速查找感兴趣的内容
- 🏷️ **标签分类** - 按标签浏览文章

## 🛠️ 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **代码高亮**: Shiki
- **Markdown**: unified + remark-gfm
- **部署**: GitHub Pages

## 📁 项目结构

```
my_blog/
├── app/                 # 页面路由
│   ├── HomePage.tsx     # 首页
│   ├── blog/            # 博客列表和详情
│   ├── about/           # 关于页面
│   └── tags/            # 标签页面
├── components/          # 组件
├── content/posts/       # Markdown 博客文章
├── lib/                 # 工具函数
└── public/              # 静态资源
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

打开 http://localhost:3000 查看效果。

## 📝 写新文章

在 `content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: "2026-03-17"
tags: ["标签1", "标签2"]
description: "文章描述"
author: "Kuronya"
---

# 正文内容...
```

## 🔄 更新博客

修改内容后执行：

```bash
git add -A
git commit -m "更新内容"
git push
```

推送后 GitHub Actions 会自动部署，约 1-2 分钟生效。

## 📄 License

MIT