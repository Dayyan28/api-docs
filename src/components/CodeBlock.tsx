
import { useEffect, useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  method: string;
  endpoint: string;
  request?: string;
  response?: string;
  isVisible: boolean;
}

export const CodeBlock = ({ method, endpoint, request, response, isVisible }: CodeBlockProps) => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const formatJSON = (jsonString?: string) => {
    if (!jsonString) return '';
    try {
      // If it's already a JSON string, parse and re-stringify it
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch {
      // If it's not valid JSON, return the original string
      return jsonString;
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const getAllContent = () => {
    return `${method} ${endpoint}\n\n${request ? `Request:\n${formatJSON(request)}\n\n` : ''}${
      response ? `Response:\n${formatJSON(response)}` : ''
    }`;
  };

  if (!show) return null;

  return (
    <div className="code-block animate-fade-in bg-docsbg rounded-lg p-6 relative">
      <button
        onClick={() => handleCopy(getAllContent())}
        className="absolute right-4 top-4 p-2 rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckCheck className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>

      <div className="mb-4">
        <span className="text-green-400 font-mono">{method}</span>{' '}
        <span className="text-white font-mono">{endpoint}</span>
      </div>
      
      {request && (
        <div className="mb-6">
          <div className="text-gray-400 mb-2 font-semibold">Request</div>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-white font-mono whitespace-pre-wrap">{formatJSON(request)}</code>
          </pre>
        </div>
      )}
      
      {response && (
        <div>
          <div className="text-gray-400 mb-2 font-semibold">Response</div>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-white font-mono whitespace-pre-wrap">{formatJSON(response)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
