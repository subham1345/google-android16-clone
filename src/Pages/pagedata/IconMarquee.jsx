import React from "react";
import "./InfiniteLogoCarousel.css";

const logos = [
  "https://www.gstatic.com/images/branding/product/1x/maps_96dp.png",         
  "https://www.gstatic.com/images/branding/product/1x/sheets_96dp.png",      
  "https://www.gstatic.com/images/branding/product/1x/youtube_96dp.png",      
  "https://www.gstatic.com/images/branding/product/1x/play_96dp.png",         
  "https://www.gstatic.com/images/branding/product/1x/gmail_96dp.png",       
  "https://www.gstatic.com/images/branding/product/1x/photos_96dp.png",       
  "https://www.gstatic.com/images/branding/product/1x/android_96dp.png",      // Android
  "https://www.gstatic.com/images/branding/product/1x/chrome_96dp.png",       
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", // Google
  "https://www.gstatic.com/images/branding/product/1x/docs_96dp.png"          
];

const InfiniteLogoCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...logos, ...logos].map((logo, idx) => (
          <img src={logo} alt={`logo-${idx}`} className="carousel-logo" key={idx} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
