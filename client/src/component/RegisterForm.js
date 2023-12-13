import React from 'react'
import './RegisterForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from "react-router-dom"

function RegisterForm() {
  return (
    <div className="register_container">
      <center>
        <div className="register_form">
        <h1 className="register">Register</h1>
            <ValidatorForm className="input_box">
            <TextValidator type="text" name="Email/Username" className="name_input" label="Enter Name" validators={["required"]}></TextValidator>
            <TextValidator type="text" name="Email/Username" className="name_input" label="Enter Username" validators={["required"]}></TextValidator>
            <TextValidator type="text" name="Email/Username" className="name_input" label="Enter Email" validators={["required"]}></TextValidator>
            <TextValidator type="text" name="Email/Username" className="name_input" label="Create Password" validators={["required"]}></TextValidator>
            <TextValidator type="password" name="Password" className="name_input" label="Confirm Password" validators={["required"]} ></TextValidator>
            <TextValidator type="number" name="number" className="name_input" label="Enter Phone Number" validators={["required"]} ></TextValidator>
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