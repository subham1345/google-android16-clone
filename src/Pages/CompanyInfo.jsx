import React from 'react';
import Company_card from './Company_card';
import Company_info2 from './Company_info2';

const CompanyInfo = () => {
  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      <img
        src="https://www.gstatic.com/marketing-cms/assets/images/0b/d4/e6516d32418884386205621ad689/about-companyinfo-hero.jpg=n-w4000-h1250-fcrop64=1,0000051ffffffae1-rw"
        alt="Google.img"
        style={{
          objectFit: "cover",
          width: "100%",
          maxHeight: "455px",
          height: "auto",
          borderRadius: "8px"
        }}
      />
      <p
        style={{
          fontSize: "58px",
          fontWeight: "400",
          lineHeight: "1.3",
          textAlign: "center",
          fontFamily: "'Google Sans', sans-serif",
          margin: "48px 8px"
        }}
      >
        Our mission is to{" "}
        <span style={{ color: "#4285F4" }}>organize</span> the <br />
        world’s <span style={{ color: "#EA4335" }}>information</span> and make it <br />
        <span style={{ color: "#34A853" }}>universally accessible</span> and <br />
        <span style={{ color: "#FBBC05" }}>useful</span>
      </p>
      <div style={{ padding: "0 8px" }}>
        <Company_card />
        <Company_info2 />
      </div>
    </div>
  );
};

export default CompanyInfo;