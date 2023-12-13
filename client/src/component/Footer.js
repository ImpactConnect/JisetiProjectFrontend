import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { IoLogoInstagram } from "react-icons/io5"
import logo from "./images/logo.png"
import './styles/Footer.css'

function Footer() {
  return (
    <footer className="footer_container" id="contact">
        <img src={logo} alt="" className="logo_img" />
      <center>
        <span className="footer_icons_container">
          <ul className="footer_icon">
            <li><a href="#f"><FaFacebook /></a></li>
            <li><a href="#b"><BsTwitterX /></a></li>
            <li><a href="#g"><FcGoogle /></a></li>
            <li><a href="#i"><IoLogoInstagram /></a></li>
          </ul>
          <p className="footer_text">
            Copyright &copy; 2017 All Rights Reserved by <a href="#h">JISETI</a>.
          </p>
        </span>
      </center>
    </footer>
  )
}

export default Footer