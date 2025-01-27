import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';

const CVSDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

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

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Navigation Sidebar */}
        <div className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-gray-200">
          <DocsSidebar 
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-8 py-6">
          <div className="prose prose-black max-w-none">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        {/* Right Code Snippets Column */}
        <div className="w-1/3 h-screen sticky top-0 overflow-y-auto bg-gray-50 p-4">
          <div className="rounded-lg bg-gray-100 p-4">
            <h3 className="text-sm font-semibold mb-2">Code Example</h3>
            <pre className="text-sm overflow-x-auto">
              <code className="language-json">
                {/* Code snippets will be dynamically inserted here */}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVSDocsPage;