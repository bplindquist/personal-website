import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 w-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center shadow-lg group-hover:shadow-sky-500/25 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">BL</span>
            </div>
            <span className="hidden sm:block font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
              Brian Lindquist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-medium rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-slate-700" />
            ) : (
              <HiMenu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/20 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col list-none m-0 p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === link.to
                      ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-4 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-medium rounded-xl text-center"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
