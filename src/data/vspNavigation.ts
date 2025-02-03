import { NavItem } from "@/types/navigation";

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
  // ... remaining VSP navigation items
];