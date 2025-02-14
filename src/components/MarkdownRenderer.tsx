
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
}

export const MarkdownRenderer = ({ content, className, onCodeBlockVisible }: MarkdownRendererProps) => {
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
        const codeContent = String(children);
        
        // Extract method from the first line that contains GET, POST, PUT, or DELETE
        const methodMatch = codeContent.match(/(?:GET|POST|PUT|DELETE)/);
        
        // Extract endpoint from the URL in the curl command
        const endpointMatch = codeContent.match(/curl\s+"([^"]+)"|^(https?:\/\/[^\s]+)/m);
        
        // Extract request and response sections
        let requestSection = '';
        let responseSection = '';

        if (codeContent.includes('# Example')) {
          const sections = codeContent.split(/# Example |#\s*Example /);
          requestSection = sections.find(section => 
            section.toLowerCase().includes('request') || 
            (!section.toLowerCase().includes('response') && section.includes('{'))
          );
          responseSection = sections.find(section => 
            section.toLowerCase().includes('response')
          );
        } else if (codeContent.includes('{')) {
          // If there's no explicit request/response marking but there's JSON
          requestSection = codeContent;
        }

        if (onCodeBlockVisible && (methodMatch || endpointMatch || requestSection || responseSection)) {
          onCodeBlockVisible({
            method: methodMatch ? methodMatch[0] : undefined,
            endpoint: endpointMatch ? (endpointMatch[1] || endpointMatch[2]) : undefined,
            request: requestSection ? requestSection.trim() : undefined,
            response: responseSection ? responseSection.trim() : undefined
          });
          
          // Return a placeholder for the main content
          return (
            <div className="text-gray-500 italic text-sm my-4">
              See code example in the right panel
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
