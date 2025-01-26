import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';

const POSDocsPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load overview content first
        const overviewContent = await loadMarkdownFile('/docs/pos/_pos_overview.md');
        
        // Load additional content
        const historyContent = await loadMarkdownFile('/docs/pos/_pos_history.md');
        const transactionContent = await loadMarkdownFile('/docs/pos/_pos_transaction.md');
        const refundContent = await loadMarkdownFile('/docs/pos/_pos_refund.md');
        
        // Combine content in desired order
        const combinedContent = [
          overviewContent,
          historyContent,
          transactionContent,
          refundContent
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

export default POSDocsPage;