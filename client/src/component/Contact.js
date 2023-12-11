import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoLogoInstagram } from "react-icons/io5";



function Contact() {
  return (
    <footer className="footer_container" id="contact">
      <h3>Contact Us:</h3>
      <div className="footer_icons_container">
        <ul>
          <li> <FaFacebook /> </li>
          <li> <BsTwitterX /> </li>
          <li> <FcGoogle /> </li>
          <li> <IoLogoInstagram /> </li>
        </ul>
      </div>
      <div className="footer_text_container">
        <p className="footer_text">
          Copyright &copy; 2017 All Rights Reserved by <a href="#h">JISETI</a>.
        </p>
      </div>
    </footer>
  )
}

export default Contact