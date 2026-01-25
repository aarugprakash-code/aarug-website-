import "./CTA.css";

export default function CTA({ onWorkshopClick, onPartnerClick }) {
  return (
    <section className="cta">
      <h2>Start a Conversation With Aarug</h2>

      <p className="cta-subtext">
        Whether you are planning a school workshop or exploring a larger
        institutional partnership, our team is ready to discuss your needs.
      </p>

      <div className="cta-actions">
        <button
          className="btn cta-primary"
          onClick={onWorkshopClick}
        >
          Request a School / Organization Workshop
        </button>

        <button
          className="btn cta-secondary"
          onClick={onPartnerClick}
        >
          Partner With Aarug (NGOs / Govt / CSR)
        </button>
      </div>
    </section>
  );
}
