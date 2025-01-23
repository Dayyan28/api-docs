import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const VSPDocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex">
      <DocsSidebar 
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Value Store Provider (VSP)</h1>
          
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              Learn about Value Store Provider integration and implementation.
            </p>
          </section>
        </div>
      </main>
      <aside className="w-80 p-6 border-l border-gray-800">
        <CodeBlock
          method="GET"
          endpoint="/api/v1/vsp/status"
          response={`{
  "status": "active",
  "provider": "VSP"
}`}
          isVisible={activeSection === 'introduction'}
        />
      </aside>
    </div>
  );
};

export default VSPDocsPage;