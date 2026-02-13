import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CV, TECH_META } from '../constants'

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org'

/** Bar color by level: 1=orange, 5=green */
const LEVEL_COLORS: Record<number, string> = {
  0: '#e5e7eb',
  1: '#f97316',
  2: '#eab308',
  3: '#84cc16',
  4: '#22c55e',
  5: '#16a34a',
}

/** Font Awesome icon class for each tag */
const TAG_ICONS: Record<string, string> = {
  'programming language': 'fas fa-code',
  frontend: 'fas fa-paint-brush',
  backend: 'fas fa-server',
  css: 'fab fa-css3-alt',
  web: 'fas fa-globe',
  Desktop: 'fas fa-desktop',
  Design: 'fas fa-palette',
  'State management': 'fas fa-sitemap',
  scripting: 'fas fa-terminal',
  mobile: 'fas fa-mobile-alt',
  api: 'fas fa-plug',
  database: 'fas fa-database',
  cloud: 'fas fa-cloud',
  methodology: 'fas fa-tasks',
}

interface TechSkillItem {
  name: string
  level: number
  tags: string[]
}

function TagIcon({ tag }: { tag: string }) {
  const iconClass = TAG_ICONS[tag]
  if (!iconClass) return null
  return (
    <span
      className={`tech-tag-icon ${iconClass}`}
      title={tag}
      aria-label={tag}
    />
  )
}

function TechCard({ name, level, tags }: TechSkillItem) {
  const { t } = useTranslation()
  const meta = TECH_META[name]
  const logoSrc = meta?.logo
    ? meta.logo.startsWith('http')
      ? meta.logo
      : `${SIMPLE_ICONS_CDN}/${meta.logo}`
    : null
  const levelLabel = t(`tech.levels.${level}`)

  const content = (
    <>
      <div className="tech-card-header">
        {logoSrc && (
          <div className="tech-card-logo">
            <img src={logoSrc} alt={name} loading="lazy" />
          </div>
        )}
        <span className="tech-card-name">{name}</span>
      </div>
      <div className="tech-level" title={levelLabel} aria-label={levelLabel} role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={5}>
        <div className="tech-level-fill" style={{ width: `${(level / 5) * 100}%`, background: LEVEL_COLORS[level] ?? LEVEL_COLORS[0] }} />
      </div>
      {tags.length > 0 && (
        <div className="tech-card-tags">
          {tags.map((tag) => (
            <TagIcon key={tag} tag={tag} />
          ))}
        </div>
      )}
    </>
  )

  if (meta?.url) {
    return (
      <a
        href={meta.url}
        target="_blank"
        rel="noreferrer"
        className="tech-card"
        title={`${name} • ${levelLabel}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div className="tech-card tech-card-static" title={`${name} • ${levelLabel}`}>
      {content}
    </div>
  )
}

export function TechSection({ scrollTo }: { scrollTo: (section: string) => void }) {
  const { t } = useTranslation()
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [showLevelModal, setShowLevelModal] = useState(false)

  useEffect(() => {
    if (!showLevelModal) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowLevelModal(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [showLevelModal])

  const skills = CV.technical_skills as TechSkillItem[]

  const { filteredSkills, uniqueTags } = useMemo(() => {
    const tags = new Set<string>()
    skills.forEach((s) => s.tags.forEach((tag) => tags.add(tag)))

    const filtered =
      activeTag == null
        ? skills
        : skills.filter((s) => s.tags.includes(activeTag))

    return {
      filteredSkills: filtered,
      uniqueTags: Array.from(tags).sort(),
    }
  }, [skills, activeTag])

  return (
    <section id="tech" className="single-section silver-bg tech-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading tech-heading">
              <p className="subtitle">{t('tech.subtitle')}</p>
              <h2>
                {t('tech.title')} <span>{t('tech.titleHighlight')}</span> {t('tech.titleSuffix')}
              </h2>
              <p className="section-description">{t('tech.description')}</p>


              {showLevelModal && (
                <div
                  className="tech-level-modal-backdrop"
                  onClick={() => setShowLevelModal(false)}
                  role="presentation"
                  aria-hidden="false"
                >
                  <div
                    className="tech-level-modal"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="tech-level-modal-title"
                  >
                    <div className="tech-level-modal-header">
                      <h3 id="tech-level-modal-title">{t('tech.legendLabel')}</h3>
                      <button
                        type="button"
                        className="tech-level-modal-close"
                        onClick={() => setShowLevelModal(false)}
                        aria-label={t('tech.closeModal')}
                      >
                        <span className="fas fa-times" />
                      </button>
                    </div>
                    <div className="tech-level-modal-body">
                      <ul className="tech-legend-list">
                        {[5, 4, 3, 2, 1, 0].map((lvl) => (
                          <li key={lvl} className="tech-legend-item">
                            <div className="tech-level mini">
                              <div className="tech-level-fill" style={{ width: `${(lvl / 5) * 100}%`, background: LEVEL_COLORS[lvl] ?? LEVEL_COLORS[0] }} />
                            </div>
                            <span>{lvl}: {t(`tech.levels.${lvl}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div className="tech-filters">
                <button
                  type="button"
                  className={`tech-filter-btn ${activeTag === null ? 'active' : ''}`}
                  onClick={() => setActiveTag(null)}
                >
                  {t('tech.filterAll')}
                </button>
                {uniqueTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`tech-filter-btn ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    title={t(`tech.tags.${tag}`) || tag}
                  >
                    <TagIcon tag={tag} />
                    <span>{t(`tech.tags.${tag}`) || tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tech-legend-inline">
              <span className="tech-legend-label">{t('tech.legendLabel')}</span>
              <button
                type="button"
                className="tech-level-info-btn"
                onClick={() => setShowLevelModal(true)}
                title={t('tech.levelInfoTitle')}
                aria-label={t('tech.levelInfoTitle')}
              >
                <span className="fas fa-info-circle" />
              </button>
            </div>
          </div>
        </div>




        <div className="tech-grid">
          <div className="tech-category">
            <h3 className="tech-category-title">
              {activeTag
                ? t('tech.filteredBy', { tag: t(`tech.tags.${activeTag}`) || activeTag })
                : t('tech.allSkills')}
            </h3>
            <div className="tech-cards">
              {filteredSkills.map((item) => (
                <TechCard key={item.name} name={item.name} level={item.level} tags={item.tags} />
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <a href="#quote" className="btn scroll button-scheme" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>
              {t('tech.contactMe')}
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}
