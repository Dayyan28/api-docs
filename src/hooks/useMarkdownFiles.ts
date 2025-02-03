import { useState, useEffect } from 'react';
import { DocType } from '@/types/navigation';

export const useMarkdownFiles = (docType: DocType) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/docs/${docType}/_${docType}_overview.md`);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setMarkdownContent('Error loading content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [docType]);

  return { markdownContent, isLoading };
};