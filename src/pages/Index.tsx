
import { HeroSection } from "@/components/home/HeroSection";
import { DocumentationSection } from "@/components/home/DocumentationSection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark-teal to-deep-teal">
      <HeroSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
};

export default Index;
