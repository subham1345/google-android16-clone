import React from "react";
import "./SearchInfoCard.css";
import DeviceGrid from "./DeviceGrid";
import Card_2searchinfo from "./Card_2searchinfo";
import GoogleProducts from "./GoogleProducts";
import Footer from "./pagedata/Footer";
import NewWaydata from "./NewWaydata";

const SearchInfoCard1 = () => {
  return (
    <>
      <div className="search-info-container">
        <div className="image-container">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/aa/4c/b599584d422391f6fed2ef9c2cc4/about-products-search-update.png=n-w1004-h753-fcrop64=1,00000000ffffff92-rw"
            alt="How Google Search works"
          />
        </div>
        <div className="text-container">
          <h1>How Google Search works</h1>
          <p>
            Get the details on how Search works — from the technology we make,
            to the approach we take.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className="text-container1">
        New ways to learn, explore and create
      </div>

      <NewWaydata/>

      <div className="data2">
        <div className="text-container2">
          <h1 style={{ fontWeight: "100",fontSize:"48px",padding:"10px" }}>Chat with Gemini</h1>
          <p style={{padding:"8px"}}>
            Start writing, planning and learning with your AI-powered assistant.
          </p>
          <button>Ask away</button>
        </div>
        <div className="image-container21">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/d0/17/a00d288648ceb5ce464c3f2008ae/about-products-2up-promo-chat-with-gemini.jpg=n-w1033-h752-fcrop64=1,038f0000fc44ffff-rw"
            alt="How Google Search works"
          />
        </div>
      </div>
      <div className="text-container1">All things Android</div>
      <div>
        <DeviceGrid />
        <div>
          <div className="search-info-container">
            <div className="image-container">
              <img src="https://www.gstatic.com/marketing-cms/assets/images/22/a7/aa71289d4d9f8ca08d444b969a90/about-products-2up-promo-pixel-portfolio-alt.jpg=n-w1033-h752-fcrop64=1,038f0000fc44ffff-rw" />
            </div>
            <div className="text-container">
              <h1>
                Get to know the Pixel <br /> portfolio
              </h1>
              <p>
                From phones and watches, to earbuds and the tablet, get
                personalized help from Pixel throughout your day.
              </p>
              <button>Dive into</button>
            </div>
          </div>
          <div className="text-container1">
            Picture this
            <p style={{ fontSize: "20px" }}>
              Create scroll-stoppers with Google Photos AI editing tools.
            </p>
          </div>
        </div>
      </div>
      <Card_2searchinfo />
      <div className="data2">
        <div className="text-container2">
          <h1 style={{ fontWeight: "200", fontSize: "50px" }}>
            AI in our products
          </h1>
          <p>
            See how you can start using Google AI in Chrome, Search, YouTube and
            more.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image-container2">
          <img src="https://www.gstatic.com/marketing-cms/assets/images/f7/af/77cccefd4502a1be0c696e28021b/about-products-2up-promo-ai-in-our-products.jpg=n-w1033-h752-fcrop64=1,038f0000fc44ffff-rw" />
        </div>
      </div>
      <div className="support-text1">
        <div className="support-message1">
          <p>
            Get accessibility support
            <br />
            <span style={{color:"#5f6368"}}>Browse topics or connect with our specialists.</span>
          </p>
        </div>
        <button className="btn-support">Learn more</button>
      </div>
      <GoogleProducts/>
      <Footer/>
    </>
  );
};

export default SearchInfoCard1;
