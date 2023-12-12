import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa"

function LoginForm() {
  return (
    <div className="login_container">
      <form action="" className="login_form">
        <h1 className="login">Login</h1>
        <div className="input_box">
          <input type="text" placeholder="Enter Username/Email" required />
          <FaUser className="icon"/>
        </div>
        <div className="input_box"> 
          <input type="password" placeholder="Enter Password" required />
          <FaLock className="icon"/>
        </div>
        <div className="remember_forgot">
          <label htmlFor=""><input type="checkbox" />Remember me?</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="submit">Login</button>
        <div className="register_link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm