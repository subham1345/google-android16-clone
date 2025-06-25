import React from 'react';
import './DeviceGrid2.css';
import { FiExternalLink } from "react-icons/fi";

const cards = [
  {
    type: "Our Story",
    description: "Take a trip through Google’s history — from the garage to the Googleplex.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/26/0c/fd5a54f942eea54bf1cbf46186df/about-companyinfo-splash-ourstory.jpg=n-w780-h438-fcrop64=1,0000003dffffffc3-rw " ,
    bg: "bg-blue",
    link: "#"
  },
  {
    type: "TABLETS",
    description: "Discover how we’re using AI to help solve society’s biggest challenges.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/4d/d1/3df2382744fe8ae73c4e4ba42471/about-companyinfo-splash-socialimpact.png=s96-fcrop64=1,00000000ffffffff-rw",
    bg: "bg-green",
    link: "#"
  },
  {
    type: "AUTO",
    description: "We’re committed to working with governments, companies and communities to create asafe and resilient digital future",
    image: "https://www.gstatic.com/marketing-cms/assets/images/cf/8a/1c40be6d4a2fbe8bc4e519d9d56a/about-companyinfo-splash-publicpolicy.png=s96-fcrop64=1,00000000ffffffff-rw",
    bg: "bg-red",
    link: "#"
  },
  {
    type: "WATCHES",
    description: " From protecting users to expanding opportunity, learn more about our values and priorities.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/84/6e/b176dba14eba83ca5f373928cbf8/about-companyinfo-whywedowhatwedo.png=n-w780-h438-fcrop64=1,0000003dffffffc3-rw",
    bg: "bg-yellow",
    link: "#"
  }
];

const DeviceGrid2 = () => {
  return (
    <div className="device-grid">
      {cards.map((card, index) => (
        <div className={`device-card ${card.bg}`} key={index}>
          <img src={card.image} alt={card.type} className="device-img" />
          <h4>{card.type}</h4>
          <p>{card.description}</p>
          <a href={card.link} className="device-link" target="_blank" rel="noopener noreferrer">
            <FiExternalLink/>
          </a>
        </div>
      ))}
    </div>
  );
};

export default DeviceGrid2;
