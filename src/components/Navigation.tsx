import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
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
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3 font-semibold text-foreground"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BL</span>
            </div>
            <span className="hidden sm:block">Brian Lindquist</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Button
                  variant={location.pathname === link.to ? "secondary" : "ghost"}
                  asChild
                >
                  <Link to={link.to}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <Container>
            <ul className="py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Button
                    variant={location.pathname === link.to ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link to={link.to}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
