import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, DollarSign, Store, CreditCard, Star, PieChart, Facebook, Linkedin, Instagram } from "lucide-react";

const documentationSections = [
  {
    title: "Attract",
    subtitle: "Sign Up Deals And Referral Campaigns",
    description: "For lead generation and trial boost, offer sign up deals for new customers to on-board them by the masses and turn loyal customers into a marketing tool with a stand-out referral campaign.",
    path: "/docs/cvs",
    label: "More customers",
    icon: DollarSign,
  },
  {
    title: "Engage",
    subtitle: "Customer Analytics",
    description: "Thanks to our dashboard, you can reward customers based on their location or previous shopping habits. Grow your database, get to know your customers, engage with them and get feedback.",
    path: "/docs/pos",
    label: "More data",
    icon: Store,
  },
  {
    title: "Retain",
    subtitle: "Targeted Campaigns",
    description: "Whether you're targeting and rewarding new customers or are identifying slipping customers and incentivising them to get back in store - give customers what they want, when they want it.",
    path: "/docs/ecommerce",
    label: "More transactions",
    icon: Heart,
  },
  {
    title: "Grow",
    subtitle: "Customer Segmentation",
    description: "It's all in the details. Prove that you understand their wants and needs by segmenting and targeting your customers. It will drive increased basket values and frequency.",
    path: "/docs/vsp",
    label: "More Spend and Frequency",
    icon: CreditCard,
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
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50 p-8">
                    <div className="space-y-6">
                      <div className="text-sm font-medium text-gray-600">
                        {section.label}
                      </div>
                      <div className="flex justify-between items-start">
                        <div className="space-y-4 flex-1">
                          <h2 className="text-4xl font-bold text-primary-dark-teal">
                            {section.title}
                          </h2>
                          <h3 className="text-xl text-gray-500">
                            {section.subtitle}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                        <div className="ml-6">
                          <img 
                            src={`/lovable-uploads/icon-${section.title.toLowerCase()}.png`} 
                            alt={`${section.title} icon`}
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                      </div>
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
                Attract. Engage. Retain. Grow.
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
