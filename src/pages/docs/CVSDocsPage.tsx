import { useEffect, useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { CodeBlock } from '@/components/CodeBlock';

const CVSDocsPage = () => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        // This path should point to your markdown file in the public directory
        const markdownContent = await loadMarkdownFile('/docs/cvs/index.md');
        setContent(markdownContent);
      } catch (error) {
        console.error('Failed to load documentation:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Here you can add logic to load different markdown files based on the section
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
      <DocsSidebar 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick}
      />
      <main className="flex-1 p-8">
        <MarkdownRenderer content={content} />
      </main>
      <aside className="w-96 p-6 border-l border-secondary-teal">
        <div className="sticky-sidebar">
          <CodeBlock
            method="GET"
            endpoint="/api/v1/example"
            request={`{
  "key": "value"
}`}
            response={`{
  "success": true,
  "data": {
    "id": "123",
    "status": "active"
  }
}`}
            isVisible={true}
          />
        </div>
      </aside>
    </div>
  );
};

export default CVSDocsPage;