
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, DollarSign, Store, CreditCard, Star, PieChart } from "lucide-react";

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
              className="mx-auto mb-8 h-32"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <Card className="h-full bg-[#F8F8F8] border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-8 h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <p className="text-[#00313C] text-sm font-medium mb-4">
                            {section.label}
                          </p>
                          <h2 className="text-3xl font-bold text-[#00313C] mb-2">
                            {section.title}
                          </h2>
                          <p className="text-[#6B7280] text-xl mb-4">
                            {section.subtitle}
                          </p>
                        </div>
                        <div className="text-[#00313C]">
                          {<section.icon size={40} />}
                        </div>
                      </div>
                      <p className="text-[#4B5563] text-base leading-relaxed">
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
      <footer className="bg-[#00313C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {/* Logo Column */}
            <div>
              <img src="/logo.png" alt="YoYo Group Logo" className="h-8 mb-4" />
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://yoyogroup.com/about/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/careers/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://yoyogroup.com/yoyo-pro/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Yoyo Pro
                  </a>
                </li>
                <li>
                  <Link to="/docs/cvs" className="text-gray-300 hover:text-white transition-colors">
                    Yoyo API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://yoyogroup.com/contact/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/support/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://yoyogroup.com/user-terms/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    User terms
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/privacy-notice/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Privacy notice
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/cookies-policy/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Cookies policy
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/complaints/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Complaints procedure
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/merchant-terms/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Merchant terms
                  </a>
                </li>
                <li>
                  <a href="https://yoyogroup.com/safeguarding/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-colors">
                    Safeguarding Accounts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">© {new Date().getFullYear()} YoYo Group</span>
              <img src="/logo.png" alt="YoYo Group" className="h-4" />
            </div>
            <a 
              href="https://yoyogroup.com/sitemap/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
