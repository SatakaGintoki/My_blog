import { PostSummary, getAllPosts } from './posts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let searchIndex: any = null;
let postsData: PostSummary[] = [];

// 初始化搜索索引
export function initSearchIndex(): void {
  postsData = getAllPosts();

  // 动态导入 FlexSearch（仅客户端）
  if (typeof window !== 'undefined') {
    import('flexsearch').then((FlexSearch) => {
      searchIndex = new FlexSearch.Document({
        tokenize: 'forward',
        document: {
          id: 'slug',
          index: ['title', 'description', 'tags'],
        },
      });

      postsData.forEach(post => {
        searchIndex.add(post.slug, {
          title: post.title,
          description: post.description,
          tags: post.tags.join(' '),
        });
      });
    });
  }
}

// 搜索文章
export function searchPosts(query: string): PostSummary[] {
  if (postsData.length === 0) {
    postsData = getAllPosts();
  }

  if (!query.trim()) {
    return postsData;
  }

  // 简单的客户端搜索
  const lowerQuery = query.toLowerCase();
  return postsData.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// 获取所有文章用于搜索
export function getSearchData(): PostSummary[] {
  if (postsData.length === 0) {
    postsData = getAllPosts();
  }
  return postsData;
}