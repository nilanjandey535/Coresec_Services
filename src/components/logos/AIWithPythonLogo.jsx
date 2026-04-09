import React from 'react';

const AIWithPythonLogo = ({ size = "w-full h-full", isBeginnerPython = false, className = "" }) => {
  return (
    <div className={`${size} bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-lg flex items-center justify-center overflow-hidden relative group ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-3/4 h-3/4 transition-all duration-500 group-hover:scale-110"
      >
        {/* Enhanced background with multiple gradient layers */}
        <defs>
          {/* Main deep space background */}
          <radialGradient id="deepBg" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#1a1a2e" stopOpacity="1" />
            <stop offset="30%" stopColor="#16213e" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#0f3460" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
          
          {/* Premium Python energy flow with enhanced colors */}
          <linearGradient id="enhancedPython" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c851" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#00e676" stopOpacity="1" />
            <stop offset="50%" stopColor="#69f0ae" stopOpacity="1" />
            <stop offset="75%" stopColor="#b9f6ca" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00c851" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Advanced AI core with multi-layer glow */}
          <radialGradient id="premiumCore" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1">
              <animate attributeName="stop-opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#00ffff" stopOpacity="0.9">
              <animate attributeName="stop-opacity" values="0.9;0.5;0.9" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor="#0080ff" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.6;0.3;0.6" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4b0082" stopOpacity="0" />
          </radialGradient>
          
          {/* Holographic light trail effect */}
          <linearGradient id="holographicTrail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0">
              <animate attributeName="offset" values="-0.4;1.6" dur="1.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.9">
              <animate attributeName="offset" values="0;2" dur="1.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#00ffff" stopOpacity="0.8">
              <animate attributeName="offset" values="0.4;2.4" dur="1.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0080ff" stopOpacity="0">
              <animate attributeName="offset" values="0.8;2.8" dur="1.8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Quantum particle effect */}
          <radialGradient id="quantumParticle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0080ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Enhanced background layers */}
        <circle cx="100" cy="100" r="100" fill="url(#deepBg)" />
        
        {/* Subtle circuit pattern overlay */}
        <pattern id="premiumCircuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="rgba(0,200,255,0.05)" strokeWidth="0.8" />
        </pattern>
        <rect x="0" y="0" width="200" height="200" fill="url(#premiumCircuit)" />
        
        {/* Enhanced Python infinity curve with premium flow */}
        <path 
          d={isBeginnerPython 
            ? "M55 100 Q80 65, 100 100 Q120 135, 145 100"  // Enhanced beginner curve
            : "M45 100 Q70 55, 100 100 Q130 145, 155 100 Q130 55, 100 100 Q70 145, 45 100"  // Premium complex infinity
          }
          fill="none" 
          stroke="url(#enhancedPython)" 
          strokeWidth={isBeginnerPython ? "4" : "3.5"}
          strokeLinecap="round"
          className="group-hover:stroke-lime-300 transition-colors duration-300"
        >
          {/* Enhanced hover animation */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100;2 100 100;-2 100 100;0 100 100"
            dur="0.8s"
            begin="mouseover"
            fill="freeze"
          />
        </path>
        
        {/* Premium neural network structure */}
        <g strokeWidth="1.5" fill="none">
          {/* Main data highways */}
          <path d="M65 80 L135 120" stroke="rgba(255,255,255,0.6)" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite" begin="0.1s" />
          </path>
          <path d="M65 120 L135 80" stroke="rgba(0,255,255,0.5)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
          </path>
          
          {/* Secondary connections */}
          <path d="M75 70 L125 130" stroke="rgba(255,255,255,0.4)" opacity="0.5" />
          <path d="M75 130 L125 70" stroke="rgba(0,255,255,0.4)" opacity="0.5" />
        </g>
        
        {/* Enhanced data nodes with quantum effects */}
        <circle cx="70" cy="85" r="2.5" fill="url(#quantumParticle)" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" begin="0.1s" />
          <animate attributeName="r" values="2.5;3.5;2.5" dur="1.8s" repeatCount="indefinite" begin="0.1s" />
        </circle>
        <circle cx="100" cy="100" r="3.5" fill="url(#premiumCore)" className="group-hover:scale-125 transition-transform duration-500">
          <animate attributeName="r" values="3.5;4.5;3.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="115" r="2.2" fill="#00ffff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2s" repeatCount="indefinite" begin="0.4s" />
        </circle>
        <circle cx="85" cy="125" r="1.8" fill="white" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        
        {/* Premium AI Core */}
        {isBeginnerPython ? (
          // Enhanced circular core for beginners
          <g>
            <circle cx="100" cy="100" r="18" fill="url(#premiumCore)" />
            <circle cx="100" cy="100" r="18" fill="none" stroke="#00ffff" strokeWidth="2" opacity="0.8">
              <animate attributeName="r" values="18;22;18" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="14" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </g>
        ) : (
          // Premium hexagonal core for AI
          <g>
            <polygon 
              points="100,82 115,90 115,110 100,118 85,110 85,90" 
              fill="url(#premiumCore)" 
              stroke="#00ffff" 
              strokeWidth="2"
              className="group-hover:rotate-180 transition-transform duration-1000"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 100 100;360 100 100"
                dur="0.4s"
                begin="mouseover"
                repeatCount="3"
              />
            </polygon>
            <polygon 
              points="100,82 115,90 115,110 100,118 85,110 85,90" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.8"
            />
          </g>
        )}
        
        {/* Enhanced holographic light flow */}
        <path 
          d={isBeginnerPython 
            ? "M55 100 Q80 65, 100 100 Q120 135, 145 100"
            : "M45 100 Q70 55, 100 100 Q130 145, 155 100 Q130 55, 100 100 Q70 145, 45 100"
          }
          fill="none" 
          stroke="url(#holographicTrail)" 
          strokeWidth="2.5"
          opacity="0.8"
          className="group-hover:opacity-100 transition-opacity duration-300"
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" begin="0.2s" />
        </path>
        
        {/* Premium ambient glow effects */}
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        
        {/* Enhanced lambda symbol with premium styling */}
        <text 
          x="100" 
          y="107" 
          textAnchor="middle" 
          fontSize="12" 
          fill="rgba(255,255,255,0.9)" 
          fontFamily="monospace"
          fontWeight="bold"
          className="group-hover:fill-white transition-colors duration-300"
        >
          λ
        </text>
        
        {/* Premium corner accents */}
        <circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.6)" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="150" r="1.5" fill="rgba(0,255,255,0.7)" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="50" cy="150" r="1.2" fill="rgba(255,255,255,0.5)" opacity="0.6" />
        <circle cx="150" cy="50" r="1.2" fill="rgba(0,255,255,0.6)" opacity="0.6" />
      </svg>
      
      {/* Enhanced hover overlay with premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
    </div>
  );
};

export default AIWithPythonLogo;