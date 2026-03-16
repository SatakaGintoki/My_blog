import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import PostPageContent from './PostPageContent';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静态生成所有文章页面
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 将 markdown 转换为带语法高亮的 HTML
  const renderedContent = await markdownToHtml(post.content);

  return <PostPageContent post={post} renderedContent={renderedContent} />;
}