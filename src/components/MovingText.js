import React, { useState, useEffect } from 'react';
import './MovingText.css';

function MovingText() {
  const [isVisible, setIsVisible] = useState(true);
  const stats = [
    { label: "Onboarded Drivers", value: "10,000+" },
    { label: "Rejected Drivers", value: "500+" },
    { label: "Earnings", value: "R5M+" },
    { label: "Completed Trips", value: "1M+" },
    { label: "Onboarded Riders", value: "50,000+" },
    { label: "Rejected Riders", value: "100+" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 100); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="moving-text-container">
      <div className="moving-text">
        {stats.map((stat, index) => (
          <span key={index} className="stat-item">
            <span className="stat-label">{stat.label}:</span>
            <span className="stat-value">{stat.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovingText;
