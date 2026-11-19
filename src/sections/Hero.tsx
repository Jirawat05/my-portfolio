import { useLanguage } from '../i18n/useLanguage'
import { NetworkBackground } from '../components/NetworkBackground'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden bg-mist px-6 pt-24 pb-20">
      <NetworkBackground />

      <div className="relative max-w-3xl text-center">
        <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white text-4xl font-semibold shadow-sm ring-1 ring-black/5 motion-safe:animate-rise">
          {t.hero.name.charAt(0)}
        </div>

        <p className="text-xl md:text-2xl text-muted motion-safe:animate-rise [animation-delay:100ms]">
          {t.hero.greeting}
        </p>

        <h1 className="mt-2 text-6xl md:text-8xl font-semibold tracking-tight leading-[1.15] motion-safe:animate-rise [animation-delay:200ms]">
          {t.hero.name}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-xl md:text-2xl text-muted leading-relaxed motion-safe:animate-rise [animation-delay:300ms]">
          {t.hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 motion-safe:animate-rise [animation-delay:400ms]">
          <a href="#projects"
             className="rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-hover">
            {t.hero.primaryCta}
          </a>
          <a href="#contact"
             className="rounded-full bg-mist/80 px-6 py-3 text-link ring-1 ring-link transition-colors hover:bg-link hover:text-white">
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}