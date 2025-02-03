import { NavItem } from "@/types/navigation";

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
  // ... remaining POS navigation items
];