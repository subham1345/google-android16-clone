import React from 'react';
import './DeviceGrid.css';
import { FiExternalLink } from "react-icons/fi";

const cards = [
  {
    type: "PHONES",
    description: "Browse foldables, the latest phones with Gemini, and more.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/b9/6d/656644854825a096ebe1f7af62af/about-products-splash-tiles-android-phone.png " ,
    bg: "bg-blue",
    link: "#"
  },
  {
    type: "TABLETS",
    description: "Multitask, play games and discover new apps, all on a bigger screen.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/9a/39/e9a524c748d88a9f8ffa9cb09213/about-products-splash-tiles-android-tablet.png",
    bg: "bg-green",
    link: "#"
  },
  {
    type: "AUTO",
    description: "Navigate smoothly, communicate easily and stay entertained on the road.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/2c/a0/28b7a69443e38f0ef1db867c7864/about-products-splash-tiles-android-car.png",
    bg: "bg-red",
    link: "#"
  },
  {
    type: "WATCHES",
    description: "Connect to Google apps, and monitor your health and fitness — right from your wrist.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/c9/05/c079e7a5442d98f55cbe7b102126/about-products-splash-tiles-android-watch.png",
    bg: "bg-yellow",
    link: "#"
  }
];

const DeviceGrid = () => {
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

export default DeviceGrid;
