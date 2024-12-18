import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SkillsSection } from "@/components/skills-section";

  export default function Home() {
    return (
      <main>
        <Navigation />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }