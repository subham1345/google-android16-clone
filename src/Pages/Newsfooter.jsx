import React from 'react';
import './Newsfooter.css';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaLinkedinIn, FaQuestionCircle } from 'react-icons/fa';

const Newsfooter = () => {
  return (
    <footer className="news-footer">
      <div className="social-section">
        <span>Follow Us</span>
        <div className="icons">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom">
        <div className="left-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google logo" className="logo" />
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">About Google</a>
          <a href="#">Google Products</a>
          <a href="#">About the Keyword</a>
        </div>
        <div className="right-section">
          <FaQuestionCircle className="help-icon" />
          <span>Help</span>
          <select className="language-select">
            <option>Global (English)</option>
            <option>India (English)</option>
            <option>India (Hindi)</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Newsfooter;
