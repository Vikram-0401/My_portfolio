"use client"
import Navigation from "./components/Navigation"
import HomeSection from "./components/HomeSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation"

export default function Portfolio() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Animated Background */}
        <BackgroundGradientAnimation />

        <Navigation />
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="py-8 border-t border-gray-800 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vikram. Built with 
              <span className="text-blue-400"> React</span> and 
              <span className="text-purple-400"> TailwindCSS</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
