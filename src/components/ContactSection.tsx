import { useTranslation } from 'react-i18next'
import { WHATSAPP_URL } from '../constants'

export function ContactSection() {
  const { t } = useTranslation()
  return (
    <div className="contact parallax_img">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12 m-auto">
            <div className="contact-form">
              <div className="section-heading text-center">
                <h2 className="section-title">{t('contact.title')}</h2>
                <p className="section-description">{t('contact.description')}</p>
              </div>
              <div className="form-area">
                <div className="row">
                  <div className="col-12 text-center">
                    <a href={WHATSAPP_URL} className="btn button-scheme" target="_blank" rel="noreferrer">
                      {t('contact.sendMessage')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 m-auto">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 contact-info">
                <div className="icon-box">
                  <span className="icon-phone"></span>
                </div>
                <h3>{t('contact.callMe')}</h3>
                <ul>
                  <li>(56) 940 866 411</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-4 contact-info">
                <div className="icon-box">
                  <span className="icon-mail"></span>
                </div>
                <h3>{t('contact.emailMe')}</h3>
                <ul>
                  <li>aljomori@gmail.com</li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-4 contact-info">
                <div className="icon-box">
                  <span className="icon-location"></span>
                </div>
                <h3>{t('contact.address')}</h3>
                <ul>
                  <li>Santiago, Chile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
