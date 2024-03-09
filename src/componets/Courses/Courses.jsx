import React from "react";
import { useNavigate } from "react-router-dom";


import './Courses.css';
import img from "../../assets/ph1.jpg";
import Arrow from "../../assets/RightArrow.svg";


function Couses() {
  const navigate = useNavigate()
  return (
    <div className="co-container">
      <div className="row">
        <h1 className="heading">Courses</h1>
        <div className="wrapper">
          <div className="col-3">
            <img src={img} alt="" />
            <div className="details-card">
              <h3>Course</h3>
              <div>
                <p>
                  Lorem,ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorum atque illum doloremque nesciunt laborum tenetur
                  consequuntur, illum quam minus qui distinctio?
                  NequeLorem,ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi dolorum atque illum doloremque nesciunt labor.
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <img src={img} alt="" />
            <div className="details-card">
              <h3>Course</h3>
              <div>
                <p>
                  Lorem,ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorum atque illum doloremque nesciunt laborum tenetur
                  consequuntur, illum quam minus qui distinctio?
                  NequeLorem,ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi dolorum atque illum doloremque nesciunt labor.
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <img src={img} alt="" />
            <div className="details-card">
              <h3>Course</h3>
              <div>
                <p>
                  Lorem,ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorum atque illum doloremque nesciunt laborum tenetur
                  consequuntur, illum quam minus qui distinctio?
                  NequeLorem,ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi dolorum atque illum doloremque nesciunt labor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn" onClick={()=>{navigate('/courses')}}>
          Read More
          <img src={Arrow}/>
        </button>
      </div>
    </div>
  );
}

export default Couses;
