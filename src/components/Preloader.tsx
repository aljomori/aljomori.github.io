import { useEffect, useState } from 'react'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const startFade = setTimeout(() => setVisible(false), 100)
    return () => clearTimeout(startFade)
  }, [])

  return (
    <div
      id="loader-wrapper"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="world">
        <img src="/images/loader.svg" alt="" width={79} height={79} />
      </div>
    </div>
  )
}
