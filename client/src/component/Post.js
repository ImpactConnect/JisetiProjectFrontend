import React from 'react'
import Home from "./Home"

function Post() {


// Dummy Posts
const posts =[
  {
    id: 1,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 2,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 3,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 4,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 5,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 6,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 7,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  },
  {
    id: 8,
    title: "Bad road in the Dessert",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi consequuntur explicabo impedit, nam numquam quibusdam similique hic psum dolor sit amet consectetur adipisicing elit. Facere quaerat autem consequatur deserunt exercitationem, laborum eveniet voluptatem nulla deleniti maxime dolorum eligendi.",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887501/EducationHub/photos/racetrack-playa.jpg",
    location: "No 7, ífe street, Zabaaat Avenue, Ondo State",
    category: "Intervention",
    status: "Approved"
  }

]


  return (
    <div className="post" >
      <h1>Posttttttt</h1>
      <Home posts={posts} />
    </div>
  )
}

export default Post