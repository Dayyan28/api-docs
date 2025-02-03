import { useState, useEffect } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';

const LoyaltyDocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const files = [
          '/docs/loyalty/_loyalty_overview.md',
          // Add other Loyalty documentation files here
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
        docType="loyalty"
        activeSection={activeSection} 
        onSectionClick={handleSectionClick} 
      />
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer content={content} />
        </div>
      </main>
    </div>
  );
};

export default LoyaltyDocsPage;