import { useEffect, useState, useRef } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';
import { ErrorCodesDialog } from '@/components/ErrorCodesDialog';
import { Button } from '@/components/ui/button';

const CVSDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
  const [showErrorCodes, setShowErrorCodes] = useState(false);
  const [activeCodeExample, setActiveCodeExample] = useState<{
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const files = [
          '/docs/cvs/_cvs_overview.md',
          '/docs/cvs/_cvs_giftcardcampaigns.md',
          '/docs/cvs/_cvs_giftcards.md',
          '/docs/cvs/_cvs_giftcardtransactions.md',
          '/docs/cvs/_cvs_transactions.md',
          '/docs/cvs/_cvs_physicalgiftcards.md'
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

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const sections = contentRef.current.querySelectorAll('h1, h2, h3');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          const sectionId = section.id || section.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
          if (sectionId) {
            currentSection = sectionId;
          }
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

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
        <DocsSidebar 
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />

        <div className="flex-1 px-8 py-6" ref={contentRef}>
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              onClick={() => setShowErrorCodes(true)}
              className="text-primary-dark-teal hover:text-primary-orange"
            >
              View Error Codes
            </Button>
          </div>
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

      <ErrorCodesDialog
        open={showErrorCodes}
        onOpenChange={setShowErrorCodes}
        serviceName="cvs"
      />
    </div>
  );
};

export default CVSDocsPage;