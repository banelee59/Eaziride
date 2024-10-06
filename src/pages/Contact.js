import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 EaziRide Street, City, State 12345</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> support@eaziride.com</li>
            </ul>
            <h3>Hours of Operation</h3>
            <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
          </div>
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <h2>Find Us</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2167934580135!2d-73.98784368459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1630516089728!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;