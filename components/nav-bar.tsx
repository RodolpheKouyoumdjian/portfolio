"use client"

import { Moon, Sun } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

export function NavBar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          RK
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#education" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Education
          </Link>
          <Link href="#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </Link>
          <Link href="#skills" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Skills
          </Link>
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

