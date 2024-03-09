import React from 'react';
import {useNavigate} from 'react-router-dom'

import  FontAwesomeIcon from '../../assets/envelope-regular.svg'

import './Footer.css'
import Footer1 from "../../assets/footer1.png"
import Footer2 from "../../assets/footer2.png"
import Footer3 from "../../assets/footer3.png"

import FooterLine from "../../assets/footerline.png"

function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="footer">
    <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
            <li><a onClick={()=>{navigate('/')}} >Home</a></li>
            <li><a onClick={()=>{navigate('/about')}} >About Us</a></li>
            <li><a onClick={()=>{navigate('/courses')}} >Courses</a></li>
            <li><a onClick={()=>{navigate('/downloads')}} >Downloads</a></li>
            <li><a onClick={()=>{navigate('/news')}} >News and Events</a></li>
            <li><a onClick={()=>{navigate('/gallery')}} >Gallery</a></li>
            <li><a href="#contact" >Contact Us</a></li>
            
            
        </ul>
    </div>

    <div className="contact-info">
        <img src={Footer1} alt="Logo 1" />
        <img src={Footer2} alt="Logo 2" />
        <img src={Footer3} alt="Logo 3" style={{ height: "3.5em" }} />
        <div className="footer-info">
            <p>PERINTHALMANNA <br />
                Mob No: 9946111194
            </p>
            <img src={FooterLine} alt="footer-line" />
            <p>VALANCHERY<br />
                Mob No:7736131333
            </p>
        </div>
        <div className="email">
        <img src={FontAwesomeIcon} alt="icon"/>
        <p>atominsitutions@gmail.com</p>
        </div>
    </div>

    <div className="copyright">
        <hr />
        <p>Copyright © 2024; All rights reserved. Designed and developed by Team Shinobi.</p>
    </div>
</footer>

  )
}

export default Footer