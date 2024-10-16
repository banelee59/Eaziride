import React from 'react';
import Header from '../components/Header';
import './Contact.css';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-36">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <nav className="text-gray-500">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>Contact</li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-3xl text-red-500 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold">Our Address</h3>
                  <p>123 EaziRide Street, City, State 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-3xl text-red-500 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p>support@eaziride.com</p>
                  <p>info@eaziride.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-phone-alt text-3xl text-red-500 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="mb-8 h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.732896179375!2d28.111356573798393!3d-26.009565756072217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e0067534b2f%3A0x6637e85f16453f01!2sThornhill%20Office%20Park!5e0!3m2!1sen!2sza!4v1728327394664!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500" />
                </div>
                <div className="mb-4">
                  <input type="text" placeholder="Subject" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" required rows="5" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-red-500 text-white font-semibold py-3 px-6 rounded hover:bg-red-600 transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;