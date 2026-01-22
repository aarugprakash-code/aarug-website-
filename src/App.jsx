import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Offerings from './components/Offerings'
import Social from './components/Social'
import CTA from './components/CTA'

function App() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">
        Menstrual Health Education & Reusable Pads in India
      </h1>
      <Hero />
      <Trust />
      <Offerings />
      <Social />
      <CTA />
    </>
  )
}

export default App
