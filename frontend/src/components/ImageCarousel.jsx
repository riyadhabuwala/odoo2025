import React, { useState } from "react";
import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";

const images = [
  { src: pic1, alt: "Picture 1" },
  { src: pic2, alt: "Picture 2" },
  { src: pic3, alt: "Picture 3" },
];

const imageStyle = {
  width: "100%",
  height: "320px",
  objectFit: "cover",
  borderRadius: "16px",
  border: "1px solid #ddd",
  marginBottom: "18px",
  background: "#eee",
  display: "block",
};

const carouselContainerStyle = {
  margin: "40px auto",
  background: "#fff",
  border: "2px solid #000",
  borderRadius: "24px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
};

const sliderContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const arrowBtnStyle = {
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "1.5rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  transition: "background 0.2s, color 0.2s",
};

const dotContainerStyle = {
  display: "flex",
  gap: "8px",
  marginTop: "12px",
};

const dotStyle = (active) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  background: active ? "#ffd1dc" : "#eee",
  border: "2px solid #000",
  cursor: "pointer",
  transition: "background 0.2s",
});

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goTo = (idx) => {
    setCurrent(idx);
  };

  return (
    <div style={carouselContainerStyle}>
      <img
        src={images[current].src}
        alt={images[current].alt}
        style={imageStyle}
      />
      <div style={sliderContainerStyle}>
        <button style={arrowBtnStyle} onClick={goPrev} aria-label="Previous">
          &#8592;
        </button>
        <span>
          {current + 1} / {images.length}
        </span>
        <button style={arrowBtnStyle} onClick={goNext} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div style={dotContainerStyle}>
        {images.map((_, idx) => (
          <div
            key={idx}
            style={dotStyle(idx === current)}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
