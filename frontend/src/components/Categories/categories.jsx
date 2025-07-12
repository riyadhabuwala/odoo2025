// src/components/CategorySection.jsx
import React from "react";
import './categories.css'
const categories = [
  { name: "Tops", image: "/assets/tops.png", color: "#FFE0E9" },
  { name: "Bottoms", image: "/assets/bottoms.png", color: "#DFF5FF" },
  { name: "Outerwear", image: "/assets/outerwear.png", color: "#FFF0D1" },
  { name: "Dresses", image: "/assets/dresses.png", color: "#D7E9F7" },
  { name: "Accessories", image: "/assets/accessories.png", color: "#E5D1FA" },
  { name: "Footwear", image: "/assets/footwear.png", color: "#C3FDB8" },
  { name: "Other", image: "/assets/other.png", color: "#F0F0F0" },
];


const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="section-title">Categories</h2>
      <div className="categories-container">
        {categories.map((cat) => (
  <div
    key={cat.name}
    className="category-card"
    style={{ backgroundColor: cat.color }}
  >
    <img
      src={cat.image}
      alt={cat.name}
      className="category-image"
    />
  </div>
))}
      </div>
    </section>
  );
};

export default CategorySection;