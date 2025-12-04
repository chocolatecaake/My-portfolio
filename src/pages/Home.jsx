import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { EducationExperience } from "../components/EducationExperience";
import { Projects } from "../components/Projects";
import { ContactMe } from "../components/ContactMe";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/*Theme Toggle*/}
      {/*<ThemeToggle />*/}

      {/*Background effects*/}

      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationExperience />
        <Projects />
        <ContactMe />
      </main>

      {/*Footer*/}
    </div>
  );
};
