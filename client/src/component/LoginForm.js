import React from 'react'
import './styles/LoginForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'

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
        
        <div className="remember_forgot">
          <label htmlFor=""><input type="checkbox"/>Remember me?</label>
          <a href="#f">Forgot Password?</a>
        </div>
        <Button type="submit" className="submit">Login</Button>
        <div className="register_link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        </div>
      </center>
      
    </div>
  )
}

export default LoginForm