import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-200",
        isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-14">
          <Link to="/" className="text-foreground font-semibold tracking-tight">
            Brian Lindquist
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "text-sm transition-colors",
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <Container>
            <ul className="py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "block text-sm",
                      location.pathname === link.to
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
