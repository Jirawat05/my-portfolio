export type Project = {
  id: string
  title: string
  category: string
  year: string
  summary: string
  highlights: string[]
  tech: string[]
}

export type Experience = {
  role: string
  org: string
  period: string
  points: string[]
}

export type SkillGroup = {
  name: string
  items: string[]
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  url?: string  
  
}

export type Content = {
  nav: { about: string; experience: string; skills: string; projects: string; certificates: string; contact: string }
  hero: { greeting: string; name: string; tagline: string; primaryCta: string; secondaryCta: string }
  about: { title: string; lead: string; paragraphs: string[] }
  experience: { title: string; items: Experience[] }
  skills: { title: string; groups: SkillGroup[] }
  projects: { title: string; viewDetails: string; close: string; items: Project[] }
  certificates: { title: string; viewCredential: string; items: Certificate[] }
  contact: { title: string; subtitle: string; emailLabel: string; copyEmail: string; copied: string }
}