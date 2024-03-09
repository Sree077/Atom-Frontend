import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    class: '',
    fname: '',
    fmob: '',
    mname: '',
    mmob: '',
    address: '',
    district: '',
    pincode: '',
    Post: ''
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
    axios.post('http://localhost:5555/registration', formData)
    .then(response => {
      console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className="form-group">
          <label htmlFor="name">Name of the Student:</label> <br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="school">School :</label> <br />
          <input type="text" name="school" value={formData.school} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class :</label> <br />
          <input type="text" name="class" value={formData.class} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">Father's Name :</label> <br />
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fmob">Father's Mobile Number :</label> <br />
            <input type="text" name="fmob" value={formData.fmob} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mname">Mother's Name :</label> <br />
            <input type="text" name="mname" value={formData.mname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="mmob">Mother's Mobile Number :</label> <br />
            <input type="text" name="mmob" value={formData.mmob} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address :</label> <br />
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="district">District :</label> <br />
            <input type="text" name="district" value={formData.district} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode :</label> <br />
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="post">Post :</label> <br />
          <input type="text" name="Post" value={formData.Post} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
