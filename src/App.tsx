import { useLanguage } from './i18n/useLanguage'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { sectionIds, type SectionId } from './content/sections'

// section ที่ทำเสร็จแล้ว จะไม่สร้างกล่องชั่วคราวให้
const done: SectionId[] = ['about', 'experience', 'skills']

function App() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />

        {sectionIds
          .filter((id) => !done.includes(id))
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