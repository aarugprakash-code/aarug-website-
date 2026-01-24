import "./Trust.css";

import workshop1 from "../../assets/workshop1.jpg";
import workshop2 from "../../assets/workshop2.jpg";
import workshop3 from "../../assets/workshop3.jpg";


export default function Trust() {
  return (
    <section className="trust">
      <h2>Proven Experience in Schools & Communities</h2>

      <p className="trust-authority">
        Implemented in collaboration with schools, local NGOs, and community leaders.
      </p>

      <p className="trust-subtext">
        Aarug has delivered menstrual health education programs across schools,
        colleges, and community settings, working closely with educators,
        parents, and local partners.
      </p>

      {/* Numbers */}
      <div className="trust-stats">
        <div className="trust-item">
          <strong>20,000+</strong>
          <span>Girls educated</span>
        </div>

        <div className="trust-item">
          <strong>5000+</strong>
          <span>Boys engaged</span>
        </div>

        <div className="trust-item">
          <strong>Schools</strong>
          <span>& community programs</span>
        </div>

        <div className="trust-item">
          <strong>Reusable</strong>
          <span>menstrual solutions</span>
        </div>
      </div>


      {/* Image Proof */}
      <div className="trust-images">
        <img src={workshop1} className="trust-workshop-image" alt="Menstrual health workshop in school" />
        <img src={workshop2} className="trust-workshop-image" alt="Community menstrual health session" />
        <img src={workshop3} className="trust-workshop-image" alt="Reusable cloth pads used in programs" />
      </div>

      <p className="trust-note">
        All programs are delivered using age-appropriate, culturally sensitive
        content by trained facilitators, ensuring safety and comfort for
        participants.
      </p>
    </section>
  );
}
