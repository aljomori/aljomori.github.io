import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLocale } from '../i18n'

const FLAGS: Record<string, string> = {
  en: 'https://flagcdn.com/w80/us.png',
  es: 'https://flagcdn.com/w80/es.png',
}

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const currentCode = SUPPORTED_LANGUAGES.find((l) =>
    i18n.language.startsWith(l.code)
  )?.code ?? 'en'
  const isEs = currentCode === 'es'

  const handleChange = (code: SupportedLocale) => {
    i18n.changeLanguage(code)
  }

  return (
    <div className="language-selector" role="group" aria-label="Idioma">
      <div className={`language-selector-track ${isEs ? 'right' : 'left'}`}>
        <span className="language-selector-slider" />
        <button
          type="button"
          className={`language-selector-option ${currentCode === 'en' ? 'active' : ''}`}
          onClick={() => handleChange('en')}
          aria-pressed={currentCode === 'en'}
          aria-label="English"
        >
          <img src={FLAGS.en} alt="" width={24} height={24} />
          <span>English</span>
        </button>
        <button
          type="button"
          className={`language-selector-option ${currentCode === 'es' ? 'active' : ''}`}
          onClick={() => handleChange('es')}
          aria-pressed={currentCode === 'es'}
          aria-label="Español"
        >
          <img src={FLAGS.es} alt="" width={24} height={24} />
          <span>Español</span>
        </button>
      </div>
    </div>
  )
}
