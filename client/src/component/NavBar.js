import React from 'react'
import './NavBar.css'
import {Link} from "react-scroll"
import { NavLink } from "react-router-dom"
import logo from "./images/logo.png"

function NavBar() {
  return (
    <div className="navbar_container">
      <nav className="navbar_nav">
        <div className="logo_image"> <img src={logo}alt="pic" /> </div>
        <div className="navbar_ul">
          <ul className="navbar_links">
            {/* <li><Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li> */}
            
            <li><NavLink className="home_home" exact to="/">Home</NavLink></li>
            <li><NavLink className="about_about" exact to="/about">About</NavLink></li>
            {/* <li><NavLink className="contact_contact" exact to="/contact">Contact</NavLink></li> */}
            {/* <li><NavLink exact to="/post">Post</NavLink></li> */}
            <li><NavLink className="login_login" exact to="/login">Login</NavLink></li>
            <li><NavLink className="register_register" exact to="/register">Register</NavLink> </li>
          </ul>
        </div>
      </nav>      
    </div>
  )
}

export default NavBar