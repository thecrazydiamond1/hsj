"use client";

import { useState, useEffect, useCallback } from "react";

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="tp-lightbox-overlay" onClick={onClose}>
      <div className="tp-lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="tp-lightbox-close" onClick={onClose}>✕</button>
        <button className="tp-lightbox-prev" onClick={prev}>‹</button>
        <img src={images[current]} className="tp-lightbox-img" alt={`Photo ${current + 1}`} />
        <button className="tp-lightbox-next" onClick={next}>›</button>
        <div className="tp-lightbox-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`tp-lightbox-thumb${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              alt={`Thumb ${i + 1}`}
            />
          ))}
        </div>
        <div className="tp-lightbox-counter">{current + 1} / {images.length}</div>
      </div>
    </div>
  );
}