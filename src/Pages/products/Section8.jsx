import React from "react";
import "./Section8.css";
import Card_2searchinfo from "../Card_2searchinfo";

const Section8 = () => {
  return (
    <div className="wrapper-container8">
      <div className="container8">
        <div className="left">
          <h3>Picture this</h3>
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Create scroll-stoppers with Google Photos AI editing tools.
          </p>
        </div>
        <Card_2searchinfo />
      </div>
    </div>
  );
};

export default Section8;
