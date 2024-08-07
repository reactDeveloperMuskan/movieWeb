import React from 'react';

const CircularProgressBar = ({ progress }) => {
  const normalizedRadius = 50; // Adjust as needed
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center ">
      <svg
        className="transform rotate-90  rounded-full " style={{backgroundColor:'#032541'}}
        width="80"
        height="80"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-gray-400"
          strokeWidth="8"
          stroke="currentColor"
          fill="none"
          r={normalizedRadius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-green-400"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          r={normalizedRadius}
          cx="60"
          cy="60"
        />
      </svg>
      <div className="absolute text-center text-md font-bold text-white">
        {progress}%
      </div>
    </div>
  );
};

export default CircularProgressBar;