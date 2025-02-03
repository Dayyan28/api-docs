import { DocsSidebar } from "@/components/DocsSidebar";
import { useState } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { useMarkdownFiles } from "@/hooks/useMarkdownFiles";

const VSPDocsPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { markdownContent, isLoading } = useMarkdownFiles("vsp");

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
        docType="vsp"
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <main className="flex-1 p-8 overflow-y-auto bg-white">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-dark-teal"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <MarkdownContent content={markdownContent} />
          </div>
        )}
      </main>
    </div>
  );
};

export default VSPDocsPage;
