import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const CVSDocsPage = () => {
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
        const overviewContent = await loadMarkdownFile('/docs/cvs/_cvs_overview.md');
        const campaignsContent = await loadMarkdownFile('/docs/cvs/_cvs_campaigns.md');
        const couponsContent = await loadMarkdownFile('/docs/cvs/_cvs_coupons.md');
        const giftcardsContent = await loadMarkdownFile('/docs/cvs/_cvs_giftcards.md');
        
        const combinedContent = [
          overviewContent,
          campaignsContent,
          couponsContent,
          giftcardsContent
        ].join('\n\n');
        
        setContent(combinedContent);
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
        {/* Left Navigation Sidebar */}
        <div className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-gray-200">
          <DocsSidebar 
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

        {/* Main Content */}
        <div className="flex-1 px-8 py-6">
          <div className="prose prose-black max-w-none">
            <MarkdownRenderer 
              content={content} 
              onCodeBlockVisible={handleCodeBlockVisible}
            />
          </div>
        </div>

        {/* Right Code Examples Column */}
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

export default CVSDocsPage;