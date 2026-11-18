import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.title} tone="dark">
      <div className="grid gap-4 sm:grid-cols-2">
        {t.skills.groups.map((group) => (
          <div key={group.name} className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-sm font-medium text-white/60">{group.name}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="rounded-full bg-white/10 px-4 py-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}