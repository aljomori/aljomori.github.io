import { useTranslation } from 'react-i18next'

export function QuoteSection() {
  const { t } = useTranslation()
  return (
    <section id="quote" className="single-section silver-bg quote-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 m-auto">
            <div className="section-heading">
              <h2 className="section-title">{t('quote.title')}</h2>
              <p>{t('quote.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
