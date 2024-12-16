import { EducationSection } from "@/components/education-section"
import { HeroSection } from "@/components/hero-section"
import { NavBar } from "@/components/nav-bar"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsTree } from "@/components/skills-tree"

export default function Home() {
  return (
    <main className="!overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsTree />
    </main>
  )
}

