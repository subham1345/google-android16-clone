import React from "react";
import "./SearchAIMode.css";

const SearchAIMode = () => {
  return (
    <div className="search-ai-mode">
      {/* Section 1: Talk with Search in AI Mode */}
      <div className="ai-section">
        <div className="ai-text">
          <h2>Talk with Search in AI Mode</h2>
          <p>
            Have free-flowing voice conversations and explore links from across
            the web with Search Live. Labs users in the U.S. can try it out now
            in the Google app.
          </p>
          <button>Get the details</button>
        </div>
        <div className="ai-image">
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/0d/b4/b393ad5847c7bc43e6c4ff95277a/searchlive-hero.png=n-w1004-h565-fcrop64=1,0000006fffffff91-rw"
            alt="AI Search"
          />
        </div>
      </div>

      {/* Section 2: Google around the globe */}
      <div className="globe-section">
        <img
          className="globe-logo"
          src="https://www.gstatic.com/marketing-cms/assets/images/82/9c/5e08f4b14c35b84be1821d200793/about-10things-google.png=s128-fcrop64=1,00000000ffffffff-rw"
          alt="Google Logo"
        />
        <h2>Google around the globe</h2>
        <p>
          Learn more about Google's work and impact around the world.
        </p>
        <button>See More</button>
      </div>
    </div>
  );
};

export default SearchAIMode;
