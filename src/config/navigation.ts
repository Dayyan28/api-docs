interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

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
  {
    id: "token-manager-rest-api",
    title: "Token Manager REST API",
    children: [
      { id: "date-format", title: "Date Format" },
      { id: "monetary-format", title: "Monetary Format" },
      { id: "api-credentials", title: "API Credentials" },
      { id: "api-references", title: "API References" },
      { id: "test-credentials", title: "Test Credentials" }
    ]
  },
  {
    id: "linking-multiple-vsps",
    title: "Linking Multiple VSPs",
    children: [
      { id: "use-cases", title: "Use Cases" },
      { id: "discount-wicode", title: "Discount wiCode" },
      { id: "discount-and-loyalty-wicodes", title: "Discount and Loyalty wiCodes" }
    ]
  },
  {
    id: "tokens",
    title: "/tokens",
    children: [
      { id: "post-tokens", title: "POST /tokens" }
    ]
  },
  {
    id: "transactional-gateway",
    title: "Transactional Gateway",
    children: [
      { id: "authorisation", title: "Authorisation" },
      { id: "error-handling", title: "Error Handling" }
    ]
  },
  {
    id: "post-transaction-request",
    title: "POST Transaction Request"
  },
  {
    id: "transaction-response",
    title: "Transaction Response"
  },
  {
    id: "post-advice-request",
    title: "POST Advice Request"
  },
  {
    id: "advice-response",
    title: "Advice Response"
  },
  {
    id: "post-token-info-request",
    title: "POST Token Info Request"
  },
  {
    id: "token-info-response",
    title: "Token Info Response"
  },
  {
    id: "transaction-engine-vsp-rest-api",
    title: "Transaction Engine VSP REST API",
    children: [
      { id: "api-credentials-te", title: "API Credentials" },
      { id: "api-references-te", title: "API References" },
      { id: "test-credentials-te", title: "Test Credentials" }
    ]
  },
  {
    id: "bills",
    title: "/bills",
    children: [
      { id: "get-bills", title: "GET /bills" }
    ]
  },
  {
    id: "transactions",
    title: "/transactions",
    children: [
      { id: "post-transactions", title: "POST /transactions" }
    ]
  },
  {
    id: "objects",
    title: "Objects",
    children: [
      { id: "product", title: "Product" }
    ]
  }
];

export const getNavigationByType = (type: string): NavItem[] => {
  switch (type.toLowerCase()) {
    case 'vsp':
      return vspNavigation;
    case 'cvs':
      return cvsNavigation;
    case 'pos':
      return posNavigation;
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
