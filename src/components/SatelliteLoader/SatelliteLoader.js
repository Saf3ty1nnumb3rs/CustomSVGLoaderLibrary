import React from 'react';

const SatelliteLoader = () => {
  return (
    <svg viewBox="0 0 160 160" width="160" height="160">
      <circle cx="80" cy="80" r="50" />
      <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
        <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#9932CC">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
      <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
    </svg>
  );
};

export default SatelliteLoader;