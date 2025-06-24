import React from 'react';
import './GeminiPromo.css';
import geminiVideo from '../assets/gemini.mp4';

const GeminiPromo = () => {
  return (
    <div className="gemini-container">
      <div className="gemini-wrapper">
        <div className="gemini-video">
          <video width="320" height="240" autoPlay loop muted>
            <source src={geminiVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="gemini-text-block">
          <div className="gemini-grid">
            <div className="gemini-spacer"></div>
            <div className="gemini-content">
              <h3 className="gemini-title">What’s new with Gemini 2.5</h3>
              <div className="gemini-subtitle">
                <span>
                  Gemini 2.5 Flash and Pro are stable and generally available to scale AI
                  applications, and 2.5 Flash-Lite is now in preview.
                </span>
              </div>
              <div className="gemini-cta">
                <button
                  className="gemini-button" 
                  href="https://blog.google/products/gemini/gemini-2-5-model-family-expands?utm_source=about.google&utm_medium=referral&utm_campaign=homepage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="gemini-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiPromo;
