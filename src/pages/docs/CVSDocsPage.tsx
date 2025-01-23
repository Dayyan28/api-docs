import { useState } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';
import { CodeBlock } from '@/components/CodeBlock';

const CVSDocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex">
      <DocsSidebar 
        activeSection={activeSection} 
        onSectionClick={setActiveSection} 
      />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Coupon | Vouchers & Giftcards</h1>
          
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              The CVS API provides comprehensive endpoints for managing coupons, vouchers, and gift cards.
            </p>
          </section>

          <section id="authentication" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <p className="text-gray-300 mb-4">
              All API endpoints require authentication using Bearer tokens.
            </p>
          </section>
        </div>
      </main>
      <aside className="w-80 p-6 border-l border-gray-800">
        <CodeBlock
          method="POST"
          endpoint="/api/v1/auth"
          request={`{
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret"
}`}
          response={`{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 3600
}`}
          isVisible={activeSection === 'authentication'}
        />
      </aside>
    </div>
  );
};

export default CVSDocsPage;