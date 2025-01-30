import { useEffect, useState, useRef } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const POSDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
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
          '/docs/pos/_pos_overview.md',
          '/docs/pos/_pos_api.md',
          '/docs/pos/_pos_transaction.md',
          '/docs/pos/_pos_refund.md',
          '/docs/pos/_pos_bills.md'
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
    const element = document.getElementById(sectionId) || 
                   document.querySelector(`[data-section="${sectionId}"]`) ||
                   document.querySelector(`h1, h2, h3`);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

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

export default POSDocsPage;