import { useMemo, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT } from '../constants'
import { getCVData, getCVLangCode } from '../data/cvData'
import { generateCVPDF } from '../utils/generateCVPDF'
import { generateCVMD } from '../utils/generateCVMD'
import { generateCVDoc } from '../utils/generateCVDoc'

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

type CVFormat = 'pdf' | 'doc' | 'md'

export function AboutSection({ scrollTo }: AboutSectionProps) {
  const { t, i18n } = useTranslation()
  const age = useMemo(() => getAge(BIRTH_DATE), [])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDownload = (format: CVFormat) => {
    const lang = i18n.language
    const cvData = getCVData(lang)
    const langCode = getCVLangCode(lang)
    if (format === 'pdf') generateCVPDF(cvData, langCode)
    else if (format === 'md') generateCVMD(cvData, langCode)
    else if (format === 'doc') generateCVDoc(cvData, langCode)
    setDropdownOpen(false)
  }

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
                    <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
                  </p>
                </li>
                <li>
                  <span>{t('about.age')}:</span>
                  <p>{age}</p>
                </li>
                <li>
                  <span>{t('about.from')}:</span>
                  <p>
                    <a href={CONTACT.addressMaps} target="_blank" rel="noreferrer">{CONTACT.address}</a>
                  </p>
                </li>
              </ul>
              <div className="dropdown resume-dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className="btn button-scheme dropdown-toggle"
                  onClick={() => setDropdownOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {t('about.resume')}
                </button>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                  role="menu"
                >
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => handleDownload('pdf')}
                    >
                      {t('about.downloadPdf')}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => handleDownload('doc')}
                    >
                      {t('about.downloadDoc')}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => handleDownload('md')}
                    >
                      {t('about.downloadMd')}
                    </button>
                  </li>
                </ul>
              </div>
              <a href="#experience" className="btn scroll btn-primary-text" onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>
                {t('about.experience')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
