import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MovingText from '../components/MovingText';
import './Home.css'; // Make sure to create this file for custom styles


function UserBox({ title, icon, items, images }) {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="md:w-1/2 bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:shadow-xl cursor-pointer"
         onClick={() => setShowImages(!showImages)}>
      <h4 className="text-xl font-semibold mb-4 flex items-center">
        <i className={`fas ${icon} text-red-500 mr-2`}></i>
        {title}
      </h4>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-green-500 mr-2"></i>{item}
          </li>
        ))}
      </ul>
      {showImages && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {images.map((image, index) => (
            <img key={index} src={`${process.env.PUBLIC_URL}${image}`} alt={`${title} ${index + 1}`} className="w-full h-32 object-cover rounded" />
          ))}
        </div>
      )}
      <p className="text-sm text-gray-600 mt-2">
        {showImages ? "Click to hide images" : "Click to view images"}
      </p>
    </div>
  );
}

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showSafetyPopup, setShowSafetyPopup] = useState(false);
  const images = [
    `${process.env.PUBLIC_URL}/images/hail.jpg`,
    `${process.env.PUBLIC_URL}/images/about.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleSafetyPopup = () => {
    setShowSafetyPopup(!showSafetyPopup);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MovingText />
      {/* Hero Section with fading background */}
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-16">
          <div className="max-w-2xl">
            <h1 className="home-title text-4xl md:text-5xl font-bold mb-4 text-white">
              An <span className="text-red-500">E-Hailing</span> Revolution Is Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              EaziRide - the first ever ride-sharing platform that is owned by drivers revolutionizes e-hailing industry and re-invents every riding experience.
            </p>
            <div className="flex space-x-4">
              <Link to="/about" className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300">
                Join Revolution
              </Link>
              <button onClick={toggleSafetyPopup} className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Our Safety Features
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-1 order-2">
            <img src={`${process.env.PUBLIC_URL}/images/for riders.jpg`} alt="About EaziRide" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 order-1 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg mb-4 text-black">Re-inventing every ride sharing experience by introducing our first three ground-breaking safety features and bringing back trust in the e-hailing industry.</p>
            <ul className="space-y-4 mb-20 text-lg">
              <li className="flex items-start">
                <i className="fas fa-user-shield text-red-500 mr-3 mt-1 text-[0.4rem]"></i>
                <span>Drivers and Riders Verification</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-fingerprint text-red-500 mr-3 mt-1 text-[0.4rem]"></i>
                <span>One-Profile-One-Driver (OPOD)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-camera text-red-500 mr-3 mt-1 text-[0.4rem]"></i>
                <span>Selfie-Of-The-Moment (SOTM)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-sync-alt text-red-500 mr-3 mt-1 text-[0.4rem]"></i>
                <span>Selfie-Swap (SSW)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-trash-alt text-red-500 mr-3 mt-1 text-[0.4rem]"></i>
                <span>Auto-Selfie Deletion</span>
              </li>
            </ul>
            <button onClick={togglePopup} className="mb-12 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Learn More</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div 
        className="bg-cover bg-center py-16 relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/ride-pic.jpg)`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Best Services For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "EaziLite", image: "eazilite.svg", 
                description: "Our entry-level ride class that comfortably seats up to 3 passengers" },

              { title: "EaziComfort", image: "eazicomfort.svg", 
                description: "Premium travel with our spacious ride for up to 4 passengers" },

              { title: "EaziLuxury", image: "eaziluxury.svg", 
                description: "Top-tier ride class featuring high-end vehicles for up to 4 passengers, where every journey becomes an unforgettable adventure!" },

              { title: "EaziVan", image: "eazivan.svg", 
                description: "Roomy transport for up to 8 passengers or bulky items, perfect for group outings or moving day" },

              { title: "EaziWoman", image: "eaziwoman.svg", 
                description: "A premium class connecting any rider with female drivers for a secure and empowering ride experience. Only available on EaziComfort, EaziLuxury & EaziVan." },

              { title: "EaziFoods", image: "eazifood.svg",
                 description: "Swift and reliable food delivery from your favourite local restaurants right to your doorstep." },

              { title: "EaziShuttle", image: "eaziShuttle.svg", 
                description: "Our efficient ride-sharing service for daily work or school trips." },

              { title: "EaziPackage", image: "eaziPackage.svg",

                 description: "Swift and secure delivery at your fingertips, ensuring your items reach their destination safely and on time!. Let's go as far as here" },

              { title: "DuoDrive/SwapNDrive", image: "ezifleet.svg",
                 description: "Tired? Tipsy? We'll drive you and your car home safely-anytime, anywhere. Your break, our wheel!." },
                 
            ].map((service, index) => (
              <div key={index} className="bg-white bg-opacity-95 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    {service.image && (
                      <img src={`${process.env.PUBLIC_URL}/images/${service.image}`} alt={service.title} className="w-40 h-40" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Why Choose Us
          </h2>
          <div className="relative flex justify-center">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-500 transform -translate-x-1/2"></div>
            
            <div className="flex w-full">
              <div className="w-1/2 pr-8">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/why-us.jpg`} 
                  alt="Why Choose EaziRide" 
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="space-y-16 w-1/2 pl-12 relative">
                {[
                  { 
                    title: "Vetted Drivers",
                    icon: "fa-id-card",
                    description: "Our system uses advanced controls to detect tampering, ensuring document authenticity. We prioritize uncovering fraudulently obtained registration documents."
                  },
                  { 
                    title: "Trusted Cars & Drivers",
                    icon: "fa-car-side",
                    description: "We ensure we have updates on vehicle condition, passenger liability insurance, driver-owner criminal record, and more for a safe journey."
                  },
                  { 
                    title: "Vehicle Safety First",
                    icon: "fa-tools",
                    description: "Our exceptional features simplify routine vehicle maintenance for driver-owners, ensuring trust with the rider community and preventing driving without an inspected car."
                  },
                  { 
                    title: "More Than a Ride",
                    icon: "fa-mobile-alt",
                    description: "Our ride-sharing platform offers reasonably priced data and voice packages that let users stay in touch with friends and family."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start relative">
                    <div className="pl-8">
                      <h3 className="text-xl font-semibold text-black mb-2 flex items-center">
                        <i className={`fas ${feature.icon} text-red-500 mr-3`}></i>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Download the App and Ride Today</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between max-w-sm w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4">Available for iOS devices.</h3>
                <p className="text-gray-600 mb-8"></p>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/eaziride" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 inline-block mb-4 w-full text-center">
                  <i className="fab fa-apple mr-2"></i>App Store
                </a>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/qrcode_localhost.png`} 
                  alt="EaziRide App Store QR Code" 
                  className="w-32 h-32 mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between max-w-sm w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4">Available for Android devices.</h3>
                <p className="text-gray-600 mb-8"></p>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.eaziride" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 inline-block mb-4 w-full text-center">
                  <i className="fab fa-google-play mr-2"></i>Google Play
                </a>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/qrcode_localhost.png`} 
                  alt="EaziRide Google Play QR Code" 
                  className="w-32 h-32 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Features Pop-up */}
      {showSafetyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg max-w-4xl w-full mx-4 my-4 flex flex-col max-h-[90vh] shadow-2xl animate-scaleIn">
            <div className="p-8 overflow-y-auto flex-grow">
              <h2 className="text-4xl font-bold mb-8 text-center text-red-600 animate-slideInDown">Our Safety Features</h2>
              <div className="space-y-10">
                {[
                  {
                    icon: "fa-user-shield",
                    color: "green",
                    title: "Drivers and Riders Verification",
                    description: "Seamless and comprehensive screening of every driver and rider before onboarded into our ecosystem."
                  },
                  {
                    icon: "fa-fingerprint",
                    color: "blue",
                    title: "One-Profile-One-Driver (OPOD)",
                    description: "Goodbye profile renting, hello unparalleled trust in every ride. Our cutting-edge facial recognition instantly verify drivers, ensuring your safety is our top priority—one face at a time."
                  },
                  {
                    icon: "fa-camera-retro",
                    color: "yellow",
                    title: "Selfie-Of-The-Moment (SOTM)",
                    description: "Start every ride with a smile! With our Selfie-Of-The-Moment (SOTM) feature, riders are prompted to take a selfie before the journey begins, and drivers do the same before heading to the pick-up point. We are taking safety to the next level."
                  },
                  {
                    icon: "fa-sync-alt",
                    color: "purple",
                    title: "Selfie-Swap (SSW)",
                    description: "Automated exchange of selfies, ensuring a safe journey every step of the way. Snap your way to peace of mind and let the adventure begin."
                  },
                  {
                    icon: "fa-shield-alt",
                    color: "red",
                    title: "Auto-Selfie Deletion",
                    description: "Safety first, privacy always! Your Selfie-Of-The-Moment vanishes like magic once your ride ends, leaving no digital footprint behind. Adhering to data privacy is key to us."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideInRight" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className={`flex-shrink-0 w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mr-6`}>
                      <i className={`fas ${feature.icon} text-3xl text-${feature.color}-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 font-semibold text-center text-xl text-blue-600 animate-pulse">Brace yourself for more safety features.</p>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button 
                onClick={toggleSafetyPopup}
                className="w-full bg-red-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing About Us Pop-up */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              EaziRide is not just another ride-sharing platform. It is a movement that empowers 
              drivers to become driver-owners of the platform they serve with vested interest. 
              We are putting safety first, profits after. Our cutting-edge technology has 
              breakthrough safety controls that are transforming ride sharing from a mere 
              convenience to a trusted ecosystem.
            </p>
            <button 
              onClick={togglePopup}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;