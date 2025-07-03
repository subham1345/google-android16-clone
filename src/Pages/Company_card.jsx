import React from 'react'
import { GoArrowRight } from "react-icons/go";
import "./Company_card.css";

const Company_card = () => {
   const cards = [
    {
      title: "Product support",
      img: "https://www.gstatic.com/marketing-cms/assets/images/45/0e/9ffcbfaf4782b5a56e03cb340918/about-companyinfo-3up-careers.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
    {
      title: "Google Store",
      img: "https://www.gstatic.com/marketing-cms/assets/images/0f/e4/96e0453e4935a1899e1abf1be4b7/about-companyinfo-3up-locations.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
    {
      title: "Your Google Account",
      img: "https://www.gstatic.com/marketing-cms/assets/images/f0/2d/1a294cdc43c58f66effe40baee45/about-commitment-contactus.jpg=n-w320-h400-fcrop64=1,118e0000ee45ffff-rw",
    },
  ];

  return (
    <div className="container31">
      <div className="cards-wrapper31">
        {cards.map((card, index) => (
          <div className="card31" key={index}>
            <div className="card-left31">
              <div className="title31">{card.title}</div>
              <div className="icon31"><GoArrowRight/></div>
            </div>
            <div className="card-right31">
              <img src={card.img} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="jump-button">
        <button>Jump to our products</button>
      </div> */}
    </div>
  );
};

export default Company_card