import React, { useState } from "react";
import img5 from "./Technocruise.jpg"
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
      <div id="navbar">
      <img className="nav-logo" src = {img5} alt = "image"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/cities">Cities</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </div>
      
   
    

    
  );
};

export default Navbar;