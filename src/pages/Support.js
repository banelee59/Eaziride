import React, { useState } from 'react';
import Header from '../components/Header';

function SupportCategory({ icon, title, items }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const getItemContent = (item) => {
    switch(item) {
      case "What is EaziRide?":
        return "EaziRide is a revolutionary ride-sharing platform that empowers drivers to become stakeholders in the business. We offer a unique driver-owner model where drivers can earn 100% of their fares and have the opportunity to gain ownership in the platform. EaziRide prioritizes safety, transparency, and community building in the e-hailing industry.";
      case "How does EaziRide work?":
        return "EaziRide connects riders with driver-owners through our mobile app. Riders can request a ride, and nearby driver-owners are notified. Once a ride is accepted, the driver picks up the rider and takes them to their destination. What sets us apart is our driver-owner model, where drivers keep 100% of their fares and can earn ownership shares in the platform.";
      case "Is EaziRide available in my area?":
        return "EaziRide is currently expanding its services. To check if we're available in your area, please download our app or visit our website and enter your location. We're continuously growing, so if we're not in your area yet, we might be soon!";
      case "How do I create an EaziRide account?":
        return "Creating an EaziRide account is easy! Simply download our app from the App Store or Google Play Store, open it, and tap 'Sign Up'. Follow the prompts to enter your information, including your name, phone number, and email address. You'll also need to set up a password and agree to our terms of service.";
      case "How secure is EaziRide?":
        return "At EaziRide, we take security very seriously. We use state-of-the-art encryption to protect your personal and payment information. Our platform includes features like driver verification, real-time trip tracking, and an emergency assistance button. We also have a comprehensive vetting process for our driver-owners to ensure the safety of our riders.";
      default:
        return "Information for this item is not available yet.";
    }
  };

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
            <li key={index}>
              <div 
                className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300 border-b border-gray-200 py-2 last:border-b-0"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
              {selectedItem === item && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm text-gray-700">
                  {getItemContent(item)}
                </div>
              )}
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
      icon: "fa-question-circle",
      title: "General Questions",
      items: [
        "What is EaziRide?",
        "How does EaziRide work?",
        "Is EaziRide available in my area?",
        "How do I create an EaziRide account?",
        "How secure is EaziRide?"
      ]
    },
    {
      icon: "fa-car",
      title: "Driving with EaziRide",
      items: [
        "How does one become a driver-owner?",
        "Can I apply to drive for someone?",
        "What documents are required during the screening process?",
        "Are vehicles inspected before they can be used on EaziRide?",
        "Does EaziRide provide training for driver-owners?"
      ]
    },
    {
      icon: "fa-credit-card",
      title: "Payments & Pricing",
      items: [
        "What payment methods are accepted?",
        "How is the fare calculated?",
        "How does EaziRide assist in the repayment of money between drivers and vehicle owners?"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Earnings and Shares Ownership",
      items: [
        "How transparent are driver-owner earnings?",
        "How does Shares Ownership work?",
        "What are the benefits of being a shareholder?"
      ]
    },
    {
      icon: "fa-shield-alt",
      title: "Safety & Security",
      items: [
        "How are driver-owners screened?",
        "How does facial recognition work in the screening process?",
        "How safe are your driver-owners?",
        "How safe are your vehicles?",
        "How do I know if my family and friends are safe during a ride?"
      ]
    },
    {
      icon: "fa-user",
      title: "Riding Experience",
      items: [
        "Can I request a ride for someone?",
        "Do I have the flexibility to choose my favorite driver-owner?",
        "Can I rate my driver-owner?",
        "Can the driver-owner rate me?"
      ]
    }
  ];

  return (
    <div className="support-page bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-36">
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
