import type { SimpleIcon } from 'simple-icons'
import {
  siJavascript, siTypescript, siPython, siOpenjdk, siCplusplus,
  siReact, siHtml5, siCss, siTailwindcss,
  siMysql, siPostgresql, siSqlite,
  siGit, siGithub, siDocker, siPostman, siFigma, siGooglesheets, siGoogleappsscript,
} from 'simple-icons'

// ชื่อทางซ้ายต้องสะกดตรงกับใน en.ts / th.ts ทุกตัวอักษร
export const skillIcons: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Python: siPython,
  Java: siOpenjdk,
  'C / C++': siCplusplus,
  React: siReact,
  HTML: siHtml5,
  CSS: siCss,
  'Tailwind CSS': siTailwindcss,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  SQLite: siSqlite,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Postman: siPostman,
  Figma: siFigma,
  'Google Sheets': siGooglesheets,
  'Apps Script': siGoogleappsscript,
}