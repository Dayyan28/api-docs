import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const showHomeButton = location.pathname !== '/';

  return showHomeButton ? (
    <header className="bg-deep-teal border-b border-secondary-teal">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-secondary-cream hover:text-primary-orange transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Back to Documentation Home</span>
        </Link>
      </div>
    </header>
  ) : null;
};