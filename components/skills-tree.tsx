import { Section } from "@/components/section"

const groups = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Java", "Rust", "Swift", "Dart"] },
  { name: "Frontend", items: ["React", "Next.js", "Angular", "SvelteKit", "Tailwind CSS", "Phaser"] },
  { name: "Backend & data", items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Prisma", "pandas", "Spring Boot"] },
  { name: "AI", items: ["LLMs", "AI agents", "MCP (Model Context Protocol)"] },
  { name: "Tooling", items: ["Git", "GitHub Actions", "Docker", "Vitest", "AWS CloudWatch", "Google Cloud", "Stripe"] },
]

export function SkillsTree() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-4">
        {groups.map((group) => (
          <div key={group.name} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{group.name}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-sm dark:border-zinc-800">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
