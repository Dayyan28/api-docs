// src/pages/docs/VSPDocsPage.tsx
import { useState, useEffect } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { cn } from '@/lib/utils';

const VSPDocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [parsedContent, setParsedContent] = useState<ParsedContent | null>(null);

  useEffect(() => {
    const content = parseMarkdownWithSnippets(vspContent);
    setParsedContent(content);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - Navigation */}
      <div className="w-64 border-r">
        <DocsSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl px-8 py-6">
          {parsedContent && (
            <MarkdownRenderer 
              content={parsedContent.content}
              onSectionVisible={setActiveSection}
            />
          )}
        </div>
      </div>

      {/* Right Sidebar - Code Snippets */}
      <div className="w-96 border-l overflow-auto">
        <div className="sticky top-0 p-4 space-y-4">
          {parsedContent?.snippets.map(snippet => (
            <div 
              key={snippet.id}
              id={`snippet-${snippet.id}`}
              className="rounded-lg bg-gray-50 p-4"
            >
              <div className="text-sm font-medium text-gray-500 mb-2">
                {snippet.context}
              </div>
              <pre className="overflow-x-auto">
                <code className={`language-${snippet.language}`}>
                  {JSON.stringify(JSON.parse(snippet.code), null, 2)}
                </code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VSPDocsPage;
