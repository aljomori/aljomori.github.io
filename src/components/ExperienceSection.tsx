import { useTranslation } from 'react-i18next'
import { EXPERIENCE_DETAILED, getYearsOfExperience } from '../constants'

interface ExperienceSectionProps {
  scrollTo: (section: string) => void
}

export function ExperienceSection({ scrollTo }: ExperienceSectionProps) {
  const { t } = useTranslation()

  return (
    <section id="experience" className="single-section silver-bg experience-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="experience-timeline">
              {EXPERIENCE_DETAILED.map((item, index) => {
                const hint = t(`experience.hints.${item.hintKey}`)
                return (
                  <div key={item.company} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot-wrapper">
                        <div className="timeline-dot">
                          <img className="timeline-logo" src={item.logo} alt={item.company} />
                        </div>
                        <span className="timeline-year">{index === 0 ? t('experience.present') : item.year}</span>
                      </div>
                      {index < EXPERIENCE_DETAILED.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{item.company}</h3>
                        <p className="timeline-role">{item.role}</p>
                        <p className="timeline-period">{item.period}</p>
                      </div>
                      {hint && <p className="timeline-hint">{hint}</p>}
                      <ul className="timeline-responsibilities">
                        {item.responsibilityKeys.map((key) => (
                          <li key={key}>{t(`experience.responsibilities.${item.hintKey}.${key}`)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
