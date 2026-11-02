import { FileText, Github, GraduationCap, Linkedin, Mail } from "lucide-react"

const EMAIL = "ro.kouyoumdjian@gmail.com"

const socials = [
  { href: "https://github.com/rodolphekouyoumdjian", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/rodolphekouyoumdjian", label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
]

export function HeroSection() {
  return (
    <section className="pb-6 pt-32 sm:pt-40">
      <div>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Software Engineer · London</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Rodolphe Kouyoumdjian</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          McGill Computer Science graduate. I build full-stack products in TypeScript, React and Python, and lately
          AI agents and the tools they use, like Drift, an open-source upgrade checker served to coding agents over MCP.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="./assets/rodolphe_kouyoumdjian_resume.pdf"
            download="Rodolphe_Kouyoumdjian_CV.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <FileText className="h-4 w-4" /> Download CV
          </a>
          <a
            href="./assets/rodolphe_kouyoumdjian_transcript.pdf"
            download="Rodolphe_Kouyoumdjian_Transcript.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <GraduationCap className="h-4 w-4" /> Transcript
          </a>
          <div className="ml-1 flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
