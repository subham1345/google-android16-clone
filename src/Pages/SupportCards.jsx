import React from "react";
import "./SupportCards.css";
import { FiExternalLink } from "react-icons/fi";

const SupportCards = () => {
  const cards = [
    {
      title: "Product support",
      img: "https://www.gstatic.com/marketing-cms/assets/images/e4/cf/572ac79645df85f1977ce6354153/about-products-3up-support.png=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
    {
      title: "Google Store",
      img: "https://www.gstatic.com/marketing-cms/assets/images/ef/1c/caeb6482470382e7911b695ec12b/about-products-3up-shop-the-google-store.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
    {
      title: "Your Google Account",
      img: "https://www.gstatic.com/marketing-cms/assets/images/75/e1/0a1b96ab4b85a52beba19d471483/about-products-3up-sign-into-your-google-account.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
  ];

  return (
    <div className="container">
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-left">
              <div className="title">{card.title}</div>
              <div className="icon"><FiExternalLink/></div>
            </div>
            <div className="card-right">
              <img src={card.img} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="jump-button">
        <button>Jump to our products</button>
      </div>
    </div>
  );
};

export default SupportCards;
