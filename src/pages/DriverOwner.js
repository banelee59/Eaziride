import React from 'react';
import Header from '../components/Header';

function DriverOwner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Become a Driver-Owner</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Become a Driver-Owner?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Earn more: Keep a larger share of your fares</li>
            <li>Be your own boss: Enjoy the flexibility of self-employment</li>
            <li>Grow with us: Participate in the success of EaziRide</li>
            <li>Access to exclusive benefits: Special insurance rates, maintenance deals, and more</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <h3 className="font-semibold">Apply</h3>
              <p>Fill out our online application form and provide necessary documentation.</p>
            </li>
            <li>
              <h3 className="font-semibold">Verification</h3>
              <p>We'll review your application and conduct a background check.</p>
            </li>
            <li>
              <h3 className="font-semibold">Training</h3>
              <p>Complete our comprehensive training program on safety, customer service, and using the EaziRide platform.</p>
            </li>
            <li>
              <h3 className="font-semibold">Start Earning</h3>
              <p>Once approved, start accepting rides and earning money as a driver-owner!</p>
            </li>
          </ol>
        </div>

        <div className="text-center">
          <a href="#apply" className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300">Apply Now</a>
        </div>
      </div>
    </div>
  );
}

export default DriverOwner;