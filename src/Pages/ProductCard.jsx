import React from "react";
import './ProductCard.css'

const ProductCard = ({ name, icon }) => {
  return (
    <div className="product-card">
      <img src={icon} alt={name} className="product-icon" />
      <span>{name}</span>
      <a href="#" className="external-link" aria-label={`Visit ${name}`}>
        <svg height="26" width="26" viewBox="0 0 24 24" fill="none">
          <path d="M14 3h7v7m0-7L10 14" stroke="#1a73e8" strokeWidth="2" />
          <path d="M5 5h14v14H5z" stroke="#1a73e8" strokeWidth="2" />
        </svg>
      </a>
    </div>
  );
};

export default ProductCard;
