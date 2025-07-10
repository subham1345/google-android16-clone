import React from "react";
import "./Newstext2.css";
import Aiimg from "../assets/Ai-whynot.png";
import pp from "../assets/pp.webp";
import { FaArrowRight } from "react-icons/fa";

const Newstext2 = () => {
  

  return (
    <div className="text-data" >
      <div className="text-1" >
        <div style={{ display: "flex", flexDirection: "column",gap: "20px" }}>
          <h4 style={{fontWeight: 100}}>AI breakthroughs are bringing hope to cancer research and treatment</h4>
          <p>
            Read Ruth Porat's remarks on AI and cancer research at the American
            Society of Clinical Oncology.
          </p>
        </div>

        <div className="text-profile" >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <img
              src={pp}
              alt="pp"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />
            <div>
              <p style={{color:"#1967d2",fontWeight:600}}>Ruth Porat</p>
              <p>President & Chief Investment Officer, Alphabet and Google</p>
            </div>
          </div>
          <div>
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="img-div">
        <img src={Aiimg} alt="Why" />
      </div>
    </div>
  );
};

export default Newstext2;
