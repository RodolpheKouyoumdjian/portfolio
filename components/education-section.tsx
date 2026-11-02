import Image from "next/image"
import { Section } from "@/components/section"

const education = [
  {
    school: "McGill University",
    degree: "Bachelor of Science, Computer Science, 3.7 GPA",
    location: "Montreal, Quebec, Canada",
    date: "2022 - 2025",
    details: [
      "Study abroad: University of Edinburgh (Winter 2024), King's College London (Autumn 2024)",
      "Coursework: Statistical Learning, Statistical Computing, Brain-Inspired AI, Time Series Analysis, Database Systems, Mathematical Finance, Machine Learning for Biomedical Applications, Entrepreneurship and Innovation",
    ],
    logo: "./assets/mcgill_logo.png",
  },
  {
    school: "King's College London",
    degree: "Study abroad",
    location: "London, England",
    date: "Autumn 2024",
    details: [
      "Relevant Coursework: Mathematical Finance I: Discrete Time, Machine Learning for Biomedical Applications",
    ],
    logo: "./assets/kcl_logo.svg",
  },
  {
    school: "University of Edinburgh",
    degree: "Study abroad",
    location: "Edinburgh, Scotland",
    date: "Winter 2024",
    details: ["Relevant Coursework: Entrepreneurship and Innovation Project"],
    logo: "./assets/uoe_logo.svg",
  },
]

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-6">
        {education.map((edu) => (
          <li key={edu.school} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white p-1.5 dark:border-zinc-800">
              <Image src={edu.logo} alt={`${edu.school} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-semibold">{edu.school}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{edu.date}</span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{edu.degree}</p>
              {edu.details.map((detail) => (
                <p key={detail} className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{detail}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
