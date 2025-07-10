import React from "react";
import "./Company_info2.css";
import { FiExternalLink } from "react-icons/fi";
import DeviceGrid2 from "./DeviceGrid2";
import Outreach from "./Outreach";
// import Outreach from "./Outreach.jsx";
import Footer from "../Pages/pagedata/Footer";
import Company_info7 from "../Pages/Company_info7";

const Company_info2 = () => {
  const cards = [
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/1b/c1/fc73fdba4049a602f76706ef7662/about-companyinfo-5up-labs.png=n-w780-h438-fcrop64=1,0000003dffffffc3-rw",
      category: "",
      description: "Google Labs",
      link: "#",
    },
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/7c/fa/6a5321bf4acd9a7f64d411dfd812/about-companyinfo-5up-devs1.png=n-w780-h443-fcrop64=1,000001a9fffffe93-rw",
      category: "",
      description: "Google For Devloper",
      link: "#",
    },
    {
      image:
        "https://www.gstatic.com/marketing-cms/assets/images/47/87/a957de3340f7b5318a73e8f421a4/about-companyinfo-5up-cloud-1.png=n-w780-h443-fcrop64=1,000001a9fffffe57-rw",
      category: "",
      description: "Google Cloud",
      link: "#",
    },
  ];

  return (
    <>
      <div className="promo-container">
        <h1>Research and technology</h1>
        <p>
          Our teams are working to solve complex challenges, advance the field
          of AI and help as many people as possible.
        </p>
        {/* <button className="promo-button">Check it out</button> */}

        <div className="card-container">
          {cards.map((card, index) => (
            <div className="promo-card" key={index}>
              <img src={card.image} alt={card.category} />
              <div className="card-content">
                <small>{card.category}</small>
                <p style={{fontWeight:"100"}}>{card.description}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="data2">
        <div className="text-container2">
          <h1>
            “We continue to approach the AI opportunity boldly, with a sense of
            excitement. We’re also making sure we do it responsibly.”
          </h1>
          <p style={{ color: "gray" }}>
            Sundar Pichai, CEO of Google and Alphabet
          </p>
          <button>Remove more from our ceo</button>
        </div>
        <div className="image-container2">
          <img src="https://www.gstatic.com/marketing-cms/assets/images/e7/35/bf4f7c844b89a69e972e0770b041/about-companyinfo-spquote.png=n-w1004-h730-fcrop64=1,00000ac0fffff57f-rw" />
        </div>
      </div>

      <div
        className="text-device1"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p style={{ fontSize: "48px" }}> Why we do what we do</p>
        <p>
          {" "}
          From the beginning, our passion for building technology for everyone
          has guided our work.
        </p>
      </div>

      <DeviceGrid2 />

      <div className="search-info-container">
        <div className="image-container">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/d3/43/f72b401e4ffd8528f7b55d0e0344/about-companyinfo-growwithgoogle2.png=n-w1004-h730-fcrop64=1,00000a90fffff570-rw"
            alt="How Google Search works"
          />
        </div>
        <div className="text-container">
          <h1>Grow with Google</h1>
          <p>
            Find training and resources to help you build your skills, career or
            business.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div
        className="text-device1"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding:'20px 0'
        }}
      >
        <p style={{ fontSize: "48px" }}> Outreach and initiatives</p>
        <p>
          {" "}
         Dive deeper into our efforts across sustainability, accessibility and community engagement.
        </p>
        <Company_info7 />
      </div>

      <div className="text-Alphabat">
        <p style={{ textAlign: "center", fontSize: "48px" }}>
          Alphabet Investor Relations
        </p>
        <p
          style={{ textAlign: "center", fontWeight: "100", marginTop: "20px" }}
        >
          Read our latest Earnings reports and other updates.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <button>Learn more</button>
        </div>
        {/* <Outreach/> */}
      </div>


      <div className="support-text145" >
        <div className="support-message145" style={{padding: " 0 20px",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <p>
            Get the latest news from Google in your inbox
            <br />
            <span>
              Sign up to receive top stories from the week — from product
              announcements, to everyday tips and tricks.
            </span>
          </p>
        </div>
        <div>
          <button className="btn-support145">Subscribe</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company_info2;
