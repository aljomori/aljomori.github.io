import { useTranslation } from 'react-i18next'
import { EXPERIENCE, getYearsOfExperience } from '../constants'

interface ExperienceSectionProps {
  scrollTo: (section: string) => void
}

export function ExperienceSection({ scrollTo }: ExperienceSectionProps) {
  const { t } = useTranslation()
  return (
    <section id="experience" className="single-section silver-bg experience-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className="exp-content">
              <p className="subtitle">{t('experience.subtitle', { years: getYearsOfExperience() })}</p>
              <h2>
                {t('experience.title')} <span>{t('experience.titleHighlight')}</span> {t('experience.titleSuffix')}
              </h2>
              <p>{t('experience.description')}</p>
              <a href="#quote" className="btn scroll button-scheme" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>
                {t('experience.contactMe')}
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="row">
              {EXPERIENCE.map(({ company, period, logo }) => (
                <div key={company} className="col-sm-6 col-md-6">
                  <div className="exp-block">
                    <img className="img-icon" width={80} height={80} src={logo} alt={company} />
                    <h3>{company}</h3>
                    <p className="exp-period">{period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
