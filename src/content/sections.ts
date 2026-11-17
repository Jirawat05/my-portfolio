export const sectionIds = ['about', 'experience', 'skills', 'projects', 'contact'] as const

export type SectionId = (typeof sectionIds)[number]