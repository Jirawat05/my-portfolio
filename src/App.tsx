import { useLanguage } from './i18n/useLanguage'
import { Navbar } from './components/Navbar'
import { sectionIds } from './content/sections'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section id="top" className="min-h-screen bg-mist flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="text-xl text-muted">{t.hero.greeting}</p>
            <h1 className="mt-2 text-6xl md:text-8xl font-semibold tracking-tight">
              {t.hero.name}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted">{t.hero.tagline}</p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#projects"
                 className="rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-hover">
                {t.hero.primaryCta}
              </a>
              <a href="#contact"
                 className="rounded-full px-6 py-3 text-link ring-1 ring-link transition-colors hover:bg-link hover:text-white">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        {/* section ชั่วคราวสำหรับทดสอบ */}
        {sectionIds.map((id) => (
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