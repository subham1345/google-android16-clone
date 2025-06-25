import React from "react";
import aiImage from "../assets/ai.png";
import './Newsdata1.css';

const Newsdata1 = () => {
  return (
    <>
    <div className="img-div">
      <img src={aiImage} alt="AI" />
      <div className="img-div2">
        <span color="blue">Search</span>
        <a>Search Live: Talk, listen and explore in real time with AI Mode </a>
        <h5>Search Live with voice facilitates back-and-forth conversations in AI Mode.</h5>
      </div>

      </div>
    </>
  );
};

export default Newsdata1;
