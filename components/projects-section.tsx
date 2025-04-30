"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
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
      "In a team of 4, conceived the software and hardware to generate a health quiz using AI for students to learn in a more interactive way",
    ],
    tech: "OpenAI API, Python, Arduino",
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
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-blue-600">Projects</h2>
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-600" />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center sm:flex-row ${index % 2 === 0 ? 'sm:justify-end sm:pr-[calc(50%+2rem)]' : 'sm:justify-start sm:pl-[calc(50%+2rem)]'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -ml-1.5 h-3 w-3 rounded-full bg-blue-600" />

                <Card className="w-full max-w-lg shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                    </div>
                    <p className="mb-4 font-medium">{project.description}</p>
                    <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.tech}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}