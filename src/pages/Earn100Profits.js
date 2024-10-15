import React from 'react';
import Header from '../components/Header';
import './Earn100Profits.css';

function Earn100Profits() {
  return (
    <div className="earn-100-profits bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container  mx-auto px-4 py-36">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">Earn 100% Profits with EaziRide</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-white">Revolutionary Driver-Owner Model</h2>
            <p className="mb-6 text-white leading-relaxed">
              At EaziRide, we're revolutionizing the ride-sharing industry by empowering drivers to become true stakeholders in the platform they serve.
            </p>
            <ul className="list-disc pl-8 mb-6 text-white space-y-2">
              <li>No commission fees - keep all your fares</li>
              <li>Become a vested owner in the EaziRide platform</li>
              <li>Enjoy increased earning potential and long-term benefits</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-white">How It Works</h2>
            <ol className="list-decimal pl-8 space-y-4 text-white">
              <li>Sign up as an EaziRide driver</li>
              <li>Complete our comprehensive vetting process</li>
              <li>Start driving and earning 100% of your fares</li>
              <li>Accumulate driving hours to become eligible for ownership shares</li>
              <li>Receive ownership shares based on your contribution to the platform</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-white">Benefits of Being a Driver-Owner</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc pl-8 space-y-4 text-white">
              <li>Maximize your earnings with no commission fees</li>
              <li>Build long-term equity in a growing platform</li>
              <li>Have a voice in platform decisions and improvements</li>
            </ul>
            <ul className="list-disc pl-8 space-y-4 text-white">
              <li>Access exclusive driver-owner perks and support</li>
              <li>Benefit from the platform's success through potential dividends</li>
              <li>Be part of a community of like-minded entrepreneurs</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl mb-8 text-white">Ready to take control of your earning potential?</p>
          <button className="bg-red-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Join EaziRide Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Earn100Profits;
