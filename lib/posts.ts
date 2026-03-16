import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  description: string;
  author?: string;
  coverImage?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  author?: string;
  coverImage?: string;
}

// 获取所有文章的 slug
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.mdx?$/, ''));
}

// 获取单篇文章
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const mdFilePath = path.join(postsDirectory, `${slug}.md`);

  let fullPath = '';
  if (fs.existsSync(filePath)) {
    fullPath = filePath;
  } else if (fs.existsSync(mdFilePath)) {
    fullPath = mdFilePath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

// 获取所有文章（摘要信息）
export function getAllPosts(): PostSummary[] {
  const slugs = getAllPostSlugs();
  const posts: PostSummary[] = [];

  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) {
      posts.push({
        slug: post.slug,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags || [],
        description: post.frontmatter.description,
        author: post.frontmatter.author,
        coverImage: post.frontmatter.coverImage,
      });
    }
  }

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

// 获取所有标签
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

// 根据标签获取文章
export function getPostsByTag(tag: string): PostSummary[] {
  const posts = getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

// 搜索文章
export function searchPosts(query: string): PostSummary[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}