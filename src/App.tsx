import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Preloader } from './components/Preloader'
import { Sidebar } from './components/Sidebar'
import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { QuoteSection } from './components/QuoteSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  const scrollTo = useSmoothScroll()
  const activeSection = useActiveSection()

  return (
    <>
      <Preloader />

      <Sidebar scrollTo={scrollTo} activeSection={activeSection} />

      <main className="right-side-area">
        <HomeSection scrollTo={scrollTo} />
        <AboutSection scrollTo={scrollTo} />
        <ExperienceSection scrollTo={scrollTo} />
        <QuoteSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

export default App
