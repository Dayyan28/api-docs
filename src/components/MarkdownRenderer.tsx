import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components: Components = {
    code({ node, inline, className, children, ...props }: {
      node?: any;
      inline?: boolean;
      className?: string;
      children: React.ReactNode;
      [key: string]: any;
    }) {
      const match = /language-(\w+)/.exec(className || '');
      const codeIndex = Math.random();

      if (!inline && match) {
        return (
          <div className="relative float-right w-[45%] my-4">
            <div className="relative bg-codebg rounded-lg overflow-hidden">
              <button
                onClick={() => handleCopy(String(children), codeIndex)}
                className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Copy code"
              >
                <Copy 
                  size={16} 
                  className={cn(
                    "text-gray-400",
                    copiedIndex === codeIndex && "text-green-500"
                  )} 
                />
              </button>
              <pre className="p-4 overflow-x-auto">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            </div>
          </div>
        );
      }

      return (
        <code className={cn("bg-codebg text-codefg px-2 py-1 rounded", className)} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <ReactMarkdown
      className={cn('docs-content', className)}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};