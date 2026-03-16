import { getAllPosts, getAllTags } from '@/lib/posts';
import HomePage from './HomePage';

export default function Home() {
  const posts = getAllPosts().slice(0, 6);
  const tags = getAllTags();

  return <HomePage posts={posts} tags={tags} />;
}