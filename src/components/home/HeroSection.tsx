
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
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
  );
};
