import React from 'react'
import {Link} from "react-scroll"
import { NavLink } from "react-router-dom"
import logo from "./images/logo.png"

function NavBar() {
  return (
    <div className="navbar_container">
      <nav className="navbar_nav">
        <img src={logo}alt="pic"/>
        <span className="navbar_ul">
          <ul>
            {/* <li><Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li> */}
            
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
            <li><NavLink exact to="/post">Post</NavLink></li>
            <li><NavLink exact to="/login">Login</NavLink></li>
            <li><NavLink exact to="/register">Register</NavLink> </li>
             
             
             
             
             
            
          </ul>
           
        </span>
      </nav>      
    </div>
  )
}

export default NavBar