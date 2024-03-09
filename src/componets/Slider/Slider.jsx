import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Slider.css';
import slideImage1 from "../../assets/sli1.jpg";
import slideImage2 from "../../assets/sli2.jpg";
import slideImage3 from "../../assets/sli3.jpg";

const Images = [
    {url: slideImage1},
    {url: slideImage2},
    {url: slideImage3}
]

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px'
  }

function Slider() {
  return (
    <div className="sli-container">
      <Slide>
         {Images.map((Images, index)=> (
            <div key={index}>
              <div style={divStyle}>
                <img className='slide-img'  src={Images.url} />
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  );
}

export default Slider;
