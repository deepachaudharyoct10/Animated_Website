import { motion } from 'framer-motion'
import { useLazyVideo } from '../../hooks/useLazyVideo.js'
import ArrowLink from '../ArrowLink/ArrowLink.jsx'
import styles from './StorySection.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const revealMedia = {
  hidden: { clipPath: 'inset(4% 4% 4% 4% round 14px)', scale: 1.06, opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0% round 14px)',
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

function StorySection({ section, index, total }) {
  const { videoRef } = useLazyVideo(section.videoSrc)
  const isReversed = index % 2 === 1

  return (
    <section className={[styles.section, isReversed ? styles.reversed : ''].join(' ')}>
      <div className={styles.inner}>
        <motion.div
          className={styles.media}
          variants={revealMedia}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.mediaFrame} aria-hidden="true" />
          <div className={styles.mediaBox}>
            <video ref={videoRef} muted loop playsInline preload="none" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          className={styles.text}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className={styles.index}>
            {String(index + 1).padStart(2, '0')}
            <span className={styles.indexSep}>/</span>
            {String(total).padStart(2, '0')}
          </p>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 className={styles.heading}>
            <span className={styles.headingLine}>{section.heading}</span>
            <span className={styles.highlight}>{section.highlight}</span>
          </h2>
          <p className={styles.body}>{section.body}</p>
          <ArrowLink href={section.cta.href}>{section.cta.label}</ArrowLink>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
