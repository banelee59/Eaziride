import React from 'react';
import Header from '../components/Header';

function SafetyFeatures() {
  return (
    <div className="safety-features">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Safety Features</h1>
        {/* Add content similar to the safety features pop-up in Home.js */}
      </div>
    </div>
  );
}

export default SafetyFeatures;
