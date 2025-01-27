import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import posTransaction from '../../../public/docs/pos/_pos_transaction.md';
import posUI from '../../../public/docs/pos/_pos_ui.md';

const POSDocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex bg-white min-h-screen">
      <DocsSidebar activeSection={activeSection} onSectionClick={setActiveSection} />
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer content={posUI} className="text-black" />
          <MarkdownRenderer content={posTransaction} className="text-black" />
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

export default POSDocsPage;