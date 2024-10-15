import React from 'react';
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
  return (
    <div className="sliding-stats">
      <div className="sliding-stats-content">
        {stats.map((stat, index) => (
          <span key={index} className="stat-item">
            <strong>{stat.label}:</strong> {stat.value}
          </span>
        ))}
        {/* Duplicate the stats to create a seamless loop */}
        {stats.map((stat, index) => (
          <span key={`duplicate-${index}`} className="stat-item">
            <strong>{stat.label}:</strong> {stat.value}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SlidingStats;
