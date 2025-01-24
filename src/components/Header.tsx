import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const showHomeButton = location.pathname !== '/';

  return showHomeButton ? (
    <header className="bg-deep-teal border-b border-secondary-teal">
      <div className="container mx-auto px-4 py-3">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-teal/10 text-secondary-cream hover:bg-secondary-teal/20 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to Documentation Home</span>
        </Link>
      </div>
    </header>
  ) : null;
};