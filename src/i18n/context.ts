import { createContext } from 'react'
import type { Content } from '../content/types'

export type Lang = 'th' | 'en'

export type LanguageContextValue = {
  lang: Lang                      // ภาษาปัจจุบัน
  t: Content                      // ข้อความทั้งหมดของภาษานั้น
  setLang: (lang: Lang) => void   // ฟังก์ชันเปลี่ยนภาษา
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)