import "./GoogleEarthCards.css";
import gImg1 from "../../assets/g-img1.png";
import gImg2 from "../../assets/g-img2.png";
import gImg3 from "../../assets/g-img3.png";

const cards = [
  {
    title: "GOOGLE EARTH",
    description: "Our favorite moments from 20 years of Google Earth",
    src: gImg1,
  },
  {
    title: "GOOGLE EARTH",
    description: "See these 10 cities transform over time in Google Earth.",
    src: gImg2,
  },
  {
    title: "GOOGLE EARTH",
    description: "Guess the city skyline in Google Earth",
    src: gImg3,
  },
];

const GoogleEarthCards = () => {
  return (
    <div className="earth-container">
      <div className="subscribe-box">
        <div
          className="subscribe-left"
          style={{ position: "absolute", bottom: "0px", left: "-20px" }}
        >
          <img
            src="https://blog.google/static/blogv2/images/newsletter-homepage-woman-couch.svg?version=pr20250625-1614"
            alt="data"
          />
        </div>
        <div className="subscribe-right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p style={{ textAlign: "center" }}>
              Get the latest <span className="green">news from Google</span> in
              your inbox.
            </p>
            <div className="form">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <small>
            Your information will be used in accordance with{" "}
            <a href="#">Google's privacy policy</a>.
          </small>
        </div>
      </div>
      <div
        style={{ margin: "0 auto", width: "85%"}}
      >
        <h2 style={{padding:'20px 0px'}}>Google Earth turns 20</h2>

        <div className="card-grid">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-text">
                <span className="card-tag">{card.title}</span>
                <p className="card-desc">{card.description}</p>
              </div>
              <img src={card.src} alt={card.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleEarthCards;
