import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    id: 'guides',
    title: 'Guides',
    children: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'getting-started', title: 'Getting Started' }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    children: [
      { id: 'auth-overview', title: 'Overview' },
      { id: 'auth-tokens', title: 'Tokens' }
    ]
  },
  {
    id: 'endpoints',
    title: 'Endpoints',
    children: [
      { id: 'users', title: 'Users' },
      { id: 'transactions', title: 'Transactions' }
    ]
  }
];

interface DocsSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const DocsSidebar = ({ activeSection, onSectionClick }: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['guides', 'endpoints']);

  const toggleSection = (sectionId: string) => {
    setExpanded(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map(item => (
      <div key={item.id} className="mb-1">
        {item.children ? (
          <div>
            <button
              onClick={() => toggleSection(item.id)}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {expanded.includes(item.id) ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              {item.title}
            </button>
            {expanded.includes(item.id) && (
              <div className="ml-4">
                {renderNavItems(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => onSectionClick(item.id)}
            className={`nav-item w-full text-left ${
              activeSection === item.id ? 'active' : ''
            }`}
          >
            {item.title}
          </button>
        )}
      </div>
    ));
  };

  return (
    <nav className="w-64 h-screen overflow-y-auto px-4 py-6 border-r border-gray-800">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white mb-1">API Docs</h1>
        <p className="text-sm text-gray-400">v1.0.0</p>
      </div>
      {renderNavItems(navigation)}
    </nav>
  );
};