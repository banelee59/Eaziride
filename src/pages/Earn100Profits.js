import React from 'react';
import Header from '../components/Header';
import './Earn100Profits.css';

function ProcessStep({ number, title, description }) {
  return (
    <div className="process-step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
    </div>
  );
}

function Earn100Profits() {
  return (
    <div className="earn-100-profits">
      <Header />
      <div className="hero-section">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">Earn 100% Profits with EaziRide</h1>
          <p className="text-xl mb-8">Join the revolution in ride-sharing. Become a driver-owner and keep all your earnings.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">How It Works</h2>
          <div className="process-steps">
            <ProcessStep 
              number="1"
              title="Sign Up"
              description="Register as an EaziRide driver through our easy online application process."
            />
            <ProcessStep 
              number="2"
              title="Vetting Process"
              description="Complete our comprehensive vetting process to ensure safety and quality standards."
            />
            <ProcessStep 
              number="3"
              title="Start Earning"
              description="Begin driving and earn 100% of your fares without any commission fees."
            />
            <ProcessStep 
              number="4"
              title="Accumulate Hours"
              description="Drive more to accumulate hours and become eligible for ownership shares."
            />
            <ProcessStep 
              number="5"
              title="Become an Owner"
              description="Receive ownership shares based on your contribution to the platform."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Benefits of Being a Driver-Owner</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="benefit-list">
              <li>Maximize your earnings with no commission fees</li>
              <li>Build long-term equity in a growing platform</li>
              <li>Have a voice in platform decisions and improvements</li>
            </ul>
            <ul className="benefit-list">
              <li>Access exclusive driver-owner perks and support</li>
              <li>Benefit from the platform's success through potential dividends</li>
              <li>Be part of a community of like-minded entrepreneurs</li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your earning potential?</h2>
          <button className="cta-button">Join EaziRide Today</button>
        </div>
      </div>
    </div>
  );
}

export default Earn100Profits;
