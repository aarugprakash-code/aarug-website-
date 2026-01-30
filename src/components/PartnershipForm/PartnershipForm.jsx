import "./PartnershipForm.css";
import { submitForm } from "../../utils/submitForm";


export default function PartnershipForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const orgName = form.orgName.value;
    const orgType = form.orgType.value;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const partnershipType = form.partnershipType.value;
    const scale = form.scale.value;
    const location = form.location.value;
    const message = form.message.value;

    // 1️⃣ Send to Google Sheet (silent)
    submitForm({
      form_type: "partnership",
      data: {
        organization_name: orgName,
        organization_type: orgType,
        contact_person: name,
        designation: role,
        email,
        phone_whatsapp: phone,
        partnership_type: partnershipType,
        expected_reach: scale,
        primary_locations: location,
        objective: message
      }
    });

    // 2️⃣ Existing WhatsApp logic (UNCHANGED)
    const whatsappMessage = `
  Hello Aarug Team,

  This is ${name}, ${role} from ${orgName}.
  Organization type: ${orgType}

  We are interested in a partnership related to:
  ${partnershipType}

  Expected reach: ${scale}
  Primary location(s): ${location}

  Objective:
  ${message || "Discussion required"}

  Contact details:
  Email: ${email}
  Phone: ${phone}
    `.trim();

    const whatsappURL = `https://wa.me/919111361052?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <section id="partnerships" className="partnership-form-section">
      <h2>Partner With Aarug</h2>

      <p className="partnership-subtext">
        We collaborate with NGOs, CSR programs, government bodies, and large
        institutions to deliver menstrual health education at scale.
      </p>

      <form className="partnership-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Organization / Institution Name *</label>
          <input name="orgName" required />
        </div>

        <div className="form-group">
          <label>Organization Type *</label>
          <select name="orgType" required>
            <option value="">Select</option>
            <option>NGO</option>
            <option>Corporate / CSR</option>
            <option>Government Department</option>
            <option>Educational Institution</option>
            <option>Factory / Workplace</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Contact Person *</label>
            <input name="name" required />
          </div>

          <div className="form-group">
            <label>Designation / Role *</label>
            <input name="role" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Phone / WhatsApp *</label>
            <input name="phone" required />
          </div>
        </div>

        <div className="form-group">
          <label>Type of Partnership *</label>
          <select name="partnershipType" required>
            <option value="">Select</option>
            <option>CSR-funded school programs</option>
            <option>Workplace / employee workshops</option>
            <option>Community outreach programs</option>
            <option>Long-term collaboration</option>
            <option>Pilot program</option>
            <option>Discussion required</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expected Reach *</label>
            <select name="scale" required>
              <option value="">Select</option>
              <option>50–100</option>
              <option>100–500</option>
              <option>500–2000</option>
              <option>2000+</option>
            </select>
          </div>

          <div className="form-group">
            <label>Primary Location(s) *</label>
            <input name="location" placeholder="City / District / State" required />
          </div>
        </div>

        <div className="form-group">
          <label>Brief Objective / Requirement</label>
          <textarea
            name="message"
            placeholder="e.g., CSR initiative, employee program, school outreach, pilot project"
            rows="4"
          />
        </div>

        <button type="submit" className="btn primary full-width">
          Request Partnership Discussion
        </button>

        <p className="form-note">
          Our team will review your request and connect with you within 2–3
          working days.
        </p>
      </form>
    </section>
  );
}
