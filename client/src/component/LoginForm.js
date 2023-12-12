import React from 'react'
import './LoginForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

function LoginForm() {
  return (
    <div className="login_container">
      <center>
        <h1 className="login">Login</h1>
        <div className="login_form">
          <ValidatorForm className="input_box">
            <TextValidator type="text" name="Email/Username" className="email_input" label="Enter Username/Email" validators={["required"]}></TextValidator>
            <TextValidator type="password" name="Password" className="pwd_input" label="Enter Password" validators={["required"]} ></TextValidator>
          </ValidatorForm>
        </div>
        <div className="remember_forgot">
          <label htmlFor=""><input type="checkbox"/>Remember me?</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="submit">Login</button>
        <div className="register_link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </center>
      
    </div>
  )
}

export default LoginForm