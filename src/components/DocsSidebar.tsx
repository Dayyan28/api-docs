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

const posNavigation: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview - Point of Sale',
    children: [
      { id: 'transaction-types', title: 'Transaction Types' },
      { id: 'platform-architecture', title: 'Platform Architecture' },
      { id: 'transactional-process-flow', title: 'Transactional Process Flow' }
    ]
  },
  {
    id: 'dual-messaging',
    title: 'Dual Messaging'
  },
  {
    id: 'integration-models',
    title: 'Integration Models',
    children: [
      { id: 'over-the-counter', title: 'Over the Counter Model' },
      { id: 'sit-down', title: 'Sit Down Model' }
    ]
  },
  {
    id: 'mobile-discount',
    title: 'Mobile Discount / Payment Split'
  },
  {
    id: 'pos-provider-soap',
    title: 'POS Provider SOAP API',
    children: [
      { id: 'header-parameters', title: 'Header Parameters' },
      { id: 'wsdl-url', title: 'WSDL URL' },
      { id: 'monetary-values', title: 'Monetary Values' },
      { id: 'versioning', title: 'Versioning' }
    ]
  },
  {
    id: 'transaction',
    title: 'Transaction',
    children: [
      { id: 'transaction-request', title: 'Transaction Request' },
      { id: 'transaction-response', title: 'Transaction Response' }
    ]
  },
  {
    id: 'advice',
    title: 'Advice',
    children: [
      { id: 'advice-request', title: 'Advice Request' },
      { id: 'advice-response', title: 'Advice Response' }
    ]
  },
  {
    id: 'vas-token',
    title: 'VAS Token',
    children: [
      { id: 'vas-token-request', title: 'Get VAS Token Request' },
      { id: 'vas-token-response', title: 'Get VAS Token Response' }
    ]
  },
  {
    id: 'transaction-history',
    title: 'Transaction History',
    children: [
      { id: 'history-request', title: 'Transaction History Request' },
      { id: 'history-response', title: 'Transaction History Response' }
    ]
  },
  {
    id: 'bills',
    title: 'Bills',
    children: [
      { id: 'create-bill', title: 'Create Bill' },
      { id: 'get-bill', title: 'Get Bill' }
    ]
  },
  {
    id: 'objects',
    title: 'Objects',
    children: [
      { id: 'api-credentials', title: 'API Credentials' },
      { id: 'product', title: 'Product' },
      { id: 'store-transaction-details', title: 'Store Transaction Details' },
      { id: 'token', title: 'Token' },
      { id: 'vsp', title: 'VSP' },
      { id: 'discount', title: 'Discount' },
      { id: 'discount-product', title: 'Discount Product' },
      { id: 'loyalty', title: 'Loyalty' },
      { id: 'original-transaction-details', title: 'Original Transaction Details' },
      { id: 'transactions', title: 'Transactions' },
      { id: 'basket', title: 'Basket' }
    ]
  },
  {
    id: 'response-codes',
    title: 'Response Codes',
    children: [
      { id: 'transaction-engine-codes', title: 'Transaction Engine' },
      { id: 'bill-server-codes', title: 'Bill Server' }
    ]
  },
  {
    id: 'test-cases',
    title: 'Test Cases'
  }
];

export const DocsSidebar = ({ activeSection, onSectionClick }: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['overview']);

  useEffect(() => {
    const activeParent = posNavigation.find(section => 
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
                  ? 'text-primary-dark-teal font-medium'
                  : 'text-gray-600 hover:text-primary-dark-teal'
              }`}
            >
              {expanded.includes(item.id) ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <span className="font-medium">{item.title}</span>
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
                ? 'text-primary-orange bg-secondary-cream font-medium'
                : 'text-gray-600 hover:text-primary-dark-teal'
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
        <h1 className="text-xl font-bold text-primary-dark-teal mb-1">POS API Docs</h1>
        <p className="text-sm text-gray-600">v1.0.0</p>
      </div>
      {renderNavItems(posNavigation)}
    </nav>
  );
};