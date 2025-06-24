import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        "Blog",
        "Brand Resource Center",
        "Careers",
        "Contact us",
        "Help Center",
        "Investor Relations",
        "Locations",
        "Press resources"
      ]
    },
    {
      title: "Outreach and initiatives",
      links: [
        "Accessibility",
        "Crisis Response",
        "Google.org",
        "Google for Health",
        "Grow with Google",
        "Learning",
        "Public Policy",
        "Sustainability"
      ]
    },
    {
      title: "Research and technology",
      links: [
        "Google AI",
        "Google Cloud",
        "Google DeepMind",
        "Google for Developers",
        "Google Labs",
        "Google Research"
      ]
    },
    {
      title: "More about us",
      links: [
        "Human rights",
        "Safety Center",
        "Supplier responsibility",
        "Transparency Center",
        "Transparency Report"
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-columns">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <span className="google-logo">Google</span>
          <Link style={{textDecoration:'none',color:'black'}} href="#">Privacy</Link>
          <Link style={{textDecoration:'none',color:'black'}} href="#">Terms</Link>
        </div>
        <div className="footer-right">
          <Link style={{textDecoration:'none',color:'black'}} href="#">Help</Link>
          <select className="footer-language-select" defaultValue="en">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
