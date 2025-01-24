import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, DollarSign, Store, CreditCard, Star, PieChart } from "lucide-react";

const documentationSections = [
  {
    title: "Coupon | Vouchers & Giftcards",
    description: "Documentation for the CVS API including vouchers and gift cards management.",
    path: "/docs/cvs",
    icon: DollarSign,
    bgColor: "bg-secondary-cream/10"
  },
  {
    title: "Point of Sale",
    description: "Integration guide for Point of Sale (POS) systems.",
    path: "/docs/pos",
    icon: Store,
    bgColor: "bg-secondary-teal/10"
  },
  {
    title: "eCommerce",
    description: "Quick start guide and API reference for retailers and merchants.",
    path: "/docs/ecommerce",
    icon: Heart,
    bgColor: "bg-secondary-blue/10"
  },
  {
    title: "Value Store Provider",
    description: "Overview and integration guide for Value Store Provider (VSP).",
    path: "/docs/vsp",
    icon: CreditCard,
    bgColor: "bg-primary-orange/10"
  },
  {
    title: "Loyalty",
    description: "Documentation for loyalty program integration.",
    path: "/docs/loyalty",
    icon: Star,
    bgColor: "bg-secondary-cream/10"
  },
  {
    title: "Earn Gateway",
    description: "Implementation guide for the Earn Gateway system.",
    path: "/docs/earn",
    icon: PieChart,
    bgColor: "bg-secondary-teal/10"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark-teal to-deep-teal">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-teal/90 to-deep-teal/90" />
          <img
            src="/hero-background.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
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
              className="text-xl text-secondary-blue max-w-2xl mx-auto"
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
                <Card className={`h-full bg-white/95 border-none shadow-lg hover:shadow-xl transition-all duration-300 ${section.bgColor}`}>
                  <div className="p-8">
                    <div className="mb-6 text-primary-orange">
                      {<section.icon size={40} />}
                    </div>
                    <h2 className="text-2xl font-semibold text-primary-dark-teal mb-4">
                      {section.title}
                    </h2>
                    <p className="text-secondary-teal text-lg">
                      {section.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-deep-teal text-secondary-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="YoYo Group Logo" className="h-8 mb-4" />
              <p className="text-secondary-blue">
                Empowering businesses with innovative payment solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-secondary-blue">
                <li>CVS</li>
                <li>POS Integration</li>
                <li>VSP</li>
                <li>Loyalty</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-secondary-blue">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-secondary-blue">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-teal/20 mt-12 pt-8 text-center text-secondary-blue">
            <p>&copy; {new Date().getFullYear()} YoYo Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;