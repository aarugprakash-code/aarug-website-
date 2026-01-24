import "./Hero.css";
import heroImage from "../../assets/heroImage.jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* DESKTOP */}
      <div className="hero-desktop">
        <div className="hero-left">
          <h1>
            Mestural Education Workshops for Schools
            And Community
          </h1>

          <div className="hero-metrics">
            <div className="metric">
              <strong>20,000+</strong>
              <span>girls educated</span>
            </div>

            <div className="metric">
              <strong>5000+</strong>
              <span>boys engaged</span>
            </div>

            <div className="metric">
              <strong>Schools</strong>
              <span>& community programs</span>
            </div>

            <div className="metric">
              <strong>Sustainable</strong>
              <span>safe menstrual solutions</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#school-workshops" className="btn primary">
              Request a School / Organization Workshop
            </a>

            <a href="#partnerships" className="btn secondary">
              Partner With Aarug (NGOs / Govt / CSR)
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Aarug workshop session" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="hero-mobile">
        <h1>
          Menstrual Education Workshops for Schools And Community
        </h1>

        <img src={heroImage} alt="Aarug workshop session" />

        <div className="hero-metrics">
          <div className="metric">
            <strong>20,000+</strong>
            <span>girls educated</span>
          </div>

          <div className="metric">
            <strong>5000+</strong>
            <span>boys engaged</span>
          </div>

          <div className="metric">
            <strong>Schools</strong>
            <span>& community programs</span>
          </div>

          <div className="metric">
            <strong>Sustainable</strong>
            <span>safe menstrual solutions</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#school-workshops" className="btn primary">
            Request a School / Organization Workshop
          </a>

          <a href="#partnerships" className="btn secondary">
            Partner With Aarug (NGOs / Govt / CSR)
          </a>
        </div>
      </div>
    </section>
  );
}
