import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { t, lang } = useLanguage()

  // ภาษาไทยแสดงปี พ.ศ. ภาษาอังกฤษแสดงปี ค.ศ.
  const year = new Intl.DateTimeFormat(lang === 'th' ? 'th-TH' : 'en-US', { year: 'numeric' })
    .format(new Date())

  return (
    <footer className="bg-night px-6 pb-10 text-sm text-white/50">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 border-t border-white/10 pt-8">
        <p>© {year} {t.hero.name}</p>
        <p>React + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  )
}