import { Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Contact from "./component/Contact"
import UserHome from "./component/UserHome"
import About from "./component/About"
import UserLoginForm from "./component/UserLoginForm"
import UserRegisterForm from "./component/UserRegisterForm"
import Footer from "./component/Footer"
import DPosts from "./component/Dummy"
import './App.css'


function App() {

  const [contentToRender, setContentsToRender] = useState(DPosts);
  const [title, setTitle] = useState('All Posts');
  const [images, setImages] = useState([]);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

  function handleLoginFormSubmit() {
    fetch('https//:localhost:3000/login')
    .then(res => res.json())
    .then(data => setUserIsLoggedIn(true))
  }

  function leftContainerButtonHandler (e) {
    const contentsToRender = DPosts
    setTitle(() => e.target.name)
    if (e.target.name === 'All Posts')
      setContentsToRender(DPosts)
    else {
      setContentsToRender(
        contentsToRender.filter( (content) => {
          return content.category === e.target.name
        })
      )
    }
  }

  function handleSignUpFormSubmit (user) {
    fetch('https//:localhost:3000/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => data)
  }

  function handleNewPost (newPost) {
    fetch('https//:blablabla', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => data)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={userIsLoggedIn ? <UserHome
         handleNewPost={handleNewPost} contentToRender={contentToRender}
          title={title} leftContainerButtonHandler={leftContainerButtonHandler}/> :
           <UserLoginForm handleLoginFormSubmit={handleLoginFormSubmit}/>} />
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/login" element ={<UserLoginForm images={images}
         handleLoginFormSubmit={handleLoginFormSubmit}/>}/>
        <Route path="/register" element ={<UserRegisterForm images = {images}
         handleSignUpFormSubmit={handleSignUpFormSubmit}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
