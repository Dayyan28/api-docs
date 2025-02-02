import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { useEffect, useState } from "react";
import { loadMarkdownFile } from "@/utils/markdown";

interface ErrorCodesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: "cvs" | "pos";
}

export const ErrorCodesDialog = ({ open, onOpenChange, serviceName }: ErrorCodesDialogProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        let files = [];
        if (serviceName === "cvs") {
          files = [
            '/docs/cvs/_cvs_errors.md',
            '/docs/cvs/_cvs_giftcard_response_codes.md'
          ];
        } else if (serviceName === "pos") {
          files = [
            '/docs/pos/_pos_errors.md',
            '/docs/pos/_pos_bills_response_codes.md',
            '/docs/pos/_pos_response_codes.md'
          ];
        }

        const contents = await Promise.all(files.map(file => loadMarkdownFile(file)));
        setContent(contents.join('\n\n'));
      } catch (error) {
        console.error('Error loading error codes:', error);
        setContent('# Error\nFailed to load error codes content.');
      }
    };

    if (open) {
      loadContent();
    }
  }, [open, serviceName]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {serviceName.toUpperCase()} Error Codes
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="prose prose-black max-w-none">
            <MarkdownRenderer content={content} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};