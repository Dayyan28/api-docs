import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const EarnDocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex bg-white min-h-screen">
      <DocsSidebar 
        docType="pos"
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Earn Gateway</h1>
          
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Learn how to integrate with the Earn Gateway system for managing rewards and transactions.
            </p>
          </section>
        </div>
      </main>
      <aside className="w-1/3 p-6 border-l border-gray-200 sticky top-0 h-screen overflow-y-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <CodeBlock
            method="POST"
            endpoint="/api/v1/earn/transaction"
            request={`{
  "amount": 100,
  "type": "purchase"
}`}
            response={`{
  "earnedPoints": 10,
  "transactionId": "tx_123"
}`}
            isVisible={activeSection === 'introduction'}
          />
        </div>
      </aside>
    </div>
  );
};

export default EarnDocsPage;