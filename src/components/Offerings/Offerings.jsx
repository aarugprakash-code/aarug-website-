import './Offerings.css'
import OfferingsImageWorkshop from "../../assets/OfferingsImageWorkshop.jpg";
import OfferingsImagePad from "../../assets/OfferingsImagePad.jpg";
import OfferingsImageInclusion from "../../assets/OfferingsImageInclusion.jpg";

OfferingsImageInclusion

export default function Offerings() {
  return (
    <section className="offerings" id="offerings">
      <h2>What We Offer</h2>

      <div className="offer-grid">
        <div className="offer-card">
          <img src={OfferingsImageWorkshop} alt="Workshop session" />
          <h3>Menstrual Health Workshops</h3>
          <p>
            Interactive, story-based sessions for schools, colleges,
            NGOs, and communities, focused on practical hygiene,
            safety, and confidence.
          </p>
        </div>

        <div className="offer-card">
          <img src={OfferingsImagePad} alt="pads" />
          <h3>Eco Friendly / Chemical Free Pads</h3>
          <p>
            Affordable, safe, and eco-friendly menstrual solutions,
            along with proper usage and care education.
          </p>
        </div>

        <div className="offer-card">
          <img src={OfferingsImageInclusion} alt="inclusion" />
          <h3>Male Inclusion Sessions</h3>
          <p>
            Sensitization sessions for boys and men to break stigma
            and build supportive environments.
          </p>
        </div>
      </div>
    </section>
  )
}
