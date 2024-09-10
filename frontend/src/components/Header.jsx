import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#2C3E50] text-[#ECF0F1] p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="/logo.svg" alt="logo" />
        </Link>

        <ul className="flex space-x-6">
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
            <Link to="/cart" className="hover:text-[#E67E22] transition-colors">
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

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#ECF0F1] text-[#2C3E50] px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2C3E50]">
            🔍
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
