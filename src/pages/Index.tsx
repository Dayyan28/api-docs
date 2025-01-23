import { useState, useEffect, useRef } from 'react';
import { DocsSidebar } from '../components/DocsSidebar';
import { CodeBlock } from '../components/CodeBlock';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <h1 class="text-3xl font-bold mb-6">Introduction</h1>
      <p class="mb-4">Welcome to our API documentation. This guide will help you get started with integrating our API into your applications.</p>
      <p class="mb-4">Our API uses REST architecture and returns responses in JSON format. All requests must be made over HTTPS.</p>
    `,
    code: {
      method: 'GET',
      endpoint: '/api/v1/status',
      response: `{
  "status": "ok",
  "version": "1.0.0"
}`
    }
  },
  {
    id: 'authentication',
    title: 'Authentication',
    content: `
      <h1 class="text-3xl font-bold mb-6">Authentication</h1>
      <p class="mb-4">To authenticate your requests, include your API key in the Authorization header:</p>
      <pre class="mb-4">Authorization: Bearer YOUR_API_KEY</pre>
      <p class="mb-4">You can obtain an API key from your dashboard settings page.</p>
    `,
    code: {
      method: 'POST',
      endpoint: '/api/v1/auth',
      request: `{
  "api_key": "your-api-key"
}`,
      response: `{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 3600
}`
    }
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [visibleCodeBlock, setVisibleCodeBlock] = useState('introduction');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!contentRef.current) return;

    const scrollPosition = window.scrollY + 100;
    const sectionElements = contentRef.current.children;

    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.id;
        setActiveSection(sectionId);
        setVisibleCodeBlock(sectionId);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-docsbg text-white">
      <DocsSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <main className="flex-1 max-w-3xl px-8 py-6" ref={contentRef}>
        {sections.map(section => (
          <section
            key={section.id}
            id={section.id}
            className="mb-16"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        ))}
      </main>

      <div className="w-96 p-6">
        <div className="sticky-sidebar">
          {sections.map(section => (
            <div key={section.id} className="mb-6">
              <CodeBlock
                {...section.code}
                isVisible={visibleCodeBlock === section.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;