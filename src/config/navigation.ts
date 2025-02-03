interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

const cvsNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Coupon, Voucher and Gift Card Service",
    children: [
      { id: "coupons-and-vouchers", title: "Coupons and Vouchers" },
      { id: "gift-cards", title: "Gift Cards" }
    ]
  },
  {
    id: "cvs-web-portal",
    title: "CVS Web Portal",
    children: [
      { id: "integrations-environment-url", title: "Integrations Environment URL" }
    ]
  },
  {
    id: "cvs-issuer-rest-api",
    title: "CVS Issuer REST API",
    children: [
      { id: "date-format", title: "Date Format" },
      { id: "monetary-format", title: "Monetary Format" },
      { id: "paginated-collections", title: "Paginated Collections" },
      { id: "api-credentials", title: "API Credentials" }
    ]
  },
  {
    id: "coupon-campaigns",
    title: "/couponcampaigns",
    children: [
      { id: "get-coupon-campaigns", title: "GET /couponcampaigns" },
      { id: "get-coupon-campaign", title: "GET /couponcampaigns/{campaignId}" },
      { id: "get-coupon-campaign-skus", title: "GET /couponcampaigns/{campaignId}/skus" }
    ]
  },
  // ... Add remaining CVS navigation items
];

const posNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Point of Sale",
    children: [
      { id: "transaction-types", title: "Transaction types facilitated by the wiPlatform" },
      { id: "platform-architecture", title: "Platform Architecture" },
      { id: "transactional-process-flow", title: "Transactional Process Flow" }
    ]
  },
  {
    id: "dual-messaging",
    title: "Dual Messaging"
  },
  {
    id: "integration-models",
    title: "Integration Models",
    children: [
      { id: "over-the-counter-model", title: "Over the Counter Model" },
      { id: "sit-down-model", title: "Sit Down Model" }
    ]
  },
  // ... Add remaining POS navigation items
];

const vspNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Value Store Provider",
    children: [
      { id: "transaction-types", title: "Transaction Types" },
      { id: "platform-architecture", title: "Platform Architecture" }
    ]
  },
  {
    id: "dual-messaging",
    title: "Dual Messaging"
  },
  {
    id: "transaction-models",
    title: "Transaction Models",
    children: [
      { id: "over-the-counter", title: "Over-the-Counter" },
      { id: "sit-down", title: "Sit-down" },
      { id: "informal-merchant", title: "Informal Merchant" }
    ]
  },
  // ... Add remaining VSP navigation items
];

const loyaltyNavigation: NavItem[] = [
  {
    id: "loyalty-service-rest-api",
    title: "Loyalty Service REST API",
    children: [
      { id: "date-time-format", title: "Date and Time Format" },
      { id: "monetary-format", title: "Monetary Format" },
      { id: "location-format", title: "Location Format" },
      { id: "paginated-collections", title: "Paginated Collections" },
      { id: "response-codes", title: "Response Codes" },
      { id: "api-references", title: "API References" },
      { id: "test-credentials", title: "Test Credentials" }
    ]
  },
  {
    id: "campaigns",
    title: "/campaigns",
    children: [
      { id: "get-campaigns", title: "GET /campaigns" },
      { id: "get-campaign-rewards", title: "GET /campaigns/{campaignId}/rewards" },
      { id: "get-campaign-stores", title: "GET /campaigns/{campaignId}/stores" }
    ]
  },
  // ... Add remaining Loyalty navigation items
];

const earnNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Earn Gateway",
    children: [
      { id: "introduction", title: "Introduction" },
      { id: "features", title: "Features" }
    ]
  }
  // ... Add remaining Earn navigation items
];

const ecommerceNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - eCommerce",
    children: [
      { id: "introduction", title: "Introduction" },
      { id: "features", title: "Features" }
    ]
  }
  // ... Add remaining eCommerce navigation items
];

export const getNavigationByType = (type: string): NavItem[] => {
  switch (type.toLowerCase()) {
    case 'cvs':
      return cvsNavigation;
    case 'pos':
      return posNavigation;
    case 'vsp':
      return vspNavigation;
    case 'loyalty':
      return loyaltyNavigation;
    case 'earn':
      return earnNavigation;
    case 'ecommerce':
      return ecommerceNavigation;
    default:
      return [];
  }
};

export type { NavItem };