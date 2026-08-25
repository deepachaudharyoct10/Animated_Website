import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.placeholder}>
        <p className={styles.eyebrow}>MUREC × Timeless</p>
        <h1 className={styles.heading}>More sections land next.</h1>
        <p className={styles.copy}>
          Legacy, Principles, Collection, Design Philosophy, Associations,
          Testimonials, and the closing CTA come in the following commits.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
