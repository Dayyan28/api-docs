import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const LoyaltyDocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex">
      <DocsSidebar 
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Loyalty</h1>
          
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Integrate with our Loyalty program API to manage customer rewards and points.
            </p>
          </section>
        </div>
      </main>
      <aside className="w-80 p-6 border-l border-gray-800">
        <CodeBlock
          method="GET"
          endpoint="/api/v1/loyalty/points"
          response={`{
  "points": 1000,
  "tier": "gold"
}`}
          isVisible={activeSection === 'introduction'}
        />
      </aside>
    </div>
  );
};

export default LoyaltyDocsPage;