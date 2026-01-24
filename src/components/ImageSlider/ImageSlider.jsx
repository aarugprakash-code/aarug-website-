import "./ImageSlider.css";
import { useRef } from "react";

export default function ImageSlider() {
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const images = Array.from(
    { length: 20 },
    (_, i) => `${import.meta.env.BASE_URL}slider/slider${i + 1}.jpg`
  );

  const onPointerDown = (e) => {
    isDragging.current = true;
    sliderRef.current.classList.add("active");

    startX.current = e.clientX;
    scrollLeft.current = sliderRef.current.scrollLeft;

    sliderRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;

    const walk = (e.clientX - startX.current) * 1.1;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = (e) => {
    isDragging.current = false;
    sliderRef.current.classList.remove("active");

    if (e.pointerId) {
      sliderRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="image-slider">
      <div className="container">
        <div
          ref={sliderRef}
          className="slider-track"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerLeave={stopDrag}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Aarug program ${index + 1}`}
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
