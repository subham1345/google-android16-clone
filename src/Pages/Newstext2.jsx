import React from "react";
import "./Newstext2.css";
import Aiimg from "../assets/Ai-whynot.png";

const Newstext2 = () => {
  return (
    <div className="text-data">
      <div className="text-1">
        AI breakthroughs are bringing hope to cancer research and treatment
        <p>
          Read Ruth Porat's remarks on AI and cancer research at the American
          Society of Clinical Oncology.
        </p>
      </div>
      <div className="img-div">
        <img src={Aiimg} alt="Why" />
      </div>
    </div>
  );
};

export default Newstext2;
