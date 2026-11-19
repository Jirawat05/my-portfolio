import type { CSSProperties } from 'react'
import { skillIcons } from '../content/skillIcons'

type SkillIconProps = {
  name: string
  className?: string
}

export function SkillIcon({ name, className = '' }: SkillIconProps) {
  const icon = skillIcons[name]
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ '--brand': `#${icon.hex}` } as CSSProperties}
    >
      <path d={icon.path} />
    </svg>
  )
}