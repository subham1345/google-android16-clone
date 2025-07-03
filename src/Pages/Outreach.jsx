import React from "react";
import "./Outreach.css";
import { FiExternalLink } from "react-icons/fi";

const Outreach = () => {
  return (
    <div className="outreach-container">
      <h1>Outreach and initiatives</h1>
      <p className="subtitle">
        Dive deeper into our efforts across sustainability, accessibility and community engagement.
      </p>

      <div className="grid-layout">
        <div className="main-card">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/e1/5f/88c39e0e495785d444c630dd3236/about-companyinfo-collection-sustainability.png=n-w1753-h1264-fcrop64=1,04fb0000fb33ffff-rw"
            alt="Sustainability"
          />
          <h2>Sustainability</h2>
          <p>Learn about our work to help build a more sustainable future.</p>
          <FiExternalLink/>
        </div>

        <div className="side-card">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/52/3b/71984cca4eeca47cc705a37eb94e/about-companyinfo-collection-dotorg.png=n-w780-h438-fcrop64=1,00000051ffffffff-rw"
            alt="Google.org"
          />
          <h3>Google.org</h3>
          <p>
            We provide funding and tech expertise to support underserved communities and expand opportunity for everyone.
          </p>
          <FiExternalLink/>
        </div>

        <div className="side-card">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/71/e9/6569018d4734aa1f87c89025ed93/about-companyinfo-coin.png=n-w780-h439-fcrop64=1,00000000ffffff59-rw"
            alt="Accessibility"
          />
          <h3>Accessibility</h3>
          <p>
            We’re building more accessible products with and for people with disabilities.
          </p>
          <FiExternalLink/>
        </div>
      </div>
    </div>
  );
};

export default Outreach;
