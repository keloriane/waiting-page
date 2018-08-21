import React from 'react';
import Slider from "react-slick";
import slide_one from './../../resources/images/team.jpg'
import slide_two from './../../resources/images/community.jpg'
const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay:true,
        speed:1000
    }
    return (
      
        <div
         className="carrousel_wrapper"
         style={{
             
             height: `${window.innerHeight}px`,
             overflow:'hidden'
         }}
        >
         <Slider {...settings}>
         <div>
         <div
         className="carrousel_image"
         style={{
             background: `url(${slide_one})`,
             height: `${window.innerHeight}px`,
             backgroundSize:'cover',
         }}></div>
         </div>
         <div>
         <div
         className="carrousel_image"
         style={{
             background: `url(${slide_two})`,
             height: `${window.innerHeight}px`,
             backgroundSize:'cover',
         }}></div>
         </div>

         </Slider>   
        </div>
    );
}

export default Carrousel;
