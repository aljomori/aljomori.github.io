import { useTranslation } from 'react-i18next'
import { Headline } from './Headline'
import { getYearsOfExperience } from '../constants'

interface HomeSectionProps {
  scrollTo: (section: string) => void
}

export function HomeSection({ scrollTo }: HomeSectionProps) {
  const { t } = useTranslation()
  return (
    <section id="home" className="home-area wave-area">
      <div className="water-effect"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 home-content text-center">
            <p className="greet">
              {t('home.greet')} <strong>Alexis Moreno</strong> {t('home.headlinePrefix')}
            </p>
            <Headline variant="scale" />
            <p className="description">
              {t('home.description', { years: getYearsOfExperience() })}
            </p>
            <div className="button-area">
              <a className="btn scroll button-scheme" href="#quote" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>
                {t('home.contactMe')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
