import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './CursorBlob.module.css'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea'

function isFineHoverPointer() {
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function CursorBlob() {
  const [enabled] = useState(isFineHoverPointer)
  const [isActive, setIsActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return undefined

    function onMove(event) {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    function onOver(event) {
      setIsActive(Boolean(event.target.closest(INTERACTIVE_SELECTOR)))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className={[styles.dot, isActive ? styles.dotActive : ''].join(' ')}
        style={{ x, y }}
        aria-hidden="true"
      />
      <motion.div className={styles.ringWrap} style={{ x: ringX, y: ringY }} aria-hidden="true">
        <span className={[styles.ring, isActive ? styles.ringActive : ''].join(' ')} />
      </motion.div>
    </>
  )
}

export default CursorBlob
