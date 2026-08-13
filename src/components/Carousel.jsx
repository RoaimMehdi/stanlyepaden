import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="carousel">
      <div className="carousel__track">
        {items.map((item, i) => (
          <div
            key={i}
            className={`carousel__slide ${i === index ? "carousel__slide--active" : ""}`}
          >
            <p className="carousel__quote">&ldquo;{item.quote}&rdquo;</p>
            <div className="carousel__author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel__controls">
        <button onClick={goPrev} aria-label="Previous">‹</button>
        <div className="carousel__dots">
          {items.map((_, i) => (
            <span
              key={i}
              className={`carousel__dot ${i === index ? "carousel__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button onClick={goNext} aria-label="Next">›</button>
      </div>
    </div>
  );
}
