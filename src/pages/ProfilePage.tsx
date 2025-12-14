import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";

export const ProfilePage = () => {
  return (
    <>
      <Hero />

      <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-6 lg:px-8 pb-8 max-w-6xl mx-auto">
        <Profile />
        <Contact />
      </div>
    </>
  );
};
