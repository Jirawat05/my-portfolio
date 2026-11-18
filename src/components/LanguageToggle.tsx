import { useLanguage } from '../i18n/useLanguage'
import type { Lang } from '../i18n/context'

const options: { value: Lang; label: string }[] = [
  { value: 'th', label: 'TH' },
  { value: 'en', label: 'EN' },
]

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div role="group" aria-label="Language"
         className="inline-flex rounded-full bg-black/5 p-1 text-sm">
      {options.map((option) => {
        const active = lang === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            aria-pressed={active}
            className={`rounded-full px-3 py-2 md:py-1 font-medium transition-colors ${
              active ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}