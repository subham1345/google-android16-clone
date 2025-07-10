import React from "react";
import "./DeviceGrid2.css";
import { FiExternalLink } from "react-icons/fi";
import { FiTablet, FiMonitor } from "react-icons/fi";

const cards = [
  {
    type: "Our Story",
    description:
      "Take a trip through Google’s history — from the garage to the Googleplex.",
    image:
      "https://www.gstatic.com/marketing-cms/assets/images/26/0c/fd5a54f942eea54bf1cbf46186df/about-companyinfo-splash-ourstory.jpg=n-w780-h438-fcrop64=1,0000003dffffffc3-rw ",
    bg: "bg-blue",
    link: "#",
  },
  {
    type: "TABLETS",
    description:
      "Discover how we’re using AI to help solve society’s biggest challenges.",
    icon: <FiTablet size={60} />,
    bg: "bg-green",
    link: "#",
  },
  {
    type: "AUTO",
    description:
      "We’re committed to working with governments, companies and communities to create asafe and resilient digital future",
    icon: <FiMonitor size={60} />,
    bg: "bg-red",
    link: "#",
  },
  {
    type: "WATCHES",
    description:
      " From protecting users to expanding opportunity, learn more about our values and priorities.",
    image:
      "https://www.gstatic.com/marketing-cms/assets/images/84/6e/b176dba14eba83ca5f373928cbf8/about-companyinfo-whywedowhatwedo.png=n-w780-h438-fcrop64=1,0000003dffffffc3-rw",
    bg: "bg-yellow",
    link: "#",
  },
];

const DeviceGrid2 = () => {
  return (
    <div className="container">
      <div className="device-grid">
        {cards.map((card, index) => {
          const sizeClass =
            index === 0 || index === 3 ? "card-large" : "card-small"; 
          return (
            <div
              className={`device-card ${card.bg} ${sizeClass}`}
              key={index}
              style={
                card.type === "WATCHES"
                  ? { transform: "translateY(-200px)" }
                  : {}
              }
            >
              {sizeClass === "card-small" ? (
                <div className="device-icon">{card.icon}</div>
              ) : (
                <div
                  style={{
                    height: "50vh",
                    display: "flex", 
                    justifyContent: "center",
                    alignItems: "center", 
                  }}
                >
                  <img src={card.image} alt={card.type} className="deviceImg" />
                </div>
              )}

              <h4 style={{color:'black'}}>{card.type}</h4>
              <p>{card.description}</p>
              <a
                href={card.link}
                className="device-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeviceGrid2;
