import React from "react";
import '../Styles/Footer.css';
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterAnimation from "../Animations/Footer-Animation";
import Logo from "../Assets/Images/MJRPHERITAGE.png";
const Footer = () => {
    return (
      <>
        <div className="Footer">
        <div className="MapSection">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3591.4138778477145!2d83.70927200000001!3d25.822903999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQ5JzIyLjUiTiA4M8KwNDInMzMuNCJF!5e0!3m2!1sen!2sin!4v1721892540906!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="ContentSection">
          <div className="Footer_Logo">
          <img src={Logo} alt="" />
          </div>
         
            <div className="Content">
              <h2>CONTACT WITH US</h2>
              <hr />
              <br />
              <h4><FaPhone /> +91 7991515500</h4>
              <h4><MdMailOutline /> &nbsp; avikushwaha121@gmail.com</h4>
            </div>
            <div className="Content">
              <h2>QUICK LINKS</h2>
              <hr />
              <br />
              <h4>&#x2022; FAQ</h4>
              <h4>&#x2022; About Us</h4>
              <h4>&#x2022; Privacy</h4>
            </div>
            <div className="Content">
              <h2>SOCIAL MEDIA</h2>
              <hr />
              <br />
              <h4><FaFacebook /> &nbsp; Facebook</h4>
              <h4><FaInstagramSquare /> &nbsp; Instagram</h4>
              <h4><FaYoutube /> &nbsp; Youtube</h4>
            </div>
          </div>
          
          

          <div className="BottomFooter">
            <h3>Copyright &#169; 2024 MJRP Heritage. All Rights Reserved</h3>
          </div>
        </div>
      </>
    );
}

export default Footer;
