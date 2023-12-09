import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="navbar_container">
      <nav className="navbar_nav">
        <span className="navbar_ul">
           <NavLink exact to="/">Home</NavLink> 
           <NavLink exact to="/about">About</NavLink> 
           <NavLink exact to="/contact">Contact</NavLink> 
           <NavLink exact to="/post">Post</NavLink> 
           <NavLink exact to="/login">Login</NavLink> 
           <NavLink exact to="/register">Register</NavLink> 
        </span>
      </nav>      
    </div>
  )
}

export default NavBar