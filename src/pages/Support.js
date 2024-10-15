import React from 'react';
import Header from '../components/Header';

function SupportCategory({ title, items }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Support() {
  const categories = [
    {
      title: "Ride Issues",
      items: ["Can't request a ride", "Driver didn't arrive", "Lost item", "Incorrect fare"]
    },
    {
      title: "Account & Payment",
      items: ["Update account info", "Payment methods", "Ride receipts", "Promotions and credits"]
    },
    {
      title: "Driver Partners",
      items: ["Become a driver", "Driver account issues", "Earnings and payments", "Vehicle requirements"]
    },
    {
      title: "Safety & Security",
      items: ["Report a safety issue", "COVID-19 safety measures", "Privacy concerns", "Emergency assistance"]
    },
    {
      title: "App & Features",
      items: ["App not working", "Feature requests", "Scheduled rides", "EaziRide rewards"]
    },
    {
      title: "Other",
      items: ["Partnerships", "Press inquiries", "Accessibility", "General feedback"]
    }
  ];

  return (
    <div className="support-page bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">How can we help you?</h1>
        
        <div className="mb-12">
          <input 
            type="text" 
            placeholder="Search for help articles..." 
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SupportCategory key={index} title={category.title} items={category.items} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Still need help?</h2>
          <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
