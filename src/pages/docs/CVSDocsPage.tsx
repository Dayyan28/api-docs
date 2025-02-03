import { useState, useEffect } from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { loadMarkdownFile } from '@/utils/markdown';
import { DocsSidebar } from '@/components/DocsSidebar';

const CVSDocsPage = () => {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const files = [
          '/docs/cvs/_cvs_overview.md',
          '/docs/cvs/_cvs_campaigns.md',
          '/docs/cvs/_cvs_couponcampaigns.md',
          '/docs/cvs/_cvs_coupons.md',
          '/docs/cvs/_cvs_coupontransactions.md',
          '/docs/cvs/_cvs_giftcardcampaigns.md',
          '/docs/cvs/_cvs_giftcards.md',
          '/docs/cvs/_cvs_giftcardtransactions.md',
          '/docs/cvs/_cvs_users.md',
          '/docs/cvs/_cvs_retailers.md',
          '/docs/cvs/_cvs_merchant.md',
          '/docs/cvs/_cvs_transactions.md',
          '/docs/cvs/_cvs_callback.md',
          '/docs/cvs/_cvs_test_cases.md',
          '/docs/cvs/_cvs_faqs.md'
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
    <div className="flex min-h-screen">
      <DocsSidebar 
        docType="cvs"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <main className="flex-1 p-8 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer content={content} />
        </div>
      </main>
    </div>
  );
};

export default CVSDocsPage;