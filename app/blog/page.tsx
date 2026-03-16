import { getAllPosts, getAllTags } from '@/lib/posts';
import BlogPageContent from './BlogPageContent';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <BlogPageContent posts={posts} tags={tags} />;
}