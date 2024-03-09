import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

import "./Navbar.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log("clicked");
    setIsActive(!isActive);
  };

  return (
    <div className="nav-bar">
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars ham"></i>
        </div>
        <div className="logo">
          <img src={Logo} alt="nav-logo" />
        </div>
        <div className={`nav-links ${isActive ? "active" : ""}`}>
          <ul className={isActive ? "active" : ""}>
            <li>
              <a onClick={()=>{navigate('/')}} >Home</a>
            </li>
            <li>
              <a onClick={()=>{navigate('/about')}}>About Us</a>
            </li>
            <li>
              <a onClick={()=>{navigate('/courses')}}>Courses</a>
            </li>
            <li>
              <a onClick={()=>{navigate('/downloads')}}>Downloads</a>
            </li>
            <li>
              <a  onClick={()=>{navigate('/news')}}>News and Events</a>
            </li>
            <li>
              <a  onClick={()=>{navigate('/gallery')}}>Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
