import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface DocsSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    children: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'getting-started', title: 'Getting Started' }
    ]
  },
  {
    id: 'gift-cards',
    title: 'Gift Cards',
    children: [
      { id: 'gift-card-campaigns', title: 'Gift Card Campaigns' },
      { id: 'physical-gift-cards', title: 'Physical Gift Cards' },
      { id: 'gift-card-transactions', title: 'Gift Card Transactions' }
    ]
  },
  {
    id: 'transactions',
    title: 'Transactions',
    children: [
      { id: 'transaction-flow', title: 'Transaction Flow' },
      { id: 'response-codes', title: 'Response Codes' }
    ]
  },
  {
    id: 'reference',
    title: 'Reference',
    children: [
      { id: 'api-reference', title: 'API Reference' },
      { id: 'error-codes', title: 'Error Codes' },
      { id: 'test-cases', title: 'Test Cases' }
    ]
  }
];

export const DocsSidebar = ({ activeSection, onSectionClick }: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['overview', 'gift-cards']);

  useEffect(() => {
    // Auto-expand parent section when child is active
    const activeParent = navigation.find(section => 
      section.children?.some(child => child.id === activeSection)
    );
    if (activeParent && !expanded.includes(activeParent.id)) {
      setExpanded(prev => [...prev, activeParent.id]);
    }
  }, [activeSection]);

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
              className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors ${
                expanded.includes(item.id)
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {expanded.includes(item.id) ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <span>{item.title}</span>
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
            className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-md ${
              activeSection === item.id 
                ? 'bg-secondary-cream text-primary-orange font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.title}
          </button>
        )}
      </div>
    ));
  };

  return (
    <nav className="w-64 h-screen overflow-y-auto px-4 py-6 border-r border-gray-200 bg-white">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-primary-dark-teal mb-1">CVS API Docs</h1>
        <p className="text-sm text-gray-600">v1.0.0</p>
      </div>
      {renderNavItems(navigation)}
    </nav>
  );
};