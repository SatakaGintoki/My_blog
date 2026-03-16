import { createHighlighter, type Highlighter } from 'shiki';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';

let highlighterInstance: Highlighter | null = null;

async function getHighlighter() {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      themes: ['github-dark'],
      langs: ['javascript', 'typescript', 'jsx', 'tsx', 'bash', 'json', 'css', 'html', 'markdown', 'python', 'rust', 'vue', 'go', 'java'],
    });
  }
  return highlighterInstance;
}

// 将 markdown 转换为带高亮的 HTML
export async function markdownToHtml(content: string): Promise<string> {
  const highlighter = await getHighlighter();

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm) // 支持 GitHub 风格 Markdown（表格、删除线等）
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, {
      highlighter,
      theme: 'github-dark',
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return String(file);
}