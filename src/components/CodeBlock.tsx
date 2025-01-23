import { useEffect, useState } from 'react';

interface CodeBlockProps {
  method: string;
  endpoint: string;
  request?: string;
  response?: string;
  isVisible: boolean;
}

export const CodeBlock = ({ method, endpoint, request, response, isVisible }: CodeBlockProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className={`code-block ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="mb-4">
        <span className="text-green-400">{method}</span> {endpoint}
      </div>
      {request && (
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Request</div>
          <pre className="bg-gray-900 p-4 rounded">
            {request}
          </pre>
        </div>
      )}
      {response && (
        <div>
          <div className="text-sm text-gray-400 mb-2">Response</div>
          <pre className="bg-gray-900 p-4 rounded">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};