import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import CategorySection from "../components/Categories/categories";
import "../css_comp/LandingPage.css"; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="image-carousel-section">
        <ImageCarousel />
      </div>
      <div className="category-section">
        <CategorySection />
      </div>
    </div>
  );
}

export default LandingPage;