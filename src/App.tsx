import { useLanguage } from './i18n/useLanguage'   
import { LanguageToggle } from './components/LanguageToggle'
function App() {
  const { t } = useLanguage()     

  return (
    <main className="min-h-screen bg-mist flex items-center justify-center px-6">
       <div className="fixed top-4 right-4">                 {/* ← 3. ปุ่มชั่วคราว */}
        <LanguageToggle />
      </div>
      <section className="max-w-3xl text-center"></section>
      <section className="max-w-3xl text-center">
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
      </section>
    </main>
  )
}

export default App