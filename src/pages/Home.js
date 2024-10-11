import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


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
  const images = [
    `${process.env.PUBLIC_URL}/images/hail.jpg`,
    `${process.env.PUBLIC_URL}/images/ride.jpg`,
    `${process.env.PUBLIC_URL}/images/about.jpg`
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect((flip) => {
    const interval = setInterval(nextImage, 10000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with exploding background */}
      <div 
        className="bg-cover bg-center text-white relative min-h-screen flex flex-col overflow-hidden"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-150'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Header />
        <div className="container mx-auto px-4 py-16 md:py-40 text-left relative z-10 flex-grow flex flex-col justify-left">
          <h1 className="text-2xl md:text-5xl font-bold mb-12">WELCOME TO <span className="text-red-500">EAZIRIDE</span></h1>
          <p className="text-2xl md:text-2xl mb-12 animate-fade-in text-italic">
          EaziRide, the innovative ride-sharing platform <p>Owned by drivers, loved by riders</p>
          Revolutionizing the e-hailing industry
          </p>
          <div className="flex justify-left space-x-4">
            <Link to="/about" className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300">About More</Link>
            <Link to="/services" className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Learn More</Link>
          </div>
        </div>
        {/* Navigation Arrows */}
        <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 hover:text-red-500 transition-colors duration-300">
          &#8249;
        </button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 hover:text-red-500 transition-colors duration-300">
          &#8250;
        </button>
        
        
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-1 order-2">
            <img src={`${process.env.PUBLIC_URL}/images/for riders.jpg`} alt="About EaziRide" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 order-1 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg mb-4 text-black">EaziRide is a unique ride-sharing platform that empowers drivers through ownership and prioritizes safety for all users.</p>
            <ul className="space-y-4 mb-20 text-lg">
              <li className="flex items-start">
                <i className="fas fa-users-cog text-red-500 mr-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <span>Driver-owner model</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-shield-alt text-red-500 mr-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <span>Advanced safety measures</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mr-3 mt-1" style={{ fontSize: '1rem' }}></i>
                <span>Comprehensive vetting</span>
              </li>
            </ul>
            <Link to="/about" className="mb-12 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Discover More</Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "EaziLite", image: "eazilite.svg" },
              { title: "EaziComfort", image: "eazicomfort.svg" },
              { title: "EaziLuxury", image: "eaziluxury.svg" },
              { title: "EaziVan", image: "eazivan.svg" },
              { title: "EaziWoman", image: "eaziwoman.svg" },
              { title: "EaziFoods", image: "eazifood.svg" },
              { title: "EaziShuttle", image: "eaziShuttle.svg" },
              { title: "EaziPackage", image: "eaziPackage.svg" },
              { title: "EaziFleet", image: "ezifleet.svg" },
            ].map((service, index) => (
              <div key={index} className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:transform hover:scale-105">
                {service.image ? (
                  <img src={`${process.env.PUBLIC_URL}/images/${service.image}`} alt={service.title} className="w-20 h-20 mx-auto mb-4" />
                ) : (
                  <i className={`fas ${service.icon} text-3xl text-red-500 mb-4`}></i>
                )}
                <h3 className="text-lg font-semibold ">{service.title}</h3>
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
    </div>
  );
}

export default Home;