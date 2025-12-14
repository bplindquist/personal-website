import profile from "@/assets/profile.jpeg";

export const Navigation = () => {
  return (
    <header>
      <nav
        className="fixed top-0 w-full bg-white shadow-md z-50"
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-3 py-6 w-full">
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200 shadow-sm"
            />
            <h2 className="font-bold text-xl">Brian Lindquist</h2>
          </div>

          <ul className="flex flex-row items-center gap-8 list-none m-0 p-0">
            <li>Profile</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
