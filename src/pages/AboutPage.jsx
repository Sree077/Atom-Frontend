import React from "react";
import Navbar from "../componets/Navbar/Navbar";
// import Contact from "../componets/Contact/Contact";
import Footer from "../componets/Footer/Footer";
import Image1 from "../assets/ab-img.png";
import Image2 from "../assets/sli2.jpg"

function AboutPage() {
  return (
    <div className="ab-page">
      <Navbar />
      <div className="ab-container">
        <div className="row">
          <h1 className="heading">Vision</h1>
          <div className="wrapper">
            <div className="col-2">
              <div className="vision">
                <p>
                To exemplify excellence and leadership in education
                </p>
              </div>
            </div>
            <div className="col-2 ">
              <img className="ab-img" src={Image1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ab-container">
        <div className="row">
          <h1 className="heading">Mission</h1>
          <div className="wrapper">
            <div className="col-2">
              <div>
                <p>
                To serve society through excellence in education. We always aim to define & continually refine the absolute standard of excellence in the area of academics through <br />
                • The quality of education we provide <br />
                • The efficiency of our methodology and system  <br />
                • Truthfulness towards students, parent society and nation In our student, we aspire to instill the right attitude, values and vision that will prepare them for lifetime of continued learning and leadership in their chosen careers
                </p>
              </div>
            </div>
            <div className="col-2">
              <img className="ab-img" src={Image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
