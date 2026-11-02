import type { ReactNode } from "react"

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-14">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}
