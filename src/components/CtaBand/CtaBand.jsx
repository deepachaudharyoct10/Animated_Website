import { motion } from 'framer-motion'
import { ctaBand } from '../../data/content.js'
import styles from './CtaBand.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function CtaBand() {
  return (
    <section className={styles.section}>
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {ctaBand.heading}
        </motion.h2>

        <motion.p
          className={styles.body}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {ctaBand.body}
        </motion.p>

        <motion.a
          className={styles.button}
          href={ctaBand.cta.href}
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          whileHover="hover"
        >
          <span className={styles.buttonLabel}>{ctaBand.cta.label}</span>
          <motion.span
            className={styles.buttonFill}
            variants={{ hover: { scaleX: 1 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.a>
      </div>
    </section>
  )
}

export default CtaBand
