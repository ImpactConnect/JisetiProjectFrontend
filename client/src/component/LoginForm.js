import React, { useState } from 'react'
import './LoginForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from "react-router-dom"
import { Button } from 'react-scroll'

function LoginForm() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  function inputChangeHandler(e) {
    const login_user = user
    login_user[e.target.name] = e.target.value;
    setUser({...login_user})
    console.log(login_user)
  }

  function formSubmitHandler(e) {

  }



  return (
    <div className="login_container">
      <center>
        <h1 className="login">Login</h1>
        <div className="login_form">
          <ValidatorForm className="input_box">
            <TextValidator type="text" name="username" className="email_input" onChange={inputChangeHandler} label="Enter Username/Email" validators={["required"]}></TextValidator>
            <TextValidator type="password" name="password" className="pwd_input" onChange={inputChangeHandler} label="Enter Password" validators={["required"]} ></TextValidator>
            <Button type='submit' onClick={formSubmitHandler} className="submit">Login</Button>
          </ValidatorForm>
        
        <div className="remember_forgot">
          <label htmlFor=""><input type="checkbox"/>Remember me?</label>
          <a href="#">Forgot Password?</a>
        </div>
        <div className="register_link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        </div>
      </center>
      
    </div>
  )
}

export default LoginForm