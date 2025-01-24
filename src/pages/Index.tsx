import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, DollarSign, Store, CreditCard, Star, PieChart, Facebook, Linkedin, Instagram } from "lucide-react";

const documentationSections = [
  {
    title: "Coupon | Vouchers & Giftcards",
    description: "Documentation for the CVS API including vouchers and gift cards management.",
    path: "/docs/cvs",
    icon: DollarSign,
    bgColor: "bg-secondary-cream/20",
    cardBg: "bg-primary-dark-teal/90"
  },
  {
    title: "Point of Sale",
    description: "Integration guide for Point of Sale (POS) systems.",
    path: "/docs/pos",
    icon: Store,
    bgColor: "bg-secondary-teal/20",
    cardBg: "bg-primary-dark-teal/90"
  },
  {
    title: "eCommerce",
    description: "Quick start guide and API reference for retailers and merchants.",
    path: "/docs/ecommerce",
    icon: Heart,
    bgColor: "bg-secondary-blue/20",
    cardBg: "bg-primary-dark-teal/90"
  },
  {
    title: "Value Store Provider",
    description: "Overview and integration guide for Value Store Provider (VSP).",
    path: "/docs/vsp",
    icon: CreditCard,
    bgColor: "bg-primary-orange/20",
    cardBg: "bg-primary-dark-teal/90"
  },
  {
    title: "Loyalty",
    description: "Documentation for loyalty program integration.",
    path: "/docs/loyalty",
    icon: Star,
    bgColor: "bg-secondary-cream/20",
    cardBg: "bg-primary-dark-teal/90"
  },
  {
    title: "Earn Gateway",
    description: "Implementation guide for the Earn Gateway system.",
    path: "/docs/earn",
    icon: PieChart,
    bgColor: "bg-secondary-teal/20",
    cardBg: "bg-primary-dark-teal/90"
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
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.img
              src="/logo.png"
              alt="YoYo Group Logo"
              className="mx-auto mb-8 h-32" // Increased logo size further
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
              Delight in every connection
            </motion.h1>
            <motion.p
              className="text-xl text-secondary-blue max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unlock the full potential of our platform with detailed API documentation and step-by-step integration guides. 
              Whether you're building custom applications, automating workflows, or scaling your solutions, 
              our resources provide everything you need to get started quickly and seamlessly.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Documentation Cards Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Link 
                  to={section.path}
                  className="block h-full transform transition-all duration-300 hover:scale-105"
                >
                  <Card className={`h-full ${section.cardBg} border-none shadow-lg hover:shadow-xl transition-all duration-300 ${section.bgColor}`}>
                    <div className="p-8 h-full flex flex-col">
                      <div className="mb-6 text-secondary-cream">
                        {<section.icon size={40} />}
                      </div>
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
                <li><Link to="/docs/cvs" className="hover:text-primary-orange">CVS</Link></li>
                <li><Link to="/docs/pos" className="hover:text-primary-orange">POS Integration</Link></li>
                <li><Link to="/docs/vsp" className="hover:text-primary-orange">VSP</Link></li>
                <li><Link to="/docs/loyalty" className="hover:text-primary-orange">Loyalty</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-secondary-blue">
                <li><a href="https://yoyogroup.com/about/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange">About Us</a></li>
                <li><a href="https://yoyogroup.com/careers/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange">Careers</a></li>
                <li><a href="https://yoyogroup.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/theyoyogroup.international" target="_blank" rel="noopener noreferrer" className="text-secondary-blue hover:text-primary-orange">
                  <Facebook size={24} />
                </a>
                <a href="https://www.linkedin.com/company/the-yoyo-group/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-secondary-blue hover:text-primary-orange">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/theyoyogroup/" target="_blank" rel="noopener noreferrer" className="text-secondary-blue hover:text-primary-orange">
                  <Instagram size={24} />
                </a>
              </div>
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