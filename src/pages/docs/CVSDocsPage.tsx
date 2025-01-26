import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';

const CVSDocsPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load overview content first
        const overviewContent = await loadMarkdownFile('/docs/cvs/_cvs_overview.md');
        
        // Load additional content
        const campaignsContent = await loadMarkdownFile('/docs/cvs/_cvs_campaigns.md');
        const couponsContent = await loadMarkdownFile('/docs/cvs/_cvs_coupons.md');
        const giftcardsContent = await loadMarkdownFile('/docs/cvs/_cvs_giftcards.md');
        
        // Combine content in desired order
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-invert max-w-none">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
};

export default CVSDocsPage;