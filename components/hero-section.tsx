"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hello,
              <br />
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Rodolphe
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Developer & Student
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="https://github.com/RodolpheKouyoumdjian" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rodolphekouyoumdjian?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:rodolphe.kouyoumdjian@mail.mcgill.ca">
                <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="mailto:rodolphe.kouyoumdjian@mail.mcgill.ca">
                <Button>Contact Me</Button>
              </a>
              <a href="/assets/CV Masters.pdf" download="Rodolphe_Kouyoumdjian_CV.pdf">
                <Button variant="outline">Download CV</Button>
              </a>
              <a href="/assets/Transcript - Official Electronic.pdf" download="Rodolphe_Kouyoumdjian_Transcript.pdf">
                <Button variant="outline">Download Transcript</Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-lg border bg-slate-900 p-4 font-mono text-sm text-slate-100 shadow-xl"
          >
            <div className="mb-4 flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <pre className="space-y-2">
              <code className="text-blue-400">const</code>{" "}
              <code className="text-pink-400">developer</code> = {"{"}
              <br />
              {"  "}name: <code className="text-green-400">&apos;Rodolphe Kouyoumdjian&apos;</code>,
              <br />
              {"  "}title: <code className="text-green-400">&apos;Developer&apos;</code>,
              <br />
              {"  "}specialties: [
              <br />
              {"    "}<code className="text-green-400">&apos;Data analyst;</code>,
              <br />
              {"    "}<code className="text-green-400">&apos;AI Enthusiast&apos;</code>,
              <br />
              {"    "}<code className="text-green-400">&apos;Web Creator&apos;</code>,
              <br />
              {"    "}<code className="text-green-400">&apos;Mobile Apps Innovator&apos;</code>,
              <br />
              {"    "}<code className="text-green-400">&apos;Multilingual&apos;</code>
              <br />
              {"  "}],
              <br />
              {"  "}contact:{" "}
              <code className="text-green-400">
                &apos;rodolphe.kouyoumdjian@mail.mcgill.ca&apos;
              </code>
              <br />
              {"}"}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

