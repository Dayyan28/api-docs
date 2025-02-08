
import { DollarSign, Store, Heart, CreditCard, Star, PieChart } from "lucide-react";
import { DocumentationCard } from "./DocumentationCard";

const documentationSections = [
  {
    title: "Coupon | Vouchers & Giftcards",
    subtitle: "Sign Up Deals And Referral Campaigns",
    description: "Documentation for the CVS API including vouchers and gift cards management.",
    path: "/docs/cvs",
    icon: DollarSign,
    label: "More customers"
  },
  {
    title: "Point of Sale",
    subtitle: "Customer Analytics",
    description: "Integration guide for Point of Sale (POS) systems.",
    path: "/docs/pos",
    icon: Store,
    label: "More data"
  },
  {
    title: "eCommerce",
    subtitle: "Targeted Campaigns",
    description: "Quick start guide and API reference for retailers and merchants.",
    path: "/docs/ecommerce",
    icon: Heart,
    label: "More transactions"
  },
  {
    title: "Value Store Provider",
    subtitle: "Customer Segmentation",
    description: "Overview and integration guide for Value Store Provider (VSP).",
    path: "/docs/vsp",
    icon: CreditCard,
    label: "More Spend and Frequency"
  },
  {
    title: "Loyalty",
    subtitle: "Customer Analytics",
    description: "Documentation for loyalty program integration.",
    path: "/docs/loyalty",
    icon: Star,
    label: "More data"
  },
  {
    title: "Earn Gateway",
    subtitle: "Targeted Campaigns",
    description: "Implementation guide for the Earn Gateway system.",
    path: "/docs/earn",
    icon: PieChart,
    label: "More transactions"
  }
];

export const DocumentationSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentationSections.map((section, index) => (
            <DocumentationCard
              key={section.path}
              {...section}
              Icon={section.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
