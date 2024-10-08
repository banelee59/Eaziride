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
            <img src={`${process.env.PUBLIC_URL}/images/hailing 2.jpg`} alt="About EaziRide" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 order-1 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4 text-black">EaziRide is a unique ride-sharing platform that aims to empower drivers by allowing them to become driver-owners of the platform. This means that they have a vested interest in the success of the platform and can put more money into their pockets. 
          </p> 
            <ul className=" list-inside mb-4 text-lg">
              <li>Safety is a top priority at EaziRide, and our cutting-edge software and technology include breakthrough safety controls that transform ride sharing into a trusted, secure, and responsible choice.</li>
              <li>Our focus on safety starts with every driver-owner, ensuring a safe experience for both drivers and passengers.</li>

             
            </ul>
            <Link to="/about" className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Discover More</Link>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "EaziLite", image: "eazilite.svg" },
              { title: "EaziComfort", image: "eazicomfort.svg" },
              { title: "EaziLuxury", image: "eaziluxury.svg" },
              { title: "EaziVan", image: "eazivan.svg" },
              { title: "EaziWoman", image: "eaziwoman.svg" },
              { title: "EaziFoods", image: "eazifood.svg" }
            ].map((service, index) => (
              <div key={index} className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:transform hover:scale-105">
                {service.image ? (
                  <img src={`${process.env.PUBLIC_URL}/images/${service.image}`} alt={service.title} className="size-52 mx-auto mb-4" />
                ) : (
                  <i className={`fas ${service.icon} text-4xl text-red-500 mb-4`}></i>
                )}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-cover bg-center relative" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/why-us.jpg)`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans text-white">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Vetted Drivers- Know Who is Behind the Wheel", 
                icon: "fa-id-card",
                description: "Our system uses advanced controls to detect tampering, ensuring document authenticity. We prioritize uncovering fraudulently obtained registration documents."
              },
              { 
                title: "Cars and drivers, you can trust", 
                icon: "fa-car-side",
                description: "We ensure we have updates on vehicle condition, passenger liability insurance, driver-owner criminal record, and more for a safe journey."
              },
              { 
                title: "Prioritising Vehicle Safety", 
                icon: "fa-tools",
                description: "Our exceptional features simplify routine vehicle maintenance for driver-owners, ensuring trust with the rider community and preventing driving without an inspected car."
              },
              { 
                title: "More Than a Ride", 
                icon: "fa-mobile-alt",
                description: "Our ride-sharing platform offers reasonably priced data and voice packages that let users stay in touch with friends and family."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-red-500 text-4xl mb-4">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">EaziRide gets you there—fast, safe, and stress-free</h3>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
              <UserBox 
                title="For Riders"
                icon="fa-user-friends"
                items={[
                  "User-friendly booking platform",
                  "Vetted drivers and verified documents",
                  "Enhanced safety features",
                  "Competitive and transparent pricing",
                  "Professional drivers in uniform"
                ]}
                images={[
                  "/images/user-friendly.jpg",
                  "/images/verted.jpg",
                  "/images/affordable.jpg",
                  "/images/uniform.jpg"
                ]}
              />
              <UserBox 
                title="For Drivers"
                icon="fa-car"
                items={[
                  "High earning potential",
                  "Daily payouts available",
                  "Flexible working hours",
                  "Dedicated driver support",
                  "Opportunity for growth"
                ]}
                images={[
                  "/images/fantasy.jpg",
                  "/images/driver-support.jpg",
                  "/images/grow.jpg"
                ]}
              />
            </div>
          </div>
        </div>
      </div>


      {/* Download App Section */}
      <div className="bg-[#F44336] py-16 mb-40 rounded-lg ">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-semibold mb-4">Download the App and Ride Today</h3>
            <p className="text-xl max-w-2xl mx-auto">
              EaziRide is available on both iOS and Android. Download now and experience a new way to move.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-80">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <a href="https://apps.apple.com/us/app/eaziride" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 mb-4 text-lg">
                <i className="fab fa-apple mr-2"></i>App Store
              </a>
              <img 
                src={`${process.env.PUBLIC_URL}/images/qrcode_localhost.png`} 
                alt="EaziRide App Store QR Code" 
                className="w-48 h-48 rounded-lg mb-2"
              />
              <p className="text-white font-semibold">App Store</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://play.google.com/store/apps/details?id=com.eaziride" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 mb-4 text-lg">
                <i className="fab fa-google-play mr-2"></i>Google Play
              </a>
              <img 
                src={`${process.env.PUBLIC_URL}/images/qrcode_localhost.png`} 
                alt="EaziRide Google Play QR Code" 
                className="w-48 h-48 rounded-lg mb-2"
              />
              <p className="text-white font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;