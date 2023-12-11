import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login_container">
      <form action="">
        <h1>Login</h1>
        <div className="input_box">
          <input type="text" placeholder="Enter Username/Email" required />
          <FaUser />
          <br/>
          <input type="password" placeholder="Enter Password" required />
          <FaLock />
        </div>
        <div className="remember_forgot">
          <label htmlFor=""><input type="checkbox" />Remember me?</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register_link">
          <o>Don't have an account? <a href="#">Register</a></o>
        </div>
      </form>
    </div>
  )
}

export default LoginForm