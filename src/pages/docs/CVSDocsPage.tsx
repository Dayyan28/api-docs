import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';

const CVSDocsPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load content from the new directory structure
        const markdownContent = await loadMarkdownFile('/docs/cvs/_cvs_overview.md');
        setContent(markdownContent);
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setContent('# Error\nFailed to load documentation content.');
      }
    };

    loadContent();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-invert max-w-none">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
};

export default CVSDocsPage;