import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav
        className="fixed top-0 w-full bg-white shadow-md z-50"
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 w-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row items-center gap-8 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-7 h-7 text-gray-700" />
            ) : (
              <HiMenu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full right-0 w-1/2 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col list-none m-0 p-0">
            <li className="border-b border-gray-100">
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all font-medium"
              >
                Profile
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <Link
                to="/blog"
                onClick={closeMenu}
                className="block px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
