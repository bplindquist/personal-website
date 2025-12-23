import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const GITHUB_PROFILE_ID = import.meta.env.VITE_GITHUB_PROFILE_ID;
const LINKEDIN_PROFILE_ID = import.meta.env.VITE_LINKEDIN_PROFILE_ID;

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BL</span>
              </div>
              <span className="font-semibold text-lg">Brian Lindquist</span>
            </div>
            <p className="text-slate-400 text-sm">
              Senior Frontend Engineer with 9+ years of experience building
              exceptional web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href={`https://github.com/${GITHUB_PROFILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Brian Lindquist. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Built with <FaHeart className="w-4 h-4 text-rose-500" /> using React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
