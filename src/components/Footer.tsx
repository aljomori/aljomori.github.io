import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="single-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center align-self-center">
            <ul className="footer-social">
              <li>
                <a href="https://github.com/aljomori" target="_blank" rel="noreferrer" title="Github">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aka-aljomori/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <p className="copy-txt">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
