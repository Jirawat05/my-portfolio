import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t.experience.title} tone="mist">
      <ol className="space-y-6">
        {t.experience.items.map((item) => (
          <li key={`${item.org}-${item.role}`} className="rounded-3xl bg-white p-8 md:p-12">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{item.role}</h3>
              <p className="text-muted">{item.period}</p>
            </div>
            <p className="mt-1 text-lg text-muted">{item.org}</p>

            <ul className="mt-8 space-y-4 text-lg leading-relaxed">
              {item.points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}