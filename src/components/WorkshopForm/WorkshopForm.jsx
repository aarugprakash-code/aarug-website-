import "./WorkshopForm.css";

export default function WorkshopForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const role = e.target.role.value;
    const org = e.target.organization.value;
    const city = e.target.city.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappText = 
      `Hello Aarug,%0A
Name: ${name}%0A
Role: ${role}%0A
Organization: ${org}%0A
City: ${city}%0A
Contact: ${phone}%0A
${message ? `Message: ${message}` : ""}%0A
Interested in organizing a menstrual health workshop.`;

    window.open(
      `https://wa.me/919111361052?text=${whatsappText}`,
      "_blank"
    );
  };

  return (
    <section id="school-workshops" className="form-section">
      <h2>Request a Workshop</h2>
      <p className="form-subtext">
        For schools, colleges, workplaces, and institutions.
      </p>

      <form onSubmit={handleSubmit} className="workshop-form">
        <input name="name" placeholder="Your Name" required />
        
        <select name="role" required>
          <option value="">Your Role</option>
          <option>Principal</option>
          <option>Teacher</option>
          <option>Administrator</option>
          <option>HR / Manager</option>
          <option>Coordinator</option>
        </select>

        <input
          name="organization"
          placeholder="School / Organization Name"
          required
        />

        <input name="city" placeholder="City" required />

        <input
          name="phone"
          placeholder="WhatsApp Number"
          required
        />

        <textarea
          name="message"
          placeholder="Anything specific you’d like to share (optional)"
        />

        <button type="submit" className="btn primary">
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
}
