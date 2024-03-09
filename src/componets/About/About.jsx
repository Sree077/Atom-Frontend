import React from "react";
import {useNavigate} from "react-router-dom";

import "./About.css";
import Arrow from "../../assets/RightArrow.svg";
import Image from "../../assets/ab-img.png";
import Wave from "../../assets/ab-wave.png";

function About() {
  const navigate = useNavigate();
  return (<div className="about">

    <div className="ab-container">
      <div className="row">
        <h1 className="heading">About Us</h1>
        <div className="wrapper">
          <div className="col-2">
            <div>
            <p>
            Practice, persistence and performance when inculcated in the meticulous guidance of master minds are sure to produce the output of excellence in terms of career and development of holistic personality, and this is the mere objective of a brand called ATOM.
            </p><br />
            <p>
            The institute is having its own study centers which are offering classroom programmes for MEDICAL / ENGINEERING / INTEGRATED MS. Entrance coaching at VALANCHERY and PERINTHALMANNA. Thease centers are not franchisees. They are established and managed by TEAM ATOM.
            </p>
            </div>
          </div>
          <div className="col-2">
            <img className="ab-img" src={Image} alt="img" />
          </div>
        </div>
        <button className="btn" onClick={()=>{navigate('/about')}}>
          Read More
          <img src={Arrow}/>
        </button>
      </div>
    </div>
      <img src={Wave} className="wave" alt="wave" />
  </div>
  );
}

export default About;
