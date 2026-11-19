import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { Section } from '../components/Section'
import { profile } from '../content/profile'

export function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // 2 วินาทีแล้วเปลี่ยนข้อความกลับ
    } catch {
      // เบราว์เซอร์ไม่อนุญาต ผู้ใช้ยังคัดลอกเองจากอีเมลที่แสดงบนหน้าได้
    }
  }

  return (
    <Section id="contact" title={t.contact.title} tone="dark" align="center">
      <p className="mx-auto max-w-xl text-balance text-xl md:text-2xl text-white/70 leading-relaxed">
        {t.contact.subtitle}
      </p>

      <p className="mt-10 break-all text-2xl md:text-3xl font-semibold tracking-tight">
        {profile.email}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href={`mailto:${profile.email}`}
           className="rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-hover">
          {t.contact.emailLabel}
        </a>
        <button type="button" onClick={copyEmail}
                className="rounded-full px-6 py-3 ring-1 ring-white/30 transition-colors hover:bg-white/10">
          <span aria-live="polite">{copied ? t.contact.copied : t.contact.copyEmail}</span>
        </button>
      </div>

      <ul className="mt-12 flex justify-center gap-8 text-white/70">
        <li><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
        {profile.linkedin && (
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
        )}
      </ul>
    </Section>
  )
}