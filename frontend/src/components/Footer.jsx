import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-[#ECF0F1] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">YASE</h3>
            <p className="text-sm">
              Your one-stop shop for all things e-commerce.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#E67E22] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#E67E22] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-[#E67E22] transition-colors"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-[#E67E22] transition-colors"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@fakemail.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#3498DB] text-center">
          <p className="text-sm">&copy; 2024 YASE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
