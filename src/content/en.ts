import type { Content } from './types'

const en: Content = {
  nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },

  hero: {
    greeting: "Hello, I'm",
    name: 'Jirawat',
    tagline: 'Co-op student who builds tools that make everyday work easier.',
    primaryCta: 'See my work',
    secondaryCta: 'Get in touch',
  },

  about: {
    title: 'About me',
    lead: 'I turn messy, manual processes into simple apps and clean data.',
    paragraphs: [
      'I am a [year]-year [major] student at [university], currently on a co-op placement.',
      'I enjoy talking with the people who do the work, finding where things get stuck, and building something that helps.',
    ],
  },

  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Co-op Student',
        org: '[Company name]',
        period: '2026',
        points: [
          'Built an ink stock app with Power Apps and SharePoint to replace manual tracking.',
          'Analyzed QA data across several tools and designed a central database.',
        ],
      },
    ],
  },

  skills: {
    title: 'Skills',
    groups: [
      { name: 'Business apps', items: ['Power Apps', 'SharePoint', 'Power BI'] },
      { name: 'Data', items: ['SQL', 'Data modeling', 'Data cleaning', 'Excel'] },
      { name: 'Web', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { name: 'Tools', items: ['Git', 'VS Code'] },
    ],
  },

  projects: {
    title: 'Projects',
    viewDetails: 'View details',
    close: 'Close',
    items: [
      {
        id: 'ink-stock',
        title: 'Ink Stock App',
        category: 'Business app',
        year: '2026',
        summary: 'An app for receiving and issuing printer ink, with lot tracking and digital signatures.',
        highlights: [
          'Cart-style receiving: one purchase request, many items, saved in one go.',
          'Issues stock first-in, first-out by lot.',
          'Captures a signature for every issue and keeps a searchable history.',
          'Feeds a Power BI report for usage and cost.',
        ],
        tech: ['Power Apps', 'SharePoint', 'Power Fx', 'Power BI'],
      },
      {
        id: 'qa-leak-log',
        title: 'QA Leak Log Database',
        category: 'Data & database',
        year: '2026',
        summary: 'Moved QA leak records out of scattered spreadsheets and forms into one database design.',
        highlights: [
          'Profiled about 2,500 production orders and 480 leak records.',
          'Found 11 data-quality issues, such as Buddhist-year dates and lost leading zeros.',
          'Designed tables for master data, production, QA records and an audit log.',
          'Defined validation rules, such as checking that a serial number is in range.',
        ],
        tech: ['SQL', 'Data modeling', 'Excel', 'Google Sheets'],
      },
    ],
  },

  certificates: {
    title: 'Certificates',
    items: [{ title: '[Certificate name]', issuer: '[Organization]', date: '2026' }],
  },

  contact: {
    title: "Let's talk",
    subtitle: 'Open to internships and junior roles.',
    emailLabel: 'Email me',
  },
}


export default en