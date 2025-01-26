import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';

const VSPDocsPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load overview content first
        const overviewContent = await loadMarkdownFile('/docs/vsp/_vsp.md');
        
        // Load additional content
        const modelsContent = await loadMarkdownFile('/docs/vsp/_vsp_models.md');
        const transactionsContent = await loadMarkdownFile('/docs/vsp/_vsp_transactions.md');
        
        // Combine content in desired order
        const combinedContent = [
          overviewContent,
          modelsContent,
          transactionsContent
        ].join('\n\n');
        
        setContent(combinedContent);
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

export default VSPDocsPage;