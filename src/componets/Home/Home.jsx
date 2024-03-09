import React from "react";
import { useNavigate  } from 'react-router-dom';

import "./Home.css";
import Arrow from "../../assets/RightArrow.svg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 left-col">
          <h1>
            Empowering minds for <br /> a brighter tomorrow.
          </h1><br />
          <h3>
          Intelligence plus <br /> 
          <span className="h-p">character</span> that is the goal of true <span className="h-p">education</span>
          </h3>
          <button className="btn" onClick={()=>{navigate('/registation')}}>
            Registration
            <img src={Arrow} alt="arr" />
          </button>
        </div>
        <div className="col-2 right-col"></div>
      </div>
    </div>
  );
}

export default Home;
