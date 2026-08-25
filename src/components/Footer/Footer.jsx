import { motion } from 'framer-motion'
import { brand, footer } from '../../data/content.js'
import styles from './Footer.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const socialIcons = {
  Facebook: (
    <path d="M13 21v-8h2.7l.4-3.2H13V7.7c0-.93.26-1.56 1.6-1.56H16V3.14C15.7 3.1 14.68 3 13.5 3 11.03 3 9.35 4.49 9.35 7.27V9.8H6.6V13h2.75v8H13z" />
  ),
  YouTube: (
    <path d="M21.6 7.6a2.75 2.75 0 0 0-1.94-1.95C18 5.2 12 5.2 12 5.2s-6 0-7.66.45A2.75 2.75 0 0 0 2.4 7.6 28.8 28.8 0 0 0 2 12a28.8 28.8 0 0 0 .4 4.4 2.75 2.75 0 0 0 1.94 1.95C6 18.8 12 18.8 12 18.8s6 0 7.66-.45a2.75 2.75 0 0 0 1.94-1.95A28.8 28.8 0 0 0 22 12a28.8 28.8 0 0 0-.4-4.4ZM10 15.2V8.8L15.5 12 10 15.2Z" />
  ),
  Instagram: (
    <path d="M12 2.2c2.72 0 3.05.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.24.64.41 1.36.46 2.43.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.24-1.36.41-2.43.46-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.05 2 14.72 2 12s.01-3.05.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.44 2.53c.64-.24 1.36-.41 2.43-.46C8.95 2.01 9.28 2 12 2Zm0 2c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.74 4.27 9.06 4.27 12s.01 3.26.06 4.31c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.31s-.01-3.26-.06-4.31c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 4.01 14.67 4 12 4Zm0 3.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 2A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Zm4.85-2.62a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08Z" />
  ),
}

function InfoIcon({ kind }) {
  if (kind === 'address') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-6.4 7-11.6A7 7 0 0 0 5 9.4C5 14.6 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="12" cy="9.4" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    )
  }
  if (kind === 'email') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5.5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3.6 9 4.2c.5.1.8.6.7 1.1L9 8c-.1.4 0 .8.3 1.1l5.6 5.6c.3.3.7.4 1.1.3l2.7-.7c.5-.1 1 .2 1.1.7l.6 2.4c.1.5-.1 1-.6 1.2-1 .4-2.3.5-3.9-.1-3-1.1-6.4-4.5-7.5-7.5-.6-1.6-.5-2.9-.1-3.9.2-.5.7-.7 1.2-.6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {footer.heading}
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.card}>
            <InfoIcon kind="address" />
            <div>
              <h3>Corporate Address</h3>
              <p>{footer.address}</p>
            </div>
          </div>
          <div className={styles.card}>
            <InfoIcon kind="email" />
            <div>
              <h3>Email</h3>
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </div>
          </div>
          <div className={styles.card}>
            <InfoIcon kind="phone" />
            <div>
              <h3>Phone Number</h3>
              <a href={`tel:${footer.phone.replace(/\s+/g, '')}`}>{footer.phone}</a>
            </div>
          </div>
        </motion.div>

        <p className={styles.disclaimer}>{footer.disclaimer}</p>

        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>{footer.poweredBy}</p>
          <p className={styles.bottomText}>
            {footer.copyright} &middot;{' '}
            <a href={footer.privacyPolicy.href}>{footer.privacyPolicy.label}</a>
          </p>
          <ul className={styles.social}>
            {footer.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {socialIcons[item.label]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.brandMark}>{brand.name}</p>
      </div>
    </footer>
  )
}

export default Footer
