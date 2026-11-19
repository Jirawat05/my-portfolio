import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'
import { SkillIcon } from '../components/SkillIcon'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.title} tone="dark">
      <div className="space-y-12">
        {t.skills.groups.map((group) => (
          <div key={group.name}>
            <h3 className="text-xl font-semibold tracking-tight">{group.name}</h3>
            <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-white/5 px-3 py-5 text-center ring-1 ring-white/10 transition-colors duration-300 hover:bg-white hover:ring-white"
                >
                  <SkillIcon
                    name={skill}
                    className="h-8 w-8 text-white/90 transition-colors duration-300 group-hover:text-[color:var(--brand)]"
                  />
                  <span className="text-sm text-white/80 transition-colors duration-300 group-hover:text-ink">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}