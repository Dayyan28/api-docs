import { DocsSidebar } from "@/components/DocsSidebar";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const POSDocsPage = () => {
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
        docType="pos"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <ScrollArea className="flex-1 h-screen">
        <div className="container mx-auto py-8 px-4">
          <div className="prose prose-slate max-w-4xl mx-auto">
            <div id="overview">
              <h1>Overview - Point of Sale Integration</h1>
              <p>The Yoyo Platform enables point of sale systems to process various transaction types through a unified integration.</p>
              
              <h2>Transaction Types</h2>
              <ul>
                <li>Payments</li>
                <li>Deposits</li>
                <li>Withdrawals</li>
                <li>Refunds</li>
              </ul>

              <h2>Platform Architecture</h2>
              <p>The platform uses a dual messaging architecture to ensure reliable transaction processing:</p>
              <ul>
                <li>Initial authorization request</li>
                <li>Subsequent confirmation/reversal</li>
              </ul>

              <h2>Process Flow</h2>
              <ol>
                <li>Customer presents payment token</li>
                <li>POS validates and processes transaction</li>
                <li>Platform routes to appropriate provider</li>
                <li>Confirmation sent to all parties</li>
              </ol>
            </div>

            <div id="dual-messaging">
              <h2>Dual Messaging</h2>
              <p>The dual messaging system ensures transaction integrity through:</p>
              <ul>
                <li>Initial authorization phase</li>
                <li>Final settlement phase</li>
                <li>Automatic timeout handling</li>
                <li>Reversal capabilities</li>
              </ul>
            </div>

            <div id="integration-models">
              <h2>Integration Models</h2>
              
              <h3>Over the Counter Model</h3>
              <p>Suitable for quick service environments where:</p>
              <ul>
                <li>Customer presents payment at counter</li>
                <li>Transaction processed immediately</li>
                <li>Receipt provided on completion</li>
              </ul>

              <h3>Sit Down Model</h3>
              <p>Designed for restaurant environments where:</p>
              <ul>
                <li>Bill presented at table</li>
                <li>Customer can pay at leisure</li>
                <li>Multiple payment methods supported</li>
              </ul>
            </div>

            {/* Additional sections would be added here */}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default POSDocsPage;
