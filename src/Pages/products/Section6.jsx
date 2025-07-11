import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiTablet, FiMonitor } from "react-icons/fi";
import "./Section6.css";
import DeviceGrid from "../DeviceGrid";

// const cards = [
//   {
//     type: "PHONES",
//     description: "Browse foldables, the latest phones with Gemini, and more.",
//     image:
//       "https://www.gstatic.com/marketing-cms/assets/images/b9/6d/656644854825a096ebe1f7af62af/about-products-splash-tiles-android-phone.png ",
//     bg: "bg-blue",
//     link: "#",
//   },
//   {
//     type: "TABLETS",
//     description: "Multitask, play games and discover new apps...",
//     icon: <FiTablet size={60} />,
//     bg: "bg-green",
//     link: "#",
//   },
//   {
//     type: "AUTO",
//     description: "Navigate smoothly, communicate easily...",
//     icon: <FiMonitor size={60} />,
//     bg: "bg-red",
//     link: "#",
//   },
//   {
//     type: "WATCHES",
//     description:
//       "Connect to Google apps, and monitor your health and fitness — right from your wrist.",
//     image:
//       "https://www.gstatic.com/marketing-cms/assets/images/c9/05/c079e7a5442d98f55cbe7b102126/about-products-splash-tiles-android-watch.png",
//     bg: "bg-yellow",
//     link: "#",
//   },
// ];

const Section6 = () => {
  return (
    <div className="containerr">
      <div className="wrapper-containerr" >
        <h1 style={{fontWeight:"100"}}>All things Android</h1>
       {/* <div style={{backgroundColor:'yellow'}}> */}
         <DeviceGrid />
       {/* </div> */}
        {/* <div className="d-grid">
          {cards.map((card, index) => {
            const sizeClass =
              index === 0 || index === 3 ? "card-large" : "card-small";
            return (
              <div
                className={`device-card ${card.bg} ${sizeClass}`}
                key={index}
                style={
                  card.type === "WATCHES"
                    ? { transform: "translateY(-215px)" }
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
                    <img
                      src={card.image}
                      alt={card.type}
                      className="deviceImg"
                    />
                  </div>
                )}

                <h4>{card.type}</h4>
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
        </div> */}
      </div>
    </div>
  );
};

export default Section6;
