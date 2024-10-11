import React, { useState } from 'react';
import Header from '../components/Header';
import './DriverOwner.css';

function DriverOwner() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    deliveryManType: '',
    zone: '',
    vehicle: '',
    identityType: '',
    identityNumber: '',
    identityImage: null,
    phone: '',
    password: '',
    profileImage: null,
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Become a Driver</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Become a Driver</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="deliveryManType" className="block mb-2">Delivery Man Type</label>
              <select id="deliveryManType" name="deliveryManType" value={formData.deliveryManType} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Type</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Salary based">Salary based</option>
              </select>
            </div>
            <div>
              <label htmlFor="zone" className="block mb-2">Zone</label>
              <select id="zone" name="zone" value={formData.zone} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Zone</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Cape Town">Cape Town</option>
                {/* Add more zones as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="vehicle" className="block mb-2">Vehicle</label>
              <select id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Vehicle</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Car">Car</option>
                <option value="Delivery Van">Delivery Van</option>
              </select>
            </div>
            <div>
              <label htmlFor="identityType" className="block mb-2">Identity Type</label>
              <select id="identityType" name="identityType" value={formData.identityType} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Identity Type</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
                <option value="NID">NID</option>
                <option value="Store ID">Store ID</option>
              </select>
            </div>
            <div>
              <label htmlFor="identityNumber" className="block mb-2">Identity Number</label>
              <input type="text" id="identityNumber" name="identityNumber" value={formData.identityNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="identityImage" className="block mb-2">Identity Image</label>
              <input type="file" id="identityImage" name="identityImage" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
          </div>

          <h2 className="text-2xl font-semibold my-6">Login Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="profileImage" className="block mb-2">Delivery Man Image (Ratio 1:1)</label>
              <input type="file" id="profileImage" name="profileImage" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center">
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required />
              <span className="ml-2">I accept terms and conditions of EaziRide</span>
            </label>
          </div>

          <button type="submit" className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DriverOwner;