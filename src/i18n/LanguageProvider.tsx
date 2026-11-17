import { useEffect, useState, type ReactNode } from 'react'
import th from '../content/th'
import en from '../content/en'
import { LanguageContext, type Lang } from './context'

const STORAGE_KEY = 'lang'
const dictionaries = { th, en }

// เลือกภาษาตอนเปิดเว็บ: ใช้ที่เคยเลือกไว้ก่อน ถ้าไม่มีให้ดูภาษาของเบราว์เซอร์
function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'th' || saved === 'en') return saved
  } catch {
    // บางเบราว์เซอร์ปิด localStorage ไว้ ก็ข้ามไป
  }
  return navigator.language.startsWith('th') ? 'th' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang      // เปลี่ยน <html lang="...">
    try {
      localStorage.setItem(STORAGE_KEY, lang) // จำภาษาไว้ให้ครั้งหน้า
    } catch {
      // ถ้าบันทึกไม่ได้ก็ไม่เป็นไร
    }
  }, [lang])

  const value = { lang, t: dictionaries[lang], setLang }

  return <LanguageContext value={value}>{children}</LanguageContext>
}