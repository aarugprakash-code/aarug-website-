import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Trust from "./components/Trust/Trust";
import Offerings from "./components/Offerings/Offerings";
import Testimonials from "./components/Testimonials/Testimonials";
import Social from "./components/Social/Social";
import CTA from "./components/CTA/CTA";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <ImageSlider />
      <Testimonials />
      <Offerings />
      <Social />
      <CTA />
    </>
  )
}

export default App
