import { Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import './App.css'
import Contact from "./component/Contact"
import Home from "./component/Home"
import About from "./component/About"
import NavBar from "./component/NavBar"
import Post from "./component/Post"
import LoginForm from "./component/LoginForm"
import RegisterForm from "./component/RegisterForm"
import Footer from "./component/Footer"
import DPosts from "./component/Dummy"


function App() {

  const [contentToRender, setContentsToRender] = useState(DPosts)
  const [title, setTitle] = useState('All Posts');
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true)

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

  function handleFormSubmit (user) {
    fetch('https//:blablabla', {
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

  function handleNewPpost (newPost) {
    console.log(newPost)
  }

  return (
    <div className="App" data-testid='app'>
      
      
        <NavBar />
        <Routes>
          <Route path="/" element ={<Home userIsLoggedIn={userIsLoggedIn}
           handleNewPpost={handleNewPpost} contentToRender={contentToRender}
            title={title} leftContainerButtonHandler={leftContainerButtonHandler}/>}/>
          <Route path="/about" element ={<About/>} />
          <Route path="/contact" element ={<Contact/>} />
          <Route path="/post" element ={<Post/>} />
          <Route path="/login" element ={<LoginForm/>} />
          <Route path="/register" element ={<RegisterForm handleFormSubmit={handleFormSubmit}/>} />
        </Routes>
        <Footer />
     
   
    </div>
  );
}

export default App;
