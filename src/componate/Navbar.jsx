import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import gimg from "../assets/google-logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(()=>{
    console.log(toggleSidebar);
  })
    useEffect(() => {
    if (toggleSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleSidebar]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <i style={{ cursor: "pointer",padding: "10px" }}>
            <RxHamburgerMenu
              size={25}
              onClick={() => setToggleSidebar(!toggleSidebar)}
            />
          </i>
          <NavLink to="/about">
          <img src={gimg} alt="Google" style={{ width: "100px", height: "auto", margin: "0 10px" }}/>
            {/* <span className="g-blue">G</span>
            <span className="o-red">o</span>
            <span className="o-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="l-green">l</span>
            <span className="e-red">e</span> */}
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/company-info" className="nav-link">
              Company Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="nav-link">
              News
            </NavLink>
          </li>
        </ul>
      </nav>
      {toggleSidebar&&(
        <Sidebar isOpen={toggleSidebar} onClose={() => setToggleSidebar(false)} />
      )}
    </>
  );
};

export default Navbar;
