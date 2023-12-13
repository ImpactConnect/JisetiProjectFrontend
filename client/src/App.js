import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Contact from "./component/Contact"
import Home from "./component/Home"
import About from "./component/About"
import NavBar from "./component/NavBar"
import Post from "./component/Post"
import LoginForm from "./component/LoginForm"
import RegisterForm from "./component/RegisterForm"



function App() {

  function handleFormSubmit (user) {
    console.log(user)
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

  return (
    <div className="App">
    {/* <Home />
         <About />
         <Contact/> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/about" element ={<About/>} />
          {/* <Route path="/contact" element ={<Contact/>} /> */}
          {/* <Route path="/post" element ={<Post/>} /> */}
          <Route path="/login" element ={<LoginForm/>} />
          <Route path="/register" element ={<RegisterForm handleFormSubmit={handleFormSubmit}/>} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
