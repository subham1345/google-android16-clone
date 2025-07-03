import React from "react";
import "./Android16Promo.css";
import { FiExternalLink } from "react-icons/fi";

const Android16Promo = () => {
  const cards = [
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/ee/5e/2f31a09a4023a95672fa09fb1746/about-google-homepage-products.jpeg=n-w836-h438-fcrop64=1,08870000f779ffff-rw",
      category: "PRODUCTS",
      description:
        "Explore our products and features across Search, Google Workspace and more",
      link: "#",
    },
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/c4/11/b1b6325d471b8213e63630f16eaf/about-google-homepage-technology.png=n-w780-h442-fcrop64=1,00000116fffffe5f-rw",
      category: "TECHNOLOGY",
      description:
        "Learn all about our leading AI models — and discover their capabilities",
      link: "#",
    },
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/34/4a/c86092bf4ee49037af1b1f7db46f/about-google-homepage-research.jpeg=n-w780-h585-fcrop64=1,00002016ffffdfea-rw",
      category: "RESEARCH",
      description:
        "See how we’re tackling some of the most challenging problems in computer science",
      link: "#",
    },
  ];

  return (
    <div className="promo-container12">
      <h1>Android 16 is here</h1>
      <p>
        Android 16 is now rolling out on Pixel devices, with a fresh design and
        new features like live delivery and ride-share updates.
      </p>
      <button className="promo-button">Check it out</button>

      <div className="card-container12">
        {cards.map((card, index) => (
          <div className="promo-card12" key={index}>
            <img src={card.image} alt={card.category} />
            <div className="card-content12">
              <small>{card.category}</small>
              <p>{card.description}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Android16Promo;
