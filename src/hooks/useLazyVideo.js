import { useEffect, useRef, useState } from 'react'

// Loads a background video's `src` only once the element scrolls near the
// viewport, and skips it entirely for prefers-reduced-motion — keeps the
// initial payload light without giving up the cinematic backgrounds.
export function useLazyVideo(src, { playbackRate = 1 } = {}) {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          node.src = src
          node.load()
          node.playbackRate = playbackRate
          const playPromise = node.play()
          if (playPromise) playPromise.catch(() => {})
          setIsLoaded(true)
          observer.disconnect()
        })
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [src, playbackRate])

  return { videoRef, isLoaded }
}
