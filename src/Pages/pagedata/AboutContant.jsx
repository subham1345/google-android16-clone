import React from "react";
import Android16Promo from "./Android16Promo";
import SearchAIMode from "./SearchAIMode";
import Footer from "./Footer";
import GeminiPromo from "../../componate/GeminiPromo";
import Subscribe from "../../componate/Subscribe";

const AboutContant = () => {
  return (
    <>
      <img
        src="https://www.gstatic.com/marketing-cms/assets/images/2b/c7/8337b49f4844bae446f91baf719c/android-16-hero-about.png=n-w2560-h768-fcrop64=1,00000000ffffffff-rw"
        style={{ width: "100%" }}
        alt="About google"
      />
      <Android16Promo />
      <SearchAIMode />
      <GeminiPromo />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AboutContant;
