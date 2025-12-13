export const Navigation = () => {
  return (
    <header>
      <nav
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] bg-white shadow-md z-50"
        aria-label="Main navigation"
      >
        <div className="flex flex-row align-center justify-between max-w-4xl mx-auto px-6 py-4 w-full">
          <div className="flex align-center justify-start">
            <h2 className="font-bold text-xl">Brian Lindquist</h2>
          </div>

          <ul>{/* {nav links} */}</ul>
        </div>
      </nav>
    </header>
  );
};
