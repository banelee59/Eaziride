import React, { useState } from 'react';
import './DriverOwner.css';

function DriverOwner() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    driverType: '',
    zone: '',
    vehicleType: '',
    identityType: '',
    identityNumber: '',
    phone: '',
    password: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="driver-owner">
      <h1>Become a Driver</h1>
      <form onSubmit={handleSubmit}>
        <h2>Driver Information</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="driverType">Driver Type</label>
          <select id="driverType" name="driverType" value={formData.driverType} onChange={handleChange} required>
            <option value="">Select Driver Type</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Salary based">Salary based</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zone">Zone</label>
          <select id="zone" name="zone" value={formData.zone} onChange={handleChange} required>
            <option value="">Select Zone</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Pretoria East">Pretoria East</option>
            <option value="Pretoria CBD">Pretoria CBD</option>
            <option value="Johannesburg">Johannesburg</option>
            {/* Add more zones as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <select id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
            <option value="">Select Vehicle</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Car">Car</option>
            <option value="Delivery Van">Delivery Van</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="identityType">Identity Type</label>
          <select id="identityType" name="identityType" value={formData.identityType} onChange={handleChange} required>
            <option value="">Select Identity Type</option>
            <option value="Passport">Passport</option>
            <option value="Driving License">Driving License</option>
            <option value="NID">NID</option>
            <option value="Store ID">Store ID</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="identityNumber">Identity Number</label>
          <input type="text" id="identityNumber" name="identityNumber" value={formData.identityNumber} onChange={handleChange} required />
        </div>
        <h2>Login Information</h2>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="driverImage">Driver Image (Ratio 1:1)</label>
          <input type="file" id="driverImage" name="driverImage" accept="image/*" required />
        </div>
        <div className="form-group checkbox">
          <input 
            type="checkbox" 
            id="termsAccepted" 
            name="termsAccepted" 
            checked={formData.termsAccepted} 
            onChange={handleChange} 
            required 
          />
          <label htmlFor="termsAccepted">I accept the terms and conditions of EaziRide</label>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default DriverOwner;