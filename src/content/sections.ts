export const sectionIds = ['about', 'experience', 'skills', 'projects', 'certificates' ,'contact'] as const

export type SectionId = (typeof sectionIds)[number]