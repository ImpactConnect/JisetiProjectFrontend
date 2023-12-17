import React, { useEffect, useState } from 'react'
import './styles/LoginForm.css'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from "react-router-dom"
import logo from "./images/logo.png"
import './styles/ImageSlide.css' 



function AdminLoginForm ( {handleLoginFormSubmit, handleTimerEvent, images} ) {

  const [image, setImage] = useState('')

  useEffect( () => {
    setTimeout(()=>{
      setImage(images[0])
    }, 5000)
  }, [])

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

  function formSubmitHandler() {
    const loginUser = user
    handleLoginFormSubmit(loginUser)
  }


  return (
    <div className="login_container">
      <div className="login_form">
        <h1 className="login">Login</h1>
          <ValidatorForm className="input_box">
            <TextValidator type="text" name="username"
              className="email_input"  label="Enter Username/Email"
              validators={["required"]} onChange={inputChangeHandler}></TextValidator>
            <TextValidator type="password" name="password"
              className="pwd_input"  label="Enter Password"
              validators={["required"]} onChange={inputChangeHandler}></TextValidator>
          </ValidatorForm>
        <div className="remember_forgot">
          <input type="checkbox"/>Remember me?
        </div>
        <button type='submit' className="submit" onClick={formSubmitHandler}>Login</button>
        <div className="register_link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
      <img src={logo} alt='' className='image-slide'/>
    </div>
  )
}

export default AdminLoginForm;