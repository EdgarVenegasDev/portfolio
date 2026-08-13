import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import HowIBuild from "@/components/sections/HowIBuild";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutMe from "@/components/sections/AboutMe";

export default function Home() {
  return (
    <div id="top" className="bg-[var(--paper)]">
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <HowIBuild />
        <AboutMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}