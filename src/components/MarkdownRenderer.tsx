
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  onCodeBlockVisible?: (codeBlock: {
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  }) => void;
  isCodePanel?: boolean;
}

export const MarkdownRenderer = ({ 
  content, 
  className, 
  onCodeBlockVisible,
  isCodePanel = false 
}: MarkdownRendererProps) => {
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
      const codeContent = String(children);

      if (!inline && match) {
        const isJsonExample = match[1] === 'json' && codeContent.includes('# Example');
        
        // Only process code examples in the appropriate panel
        if (isJsonExample && !isCodePanel) {
          // Extract method and endpoint
          const methodMatch = codeContent.match(/(?:GET|POST|PUT|DELETE)/);
          const endpointMatch = codeContent.match(/curl\s+"([^"]+)"/);
          
          // Extract request and response sections
          const sections = codeContent.split(/# Example |#\s*Example /);
          const requestSection = sections.find(section => 
            section.toLowerCase().includes('request')
          );
          const responseSection = sections.find(section => 
            section.toLowerCase().includes('response')
          );

          if (onCodeBlockVisible) {
            onCodeBlockVisible({
              method: methodMatch ? methodMatch[0] : undefined,
              endpoint: endpointMatch ? endpointMatch[1] : undefined,
              request: requestSection?.trim(),
              response: responseSection?.trim()
            });
          }

          // Add a reference to code panel
          return (
            <div className="my-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-2">
                See the code example panel for the complete request and response structure.
              </p>
              <p className="text-sm text-gray-500">
                {methodMatch && <span className="font-mono text-green-600">{methodMatch[0]}</span>}
                {endpointMatch && <span className="ml-2 font-mono">{endpointMatch[1]}</span>}
              </p>
            </div>
          );
        }

        return (
          <div className="relative my-4">
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
