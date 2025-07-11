import React from "react";
import "./SearchInfoCard.css";
// import DeviceGrid from "./DeviceGrid"; 
import Card_2searchinfo from "./Card_2searchinfo";
// import NewWaydata from "./NewWaydata";
// import Section3 from "./products/Section3";
// import Section4 from "./products/Section4";
// import Section6 from "./products/Section6";
// import Section8 from "./products/Section8";

const SearchInfoCard1 = () => {
  return (
    <>

      {/* <div className="data22">
        <div className="text-container22">
          <h1>Chat with Gemini</h1>
          <p style={{ padding: "8px" }}>
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
      </div> */}

      {/* <div className="text-container1">All things Android</div> */}
      {/* <div>
        <div>
          <div className="text-container1" >
            Picture this
            <p style={{ fontSize: "20px", marginTop: "10px" }}>
              Create scroll-stoppers with Google Photos AI editing tools.
            </p>
          </div>
        </div>
      </div>

      <Card_2searchinfo /> */}

      

      {/* <Section8/> */}

      <div className="data22">
        <div className="text-container22">
          <h1>AI in our products</h1>
          <p>
            See how you can start using Google AI in Chrome, Search, YouTube and
            more.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image-container21">
          <img src="https://www.gstatic.com/marketing-cms/assets/images/f7/af/77cccefd4502a1be0c696e28021b/about-products-2up-promo-ai-in-our-products.jpg=n-w1033-h752-fcrop64=1,038f0000fc44ffff-rw" />
        </div>
      </div>

      <div className="support-text1">
        <div
          className="support-message1"
          style={{
            padding: " 0 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            Get accessibility support
            <br />
            <span style={{ color: "#5f6368" }}>
              Browse topics or connect with our specialists.
            </span>
          </p>
        </div>
        <button className="btn-support">Learn more</button>
      </div>
    </>
  );
};

export default SearchInfoCard1;
