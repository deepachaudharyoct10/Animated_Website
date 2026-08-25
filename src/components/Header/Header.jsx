import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { brand, navLinks, footer } from '../../data/content.js'
import MobileNav from '../MobileNav/MobileNav.jsx'
import styles from './Header.module.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastY = useRef(0)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setIsScrolled(y > 40)
      if (!isNavOpen) {
        setIsHidden(y > lastY.current && y > 160)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isNavOpen])

  return (
    <>
      <header
        className={[
          styles.header,
          isScrolled || isNavOpen ? styles.scrolled : '',
          isHidden ? styles.hidden : '',
        ].join(' ')}
      >
        <motion.div className={styles.progress} style={{ scaleX: progress }} />
        <div className={styles.inner}>
          <a href="#top" className={styles.logo} aria-label={brand.fullName}>
            <img src={brand.logo} alt={brand.name} />
          </a>

          <a className={styles.phone} href={`tel:${footer.phone.replace(/\s+/g, '')}`}>
            {footer.phone}
          </a>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={isNavOpen}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span className={styles.menuLabel}>{isNavOpen ? 'Close' : 'Menu'}</span>
            <span className={[styles.burger, isNavOpen ? styles.burgerOpen : ''].join(' ')}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} links={navLinks} />
    </>
  )
}

export default Header
