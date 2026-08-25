import { motion } from 'framer-motion'
import { testimonials, testimonialsHeading } from '../../data/content.js'
import styles from './Testimonials.module.css'

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  },
})

function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Voices of Trust
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.8 }}
        >
          {testimonialsHeading}
        </motion.h2>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.article
              className={styles.card}
              key={testimonial.name}
              variants={fadeUp(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>

              <div className={styles.person}>
                <img className={styles.photo} src={testimonial.photo} alt={testimonial.name} />
                <p className={styles.name}>{testimonial.name}</p>
              </div>

              <p className={styles.quote}>{testimonial.quote}</p>

              <img
                className={styles.brandLogo}
                src={testimonial.brandLogo}
                alt={`${testimonial.name} logo`}
                loading="lazy"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
