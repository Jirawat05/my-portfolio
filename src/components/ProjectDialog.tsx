import { useEffect, useRef } from 'react'
import type { Project } from '../content/types'
import { useLanguage } from '../i18n/useLanguage'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)

  // มีโปรเจกต์ให้เปิดป๊อปอัป ไม่มีให้ปิด
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose() // คลิกพื้นหลังเพื่อปิด
      }}
      aria-labelledby="project-dialog-title"
        className="m-auto max-h-[85svh] w-[min(100%-2rem,44rem)] rounded-3xl bg-white p-0 text-ink backdrop:bg-black/40 backdrop:backdrop-blur-sm motion-safe:open:animate-rise"
    >
      {project && (
        <div className="p-8 md:p-12 ">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="flex gap-3 text-sm text-muted">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </p>
              <h3 id="project-dialog-title"
                  className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.close}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-muted transition-colors hover:text-ink"
            >
              ✕
            </button>
          </div>

          <p className="mt-6 text-lg text-muted leading-relaxed">{project.summary}</p>

          <ul className="mt-8 space-y-4 text-lg leading-relaxed">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-4">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-10 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded-full bg-mist px-3 py-1 text-sm">{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </dialog>
  )
}