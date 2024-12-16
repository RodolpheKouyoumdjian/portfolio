"use client"

import React from "react";

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
            <p className="mt-6 text-lg text-gray-600 dark:text-white">
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
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:rodolphe.kouyoumdjian@mail.mcgill.ca">
                <Button>Contact Me</Button>
              </a>
              <div className="hidden sm:flex gap-4">
                <a href="./assets/CV Masters.pdf" download="Rodolphe_Kouyoumdjian_CV.pdf">
                  <Button variant="outline">Download CV</Button>
                </a>
                <a href="./assets/Transcript - Official Electronic.pdf" download="Rodolphe_Kouyoumdjian_Transcript.pdf">
                  <Button variant="outline">Download Transcript</Button>
                </a>
              </div>
              <div className="flex sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Download</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a href="./assets/CV Masters.pdf" download="Rodolphe_Kouyoumdjian_CV.pdf">
                        CV
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="./assets/Transcript - Official Electronic.pdf" download="Rodolphe_Kouyoumdjian_Transcript.pdf">
                        Transcript
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </motion.div>

          <CodeSection />

        </div>
      </div>
    </section>
  )
}

function CodeSection() {
  return (
    <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-blue-400">const</span>
            <span className="mr-2 text-pink-500">coder</span>
            <span className="mr-2 text-white">=</span>
            <span className="text-white">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-white">{`'`}</span>
            <span className="text-amber-400">Rodolphe Kouyoumdjian</span>
            <span className="text-white">{`',`}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
            <span className="text-white">{`'`}</span>
            <span className="text-amber-400">Developer</span>
            <span className="text-white">{`',`}</span>
          </div>
                           <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">skills: </span>
                    <span className="text-white">{`[`}</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"Data analysis"</span><span className="text-white">,</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"AI"</span><span className="text-white">,</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"Web Dev"</span><span className="text-white">,</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"Mobile Dev"</span><span className="text-white">,</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"Languages"</span><span className="text-white">,</span><br />
                    <span className="ml-4 lg:ml-8 text-amber-400">"Team building"</span><br />
                    <span className="text-white">{`]`}</span>
                  </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">worksHard:</span>
            <span className="text-blue-400">true</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">learnsFast:</span>
            <span className="text-blue-400">true</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">issuesUnsolved:</span>
            <span className="text-lime-400">0</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">shouldHire:</span>
            <span className="text-orange-400">function</span>
            <span className="text-white">{'(): bool {'}</span>
          </div>
          <div>
            <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
            <span className="text-white">{`(`}</span>
          </div>
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">worksHard</span>
            <span className="text-amber-400">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">solvesProblems</span>
            <span className="text-amber-400">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">issuesUnsolved</span>
            <span className="mr-2 text-amber-400">&ne;</span>
            <span className="text-orange-400">0</span>
          </div>
          <div><span className="ml-8 lg:ml-16 mr-2 text-white">{`);`}</span></div>
          <div><span className="ml-4 lg:ml-8 text-white">{`};`}</span></div>
          <div><span className="text-white">{`};`}</span></div>
        </code>
      </div>
    </div>
  )
}