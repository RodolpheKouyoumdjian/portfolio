import { EducationSection } from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { NavBar } from "@/components/nav-bar"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsTree } from "@/components/skills-tree"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-5">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsTree />
        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          ro.kouyoumdjian@gmail.com · London
        </footer>
      </main>
    </>
  )
}
