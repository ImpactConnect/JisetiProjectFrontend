import React from 'react'
import './styles/NavBar.css'
import { NavLink } from "react-router-dom"
import logo from "./images/logo.png"

function NavBar() {
  return (
    <div className="navbar_container">
      <nav className="navbar_nav">
        <div className="logo_image">
          <NavLink className="home_home" exact to="/"><img src={logo}alt="pic" /></NavLink>
        </div>
        <div className="navbar_ul">
          <ul className="navbar_links">
            <li><NavLink className="home_home" exact to="/">Home</NavLink></li>
            <li><NavLink className="about_about" exact to="/about">About</NavLink></li>
            <li><NavLink className="contact_contact" exact to="/contact">Contact</NavLink></li>
            <li><NavLink className="login_login" exact to="/login">Login</NavLink></li>
            <li><NavLink className="register_register" exact to="/register">Register</NavLink> </li>
          </ul>
        </div>
      </nav>      
    </div>
  )
}

export default NavBar; 