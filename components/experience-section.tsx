"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        title: "Software Engineer",
        company: "Planorama | Founder",
        location: "Montreal, Canada",
        date: "January 2025 - May 2025",
        description: "Built a full-stack web app to streamline project planning using Next.js, MongoDB, and NextAuth",
        details: [
            "Integrated payments to support subscriptions using Stripe and automated collaboration with OpenAI, Discord, and GitHub APIs",
            "Built CI/CD pipelines to deploy LLM-generated structured outputs using GitHub Actions",
        ],
        technologies: ["Next.js", "MongoDB", "NextAuth", "Stripe", "GitHub Actions"],
    },
    {
        title: "Full-stack Engineer",
        company: "Avocado",
        location: "Remote",
        date: "September 2024 - December 2024",
        description: "Built core features for an online marketplace using Next.js, Prisma, MongoDB, Firebase",
        details: [
            "Developed product listing and transaction functionality with Stripe integration",
            "Implemented cloud infrastructure using Google Cloud for scalable deployment",
        ],
        technologies: ["Next.js", "Prisma", "MongoDB", "Firebase", "Google Cloud"],
    },
    {
        title: "Software Engineer",
        company: "Allons Burger | Contract",
        location: "Montreal, Canada",
        date: "Summer 2023",
        description: "Built a mobile ordering app using Flutter with seamless payment and delivery integration",
        details: [
            "Integrated Stripe for payments and Doordash APIs for delivery services",
            "Implemented a customer rewards program, intuitive UI, admin dashboard, and dynamic menu management",
            "Built a backend with Spring Boot to handle orders and user management",
        ],
        technologies: ["Flutter", "Stripe", "Spring Boot", "Doordash API"],
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
