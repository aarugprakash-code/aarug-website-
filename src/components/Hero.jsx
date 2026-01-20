import imgHero from '../assets/Hero.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Practical Menstrual Health Education <br />
        & Reusable Solutions
      </h1>

      <p>
        Aarug works with schools, colleges, and communities to build
        safe, informed, and stigma-free menstrual health practices.
      </p>

      <img
        src={imgHero}
        alt="Menstrual health education session"
        className="hero-image"
      />

      <div className="hero-buttons">
        <a
          href="https://wa.me/919111361052?text=Hello%20I%20want%20to%20book%20a%20menstrual%20health%20workshop%20for%20my%20institution"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Book a Workshop
        </a>


        <a href="tel:+919111361052" className="btn secondary">
          Call Us
        </a>
      </div>
    </section>
  )
}
