import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'
import { ProjectDialog } from '../components/ProjectDialog'

export function Projects() {
  const { t } = useLanguage()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // หาโปรเจกต์ที่เลือก จากข้อมูลของภาษาปัจจุบัน
  const selected = t.projects.items.find((p) => p.id === selectedId) ?? null

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project) => (
          <article key={project.id} className="flex flex-col rounded-3xl bg-mist p-8 md:p-10 md:last:odd:col-span-2">
            <p className="flex gap-3 text-sm text-muted">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="mt-4 text-lg text-muted leading-relaxed">{project.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="rounded-full bg-white px-3 py-1 text-sm">{tech}</li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setSelectedId(project.id)}
              className="group mt-auto flex w-full items-center justify-between gap-4 pt-10 text-left font-medium"
            >
              <span className="text-link group-hover:underline">{t.projects.viewDetails}</span>
              <span aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xl text-white transition-transform group-hover:scale-110">
                +
              </span>
            </button>
          </article>
        ))}
      </div>

      <ProjectDialog project={selected} onClose={() => setSelectedId(null)} />
    </Section>
  )
}