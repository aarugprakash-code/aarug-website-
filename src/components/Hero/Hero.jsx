import "./Hero.css";
import heroImage from "../../assets/heroImage.jpg";

export default function Hero({ onWorkshopClick, onPartnerClick }) {
  return (
    <section className="hero">
      {/* DESKTOP */}
      <div className="hero-desktop">
        <div className="hero-left">
          <h1>
            Menstrual Education Workshops for Schools
            <br />
            And Community
          </h1>

          <div className="hero-metrics">
            <div className="metric">
              <strong>20,000+</strong>
              <span>girls educated</span>
            </div>

            <div className="metric">
              <strong>5,000+</strong>
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
            <button
              className="btn primary"
              onClick={onWorkshopClick}
            >
              Request a School / Organization Workshop
            </button>

            <button
              className="btn secondary"
              onClick={onPartnerClick}
            >
              Partner With Aarug (NGOs / Govt / CSR)
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Aarug workshop session" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="hero-mobile">
        <h1>
          Menstrual Education Workshops for Schools
          <br />
          And Community
        </h1>

        <img src={heroImage} alt="Aarug workshop session" />

        <div className="hero-metrics">
          <div className="metric">
            <strong>20,000+</strong>
            <span>girls educated</span>
          </div>

          <div className="metric">
            <strong>5,000+</strong>
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
          <button
            className="btn primary"
            onClick={onWorkshopClick}
          >
            Request a School / Organization Workshop
          </button>

          <button
            className="btn secondary"
            onClick={onPartnerClick}
          >
            Partner With Aarug (NGOs / Govt / CSR)
          </button>
        </div>
      </div>
    </section>
  );
}
