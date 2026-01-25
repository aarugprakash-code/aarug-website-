import "./Offerings.css";

import OfferingsImageWorkshop from "../../assets/OfferingsImageWorkshop.jpg";
import OfferingsImagePad from "../../assets/OfferingsImagePad.jpg";
import OfferingsImageInclusion from "../../assets/OfferingsImageInclusion.jpg";

export default function Offerings() {
  return (
    <section className="offerings" id="offerings">
      <h2>What We Offer</h2>

      <div className="offer-grid">
        {/* 1. Core Workshops */}
        <div className="offer-card">
          <img src={OfferingsImageWorkshop} alt="Menstrual health education workshop" />
          <h3>Menstrual Health Education Workshops</h3>
          <p>
            Structured, age-appropriate menstrual health education programs
            delivered in schools, colleges, and community settings.
            Sessions address hygiene, pain, emotional wellbeing, and myths
            using culturally sensitive, story-based methods.
          </p>
        </div>

        {/* 2. Inclusion */}
        <div className="offer-card">
          <img src={OfferingsImageInclusion} alt="Male inclusion session" />
          <h3>Inclusive Sessions for Boys & Men</h3>
          <p>
            Sensitization sessions for boys, male teachers, caregivers,
            and community members to reduce stigma, build empathy,
            and create safer, more supportive environments for girls.
          </p>
        </div>

        {/* 3. Solutions */}
        <div className="offer-card">
          <img
            src={OfferingsImagePad}
            alt="Menstrual product awareness and safe pad education"
          />
          <h3>Menstrual Product Awareness & Safe Pad Options</h3>
          <p>
            Aarug provides balanced education on different menstrual products —
            disposable pads, reusable options, and other safe alternatives.
            Participants learn correct usage, hygiene, and care so they can choose
            what suits their comfort, body, and environment.
          </p>
        </div>
      </div>
    </section>
  );
}
