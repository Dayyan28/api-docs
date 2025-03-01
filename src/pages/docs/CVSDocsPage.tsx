
import { useState, useEffect } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
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
        const files = [
          '/docs/cvs/_cvs_overview.md',
          '/docs/cvs/_cvs_campaigns.md',
          '/docs/cvs/_cvs_couponcampaigns.md',
          '/docs/cvs/_cvs_coupons.md',
          '/docs/cvs/_cvs_coupontransactions.md',
          '/docs/cvs/_cvs_giftcardcampaigns.md',
          '/docs/cvs/_cvs_giftcards.md',
          '/docs/cvs/_cvs_giftcardtransactions.md',
          '/docs/cvs/_cvs_users.md',
          '/docs/cvs/_cvs_retailers.md',
          '/docs/cvs/_cvs_merchant.md',
          '/docs/cvs/_cvs_transactions.md',
          '/docs/cvs/_cvs_callback.md',
          '/docs/cvs/_cvs_test_cases.md',
          '/docs/cvs/_cvs_faqs.md'
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
    <div className="flex min-h-screen bg-white">
      <DocsSidebar 
        docType="cvs"
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

        <div className="docs-code-panel">
          <div className="rounded-lg bg-docsbg p-4 h-full">
            <h3 className="text-sm font-semibold mb-2 text-white">Code Example</h3>
            {activeCodeExample ? (
              <CodeBlock
                method={activeCodeExample.method || ''}
                endpoint={activeCodeExample.endpoint || ''}
                request={activeCodeExample.request}
                response={activeCodeExample.response}
                isVisible={true}
              />
            ) : (
              <p className="text-gray-400 text-sm">
                Scroll through the documentation to see code examples here
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CVSDocsPage;
