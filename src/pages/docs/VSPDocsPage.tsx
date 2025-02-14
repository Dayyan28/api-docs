
import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const VSPDocsPage = () => {
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
          '/docs/vsp/_vsp.md',
          '/docs/vsp/_vsp_models.md',
          '/docs/vsp/_vsp_integration_requirements.md',
          '/docs/vsp/_vsp_tokens.md',
          '/docs/vsp/_vsp_transactions.md'
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

  const handleCodeBlockVisible = (codeBlock: {
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  }) => {
    setActiveCodeExample(codeBlock);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <div className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-gray-200">
          <DocsSidebar 
            docType="vsp"
            activeSection={activeSection}
            onSectionClick={(sectionId) => {
              setActiveSection(sectionId);
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>

        <div className="flex-1 px-8 py-6">
          <div className="prose prose-black max-w-none">
            <MarkdownRenderer 
              content={content} 
              onCodeBlockVisible={handleCodeBlockVisible}
            />
          </div>
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
      </div>
    </div>
  );
};

export default VSPDocsPage;
