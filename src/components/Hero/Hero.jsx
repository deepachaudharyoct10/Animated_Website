import { useEffect, useRef } from 'react'
import { animate, motion } from 'framer-motion'
import { brand, hero } from '../../data/content.js'
import { useLazyVideo } from '../../hooks/useLazyVideo.js'
import ArrowLink from '../ArrowLink/ArrowLink.jsx'
import styles from './Hero.module.css'

const wordVariants = {
  hidden: { y: '100%' },
  visible: (i) => ({
    y: '0%',
    transition: { duration: 0.8, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

function Counter() {
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return undefined
    const controls = animate(0, Number(hero.eyebrowNumber), {
      duration: 1.8,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = Math.round(value)
      },
    })
    return () => controls.stop()
  }, [])

  return (
    <span className={styles.eyebrowNumber}>
      <span ref={nodeRef}>0</span>
      {hero.eyebrowSuffix}
    </span>
  )
}

function Hero() {
  const { videoRef } = useLazyVideo(hero.videoSrc)
  const words = brand.fullName.split(' ')

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.bg}>
        <video
          ref={videoRef}
          className={styles.video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className={styles.overlay} />
      </div>

      <motion.div
        className={styles.crest}
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={hero.logo} alt="Madhusudan" />
      </motion.div>

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <Counter />
          <span className={styles.eyebrowLabel}>{hero.eyebrowLabel}</span>
        </motion.p>

        <h1 className={styles.headline}>
          {words.map((word, i) => (
            <span className={styles.wordMask} key={word + i}>
              <motion.span
                className={styles.word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArrowLink href={hero.cta.href} variant="cream">
            {hero.cta.label}
          </ArrowLink>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
