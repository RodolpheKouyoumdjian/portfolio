"use client"

import { motion } from "framer-motion"
import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    school: "McGill University",
    degree: "BSc Computer Science",
    location: "Montreal, Canada",
    date: "Autumn 2022 - Winter 2025",
    details: [
      "3.86 / 4.0 GPA",
      "Relevant Coursework: Fundamentals of Statistical Learning, Intro to Statistical Computing",
    ],
  },
  {
    school: "King's College London",
    degree: "Study abroad",
    location: "London, England",
    date: "Autumn 2024",
    details: [
      "Relevant Coursework: Mathematical Finance I: Discrete Time, Machine Learning for Biomedical Applications",
    ],
  },
  {
    school: "University of Edinburgh",
    degree: "Study abroad",
    location: "Edinburgh, Scotland",
    date: "Winter 2024",
    details: ["Relevant Coursework: Entrepreneurship and Innovation Project"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="pt-8 pb-12">
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
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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

