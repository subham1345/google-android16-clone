import React from "react";
import "./Company_info7.css";
import { FiExternalLink } from "react-icons/fi";

const Company_info7 = () => {
  return (
    <div className="page-layout">
      <div className="main-card">
        <img src="https://www.gstatic.com/marketing-cms/assets/images/e1/5f/88c39e0e495785d444c630dd3236/about-companyinfo-collection-sustainability.png=n-w1961-h1414-fcrop64=1,04fb0000fb05ffff-rw" />
        <div
          className="card-details"
          style={{ height: "100%", position: "relative" }}
        >
          <h2 id="circle-to-search">Sustainability</h2>
          <p id="circle-to-search-p">
            Learn about our work to help build a more sustainable future.
          </p>
          <div
            style={{
              bottom: "0",
              right: "0",
              position: "absolute",
              padding: "10px",
            }}
          >
            <FiExternalLink
              style={{ color: "#1a73e8", width: "24px", height: "24px" }}
            />
          </div>
        </div>
      </div>
      <div className="side-cards">
        <div className="side-card">
          <img src="https://www.gstatic.com/marketing-cms/assets/images/52/3b/71984cca4eeca47cc705a37eb94e/about-companyinfo-collection-dotorg.png=n-w1886-h1060-fcrop64=1,00000000ffffffaf-rw" />
          <div className="card-details">
            <h6>Google.org</h6>
            <p>
              We provide funding and tech expertise to support underserved
              communities and expand opportunity for everyone.
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <FiExternalLink
              style={{ color: "#1a73e8", width: "24px", height: "24px" }}
            />
          </div>
        </div>
        <div className="side-card">
          <img src="https://www.gstatic.com/marketing-cms/assets/images/71/e9/6569018d4734aa1f87c89025ed93/about-companyinfo-coin.png=n-w1886-h1061-fcrop64=1,00000000ffffff59-rw" />
          <div className="card-details">
            <h3 style={{ fontWeight: "100" }}>Accessibility</h3>
            <p>
              We're building more accessible products with and for people with
              disabilities.
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <FiExternalLink
              style={{ color: "#1a73e8", width: "24px", height: "24px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company_info7;
