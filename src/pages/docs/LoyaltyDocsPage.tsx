import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

const LoyaltyDocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex bg-white min-h-screen">
      <DocsSidebar 
        docType="pos"
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">Loyalty Documentation</h1>
          {/* Content will be added here */}
        </div>
      </main>
      <aside className="w-1/3 p-6 border-l border-gray-200 sticky top-0 h-screen overflow-y-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <pre className="text-sm text-gray-800">
            {/* Code snippets will be dynamically rendered here */}
          </pre>
        </div>
      </aside>
    </div>
  );
};

export default LoyaltyDocsPage;