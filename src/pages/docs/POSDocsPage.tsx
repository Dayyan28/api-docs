import { useState, useEffect } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { CodeBlock } from '@/components/CodeBlock';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const POSDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCodeExample, setActiveCodeExample] = useState<{
    method?: string;
    endpoint?: string;
    request?: string;
    response?: string;
  } | null>(null);
  
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadContent = async () => {
      try {
        const files = [
          '/docs/pos/_pos_overview.md',
          '/docs/pos/_pos_dual_messaging.md',
          '/docs/pos/_pos_models.md',
          '/docs/pos/_pos_api.md',
          '/docs/pos/_pos_transaction.md',
          '/docs/pos/_pos_advise.md',
          '/docs/pos/_pos_vas_token.md',
          '/docs/pos/_pos_history.md',
          '/docs/pos/_pos_bills.md',
          '/docs/pos/_pos_objects.md'
        ];

        const contents = await Promise.all(files.map(file => loadMarkdownFile(file)));
        setContent(contents.join('\n\n'));
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setContent('# Error\nFailed to load documentation content.');
      }
    };

    loadContent();
    
    // Set sidebar open state based on screen size
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={cn(
      "flex min-h-screen bg-white relative",
      isMobile && isSidebarOpen && "mobile-sidebar-open"
    )}>
      <DocsSidebar 
        docType="pos"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 overflow-auto">
          <div className="docs-content">
            <MarkdownRenderer 
              content={content}
              onCodeBlockVisible={setActiveCodeExample}
            />
          </div>
        </div>

        <div className="w-1/3 h-screen sticky top-0 overflow-y-auto bg-gray-50 p-4 border-l border-gray-200">
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

export default POSDocsPage;
