import React from "react";
import './index.css';

const ImageLink = ({imgUrl}) => {
   return(
      <div className="image">
         <img src={imgUrl} alt="user_photo"/>   
      </div>
   )
}

export default ImageLink;