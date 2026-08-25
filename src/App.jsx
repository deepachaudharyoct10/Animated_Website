import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main id="top" className={styles.placeholder}>
        <p className={styles.eyebrow}>MUREC × Timeless</p>
        <h1 className={styles.heading}>Sections land next.</h1>
        <p className={styles.copy}>
          Header navigation and footer are wired up. Hero and story sections
          come in the following commits.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
