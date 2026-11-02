import { Section } from "@/components/section"

const experiences = [
    {
        title: "Independent Software Engineer",
        company: "Nuclear Gaming",
        location: "Remote",
        date: "May 2026 - Present",
        description: "Built browser games end to end, from game clients to simulation engines",
        details: [
            "Built TypeScript/Phaser game clients, Rust/WASM simulation engines and deterministic event-replay systems, along with the UI/UX",
            "Built large-scale statistical simulation tooling, data compression workflows and cross-browser performance optimisation",
        ],
        technologies: ["TypeScript", "Phaser", "Rust", "WebAssembly", "SvelteKit"],
    },
    {
        title: "Full-Stack Developer",
        company: "Vretta",
        location: "Montreal, Canada (Remote)",
        date: "Nov 2025 - May 2026",
        description: "Built production features for a large-scale assessment platform used by 1M+ students",
        details: [
            "Developed and maintained production features with Angular, Node.js and TypeScript, improving frontend workflows and code maintainability",
            "Investigated and resolved production issues through direct SQL inspection, AWS CloudWatch log analysis and live client support sessions",
        ],
        technologies: ["Angular", "Node.js", "TypeScript", "SQL", "AWS CloudWatch"],
    },
    {
        title: "Software Engineering Intern",
        company: "Alphinat",
        location: "Montreal, Canada",
        date: "May 2025 - Aug 2025",
        description: "Delivered a production web application and automated multilingual content pipelines",
        details: [
            "Delivered a production web application for the Hague Conference on Private International Law (HCCH) in a .NET + IIS environment, improving workflow completion rates by 35% through redesigned user flows",
            "Automated the multilingual content pipeline with a Python + pandas tool, cutting translation turnaround from 1 month to 3 days",
        ],
        technologies: [".NET", "IIS", "Python", "pandas", "SQL"],
    },
    {
        title: "Founder",
        company: "Planorama",
        location: "Montreal, Canada (Remote)",
        date: "Jan 2025 - Apr 2025",
        description: "Turned a McHacks prototype (2nd of 600+, solo) into a live project-planning platform",
        details: [
            "Built a project-planning platform with Next.js, MongoDB and NextAuth that uses LLMs to generate project plans and UML diagrams, with Stripe, Discord and GitHub integrations",
            "Set up CI/CD with GitHub Actions to automate deployments and publishing",
        ],
        technologies: ["Next.js", "MongoDB", "NextAuth", "Stripe", "GitHub Actions", "OpenAI"],
    },
    {
        title: "Full-Stack Engineering Intern",
        company: "Avocado",
        location: "Montreal, Canada (Remote)",
        date: "May 2024 - Aug 2024",
        description: "Built the core marketplace and payments infrastructure",
        details: [
            "Delivered 90% of the platform's core marketplace: product listings, image uploads and date-based rental availability with Next.js, Prisma and MongoDB",
            "Integrated Stripe Identity and Stripe Payments for identity verification and automated in-platform payments",
        ],
        technologies: ["Next.js", "Prisma", "MongoDB", "Stripe", "Google Cloud"],
    },
    {
        title: "Software Engineer (Contract)",
        company: "Allons Burger",
        location: "Montreal, Canada",
        date: "May 2023 - Dec 2023",
        description: "Built an ordering app and its backend",
        details: [
            "Built a Dart and Spring Boot ordering app with Stripe payments and an admin dashboard",
            "Integrated DoorDash deliveries at a flat per-order fee instead of the 20-30% commission charged by delivery apps",
        ],
        technologies: ["Dart", "Spring Boot", "Stripe", "DoorDash API"],
    },
]

export default function ExperienceSection() {
    return (
        <Section id="experience" title="Experience">
            <ol className="space-y-10">
                {experiences.map((exp) => (
                    <li key={exp.company} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                        <p className="pt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{exp.date}</p>
                        <div>
                            <h3 className="font-semibold">
                                {exp.title} <span className="text-zinc-400">·</span> {exp.company}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.location}</p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-600 marker:text-zinc-300 dark:text-zinc-400 dark:marker:text-zinc-600">
                                {exp.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    )
}
