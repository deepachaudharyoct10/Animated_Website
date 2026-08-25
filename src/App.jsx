import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import StorySection from './components/StorySection/StorySection.jsx'
import AssociationsMarquee from './components/AssociationsMarquee/AssociationsMarquee.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import CtaBand from './components/CtaBand/CtaBand.jsx'
import Footer from './components/Footer/Footer.jsx'
import CursorBlob from './components/CursorBlob/CursorBlob.jsx'
import { storySections } from './data/content.js'

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
      <CtaBand />
      <Footer />
    </>
  )
}

export default App
