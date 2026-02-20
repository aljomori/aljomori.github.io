import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
      title={isDark ? t('theme.light') : t('theme.dark')}
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} aria-hidden />
    </button>
  )
}
