import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-10 md:grid-cols-5 md:gap-16">
        <p className="md:col-span-3 text-2xl md:text-4xl font-semibold tracking-tight leading-snug">
          {t.about.lead}
        </p>
        <div className="md:col-span-2 space-y-5 text-lg text-muted leading-relaxed">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}