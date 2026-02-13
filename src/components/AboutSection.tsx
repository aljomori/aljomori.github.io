import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getCVData, getCVLangCode } from '../data/cvData'
import { generateCVPDF } from '../utils/generateCVPDF'

function getAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--
  return age
}

interface AboutSectionProps {
  scrollTo: (section: string) => void
}

const BIRTH_DATE = new Date(1994, 1, 9) // 9 de febrero de 1994 (mes 0-indexed)

export function AboutSection({ scrollTo }: AboutSectionProps) {
  const { t, i18n } = useTranslation()
  const age = useMemo(() => getAge(BIRTH_DATE), [])
  return (
    <section id="about" className="single-section about-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="about-img">
              <img src="/images/about-image.png" alt="" width="auto" height="auto" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="about-content">
              <div className="section-heading">
                <h2 className="section-title">{t('about.title')}</h2>
                <p className="about-role">{t('about.role')}</p>
              </div>
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
              <hr />
              <ul className="list-inline about-info">
                <li>
                  <span>{t('about.name')}:</span>
                  <p>Alexis Moreno</p>
                </li>
                <li>
                  <span>{t('about.email')}:</span>
                  <p>
                    <a href="mailto:aljomori@gmail.com">aljomori@gmail.com</a>
                  </p>
                </li>
                <li>
                  <span>{t('about.age')}:</span>
                  <p>{age}</p>
                </li>
                <li>
                  <span>{t('about.from')}:</span>
                  <p>Santiago, Chile</p>
                </li>
              </ul>
              <a
                href="#"
                className="btn button-scheme"
                onClick={(e) => {
                  e.preventDefault()
                  const lang = i18n.language
                  generateCVPDF(getCVData(lang), getCVLangCode(lang))
                }}
              >
                {t('about.resume')}
              </a>
              <a href="#experience" className="btn scroll" onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>
                {t('about.experience')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
