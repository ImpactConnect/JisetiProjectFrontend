import React, { useState } from 'react'
import './RegisterForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from "react-router-dom"

function RegisterForm({ handleFormSubmit }) {

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

  function formSubmitHandler () {
    handleFormSubmit(newUser)
  }

  return (
    <div className="register_container">
      <center>
        <div className="register_form">
        <h1 className="register">Register</h1>
            <ValidatorForm className="input_box" onSubmit={formSubmitHandler}>
            <TextValidator type="text" onChange={inputChangeHandler} name="name" className="name_input" label="Enter Name" validators={["required"]}></TextValidator>
            <TextValidator type="text" onChange={inputChangeHandler} name="username" className="name_input" label="Enter Username" validators={["required"]}></TextValidator>
            <TextValidator type="text" onChange={inputChangeHandler} name="email" className="name_input" label="Enter Email" validators={["required"]}></TextValidator>
            <TextValidator type="text" onChange={inputChangeHandler} name="password" className="name_input" label="Create Password" validators={["required"]}></TextValidator>
            <TextValidator type="password" onChange={inputChangeHandler} name="confirmPassword" className="name_input" label="Confirm Password" validators={["required"]} ></TextValidator>
            <TextValidator type="number" onChange={inputChangeHandler} name="phone" className="name_input" label="Enter Phone Number" validators={["required"]} ></TextValidator>
          </ValidatorForm>
        
        <div className="agreement">
          <label htmlFor=""><input type="checkbox"/>I agree to the terms & conditions</label>
        </div>
        <button type="submit" className="reg_submit">Register</button>
        <div className="register_link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        </div>
      </center>
      
    </div>
  )
}

export default RegisterForm