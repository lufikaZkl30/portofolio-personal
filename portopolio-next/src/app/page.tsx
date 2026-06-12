"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import AmbientEnvironment from "@/components/AmbientEnvironment";
import HeroSectionNew from "@/components/HeroSectionNew";
import AboutSectionNew from "@/components/AboutSectionNew";
import SkillsSectionNew from "@/components/SkillsSectionNew";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSectionNew from "@/components/ProjectsSectionNew";
import ContactSectionNew from "@/components/ContactSectionNew";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy to update active navigation item
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'tools', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen font-sans antialiased selection:bg-[#A3C9A8] selection:text-white">
      <AmbientEnvironment />
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <HeroSectionNew />
        <AboutSectionNew />
        <SkillsSectionNew />
        <ToolsSection />
        <ProjectsSectionNew />
        <ContactSectionNew />
      </main>
    </div>
  );
}
