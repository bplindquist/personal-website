import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Profile } from "@/components/Profile";

export const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-6 lg:px-8 pb-8 max-w-6xl mx-auto">
          <Profile />
          <Contact />
        </div>
      </main>
    </>
  );
};
