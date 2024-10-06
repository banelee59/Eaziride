import React from 'react';
import './Home.css'; // Keep this import for the remaining custom styles

function Home() {
  return (
    <div>
      <section className="bg-blue-500 bg-cover bg-center bg-no-repeat text-white py-16 text-center min-h-[500px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-bold shadow-text">Welcome to Your Ride-Sharing Service</h1>
          <p className="text-2xl mb-8 shadow-text">Fast, reliable, and affordable rides at your fingertips</p>
          <a href="#" className="bg-white text-blue-500 text-xl py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">Get Started</a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 hover:-translate-y-1">
              <i className="fas fa-car feature-icon"></i>
              <h3 className="text-xl font-semibold mb-2">Wide Range of Vehicles</h3>
              <p>Choose from a variety of vehicles to suit your needs and budget.</p>
            </div>
            {/* Add more feature boxes here */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-8">Ready to Get Started?</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Sign Up Now</a>
            <a href="#" className="btn-secondary text-white text-lg py-2 px-6 rounded-lg transition duration-300">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;