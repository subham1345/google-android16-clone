import React from 'react';
import './FeatureGrid.css';

const features = [
  {
    title: "Photo Unblur",
    description: "Clear up blurry shots to relive your favorite moments.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/f4/42/e6d2bdd64b85bcec49da4e362dd3/about-products-collection-photos-3-update.jpg=n-w1232-h693-fcrop64=1,00000051ffffffff-rw"
  },
  {
    title: "Magic Eraser",
    description: "Remove unwanted distractions with a quick tap.",
    image: "https://www.gstatic.com/marketing-cms/assets/images/d5/94/ba14705843f2a0a992d8af855c34/about-products-collection-photos-2.jpg=n-w1232-h693-fcrop64=1,00000051ffffffff-rw"
  }
];

const Card_2searchinfo = () => {
  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.image} alt={feature.title} className="feature-img" />
          <div className="feature-content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card_2searchinfo;
