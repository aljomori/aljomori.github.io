import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
const WORD_KEYS = ['headline.engineer', 'headline.architect', 'headline.developer'] as const
const ANIMATION_DELAY = 2500

export function Headline({ variant = 'scale' }: { variant?: 'scale' | 'clip' }) {
  const { t } = useTranslation()
  const [visibleIndex, setVisibleIndex] = useState(0)
  const words = WORD_KEYS.map((key) => t(key))
  const currentWord = words[visibleIndex]

  const cycleWord = useCallback(() => {
    setVisibleIndex((prev) => (prev + 1) % WORD_KEYS.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(cycleWord, ANIMATION_DELAY)
    return () => clearInterval(interval)
  }, [cycleWord])

  const letters = currentWord.split('')

  const content =
    variant === 'scale' ? (
      <span key={visibleIndex} className="headline-word headline-letters">
        {letters.map((letter, i) => (
          <i
            key={`${visibleIndex}-${i}`}
            className="headline-letter"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {letter}
          </i>
        ))}
      </span>
    ) : (
      <span
        key={visibleIndex}
        className={`headline-word headline-word--${variant}`}
      >
        {currentWord}
      </span>
    )

  if (variant === 'clip') {
    return (
      <span className="skills headline">
        {content}
      </span>
    )
  }

  return (
    <h1 className="skills headline">
      {content}
    </h1>
  )
}
