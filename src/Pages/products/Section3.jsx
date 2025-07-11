import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: '#f8f9fa'
        // backgroundColor: "yellow",
      }}
    >
      <div
        style={{
          // backgroundColor: "green",
          margin: "0 auto",
          maxWidth: "1300px",
          // padding: "0 16px",
        }}
      >
        <div className="search-info-container">
          <div className="image-container">
            <img
              src="https://www.gstatic.com/marketing-cms/assets/images/aa/4c/b599584d422391f6fed2ef9c2cc4/about-products-search-update.png=n-w1004-h753-fcrop64=1,00000000ffffff92-rw"
              alt="How Google Search works"
            />
          </div>
          <div className="text-container">
            <h1>How Google Search works</h1>
            <p>
              Get the details on how Search works — from the technology we make,
              to the approach we take.
            </p>
            <button>Learn more</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section3;
