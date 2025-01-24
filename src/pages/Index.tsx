import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.img
              src="/logo.png"
              alt="YoYo Group Logo"
              className="mx-auto mb-8 h-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.h1
              className="text-5xl font-bold text-secondary-cream mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              API Documentation
            </motion.h1>
            <motion.p
              className="text-secondary-blue text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our comprehensive API documentation and integration guides
            </motion.p>
          </div>
        </div>
      </div>

      {/* Documentation Cards Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationSections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                to={section.path}
                className="block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full bg-deep-teal border-secondary-teal hover:border-primary-orange transition-colors duration-300">
                  <div className="p-8">
                    <div className="text-4xl mb-6">{section.icon}</div>
                    <h2 className="text-2xl font-semibold text-secondary-cream mb-4">
                      {section.title}
                    </h2>
                    <p className="text-secondary-blue text-lg">
                      {section.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;