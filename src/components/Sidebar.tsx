import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './LanguageSelector'
import { ThemeToggle } from './ThemeToggle'

interface SidebarProps {
  scrollTo: (section: string) => void
  activeSection: string
}

export function Sidebar({ scrollTo, activeSection }: SidebarProps) {
  const { t } = useTranslation()
  return (
    <div className="left-side-area">
      <header className="header-left-area">
        <div className="container">
          <nav className="navbar">
            <div className="header-content">
              <div className="image-item">
                <img src="/images/profile-image.png" alt="" />
              </div>
              <div className="caption-area">
                <p className="name">Alexis Moreno</p>
              </div>
              <div className="header-actions">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#side-menu"
              aria-controls="side-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span className="icon-th"></span>
              </span>
            </button>
            <div className="menu-main-area align-items-center">
              <div className="collapse navbar-collapse" id="side-menu">
                <ul id="menu_scroll" className="navbar-nav side-menu">
                  <li>
                    <a
                      href="#home"
                      className={`scroll ${activeSection === 'home' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollTo('home') }}
                    >
                      <span className="icon-happy-smiley-streamline"></span> {t('nav.home')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={`scroll ${activeSection === 'about' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollTo('about') }}
                    >
                      <span className="icon-map-streamline-user"></span> {t('nav.about')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className={`scroll ${activeSection === 'experience' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollTo('experience') }}
                    >
                      <span className="icon-dashboard-speed-streamline"></span> {t('nav.experience')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tech"
                      className={`scroll ${activeSection === 'tech' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollTo('tech') }}
                    >
                      <span className="icon-settings-streamline"></span> {t('nav.tech')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-footer">
              <ul className="header-social-icons">
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
          </nav>
        </div>
      </header>
    </div>
  )
}
