---
title: "Tailwind CSS 实用技巧"
date: "2024-03-14"
tags: ["CSS", "Tailwind", "前端"]
description: "分享 Tailwind CSS 的实用技巧和最佳实践，提升你的样式开发效率。"
---

# Tailwind CSS 实用技巧

Tailwind CSS 是一个功能类优先的 CSS 框架，让你可以快速构建现代网站。

## 响应式设计

Tailwind 内置响应式断点：

```html
<div class="text-sm md:text-base lg:text-lg">
  响应式文字大小
</div>
```

## 暗黑模式

使用 `dark:` 前缀轻松实现暗黑模式：

```html
<div class="bg-white dark:bg-gray-900">
  自适应主题背景
</div>
```

## 常用工具类

- **布局**: `flex`, `grid`, `container`
- **间距**: `p-4`, `m-2`, `gap-4`
- **文字**: `text-lg`, `font-bold`, `text-center`
- **颜色**: `bg-blue-500`, `text-gray-100`

## 总结

Tailwind CSS 通过原子化的工具类，让样式开发变得高效且一致。