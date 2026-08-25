import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { footer } from '../../data/content.js'
import styles from './MobileNav.module.css'

const panelVariants = {
  hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
}

const itemVariants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: '110%', transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] } },
}

function MobileNav({ isOpen, onClose, links }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.panel}
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className={styles.inner}>
            <motion.ul className={styles.list} variants={listVariants}>
              {links.map((link, index) => (
                <li key={link.label} className={styles.item}>
                  <div className={styles.itemMask}>
                    <motion.a
                      href={link.href}
                      className={styles.link}
                      variants={itemVariants}
                      onClick={onClose}
                    >
                      <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                      {link.label}
                    </motion.a>
                  </div>
                </li>
              ))}
            </motion.ul>

            <div className={styles.footer}>
              <a className={styles.contactLink} href={`mailto:${footer.email}`}>
                {footer.email}
              </a>
              <a className={styles.contactLink} href={`tel:${footer.phone.replace(/\s+/g, '')}`}>
                {footer.phone}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
