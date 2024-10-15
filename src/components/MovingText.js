import React from 'react';
import './MovingText.css';

function MovingText() {
  const stats = [
    { label: "Onboarded Drivers", value: "10,000+" },
    { label: "Rejected Drivers", value: "500+" },
    { label: "Paid Out Earnings", value: "R5M+" },
    { label: "Completed Trips", value: "1M+" },
    { label: "Onboarded Riders", value: "50,000+" },
    { label: "Rejected Riders", value: "100+" }
  ];

  const statText = stats.map(stat => (
    <span key={stat.label}>
      {stat.label}: <span className="stat-value">{stat.value}</span> |{' '}
    </span>
  ));

  return (
    <div className="moving-text-container">
      <div className="moving-text">
        {statText}
      </div>
    </div>
  );
}

export default MovingText;
