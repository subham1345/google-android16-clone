import React from "react";
import "./Section4.css";
// import NewWaydata from "../NewWaydata";
import { FiExternalLink } from "react-icons/fi";
// import "../NewWaydata.css";

const Section4 = () => {
  return (
    <div
      style={{
        width: "100%",
        // backgroundColor: '#f8f9fa'
        // backgroundColor: "yellow",
      }}
    >
      <div
        style={{
          // backgroundColor: "green",
          margin: "0 auto",
          maxWidth: "1335px",
          // padding: "0 16px",.
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="text-container1">
          <h4>New ways to learn, explore and create</h4>
        </div>

        {/* <NewWaydata /> */}
        <div className="page-layout">
          <div className="main-card">
            <img
              src="https://www.gstatic.com/marketing-cms/assets/images/bb/78/8b8beff34cb3b18e66d4537b3e16/about-products-collection-circle-to-search.jpg=n-w1753-h1264-fcrop64=1,04fb0000fb33ffff-rw"
              alt="Circle to Search"
            />
            <div
              className="card-details"
              style={{ height: "100%", position: "relative" }}
            >
              <h2 id="circle-to-search">Circle to Search</h2>
              <p id="circle-to-search-p">
                Search anything on your Android phone with a simple gesture —
                like circling, highlighting, scribbling or tapping.
              </p>
              <div
                style={{
                  bottom: "0",
                  right: "0",
                  position: "absolute",
                  padding: "10px",
                }}
              >
                <FiExternalLink
                  style={{ color: "#1a73e8", width: "24px", height: "24px" }}
                />
              </div>
            </div>
          </div>
          <div className="side-cards">
            <div className="side-card">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/b8/58/28c377b14d5e8de8ff0ed40dd75e/about-products-collection-gemini-for-workspace.jpg=n-w780-h438-fcrop64=1,00000051ffffffff-rw"
                alt="Gemini for Google Workspace"
              />
              <div className="card-details">
                <h6>Gemini for Google Workspace</h6>
                <p>
                  Be more productive with Gemini, built right into Gmail, Docs,
                  Sheets and more.
                </p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <FiExternalLink
                  style={{ color: "#1a73e8", width: "24px", height: "24px" }}
                />
              </div>
            </div>
            <div className="side-card">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/bd/4d/4135ac794f139054d6e30375093a/about-products-collection-immersiveview.png=n-w780-h438-fcrop64=1,00000051ffffffff-rw"
                alt="Immersive View"
              />
              <div className="card-details">
                <h3 style={{ fontWeight: "100" }}>Immersive View</h3>
                <p>
                  Virtually explore a p lace in Maps, with details like weather
                  and busyness to help you feel like you’re really there.
                </p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <FiExternalLink
                  style={{ color: "#1a73e8", width: "24px", height: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
