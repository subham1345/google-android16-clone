import React from "react";
import Gemini_news from "../assets/Gemini_news.webp";
import news2 from "../assets/news2.webp";
import news3 from "../assets/news3.webp";
import "./Newsdata1.css";

const Newsdata1 = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          
          margin: "0 auto",
          width: "100%", 
          maxWidth: "1350px",
          justifyContent: "center",
          alignItems: "center",
          height: "700px", 
        }}
      >
        {/* RED BOX */}
        <div
          style={{
            flex: 2,
            position: "relative",
            overflow: "hidden",
            height: "700px",
            borderRadius: "8px",
            
            width: "100%", 
           
          }}
        >
          {/* Image behind */}
          <img
            className="ai-image"
            src={Gemini_news}
            alt="AI"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              maxWidth: "850px",
              height: "100%",
              // objectFit: "cover",
              zIndex: 1,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: "8px",
            }}
          />

          {/* White content box */}
          <div
            style={{
              position: "absolute",
              bottom: "0px", 
              right: "0px", 
              zIndex: 2,
              color: "#000",
             
              padding: "20px 24px",
              borderRadius: "12px 0 0 0",
              backgroundColor: "white",
              border: "1px solid #ccc",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              width: "calc(100% - 40px)", 
              maxWidth: "700px",
            }}
          >
            <h1
              style={{
                fontSize: "22px",
                margin: "0 0 10px 0",
                fontWeight: "600",
              }}
            >
              Gemini CLI: your open-source AI agent
            </h1>
            <p style={{ fontSize: "16px", margin: 0, lineHeight: "1.5" }}>
              Free and open source, Gemini CLI brings Gemini directly into
              developers’ terminals — with unmatched access for individuals.
            </p>
          </div>
        </div>

        {/* GREEN BOX */}
        <div
          style={{
            // backgroundColor: "green",
            flex: 1,
            color: "black",
            padding: "20px",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            overflowY: "auto", 
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "380px",
              backgroundColor: "#ffffff11",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "left",
            }}
          >
            <img
              src={news2}
              alt="News 2"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h2
              style={{ margin: "12px 0 8px", fontSize: "18px", color: "black" }}
            >
              CHROMEBOOKS
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.4", color: "black" }}>
              Our most advanced Chromebook Plus yet, and new helpful AI features
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "380px",
              backgroundColor: "#ffffff11",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "left",
            }}
          >
            <img
              src={news3}
              alt="News 3"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h2
              style={{ margin: "12px 0 8px", fontSize: "18px", color: "black" }}
            >
              AI
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.4", color: "black" }}>
              Ask a Techspert: What is inference?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsdata1;
