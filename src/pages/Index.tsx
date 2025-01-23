import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const documentationSections = [
  {
    title: "Coupon | Vouchers & Giftcards",
    description: "Documentation for the CVS API including vouchers and gift cards management.",
    path: "/docs/cvs",
    icon: "🎁"
  },
  {
    title: "Point of Sale",
    description: "Integration guide for Point of Sale (POS) systems.",
    path: "/docs/pos",
    icon: "🏪"
  },
  {
    title: "eCommerce",
    description: "Quick start guide and API reference for retailers and merchants.",
    path: "/docs/ecommerce",
    icon: "🛍️"
  },
  {
    title: "Value Store Provider",
    description: "Overview and integration guide for Value Store Provider (VSP).",
    path: "/docs/vsp",
    icon: "💳"
  },
  {
    title: "Loyalty",
    description: "Documentation for loyalty program integration.",
    path: "/docs/loyalty",
    icon: "⭐"
  },
  {
    title: "Earn Gateway",
    description: "Implementation guide for the Earn Gateway system.",
    path: "/docs/earn",
    icon: "💰"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-primary-dark-teal">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-cream mb-4">
            API Documentation
          </h1>
          <p className="text-secondary-blue text-lg max-w-2xl mx-auto">
            Choose a section below to explore our comprehensive API documentation and integration guides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentationSections.map((section) => (
            <Link 
              key={section.path} 
              to={section.path}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full bg-deep-teal border-secondary-teal hover:border-primary-orange transition-colors duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-secondary-cream mb-2">
                    {section.title}
                  </h2>
                  <p className="text-secondary-blue">
                    {section.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;