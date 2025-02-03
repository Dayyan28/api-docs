import { DocsSidebar } from "@/components/DocsSidebar";
import { useState } from "react";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

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
      <main className="flex-1 p-8 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer docType="cvs" />
        </div>
      </main>
    </div>
  );
};

export default CVSDocsPage;