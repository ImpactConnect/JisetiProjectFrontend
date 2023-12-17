import React from "react";

function ImageSlide ({ image }) {

    console.log(image)
    
    return (
        <div className="image-slide">
            <img src={image} alt=""/>
        </div>
    )
}

export default ImageSlide;