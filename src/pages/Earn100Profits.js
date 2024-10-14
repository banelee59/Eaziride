import React from 'react';
import Header from '../components/Header';
import './Earn100Profits.css';

function Earn100Profits() {
  return (
    <div className="earn-100-profits">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Earn 100% Profits with EaziRide</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Revolutionary Driver-Owner Model</h2>
          <p className="mb-4">
            At EaziRide, we're revolutionizing the ride-sharing industry by empowering drivers to become true stakeholders in the platform they serve. Our unique model allows you to keep 100% of your earnings while building long-term value.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>No commission fees - keep all your fares</li>
            <li>Become a vested owner in the EaziRide platform</li>
            <li>Enjoy increased earning potential and long-term benefits</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Sign up as an EaziRide driver</li>
            <li>Complete our comprehensive vetting process</li>
            <li>Start driving and earning 100% of your fares</li>
            <li>Accumulate driving hours to become eligible for ownership shares</li>
            <li>Receive ownership shares based on your contribution to the platform</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Being a Driver-Owner</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Maximize your earnings with no commission fees</li>
            <li>Build long-term equity in a growing platform</li>
            <li>Have a voice in platform decisions and improvements</li>
            <li>Access exclusive driver-owner perks and support</li>
            <li>Benefit from the platform's success through potential dividends</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xl mb-4">Ready to take control of your earning potential?</p>
          <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition duration-300">
            Join EaziRide Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Earn100Profits;
