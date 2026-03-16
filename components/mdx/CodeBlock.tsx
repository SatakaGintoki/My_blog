'use client';

import { ReactNode, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  htmlContent?: string;
}

export default function CodeBlock({ className, htmlContent }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLDivElement>(null);

  // 提取语言
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'code';

  const handleCopy = async () => {
    if (preRef.current) {
      const code = preRef.current.textContent || '';
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-window my-6">
      {/* 窗口标题栏 */}
      <div className="code-window-header">
        <div className="code-window-buttons">
          <span className="code-window-btn close" />
          <span className="code-window-btn minimize" />
          <span className="code-window-btn maximize" />
        </div>
        <span className="code-window-lang">{language}</span>
        <button
          onClick={handleCopy}
          className="code-window-copy"
          aria-label="复制代码"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      {/* 代码内容 */}
      <div ref={preRef} className="code-content">
        {htmlContent ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <pre><code>代码加载中...</code></pre>
        )}
      </div>
    </div>
  );
}