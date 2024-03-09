import React,{useState} from "react";
import axios from "axios";

import "./Contact.css";
import Wave from '../../assets/con-wave.png';

function Contact() {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    message : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/contact', formData)
    .then(response => {
      console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div className="contact" id="contact">
        <img className="wave" src={Wave} alt="" />
    <div className="con-container">
      <div className="row">
        <h2 className="contact-h2 heading">Contact Us</h2>
        <div className="wrapper">
          <div className="col-2">
            <div className="feedback-form">
              <div className="form-bg">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                  ></textarea>
                  <button type="submit">Send Feedback</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.872826652891!2d76.22408127457723!3d10.97297055553859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cdb05f3b9c49%3A0x52076ed9ef5de6f!2sAtom%20Institute%20Of%20Science!5e0!3m2!1sen!2sin!4v1709064288541!5m2!1sen!2sin"
                frameborder="0"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
