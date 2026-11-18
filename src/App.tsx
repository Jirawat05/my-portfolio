import { useLanguage } from './i18n/useLanguage'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { sectionIds } from './content/sections'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* section ที่ยังไม่ได้ทำ: ทำเสร็จทีละอันแล้วค่อยลบออกจากรายการ */}
        {sectionIds
          .filter((id) => id !== 'about')
          .map((id) => (
            <section key={id} id={id}
                     className="min-h-screen flex items-center justify-center border-t border-black/5">
              <h2 className="text-5xl font-semibold tracking-tight">{t.nav[id]}</h2>
            </section>
          ))}
      </main>
    </>
  )
}

export default App