import React from 'react';
import './styles/CardPosts.css';

function CardPosts({ contentToRender }) {
    const posts = contentToRender.map( post => {
        const {id, title, description, image, location, category} = post;
        return (
          <div key={id} className="cardpost_container">
              <h3 className="card_title">{title}</h3>
              <img className="card_image" src={image} alt="" />
              <p className="card_description">{description}</p>
              <span className="card_location" >{location}</span>|<span>{category}</span>
          </div>
        )
    })
    return (
      <div className="card-post">
        {posts}
      </div>
    );
  }

export default CardPosts;
