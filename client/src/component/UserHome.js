import React, {useState} from 'react';
import './styles/Home.css';
import CardPosts from "./CardPosts"
import NavBar from './NavBar';
// import About from "./About";
// import Contact from "./Contact";


function UserHome({contentToRender, title, userIsLoggedIn,
   leftContainerButtonHandler, handleNewPost, handleDelete, handleEdit}) {

  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    geolocationCoords: {
      longitude: '',
      latitude: ''
    }
  })

  function onChangeHandler (e) {
    const newPostData = newPost
    if (e.target.name === 'image') {
      newPostData[e.target.name]
       = URL.createObjectURL(e.target.files[0])
      setNewPost({...newPostData})
    }
    else {
      newPostData[e.target.name] = e.target.value
      setNewPost({...newPostData})
    }
  }

  function newPostSubmitHandler (e) {
    e.preventDefault()
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const newPostData = newPost
        newPostData.geolocationCoords = {
          longitude: position.coords.longitude, latitude: position.coords.latitude}
      })
    handleNewPost(newPost)
    }
    else {
      alert('This browser doesn\'t support geolocation')
    }
    setNewPost({title: '', description: '', image: '', category: ''})
  }
  
  const loggedInRightContainer = (
    <center>
      <h1 style={{marginTop: 30}}>New Post</h1>
      <form onSubmit={newPostSubmitHandler} >
        <input type='text' name='title' className='title-box' value={newPost.title}
         onChange={onChangeHandler} placeholder='Title'/>
        <input type='text' name='description' className='description'
         value={newPost.description} onChange={onChangeHandler} placeholder='Description'/><br/><br/>
        <label style={{marginLeft: 15, marginRight: 10}}>Image: </label>
        <input type='file' name='image' className='image-video'
         value={newPost.image} onChange={onChangeHandler} /><br/><br/>
        <label style={{marginLeft: 15, marginRight: 5}}>Category: </label>
        <input type='radio' name='category' value='redflags' onChange={onChangeHandler}
         /><span style={{marginRight: 20}}>RED FLAG</span>
        <input type='radio' name='category' value='intervention'
         onChange={onChangeHandler}/><span>INTERVENTION</span><br/><br/>
        <button type='submit' className='post-button' ><b>POST</b></button>
      </form>
    </center>
  )

  return (
    <div className="home-container">
      <NavBar />
      <div className='left-container'>
        <center>
          <h1>POSTS</h1>
          <button className='posts-button' name='All Posts' onClick={leftContainerButtonHandler}>All</button>
          <button className='posts-button' name='Red Flags' onClick={leftContainerButtonHandler}>Red Flags</button>
          <button className='posts-button' name='Interventions' onClick={leftContainerButtonHandler}>Interventions</button>
        </center>
      </div>
      <div className='heading'>
          <center><h2>{title}</h2></center>
      </div>
      <div className='render-data-container'>
        <div>
          <center>
            {<CardPosts contentToRender={contentToRender} handleDelete={handleDelete} handleEdit={handleEdit}/>}
          </center>
        </div>
      </div>
      <div className='right-container'>
        {loggedInRightContainer}
      </div>
    </div>
  )
}

export default UserHome;