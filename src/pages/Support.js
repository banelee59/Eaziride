import React, { useState } from 'react';
import Header from '../components/Header';

function SupportCategory({ icon, title, items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div 
        className="flex items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <i className={`fas ${icon} text-3xl text-red-500 mr-4`}></i>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ml-auto text-gray-500`}></i>
      </div>
      {isExpanded && (
        <ul className="p-4 space-y-2 bg-white">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300">
              <span className="mr-2">•</span>{item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Support() {
  const categories = [
    {
      icon: "fa-car",
      title: "Ride Issues",
      items: ["Can't request a ride", "Driver didn't arrive", "Lost item", "Incorrect fare"]
    },
    {
      icon: "fa-user-circle",
      title: "Account & Payment",
      items: ["Update account info", "Payment methods", "Ride receipts", "Promotions and credits"]
    },
    {
      icon: "fa-id-card",
      title: "Driver Partners",
      items: ["Become a driver", "Driver account issues", "Earnings and payments", "Vehicle requirements"]
    },
    {
      icon: "fa-shield-alt",
      title: "Safety & Security",
      items: ["Report a safety issue", "COVID-19 safety measures", "Privacy concerns", "Emergency assistance"]
    },
    {
      icon: "fa-mobile-alt",
      title: "App & Features",
      items: ["App not working", "Feature requests", "Scheduled rides", "EaziRide rewards"]
    },
    {
      icon: "fa-question-circle",
      title: "Other",
      items: ["Partnerships", "Press inquiries", "Accessibility", "General feedback"]
    }
  ];

  return (
    <div className="support-page bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">How can we help you?</h1>
        
        <div className="mb-12 relative">
          <input 
            type="text" 
            placeholder="Search for help articles..." 
            className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
          />
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <SupportCategory key={index} icon={category.icon} title={category.title} items={category.items} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Still need help?</h2>
          <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
