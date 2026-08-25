import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import StorySection from './components/StorySection/StorySection.jsx'
import AssociationsMarquee from './components/AssociationsMarquee/AssociationsMarquee.jsx'
import Footer from './components/Footer/Footer.jsx'
import { storySections } from './data/content.js'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      {storySections.map((section, index) => (
        <StorySection
          key={section.id}
          section={section}
          index={index}
          total={storySections.length}
        />
      ))}
      <AssociationsMarquee />
      <main className={styles.placeholder}>
        <p className={styles.eyebrow}>MUREC × Timeless</p>
        <h1 className={styles.heading}>More sections land next.</h1>
        <p className={styles.copy}>
          Testimonials and the closing CTA come in the following commits.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
