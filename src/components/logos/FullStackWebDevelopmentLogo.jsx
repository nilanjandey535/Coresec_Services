import React from 'react';

const FullStackWebDevelopmentLogo = ({ size = "w-32 h-32", className = "" }) => {
  return (
    <div className={`${size} ${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle 
          cx="100" 
          cy="100" 
          r="95" 
          fill="none" 
          stroke="#111111" 
          strokeWidth="2"
        />
        
        {/* F letter - Frontend */}
        <text 
          x="60" 
          y="80" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#111111"
          fontFamily="Arial, sans-serif"
        >
          F
        </text>
        
        {/* S letter - Server/Backend */}
        <text 
          x="100" 
          y="120" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#C1121F"
          fontFamily="Arial, sans-serif"
        >
          S
        </text>
        
        {/* D letter - Database */}
        <text 
          x="140" 
          y="160" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#111111"
          fontFamily="Arial, sans-serif"
        >
          D
        </text>
        
        {/* Connecting lines */}
        <line 
          x1="75" 
          y1="70" 
          x2="95" 
          y2="110" 
          stroke="#C1121F" 
          strokeWidth="3"
        />
        <line 
          x1="115" 
          y1="110" 
          x2="135" 
          y2="150" 
          stroke="#C1121F" 
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default FullStackWebDevelopmentLogo;