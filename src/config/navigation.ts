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
    id: "couponcampaigns",
    title: "/couponcampaigns",
    children: [
      { id: "get-couponcampaigns", title: "GET /couponcampaigns" },
      { id: "get-couponcampaigns-id", title: "GET /couponcampaigns/{campaignId}" },
      { id: "get-couponcampaigns-skus", title: "GET /couponcampaigns/{campaignId}/skus" }
    ]
  },
  {
    id: "coupons",
    title: "/coupons",
    children: [
      { id: "post-coupons", title: "POST /coupons" },
      { id: "get-coupons-id", title: "GET /coupons/{id}" },
      { id: "delete-coupons-id", title: "DELETE /coupons/{id}" }
    ]
  },
  {
    id: "coupontransactions",
    title: "/coupontransactions",
    children: [
      { id: "get-coupontransactions", title: "GET /coupontransactions" },
      { id: "get-coupontransactions-id", title: "GET /coupontransactions/{id}" }
    ]
  },
  {
    id: "giftcardcampaigns",
    title: "/giftcardcampaigns",
    children: [
      { id: "get-giftcardcampaigns", title: "GET /giftcardcampaigns" },
      { id: "get-giftcardcampaigns-id", title: "GET /giftcardcampaigns/{id}" }
    ]
  },
  {
    id: "giftcards",
    title: "/giftcards",
    children: [
      { id: "post-giftcards", title: "POST /giftcards" },
      { id: "post-giftcards-wicode", title: "POST /giftcards/{id}/wicode" },
      { id: "get-giftcards-id", title: "GET /giftcards/{id}" },
      { id: "delete-giftcards-id", title: "DELETE /giftcards/{id}" }
    ]
  },
  {
    id: "giftcardtransactions",
    title: "/giftcardtransactions",
    children: [
      { id: "get-giftcardtransactions", title: "GET /giftcardtransactions" },
      { id: "get-giftcardtransactions-id", title: "GET /giftcardtransactions/{id}" }
    ]
  },
  {
    id: "campaigns",
    title: "/campaigns",
    children: [
      { id: "get-campaigns-metadata", title: "GET /campaigns/{campaignId}/metadata" }
    ]
  },
  {
    id: "users",
    title: "/users",
    children: [
      { id: "post-user-token", title: "POST /user/{userRef}/token" },
      { id: "get-user-token", title: "GET /user/{userRef}/token" },
      { id: "delete-user-token", title: "DELETE /user/{userRef}/token" },
      { id: "get-users-transactions", title: "GET /users/{userRef}/transactions" },
      { id: "get-users-coupons", title: "GET /users/{userRef}/coupons" },
      { id: "get-users-giftcards", title: "GET /users/{userRef}/giftcards" },
      { id: "get-users-pans", title: "GET /users/{userRef}/pans" }
    ]
  },
  {
    id: "retailers",
    title: "/retailers",
    children: [
      { id: "get-retailers", title: "GET /retailers" }
    ]
  },
  {
    id: "merchants",
    title: "/merchants",
    children: [
      { id: "get-merchants", title: "GET /merchants" }
    ]
  },
  {
    id: "transactions",
    title: "/transactions",
    children: [
      { id: "get-transactions", title: "GET /transactions" },
      { id: "get-transactions-id", title: "GET /transactions/{id}" }
    ]
  },
  {
    id: "redemption-callback",
    title: "Redemption Callback",
    children: [
      { id: "redemption-callback-failure", title: "Redemption Callback Failure" },
      { id: "webhook-url", title: "Webhook URL" }
    ]
  },
  {
    id: "test-cases",
    title: "Test Cases"
  },
  {
    id: "response-codes",
    title: "Response Codes"
  },
  {
    id: "faqs",
    title: "FAQ's",
    children: [
      { id: "faq-testing-credentials", title: "Where can I find my testing API credentials?" },
      { id: "faq-portal-credentials", title: "Where do I get my Web Portal login credentials?" },
      { id: "faq-qa-signoff", title: "How do I get my campaigns signed-off in the QA environment?" },
      { id: "faq-callback-parameters", title: "What parameters get sent with the redemption callback?" },
      { id: "faq-expiry-time", title: "How do I set the expiry time for a coupon/voucher on issue?" },
      { id: "faq-giftcards-limit", title: "Why do I only see 20 giftcards on the GET /giftcards/{id} API call when I know the user has 50?" },
      { id: "faq-sms-parameters", title: "What are the content parameters to use when creating a custom SMS message with the API call?" },
      { id: "faq-wicode-types", title: "What is the difference between an Open and a Merged wiCode?" },
      { id: "faq-missing-wicode", title: "I am issuing coupons but I am not receiving a wiCode with them." }
    ]
  }
];

const posNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Point of Sale",
    children: [
      { id: "transaction-types", title: "Transaction Types" },
      { id: "platform-architecture", title: "Platform Architecture" },
      { id: "transactional-flow", title: "Transactional Process Flow" }
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
      { id: "over-counter-model", title: "Over the Counter Model" },
      { id: "sit-down-model", title: "Sit Down Model" }
    ]
  },
  {
    id: "mobile-discount",
    title: "Mobile Discount / Payment Split"
  },
  {
    id: "pos-soap-api",
    title: "POS Provider SOAP API",
    children: [
      { id: "header-parameters", title: "Header Parameters" },
      { id: "wsdl-url", title: "WSDL URL" },
      { id: "monetary-values", title: "Monetary Values" },
      { id: "versioning", title: "Versioning" }
    ]
  },
  {
    id: "transaction",
    title: "Transaction",
    children: [
      { id: "transaction-request", title: "Transaction Request" },
      { id: "transaction-response", title: "Transaction Response" }
    ]
  },
  {
    id: "advice",
    title: "Advice",
    children: [
      { id: "advice-request", title: "Advice Request" },
      { id: "advice-response", title: "Advice Response" }
    ]
  },
  {
    id: "vas-token",
    title: "VAS Token",
    children: [
      { id: "get-vas-token-request", title: "Get VAS Token Request" },
      { id: "get-vas-token-response", title: "Get VAS Token Response" }
    ]
  },
  {
    id: "transaction-history",
    title: "Transaction History",
    children: [
      { id: "transaction-history-request", title: "Transaction History Request" },
      { id: "transaction-history-response", title: "Transaction History Response" }
    ]
  },
  {
    id: "bills",
    title: "Bills",
    children: [
      { id: "create-bill", title: "Create Bill" },
      { id: "get-bill", title: "Get Bill" }
    ]
  },
  {
    id: "objects",
    title: "Objects",
    children: [
      { id: "api-credentials", title: "API Credentials" },
      { id: "product", title: "Product" },
      { id: "store-transaction-details", title: "Store Transaction Details" },
      { id: "token", title: "Token" },
      { id: "vsp", title: "VSP" },
      { id: "discount", title: "Discount" },
      { id: "discount-product", title: "Discount Product" },
      { id: "loyalty", title: "Loyalty" },
      { id: "original-transaction-details", title: "Original Transaction Details" },
      { id: "transactions", title: "Transactions" },
      { id: "basket", title: "Basket" }
    ]
  },
  {
    id: "response-codes",
    title: "Response Codes",
    children: [
      { id: "transaction-engine-codes", title: "Transaction Engine" },
      { id: "bill-server-codes", title: "Bill Server" }
    ]
  },
  {
    id: "test-cases",
    title: "Test Cases"
  }
];

const loyaltyNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Loyalty",
    children: [
      { id: "introduction", title: "Introduction" }
    ]
  }
];

const earnNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Earn",
    children: [
      { id: "introduction", title: "Introduction" }
    ]
  }
];

const ecommerceNavigation: NavItem[] = [
  {
    id: "overview",
    title: "Overview - Ecommerce",
    children: [
      { id: "introduction", title: "Introduction" }
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
