// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import gimg from "../assets/google-logo.png";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
       <div className="sidebar-logo">
          <NavLink to="/about"  onClick={onClose}>
          {/* <img src={gimg} alt="" /> */}
            <span className="g-blue">G</span>
            <span className="o-red">o</span>
            <span className="o-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="l-green">l</span>
            <span className="e-red">e</span>
          </NavLink>
       </div>

        <ul>
          <li>
            <NavLink to="/about" onClick={onClose}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={onClose}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/company-info" onClick={onClose}>
              Company Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" onClick={onClose}>
              News
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && <div className="backdrop" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
