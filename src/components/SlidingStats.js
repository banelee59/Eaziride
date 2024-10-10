import React, { useState, useEffect } from 'react';
import './SlidingStats.css';

const stats = [
  { label: "Onboarded Drivers", value: "10,000+" },
  { label: "Rejected Drivers", value: "500+" },
  { label: "Paid Out Earnings", value: "R5M+" },
  { label: "Completed Trips", value: "1M+" },
  { label: "Onboarded Riders", value: "50,000+" },
  { label: "Rejected Riders", value: "100+" }
];

function SlidingStats() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // Change stat every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-stats">
      <div className="stat-content">
        <span className="stat-label">{stats[currentStatIndex].label}:</span>
        <span className="stat-value">{stats[currentStatIndex].value}</span>
      </div>
    </div>
  );
}

export default SlidingStats;