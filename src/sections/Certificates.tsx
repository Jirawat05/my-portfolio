import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'

export function Certificates() {
  const { t } = useLanguage()

  return (
    <Section id="certificates" title={t.certificates.title} tone="mist">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.certificates.items.map((cert) => (
          <li key={`${cert.title}-${cert.date}`} className="flex flex-col rounded-3xl bg-white p-8">
            <p className="text-sm text-muted">{cert.date}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight leading-snug">{cert.title}</h3>
            <p className="mt-1 text-muted">{cert.issuer}</p>
            {cert.url && (
              <a href={cert.url} target="_blank" rel="noreferrer"
                 className="mt-auto pt-6 text-link hover:underline">
                {t.certificates.viewCredential}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}