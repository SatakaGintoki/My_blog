import { getAllTags } from './posts';

export interface TagCount {
  name: string;
  count: number;
}

// 获取标签及其文章数量
export function getTagsWithCount(): TagCount[] {
  // 由于静态导出，需要在构建时计算
  // 这里返回一个简单的标签列表，实际数量在构建时确定
  const tags = getAllTags();
  return tags.map(tag => ({
    name: tag,
    count: 0, // 将在客户端或构建时更新
  }));
}

// 获取标签云数据（按文章数量排序）
export function getTagCloud(): TagCount[] {
  return getTagsWithCount().sort((a, b) => b.count - a.count);
}