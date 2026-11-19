import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { sectionIds } from '../content/sections'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  // ซ่อนเมนู "ใบรับรอง" เมื่อยังไม่มีใบรับรอง
  const visibleIds = sectionIds.filter(
    (id) => id !== 'certificates' || t.certificates.items.length > 0,
  )

  // กด Esc เพื่อปิดเมนูมือถือ
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl backdrop-saturate-150">
      <nav aria-label="Main" className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        {/* ชื่อ: กดแล้วกลับขึ้นบนสุด */}
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {t.hero.name}
        </a>

        {/* เมนูสำหรับจอคอม */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-7 text-xs text-ink/80">
            {visibleIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-ink">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        {/* ปุ่มแฮมเบอร์เกอร์สำหรับมือถือ */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative -mr-3 h-11 w-11 md:hidden"
        >
          <span className={`absolute left-1/2 top-1/2 h-[1.5px] w-[18px] -translate-x-1/2 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[4px]'}`} />
          <span className={`absolute left-1/2 top-1/2 h-[1.5px] w-[18px] -translate-x-1/2 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[4px]'}`} />
        </button>
      </nav>

      {/* เมนูมือถือ: แสดงเมื่อ open เป็น true */}
      {open && (
        <div id="mobile-menu" className="border-t border-black/5 px-6 pb-8 pt-4 md:hidden">
          <ul className="space-y-1">
            {visibleIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-2xl font-semibold tracking-tight"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  )
}