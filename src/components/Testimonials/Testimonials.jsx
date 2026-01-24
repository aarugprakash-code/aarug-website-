import { useState } from "react";
import "./Testimonials.css";

function VideoCard({ videoId, label, activeId, setActiveId }) {
  const isActive = activeId === videoId;

  return (
    <div className="video-card">
      <iframe
        src={
          isActive
            ? `https://www.youtube.com/embed/${videoId}`
            : `https://www.youtube.com/embed/${videoId}?controls=1`
        }
        title={label}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      />
      <span>{label}</span>
    </div>
  );
}

export default function Testimonials() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="testimonials">
      <h2>What Educators & Partners Say</h2>

      <div className="testimonial-videos">
        <VideoCard
          videoId="3ddGYk-VSPg"
          label="School Student"
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <VideoCard
          videoId="SA4Lw3GDH7A"
          label="School Student"
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <VideoCard
          videoId="9mvALB0gysM"
          label="Teacher"
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </section>
  );
}
