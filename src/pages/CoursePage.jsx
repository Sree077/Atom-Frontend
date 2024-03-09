import React from "react";

import img from "../assets/ph1.jpg";

import Navbar from "../componets/Navbar/Navbar";
// import Contact from "../componets/Contact/Contact";
import Footer from "../componets/Footer/Footer";
import { useNavigate } from "react-router-dom";

function CoursePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="co-page">
        <div className="row">
          <h1 className="heading">Courses</h1>
          <div className="co-cotainer">

            <div className="co-card">
              <img src={img} alt="" />
              <div className="details-card">
                <h3>Course</h3>
                <div>
                  <p>
                    Lorem,ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi dolorum atque illum doloremque nesciunt laborum tenetur
                    consequuntur, illum quam minus qui distinctio?
                    NequeLorem,ipsum dolor sit amet consectetur adipisicing
                    elit. Nisi dolorum atque illum doloremque nesciunt labor.
                  </p>
                </div>
                <button className="btn" onClick={()=>{navigate('/registation')}}>Enroll Now</button>
              </div>
            </div>


            <div className="co-card">
              <img src={img} alt="" />
              <div className="details-card">
                <h3>Course</h3>
                <div>
                  <p>
                    Lorem,ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi dolorum atque illum doloremque nesciunt laborum tenetur
                    consequuntur, illum quam minus qui distinctio?
                    NequeLorem,ipsum dolor sit amet consectetur adipisicing
                    elit. Nisi dolorum atque illum doloremque nesciunt labor.
                  </p>
                </div>
                <button className="btn" onClick={()=>{navigate('/registation')}}>Enroll Now</button>
              </div>
            </div>

            <div className="co-card">
              <img src={img} alt="" />
              <div className="details-card">
                <h3>Course</h3>
                <div>
                  <p>
                    Lorem,ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi dolorum atque illum doloremque nesciunt laborum tenetur
                  oloremque nesciunt labor.
                  </p>
                </div>
                <button className="btn" onClick={()=>{navigate('/registation')}}>Enroll Now</button>
              </div>
            </div>





          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default CoursePage;
