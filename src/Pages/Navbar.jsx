import React, { useState } from 'react';
import '../Styles/Navbar.css';
import Logo from "../Assets/Images/school_logo1.png";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-toggle" onClick={toggleNav}>
         <button className='toggel'><h1><FaBars /></h1></button>
      </div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
       <Link to="/" className="link" onClick={toggleNav}>HOME</Link>
        <Link to="/About" className="link" onClick={toggleNav}>ABOUT</Link>
        <Link to="/Admission" className="link" onClick={toggleNav}>ADMISSION</Link>
        <Link to="/MandatoryDisclosure" className="link" onClick={toggleNav}>CBSE MANDATORY DISCLOSER</Link>
        <Link to="/ContactUs" className="link" onClick={toggleNav}>CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
