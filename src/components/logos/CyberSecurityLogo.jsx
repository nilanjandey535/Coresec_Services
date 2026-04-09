import React from 'react';

const CyberSecurityLogo = ({ size = "w-full h-full", className = "" }) => {
  return (
    <div className={`${size} bg-[#0a0a1a] rounded-lg flex items-center justify-center overflow-hidden relative group ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-3/4 h-3/4 transition-all duration-500 group-hover:scale-110"
      >
        {/* Advanced background with multiple gradients */}
        <defs>
          {/* Main background gradient */}
          <radialGradient id="mainBg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#0f0f2e" stopOpacity="1" />
            <stop offset="30%" stopColor="#1a1a40" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#0a0a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
          
          {/* Animated circuit pattern */}
          <pattern id="circuitPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="rgba(0,240,255,0.1)" strokeWidth="0.5" />
          </pattern>
          
          {/* Data flow animation */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0">
              <animate attributeName="offset" values="-0.3;1.3" dur="1.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="1">
              <animate attributeName="offset" values="0;1.5" dur="1.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0">
              <animate attributeName="offset" values="0.3;1.7" dur="1.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Energy core glow */}
          <radialGradient id="energyCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#0080ff" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0040ff" stopOpacity="0" />
          </radialGradient>
          
          {/* Shield highlight */}
          <linearGradient id="shieldHighlight" x1="30%" y1="30%" x2="70%" y2="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {/* Background layers */}
        <circle cx="100" cy="100" r="100" fill="url(#mainBg)" />
        <rect x="0" y="0" width="200" height="200" fill="url(#circuitPattern)" />
        
        {/* Main shield with enhanced design */}
        <path 
          d="M100 25 L170 55 L170 120 C170 155 140 175 100 175 C60 175 30 155 30 120 L30 55 Z" 
          fill="none" 
          stroke="url(#dataFlow)" 
          strokeWidth="3"
          className="group-hover:stroke-cyan-300 transition-colors"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100;2 100 100;0 100 100"
            dur="0.5s"
            begin="mouseover"
            fill="freeze"
          />
        </path>
        
        {/* Shield inner glow */}
        <path 
          d="M100 30 L165 60 L165 115 C165 145 135 165 100 165 C65 165 35 145 35 115 L35 60 Z" 
          fill="url(#shieldHighlight)"
          opacity="0.3"
        />
        
        {/* Advanced neural network with more complex structure */}
        <g strokeWidth="1.2" fill="none">
          {/* Primary backbone */}
          <path d="M100 40 L100 160" stroke="url(#dataFlow)" strokeWidth="2">
            <animate attributeName="stroke-width" values="2;3;2" dur="1s" repeatCount="indefinite" />
          </path>
          
          {/* Horizontal neural pathways */}
          <path d="M65 75 L135 75" stroke="rgba(0,240,255,0.7)">
            <animate attributeName="stroke" values="rgba(0,240,255,0.7);rgba(255,255,255,1);rgba(0,240,255,0.7)" dur="1.2s" repeatCount="indefinite" />
          </path>
          <path d="M60 100 L140 100" stroke="rgba(0,240,255,0.6)">
            <animate attributeName="stroke" values="rgba(0,240,255,0.6);rgba(255,255,255,0.9);rgba(0,240,255,0.6)" dur="1.4s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <path d="M65 125 L135 125" stroke="rgba(0,240,255,0.5)">
            <animate attributeName="stroke" values="rgba(0,240,255,0.5);rgba(255,255,255,0.8);rgba(0,240,255,0.5)" dur="1.6s" repeatCount="indefinite" begin="0.6s" />
          </path>
          
          {/* Diagonal neural connections */}
          <path d="M75 60 L125 140" stroke="rgba(0,240,255,0.4)">
            <animate attributeName="stroke" values="rgba(0,240,255,0.4);rgba(255,255,255,0.7);rgba(0,240,255,0.4)" dur="1.8s" repeatCount="indefinite" begin="0.2s" />
          </path>
          <path d="M125 60 L75 140" stroke="rgba(0,240,255,0.4)">
            <animate attributeName="stroke" values="rgba(0,240,255,0.4);rgba(255,255,255,0.7);rgba(0,240,255,0.4)" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
          </path>
          
          {/* Radial neural extensions */}
          <path d="M90 65 L110 65" stroke="rgba(255,255,255,0.6)">
            <animate attributeName="stroke" values="rgba(255,255,255,0.6);rgba(0,240,255,0.9);rgba(255,255,255,0.6)" dur="0.8s" repeatCount="indefinite" begin="0.1s" />
          </path>
          <path d="M85 90 L115 90" stroke="rgba(255,255,255,0.5)">
            <animate attributeName="stroke" values="rgba(255,255,255,0.5);rgba(0,240,255,0.8);rgba(255,255,255,0.5)" dur="1s" repeatCount="indefinite" begin="0.4s" />
          </path>
          <path d="M90 115 L110 115" stroke="rgba(255,255,255,0.6)">
            <animate attributeName="stroke" values="rgba(255,255,255,0.6);rgba(0,240,255,0.9);rgba(255,255,255,0.6)" dur="0.8s" repeatCount="indefinite" begin="0.7s" />
          </path>
          <path d="M85 140 L115 140" stroke="rgba(255,255,255,0.5)">
            <animate attributeName="stroke" values="rgba(255,255,255,0.5);rgba(0,240,255,0.8);rgba(255,255,255,0.5)" dur="1s" repeatCount="indefinite" begin="1.1s" />
          </path>
        </g>
        
        {/* Animated data particles */}
        <circle cx="100" cy="40" r="2.5" fill="#00f0ff">
          <animate attributeName="cy" values="40;160;40" dur="2s" repeatCount="indefinite" />
          <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="fill" values="#00f0ff;#ffffff;#00f0ff" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="65" cy="75" r="2" fill="white">
          <animate attributeName="cx" values="65;135;65" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="fill" values="white;#00f0ff;white" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        
        <circle cx="60" cy="100" r="1.8" fill="#00f0ff">
          <animate attributeName="cx" values="60;140;60" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="r" values="1.8;3;1.8" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        
        <circle cx="75" cy="60" r="2.2" fill="white">
          <animate attributeName="cx" values="75;125;75" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          <animate attributeName="cy" values="60;140;60" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
        </circle>
        
        {/* Central energy core with enhanced glow */}
        <circle cx="100" cy="100" r="20" fill="url(#energyCore)" />
        <circle cx="100" cy="100" r="15" fill="none" stroke="#00f0ff" strokeWidth="2">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-width" values="2;4;2" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Enhanced security lock symbol */}
        <g transform="translate(100,100)">
          <path 
            d="M-8 -8 L8 -8 L8 -3 C8 1 5 4 0 4 C-5 4 -8 1 -8 -3 Z" 
            fill="white"
            stroke="#00f0ff"
            strokeWidth="1"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;5;-5;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <rect x="-3" y="-1" width="6" height="5" rx="1" fill="#0a0a1a" />
        </g>
        
        {/* Outer ring for extra tech feel */}
        <circle cx="100" cy="100" r="25" fill="none" stroke="rgba(0,240,255,0.3)" strokeWidth="1" strokeDasharray="5,5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100;360 100 100"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      
      {/* Additional hover effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
    </div>
  );
};

export default CyberSecurityLogo;