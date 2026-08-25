import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import StorySection from './components/StorySection/StorySection.jsx'
import AssociationsMarquee from './components/AssociationsMarquee/AssociationsMarquee.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'
import CursorBlob from './components/CursorBlob/CursorBlob.jsx'
import { storySections } from './data/content.js'
import styles from './App.module.css'

function App() {
  return (
    <>
      <CursorBlob />
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
      <Testimonials />
      <main className={styles.placeholder}>
        <p className={styles.eyebrow}>MUREC × Timeless</p>
        <h1 className={styles.heading}>The closing CTA lands next.</h1>
      </main>
      <Footer />
    </>
  )
}

export default App
