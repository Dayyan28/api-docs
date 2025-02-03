import { DocsSidebar } from "@/components/DocsSidebar";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const CVSDocsPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen">
      <DocsSidebar
        docType="cvs"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <ScrollArea className="flex-1 h-screen">
        <div className="container mx-auto py-8 px-4">
          <div className="prose max-w-none">
            <section id="overview" className={cn("mb-8", activeSection === "overview" ? "opacity-100" : "opacity-80")}>
              <h1>Overview - CVS</h1>
              <p>The Coupon, Voucher and Gift Card Service (CVS) provides a comprehensive API for managing digital coupons, vouchers, and gift cards.</p>
            </section>
            {/* Add more sections here as needed */}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CVSDocsPage;
