"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "Vretta",
        location: "Montreal, Canada (Remote)",
        date: "Nov 2025 - Present",
        description: "Led end-to-end improvements across backend services and frontend data flows",
        details: [
            "Led backend improvements using Node.js and TypeScript and debugged production issues with direct SQL and Redis tracing, reducing incident resolution time by 30%",
            "Restructured Angular dataflow logic, redesigned backend data contracts in Firebase, and validated end-to-end behavior with AWS Observer, reducing data-related errors by 25%",
        ],
        technologies: ["Node.js", "TypeScript", "Angular", "Firebase", "Redis", "AWS"],
    },
    {
        title: "Software Engineering Intern",
        company: "Alphinat",
        location: "Montreal, Canada",
        date: "May 2025 - Aug 2025",
        description: "Owned delivery of a production web application and automated multilingual content pipelines",
        details: [
            "Delivered a production web application for the HCCH in a .NET + IIS environment, improving workflow completion rates by 35%",
            "Automated the multilingual content pipeline with a Python + pandas tool, cutting translation turnaround from ~1 month to 3 days",
        ],
        technologies: [".NET", "IIS", "Python", "pandas", "SQL"],
    },
    {
        title: "Founding Engineer",
        company: "Planorama",
        location: "Montreal, Canada (Remote)",
        date: "Jan 2025 - Apr 2025",
        description: "Built a full-stack planning platform and automation integrations for early users",
        details: [
            "Built a planning platform for 100+ users using Next.js, MongoDB, and NextAuth, integrating Stripe and automation via OpenAI, Discord, and GitHub",
            "Developed CI/CD pipelines with GitHub Actions to automate deployments and code publishing, reducing release overhead by 40%",
        ],
        technologies: ["Next.js", "MongoDB", "NextAuth", "Stripe", "GitHub Actions", "OpenAI"],
    },
    {
        title: "Full-stack Engineer",
        company: "Avocado",
        location: "Montreal, Canada (Remote)",
        date: "Sep 2024 - Dec 2024",
        description: "Architected and delivered core marketplace features and payments infrastructure",
        details: [
            "Delivered 90% of the platform's core marketplace: product listings, image uploads, and date-based rental availability using Next.js, Prisma, and MongoDB",
            "Integrated Stripe Identity and Payments to automate transactions and reduce fraudulent signups by 60%",
        ],
        technologies: ["Next.js", "Prisma", "MongoDB", "Stripe", "Google Cloud"],
    },
    {
        title: "Software Engineer (Contract)",
        company: "Allons Burger",
        location: "Montreal, Canada",
        date: "May 2023 - Dec 2023",
        description: "Led development of an ordering app and backend systems",
        details: [
            "Built an ordering app (Dart) with a Spring Boot backend, integrating Stripe and Doordash APIs to cut fees and streamline delivery",
            "Designed a rewards system and admin dashboard to increase retention by 35%",
        ],
        technologies: ["Dart", "Spring Boot", "Stripe", "Doordash API"],
    },
    {
        title: "Lead Developer",
        company: "PairIt",
        location: "Montreal, Canada (Remote)",
        date: "May 2022 - Aug 2022",
        description: "Led development of an iOS language-learning game and backend data tooling",
        details: [
            "Built an iOS app in SwiftUI and designed spaced-repetition recommendation engine to boost learning efficiency",
            "Scraped multilingual data and generated frequency lists in Rust, accelerating data processing by ~100×",
        ],
        technologies: ["SwiftUI", "Rust", "iOS", "Data Processing"],
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold">Experience</h2>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{exp.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium">{exp.company}</p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="h-2 w-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} className="bg-[#e0e7ff] text-[#3b82f6] hover:bg-[#c7d2fe]">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
