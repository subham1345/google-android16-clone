import React from 'react';
import './ScrollPopup.css';
import { FaArrowRight } from 'react-icons/fa';

const Newsimgpart = () => {
  return (
    <div className="row-wrapper">
      <div className="left-div">
        <div className="left-inner-wrapper">
          <div className="left-inner-div2">
            <a href="#" className="left-link">DEVELOPERS</a>
            <h1 className="left-heading">Gemini CLI: your open-source AI agent</h1>
            <p className="left-paragraph">
              Free and open source, Gemini CLI brings Gemini directly into developers’ terminals — with unmatched access for individuals.
            </p>
            <div className="right-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="left-inner-div1">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_CLI_Hero_Final.width-800.format-webp.webp"
              alt="Gemini CLI"
              className="left-image"
            />
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="inner-div right-card">
          <img
            src="https://bizsugar.com/wp-content/uploads/2025/06/Our_most_advanced_Chromebook_Plus_yet_and_new.width-1300-696x391.png"
            alt="Right 1"
            className="right-image"
          />
          <a href="#" className="right-link">CHROMEBOOKS</a>
          <p className="right-paragraph">Our most advanced Chromebook Plus yet, and new helpful AI features</p>
        </div>

        <div className="inner-div right-card">
          <img
            src="https://i.guim.co.uk/img/media/848505f89ae9029a1accb479161b72ff814adc88/0_0_5079_3386/master/5079.jpg?width=465&dpr=1&s=none&crop=none"
            alt="Right 2"
            className="right-image"
          />
          <a href="#" className="right-link">AI</a>
          <p className="right-paragraph">Ask a Techspert: What is inference?</p>
        </div>
      </div>
    </div>
  );
};

export default Newsimgpart;
