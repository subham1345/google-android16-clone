import React from "react";
import "./SupportCards.css";
import { FiExternalLink } from "react-icons/fi";

const SupportCards = () => {
  const cards = [
    {
      title: "Product support",
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/e4/cf/572ac79645df85f1977ce6354153/about-products-3up-support.png=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
      link: "#",
    },
    {
      title: "Google Store",
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/ef/1c/caeb6482470382e7911b695ec12b/about-products-3up-shop-the-google-store.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
      link: "#",
    },
    {
      title: "Your Google Account",
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/75/e1/0a1b96ab4b85a52beba19d471483/about-products-3up-sign-into-your-google-account.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
      link: "#",
    },
  ];

 return (
    <div id="cards-container">
      <div id="cards-wrapper" >
        {cards.map((card, index) => (
          <div key={index} id="card">
            <div id="card-text">
              <h3>{card.title}</h3>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={25} color="#1a73e8" />
              </a>
            </div>
            <div id="card-image">
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
      <button id="jump-btn">Jump to our products</button>
    </div>
  );
};

export default SupportCards;




