// src/components/CategorySection.jsx
import React from "react";
import './categories.css'
import jeansImg from '../../assets/images/jeans.jpeg';
import tshirtImg from '../../assets/images/tshirt.jpeg';
import dressImg from '../../assets/images/dress.jpeg';
import accessoriesImg from '../../assets/images/accessories.jpeg';
import footwearImg from '../../assets/images/footwear.jpeg';

const categories = [
  { name: "Bottoms", image: jeansImg, color: "#DFF5FF" },
  { name: "Outerwear", image: tshirtImg, color: "#FFF0D1" },
  { name: "Dresses", image: dressImg, color: "#D7E9F7" },
  { name: "Accessories", image: accessoriesImg, color: "#E5D1FA" },
  { name: "Footwear", image: footwearImg, color: "#C3FDB8" },
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