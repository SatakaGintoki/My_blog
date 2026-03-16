import { notFound } from 'next/navigation';
import { getPostsByTag, getAllTags } from '@/lib/posts';
import TagPageContent from './TagPageContent';

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

// 静态生成所有标签页面
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  return <TagPageContent tag={decodedTag} posts={posts} />;
}