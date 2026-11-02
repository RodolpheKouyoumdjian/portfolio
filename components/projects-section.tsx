import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"

type Project = {
  title: string
  date: string
  description: string
  details: string[]
  tech: string
  link?: string
}

const projects: Project[] = [
  {
    title: "Drift",
    date: "Summer 2026",
    description: "Open-source dependency-upgrade checker for developers and coding agents",
    details: [
      "Built a CLI and GitHub Action that downloads both versions of an upgraded dependency and finds the affected call sites by file and line, across 17 package ecosystems",
      "Scored 83.9% precision and 97.6% recall on 16,333 real-world npm API changes from a public research corpus",
      "Serves its analysis to coding agents over MCP and checks AI-generated fixes file by file, reverting any that weaken tests",
      "Published on npm as @usedrift/cli (2,000+ downloads in September 2026), with a VS Code extension and GitHub Action",
    ],
    tech: "TypeScript, Node.js, MCP, VS Code API",
    link: "https://github.com/trydrift/drift",
  },
  {
    title: "Scout",
    date: "Autumn 2026",
    description: "Local-first AI job-search system",
    details: [
      "Built a local daemon, a Chrome/Safari (MV3) extension that fills application forms deterministically and stops before submission, and a React dashboard",
      "Exposed it to Claude through an MCP server: job search over 760k+ postings, fit scoring, deduplication and application tracking, with schema-checked tool calls and approval before anything is sent",
      "Generated tailored CVs on a LaTeX template, constrained to verified experience",
    ],
    tech: "TypeScript, React, SQLite, MCP, Chrome Extensions",
  },
  {
    title: "SQL Interpreter & Query Optimizer",
    date: "Winter 2024",
    description: "SQL interpreter and query optimizer to improve query efficiency",
    details: [
      "Developed an SQL interpreter and query optimizer in Java to improve query efficiency and data retrieval",
      "Applied advanced data structures and optimization techniques to enhance performance",
    ],
    tech: "Java, Data Structures, Query Optimization",
  },
  {
    title: "Holoquiz",
    date: "Winter 2024",
    description: "Health-oriented AI powered quiz making game for students",
    details: [
      "Wrote all the software in a 6-person team: Raspberry Pi button and touchscreen handling, and a Python pipeline that generates quiz questions with GPT as structured JSON and grades answers live",
    ],
    tech: "OpenAI API, Python, Raspberry Pi",
  },
  {
    title: "scryblr.com",
    date: "Summer 2023",
    description: "Full-stack app for content creation using LLMs",
    details: [
      "Developed a full-stack app, integrating authentication, a database and an LLM API to improve UX",
    ],
    tech: "Flask, HTML, CSS, Javascript",
  },
  {
    title: "PairIt",
    date: "Summer 2022",
    description: "iOS language learning game using spaced repetition",
    details: [
      "Built an iOS language learning game to match words across languages using SwiftUI and a custom spaced repetition algorithm",
      "Scraped and processed 50+ GB of multilingual data from Project Gutenberg to generate frequency-based word pairs",
      "Used parallel concurrency in Python to accelerate data processing by 100x, enabling scalable smart recommendations",
    ],
    tech: "SwiftUI, Xcode, Python",
  },
  {
    title: "Asset Allocation",
    date: "Autumn 2021",
    description: "Mean variance portfolio optimization",
    details: [
      "Implemented Monte Carlo method for efficient frontier",
      "Modern Portfolio Theory optimization",
    ],
    tech: "Python, Statistics, data analysis",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                    {project.title} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">{project.date}</span>
            </div>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-600 marker:text-zinc-300 dark:text-zinc-400 dark:marker:text-zinc-600">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p className="mt-auto pt-4 text-xs font-medium text-blue-600 dark:text-blue-400">{project.tech}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
