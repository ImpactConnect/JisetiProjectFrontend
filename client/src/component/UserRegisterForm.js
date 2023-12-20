import React, { useState } from 'react'
import './styles//RegisterForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link, useNavigate } from "react-router-dom"
import logo from "./images/logo.png"
import './styles/ImageSlide.css' 



function RegisterForm({ handleSignUpFormSubmit }) {

  const navigate = useNavigate()

  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })

  function inputChangeHandler (e) {
    const new_user = newUser
    new_user[e.target.name] = e.target.value
    setNewUser({...new_user})
  }

  function formSubmitHandler (e) {
    e.preventDefault()
    navigate('/login')
    handleSignUpFormSubmit(newUser)
  }

  return (
    <div className="register-form-container">
        <div className='register-form'>
          <h1 className="register">Sign Up</h1>
            <ValidatorForm className="input_box" >
              <TextValidator type="text" onChange={inputChangeHandler}
                name="name" className="name_input" label="Enter Name"
                validators={["required"]}></TextValidator>
              <TextValidator type="text" onChange={inputChangeHandler}
                name="username" className="name_input" label="Enter Username"
                validators={["required"]}></TextValidator>
              <TextValidator type="text" onChange={inputChangeHandler}
                name="email" className="name_input" label="Enter Email"
                validators={["required"]}></TextValidator>
              <TextValidator type="text" onChange={inputChangeHandler}
                name="password" className="name_input" label="Create Password"
                validators={["required"]}></TextValidator>
              <TextValidator type="password" onChange={inputChangeHandler}
                name="confirmPassword" className="name_input" label="Confirm Password"
                validators={["required"]} ></TextValidator>
              <TextValidator type="number" onChange={inputChangeHandler} name="phone"
                className="name_input" label="Enter Phone Number"
                validators={["required"]} ></TextValidator>
              <button type="submit" className="reg_submit"
                onClick={formSubmitHandler}>Register</button>
            </ValidatorForm>
          <div className="register_link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
        <img src={logo} alt='' className='image-slide'/>
    </div>
  )
}

export default RegisterForm