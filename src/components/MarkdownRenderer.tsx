
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Components } from 'react-markdown';
import { Skeleton } from './ui/skeleton';
import { useToast } from "@/hooks/use-toast";

interface MarkdownRendererProps {
  content: string;
  className?: string;
  onCodeBlockVisible?: (codeBlock: {
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  }) => void;
  isLoading?: boolean;
}

export const MarkdownRenderer = ({ content, className, onCodeBlockVisible, isLoading }: MarkdownRendererProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleFeedback = (type: 'up' | 'down', sectionId: string) => {
    if (!feedbackGiven[sectionId]) {
      setFeedbackGiven(prev => ({ ...prev, [sectionId]: true }));
      toast({
        title: "Thank you for your feedback!",
        description: "Your feedback helps us improve our documentation.",
        duration: 3000,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-6">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    );
  }

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
        <code className={cn("bg-codebg text-codefg px-2 py-1 rounded font-mono", className)} {...props}>
          {children}
        </code>
      );
    },
    // Add feedback section after each h2 heading
    h2({ children }) {
      const sectionId = String(children).toLowerCase().replace(/\s+/g, '-');
      return (
        <div className="mb-8">
          <h2 id={sectionId} className="scroll-mt-20 text-2xl font-bold mb-4">
            {children}
          </h2>
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
            <span>Was this section helpful?</span>
            <button
              onClick={() => handleFeedback('up', sectionId)}
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 transition-colors",
                feedbackGiven[sectionId] && "text-green-500"
              )}
              aria-label="Yes, this was helpful"
            >
              <ThumbsUp size={16} />
            </button>
            <button
              onClick={() => handleFeedback('down', sectionId)}
              className={cn(
                "p-2 rounded-full hover:bg-gray-100 transition-colors",
                feedbackGiven[sectionId] && "text-red-500"
              )}
              aria-label="No, this wasn't helpful"
            >
              <ThumbsDown size={16} />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <ReactMarkdown
      className={cn('docs-content prose prose-slate dark:prose-invert max-w-none', className)}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};
