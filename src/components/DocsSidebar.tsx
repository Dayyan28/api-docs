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

const cvsNavigation: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview - CVS',
    children: [
      { id: 'coupons-and-vouchers', title: 'Coupons and Vouchers' },
      { id: 'gift-cards', title: 'Gift Cards' }
    ]
  },
  {
    id: 'cvs-web-portal',
    title: 'CVS Web Portal',
    children: [
      { id: 'integrations-environment-url', title: 'Integrations Environment URL' }
    ]
  },
  {
    id: 'cvs-issuer-rest-api',
    title: 'CVS Issuer REST API',
    children: [
      { id: 'date-format', title: 'Date Format' },
      { id: 'monetary-format', title: 'Monetary Format' },
      { id: 'paginated-collections', title: 'Paginated Collections' },
      { id: 'api-credentials', title: 'API Credentials' }
    ]
  },
  {
    id: 'couponcampaigns',
    title: '/couponcampaigns',
    children: [
      { id: 'get-couponcampaigns', title: 'GET /couponcampaigns' },
      { id: 'get-couponcampaigns-id', title: 'GET /couponcampaigns/{campaignId}' },
      { id: 'get-couponcampaigns-skus', title: 'GET /couponcampaigns/{campaignId}/skus' }
    ]
  },
  {
    id: 'coupons',
    title: '/coupons',
    children: [
      { id: 'post-coupons', title: 'POST /coupons' },
      { id: 'get-coupons-id', title: 'GET /coupons/{id}' },
      { id: 'delete-coupons-id', title: 'DELETE /coupons/{id}' }
    ]
  },
  {
    id: 'coupontransactions',
    title: '/coupontransactions',
    children: [
      { id: 'get-coupontransactions', title: 'GET /coupontransactions' },
      { id: 'get-coupontransactions-id', title: 'GET /coupontransactions/{id}' }
    ]
  },
  {
    id: 'giftcardcampaigns',
    title: '/giftcardcampaigns',
    children: [
      { id: 'get-giftcardcampaigns', title: 'GET /giftcardcampaigns' },
      { id: 'get-giftcardcampaigns-id', title: 'GET /giftcardcampaigns/{id}' }
    ]
  },
  {
    id: 'giftcards',
    title: '/giftcards',
    children: [
      { id: 'post-giftcards', title: 'POST /giftcards' },
      { id: 'post-giftcards-wicode', title: 'POST /giftcards/{id}/wicode' },
      { id: 'get-giftcards-id', title: 'GET /giftcards/{id}' },
      { id: 'delete-giftcards-id', title: 'DELETE /giftcards/{id}' }
    ]
  },
  {
    id: 'giftcardtransactions',
    title: '/giftcardtransactions',
    children: [
      { id: 'get-giftcardtransactions', title: 'GET /giftcardtransactions' },
      { id: 'get-giftcardtransactions-id', title: 'GET /giftcardtransactions/{id}' }
    ]
  },
  {
    id: 'campaigns',
    title: '/campaigns',
    children: [
      { id: 'get-campaigns-metadata', title: 'GET /campaigns/{campaignId}/metadata' }
    ]
  },
  {
    id: 'users',
    title: '/users',
    children: [
      { id: 'post-user-token', title: 'POST /user/{userRef}/token' },
      { id: 'get-user-token', title: 'GET /user/{userRef}/token' },
      { id: 'delete-user-token', title: 'DELETE /user/{userRef}/token' },
      { id: 'get-users-transactions', title: 'GET /users/{userRef}/transactions' },
      { id: 'get-users-coupons', title: 'GET /users/{userRef}/coupons' },
      { id: 'get-users-giftcards', title: 'GET /users/{userRef}/giftcards' },
      { id: 'get-users-pans', title: 'GET /users/{userRef}/pans' }
    ]
  },
  {
    id: 'retailers',
    title: '/retailers',
    children: [
      { id: 'get-retailers', title: 'GET /retailers' }
    ]
  },
  {
    id: 'merchants',
    title: '/merchants',
    children: [
      { id: 'get-merchants', title: 'GET /merchants' }
    ]
  },
  {
    id: 'transactions',
    title: '/transactions',
    children: [
      { id: 'get-transactions', title: 'GET /transactions' },
      { id: 'get-transactions-id', title: 'GET /transactions/{id}' }
    ]
  },
  {
    id: 'redemption-callback',
    title: 'Redemption Callback',
    children: [
      { id: 'redemption-callback-failure', title: 'Redemption Callback Failure' },
      { id: 'webhook-url', title: 'Webhook URL' }
    ]
  },
  {
    id: 'test-cases',
    title: 'Test Cases'
  },
  {
    id: 'response-codes',
    title: 'Response Codes'
  },
  {
    id: 'faqs',
    title: "FAQ's",
    children: [
      { id: 'faq-api-credentials', title: 'Testing API Credentials' },
      { id: 'faq-portal-credentials', title: 'Web Portal Login Credentials' },
      { id: 'faq-campaign-signoff', title: 'Campaign Sign-off in QA' },
      { id: 'faq-redemption-params', title: 'Redemption Callback Parameters' },
      { id: 'faq-expiry-time', title: 'Coupon/Voucher Expiry Time' },
      { id: 'faq-giftcard-limit', title: 'Giftcard Limit on GET Call' },
      { id: 'faq-sms-params', title: 'Custom SMS Message Parameters' },
      { id: 'faq-wicode-types', title: 'Open vs Merged wiCodes' },
      { id: 'faq-missing-wicode', title: 'Missing wiCode on Coupon Issue' }
    ]
  }
];

export const DocsSidebar = ({ activeSection, onSectionClick }: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['overview']);

  useEffect(() => {
    const activeParent = cvsNavigation.find(section => 
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
        <h1 className="text-xl font-bold text-primary-dark-teal mb-1">CVS API Docs</h1>
        <p className="text-sm text-gray-600">v1.0.0</p>
      </div>
      {renderNavItems(cvsNavigation)}
    </nav>
  );
};