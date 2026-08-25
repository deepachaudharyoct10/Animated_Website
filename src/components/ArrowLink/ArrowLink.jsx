import styles from './ArrowLink.module.css'

function ArrowLink({ href, children, variant = 'ink', className = '' }) {
  return (
    <a
      href={href}
      className={[styles.link, variant === 'cream' ? styles.cream : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={styles.label}>{children}</span>
      <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h13M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export default ArrowLink
