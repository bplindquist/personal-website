import { HiMail } from "react-icons/hi";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;
const FACEBOOK_PROFILE_ID = import.meta.env.VITE_FACEBOOK_PROFILE_ID;
const GITHUB_PROFILE_ID = import.meta.env.VITE_GITHUB_PROFILE_ID;
const LINKEDIN_PROFILE_ID = import.meta.env.VITE_LINKEDIN_PROFILE_ID;

export const Contact = () => {
  return (
    <section className="flex-1 bg-white border border-gray-200 rounded-lg p-8 shadow-sm h-64 sm:h-80 flex flex-col justify-center">
      <h2 className="font-bold text-3xl mb-8">Contact</h2>

      <div className="flex flex-col gap-8">
        {/* Email Section */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
            <HiMail className="w-6 h-6 text-blue-600" />
          </div>
          <a
            href="mailto:hello@example.com"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {EMAIL_ADDRESS}
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wide">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href={`https://github.com/${GITHUB_PROFILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-800 hover:to-gray-900 group transition-all shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href={`https://linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-600 hover:to-blue-700 group transition-all shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
            </a>
            <a
              href={`https://facebook.com/profile.php?id=${FACEBOOK_PROFILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 group transition-all shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
