import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const ProfilePage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};
