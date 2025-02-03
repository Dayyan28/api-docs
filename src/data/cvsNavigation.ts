import { NavItem } from "@/types/navigation";

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
  // ... remaining CVS navigation items
];