import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-chart-3 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/LOGO (1) (2).png"
                  alt="Transformers"
                  className="w-26 h-26 object-contain"
                />
              </div>
            </div>
            <p className="text-sm opacity-75">
              Leading modular aluminum display booth systems designed for modern
              exhibitions and events worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-secondary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-secondary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Booth Types */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Booth Types
            </h3>
            <ul className="space-y-2 text-sm">
              <li>U-Shape Booths</li>
              <li>L-Shape Booths</li>
              <li>Luxury Booths</li>
              <li>Specialized Systems</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +201110999646
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> sales@transformers-me.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Middle East & International
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm opacity-75">
            &copy; 2025 Transformers Display System. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
