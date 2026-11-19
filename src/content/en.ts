import type { Content } from './types'

const en: Content = {
  nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', certificates: 'Certificates', contact: 'Contact' },

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
      'I am a university student on a co-op placement, building tools for a manufacturing team.',
      'I enjoy talking with the people who do the work, finding where things get stuck, and building something that helps.',
    ],
  },

  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Co-op Student',
        org: 'Manufacturing company',
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
      { name: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C / C++'] },
      { name: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
      { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite'] },
      { name: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Figma', 'Google Sheets', 'Apps Script'] },
    ],
  },

  projects: {
    title: 'Projects',
    viewDetails: 'View details',
    close: 'Close',
    viewCode: 'View code',
    viewDemo: 'Live demo',
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
          'Profiled thousands of production orders and hundreds of leak records.',
          'Found and documented data-quality issues, such as Buddhist-year dates and lost leading zeros.',
          'Designed tables for master data, production, QA records and an audit log.',
          'Defined validation rules, such as checking that a serial number is in range.',
        ],
        tech: ['SQL', 'Data modeling', 'Excel', 'Google Sheets'],
      },
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        category: 'Web',
        year: '2026',
        summary: 'This site: a bilingual portfolio built with React and Tailwind CSS.',
        highlights: [
          'Switches between Thai and English, with all text kept in typed content files.',
          'Shows project details in an accessible dialog.',
          'Respects the reduced-motion setting for animations.',
          'Deployed on GitHub Pages.',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        codeUrl: 'https://github.com/Jirawat05/my-portfolio',
        demoUrl: 'https://jirawat05.github.io/my-portfolio/',
      },
    ],
  },

  certificates: {
    title: 'Certificates',
    viewCredential: 'View credential',
    items: [],
  },

  contact: {
    title: "Let's talk",
    subtitle: 'Open to internships and junior roles.',
    emailLabel: 'Email me',
    copyEmail: 'Copy email',
    copied: 'Copied',
  },
}


export default en