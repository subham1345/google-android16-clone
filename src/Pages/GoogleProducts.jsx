import React from "react";
import ProductCard from "./ProductCard";
import "./GoogleProducts.css";

const products = [
  {
    name: "Android",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
  },
  {
    name: "Chrome",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
  },
  {
    name: "Gemini",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Gemini_Logo.svg",
  },
  {
    name: "Gmail",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
  },
  {
    name: "Google Calendar",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
  {
    name: "Google Docs",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Google_Docs_logo.svg",
  },
  {
    name: "Google Maps",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Google_Maps_icon.svg",
  },
  {
    name: "Google Photos",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Photos_icon.svg",
  },
  {
    name: "Google Play",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
  },
  {
    name: "Pixel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Pixel_logo.svg",
  },
  {
    name: "Search",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    name: "YouTube",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
  },
];

const GoogleProducts = () => {
  return (
    <div className="google-products-container">
      <div className="container11">
        <p>Google products</p>
        <div className="filter-section">
          <label htmlFor="filter">Filter by:</label>
          <select id="filter" className="filter-select">
            <option style={{ textAlign: "" }}>Featured</option>
            <option>For All</option>
            <option>For Bussines</option>
            <option>For Devloper</option>
          </select>
        </div>
        <div className="product-grid">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        {/* <p className="disclaimer">
        <span>ℹ️</span> Products shown on this page are not available in all countries.
        Visit <a href="https://support.google.com">support.google.com</a> for more information on specific product availability.
      </p> */}
      </div>
    </div>
  );
};

export default GoogleProducts;
