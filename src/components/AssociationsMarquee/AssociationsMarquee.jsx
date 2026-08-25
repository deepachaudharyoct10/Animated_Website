import { motion } from 'framer-motion'
import { associations, associationsHeading } from '../../data/content.js'
import styles from './AssociationsMarquee.module.css'

const track = [...associations, ...associations]

function AssociationsMarquee() {
  return (
    <section className={styles.section}>
      <motion.p
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {associationsHeading}
      </motion.p>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {track.map((item, index) => {
            const isOriginal = index < associations.length
            const fromTop = index % 2 === 0

            return (
              <div className={styles.item} key={`${item.alt}-${index}`}>
                {isOriginal ? (
                  <motion.img
                    className={styles.logo}
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    initial={{ opacity: 0, y: fromTop ? -34 : 34, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                ) : (
                  <img className={styles.logo} src={item.src} alt={item.alt} loading="lazy" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AssociationsMarquee
