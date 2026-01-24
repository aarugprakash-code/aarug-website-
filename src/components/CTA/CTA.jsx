import './CTA.css'
export default function CTA() {
  return (
    <section className="cta-section">
      <h2>Ready to Create Safe & Informed Spaces?</h2>

      <p>
        Whether you are a school, college, NGO, or community group,
        Aarug is ready to support you with practical menstrual health
        education and reusable solutions.
      </p>

      <div className="cta-buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/919111361052"
          className="cta-button btn primary"
        >
          Enquire on WhatsApp
        </a>

        <a
          href="tel:+919111361052"
          className="btn secondary"
        >
          Call Us
        </a>
      </div>
    </section>
  )
}
