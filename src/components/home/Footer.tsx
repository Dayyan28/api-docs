
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#001923] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <img src="/logo.png" alt="YoYo Group Logo" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-[#73B4BC]">Attract. Engage. Retain. Grow.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/docs/cvs" className="text-[#73B4BC] hover:text-white transition-colors">
                  CVS
                </Link>
              </li>
              <li>
                <Link to="/docs/pos" className="text-[#73B4BC] hover:text-white transition-colors">
                  POS Integration
                </Link>
              </li>
              <li>
                <Link to="/docs/vsp" className="text-[#73B4BC] hover:text-white transition-colors">
                  VSP
                </Link>
              </li>
              <li>
                <Link to="/docs/loyalty" className="text-[#73B4BC] hover:text-white transition-colors">
                  Loyalty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://yoyogroup.com/about/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#73B4BC] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://yoyogroup.com/careers/" target="_blank" rel="noopener noreferrer"
                   className="text-[#73B4BC] hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://yoyogroup.com/contact/" target="_blank" rel="noopener noreferrer"
                   className="text-[#73B4BC] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/yoyogroup" target="_blank" rel="noopener noreferrer"
                 className="text-[#73B4BC] hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://linkedin.com/company/yoyogroup" target="_blank" rel="noopener noreferrer"
                 className="text-[#73B4BC] hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://instagram.com/yoyogroup" target="_blank" rel="noopener noreferrer"
                 className="text-[#73B4BC] hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-[#73B4BC]/20 pt-8">
          <p className="text-[#73B4BC]">
            © {new Date().getFullYear()} YoYo Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
