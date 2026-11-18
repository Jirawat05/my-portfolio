import type { ReactNode } from 'react'
import type { SectionId } from '../content/sections'

type SectionProps = {
  id: SectionId
  title: string
  tone?: 'light' | 'mist' | 'dark'
  children: ReactNode
}

const tones = {
  light: 'bg-white text-ink',
  mist: 'bg-mist text-ink',
  dark: 'bg-night text-white',
}

export function Section({ id, title, tone = 'light', children }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} px-6 py-24 md:py-32`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-snug">
          {title}
        </h2>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  )
}