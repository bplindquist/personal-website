import { Navigation } from "@/components/Navigation/Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <main className="flex justify-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-7xl w-full text-center">
          <h1 className="font-bold text-3xl mb-3">
            Welcome to my personal website!
          </h1>
          <p>🚧 This page is under construction 🚧</p>
        </div>
      </main>
    </>
  );
};
