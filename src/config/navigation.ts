interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

export const cvsNavigation: NavItem[] = [
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
  }
];

export const posNavigation: NavItem[] = [
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
      { id: 'over-the-counter-model', title: 'Over the Counter Model' },
      { id: 'sit-down-model', title: 'Sit Down Model' }
    ]
  }
];

export const vspNavigation: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview - Value Store Provider',
    children: [
      { id: 'transaction-types', title: 'Transaction Types' },
      { id: 'platform-architecture', title: 'Platform Architecture' }
    ]
  },
  {
    id: 'dual-messaging',
    title: 'Dual Messaging'
  },
  {
    id: 'transaction-models',
    title: 'Transaction Models',
    children: [
      { id: 'over-the-counter', title: 'Over-the-Counter' },
      { id: 'sit-down', title: 'Sit-down' },
      { id: 'informal-merchant', title: 'Informal Merchant' }
    ]
  }
];

export const getNavigationByType = (type: string): NavItem[] => {
  switch (type) {
    case 'cvs':
      return cvsNavigation;
    case 'pos':
      return posNavigation;
    case 'vsp':
      return vspNavigation;
    default:
      return [];
  }
};