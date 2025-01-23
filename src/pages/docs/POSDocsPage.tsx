import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const POSDocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex">
      <DocsSidebar 
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Point of Sale (POS)</h1>
          
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              The POS API enables integration with point of sale systems.
            </p>
          </section>

          <section id="getting-started" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-4">
              Learn how to integrate the POS API with your system.
            </p>
          </section>
        </div>
      </main>
      <aside className="w-80 p-6 border-l border-gray-800">
        <CodeBlock
          method="GET"
          endpoint="/api/v1/pos/status"
          response={`{
  "status": "active",
  "version": "1.0.0"
}`}
          isVisible={activeSection === 'getting-started'}
        />
      </aside>
    </div>
  );
};

export default POSDocsPage;