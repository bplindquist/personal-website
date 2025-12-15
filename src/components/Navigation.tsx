import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav
        className="fixed top-0 w-full bg-white shadow-md z-50"
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-3 py-4 w-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </div>

          <ul className="flex flex-row items-center gap-8 list-none m-0 p-0">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
