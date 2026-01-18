"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const education = [
  {
    school: "McGill University",
    degree: "Bachelor of Science, Computer Science, 3.7 GPA",
    location: "Montreal, Quebec, Canada",
    date: "2022 -- 2025 (Graduated)",
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
    <section id="education" className="pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold">Education</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {/* <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" /> */}
                    <Image 
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={40}
                      height={40}
                      className="h-15"
                    />
                    {edu.school}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

