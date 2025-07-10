import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import gimg from "../assets/google-logo.png"; 

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  
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

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setHasScrolled(currentScrollY > 0); 
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`navbar ${showNavbar ? "show" : "hide"} ${
          hasScrolled ? "scrolled" : ""
        }`}
      >
        <div className="navbar-logo">
          <i style={{ cursor: "pointer", padding: "10px" }}>
            <RxHamburgerMenu
              size={25}
              onClick={() => setToggleSidebar(!toggleSidebar)}
            />
          </i>
          <NavLink to="/about">
            <img
              src={gimg}
              alt="Google"
              style={{ width: "100px", height: "auto", margin: "0 10px" }}
            />
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

      {toggleSidebar && (
        <Sidebar
          isOpen={toggleSidebar}
          onClose={() => setToggleSidebar(false)}
        />
      )}
    </>
  );
};

export default Navbar;
