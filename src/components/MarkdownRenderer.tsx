
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
  renderJsonInline?: boolean;
  onCodeBlockVisible?: (codeBlock: {
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  }) => void;
}

export const MarkdownRenderer = ({ 
  content, 
  className, 
  renderJsonInline = true,
  onCodeBlockVisible 
}: MarkdownRendererProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Extract technical examples from content
  const extractTechnicalExamples = (markdown: string) => {
    const examples: {
      method?: string;
      endpoint?: string;
      request?: string;
      response?: string;
    }[] = [];

    // Find json code blocks
    const jsonBlocks = markdown.match(/```json([\s\S]*?)```/g) || [];
    
    jsonBlocks.forEach(block => {
      const content = block.replace(/```json\n?/, '').replace(/```$/, '');
      
      // Extract method and endpoint
      const methodMatch = content.match(/(?:GET|POST|PUT|DELETE)/);
      const endpointMatch = content.match(/curl\s+"([^"]+)"/);
      
      // Split into request and response sections
      const sections = content.split(/# Example |#\s*Example /);
      const requestSection = sections.find(section => section.toLowerCase().includes('request'));
      const responseSection = sections.find(section => section.toLowerCase().includes('response'));

      if (methodMatch || endpointMatch || requestSection || responseSection) {
        examples.push({
          method: methodMatch ? methodMatch[0] : undefined,
          endpoint: endpointMatch ? endpointMatch[1] : undefined,
          request: requestSection ? requestSection.trim() : undefined,
          response: responseSection ? responseSection.trim() : undefined
        });
      }
    });

    return examples;
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
        
        // Handle JSON blocks based on renderJsonInline prop
        if (match[1] === 'json') {
          const examples = extractTechnicalExamples(codeContent);
          
          if (examples.length > 0 && onCodeBlockVisible) {
            useEffect(() => {
              onCodeBlockVisible(examples[0]);
            }, []);
          }
          
          // Only render JSON if renderJsonInline is true
          if (!renderJsonInline) {
            return null;
          }
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
    },
    // Add specific heading styles
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mb-3 mt-4">{children}</h3>
    ),
    // Add table styles
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {children}
      </td>
    ),
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
