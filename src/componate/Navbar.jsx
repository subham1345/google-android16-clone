import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isopen, setIsopen] = useState(false)

  const sidemenu=()=>{
   setIsopen(!isopen);
  }

  return (


    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/about">
          <span className="g-blue">G</span>
          <span className="o-red">o</span>
          <span className="o-yellow">o</span>
          <span className="g-blue">g</span>
          <span className="l-green">l</span>
          <span className="e-red">e</span>
        </NavLink>
    <button className='btn-menu' onClick={sidemenu}></button>
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
  );
};

export default Navbar;




