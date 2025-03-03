
import { useState, useEffect } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { CodeBlock } from '@/components/CodeBlock';

const EcommerceDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
  const [activeCodeExample, setActiveCodeExample] = useState<{
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  } | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const files = [
          '/docs/ecommerce/_ecommerce_overview.md',
          // Add other eCommerce documentation files here
        ];

        const contents = await Promise.all(files.map(file => loadMarkdownFile(file)));
        setContent(contents.join('\n\n'));
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setContent('# Error\nFailed to load documentation content.');
      }
    };

    loadContent();
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-white min-h-screen">
      <DocsSidebar 
        docType="ecommerce"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <main className="flex-1 flex">
        <div className="docs-content">
          <MarkdownRenderer 
            content={content}
            onCodeBlockVisible={setActiveCodeExample}
          />
        </div>

        <div className="w-1/3 h-screen sticky top-0 overflow-y-auto bg-gray-50 p-4">
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="text-sm font-semibold mb-2">Code Example</h3>
            {activeCodeExample ? (
              <CodeBlock
                method={activeCodeExample.method || ''}
                endpoint={activeCodeExample.endpoint || ''}
                request={activeCodeExample.request}
                response={activeCodeExample.response}
                isVisible={true}
              />
            ) : (
              <p className="text-gray-500 text-sm">
                Scroll through the documentation to see code examples here
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcommerceDocsPage;
