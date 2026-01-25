import "./AboutHome.css";

export default function AboutHome() {
  return (
    <section className="about-home">
      <h2>Why Aarug Exists</h2>

      <p className="about-lead">
        Menstrual health education is not only a hygiene issue.
        It directly affects attendance, learning outcomes,
        emotional safety, and dignity within schools and institutions.
      </p>

      <div className="about-points">
        <div className="about-card highlight">
          <strong>71%</strong>
          <span>
            of adolescent girls in India are unaware of menstruation
            before their first period — leading to fear, confusion,
            and silence at a critical age.
          </span>
        </div>

        <div className="about-card">
          <strong>24–40%</strong>
          <span>
            of girls miss school during menstruation, resulting in
            repeated absence and cumulative learning loss over time.
          </span>
        </div>

        <div className="about-card">
          <strong>Why boys matter</strong>
          <span>
            Excluding boys reinforces stigma, teasing, and dismissal of pain.
            Inclusion builds empathy, reduces fear, and creates safer,
            more supportive classrooms.
          </span>
        </div>
      </div>

      <p className="about-foot">
        Aarug partners with schools, NGOs, CSR programs, government bodies,
        and large institutions to design and deliver inclusive,
        age-appropriate menstrual health education programs at scale.
      </p>
    </section>
  );
}
