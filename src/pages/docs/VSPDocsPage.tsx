import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import vspContent from '../../../public/docs/vsp/_vsp.md';
import vspModels from '../../../public/docs/vsp/_vsp_models.md';
import vspIntegration from '../../../public/docs/vsp/_vsp_integration_requirements.md';

const VSPDocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex bg-white min-h-screen">
      <DocsSidebar activeSection={activeSection} onSectionClick={setActiveSection} />
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer content={vspContent} className="text-black" />
          <MarkdownRenderer content={vspModels} className="text-black" />
          <MarkdownRenderer content={vspIntegration} className="text-black" />
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

export default VSPDocsPage;