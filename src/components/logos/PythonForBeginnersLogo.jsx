import React from 'react';

const PythonForBeginnersLogo = ({ size = "w-full h-full", className = "" }) => {
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center overflow-hidden relative transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 25%, #24243e 50%, #48426D 75%, #6a5acd 100%)'
      }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-3/4 h-3/4"
      >
        <defs>
          {/* Premium path gradient with multiple color stops */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7">
              <animate attributeName="stop-opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#fffacd" stopOpacity="0.9">
              <animate attributeName="stop-opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" begin="0.5s" />
            </stop>
            <stop offset="50%" stopColor="#ffff99" stopOpacity="1">
              <animate attributeName="stop-opacity" values="1;0.8;1" dur="4s" repeatCount="indefinite" begin="1s" />
            </stop>
            <stop offset="75%" stopColor="#ffd700" stopOpacity="0.9">
              <animate attributeName="stop-opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" begin="1.5s" />
            </stop>
            <stop offset="100%" stopColor="#ffa500" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.8;0.6;0.8" dur="4s" repeatCount="indefinite" begin="2s" />
            </stop>
          </linearGradient>
          
          {/* Enhanced Python spark with multi-layer glow */}
          <radialGradient id="sparkGlow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="1">
              <animate attributeName="stop-opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#00ffcc" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
            </stop>
            <stop offset="60%" stopColor="#00cc99" stopOpacity="0.5">
              <animate attributeName="stop-opacity" values="0.5;0.3;0.5" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
            </stop>
            <stop offset="100%" stopColor="#009966" stopOpacity="0" />
          </radialGradient>
          
          {/* Premium milestone dot with particle effect */}
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#fffacd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffa500" stopOpacity="0.4" />
          </radialGradient>
          
          {/* Holographic traveling light */}
          <linearGradient id="travelingLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0">
              <animate attributeName="offset" values="-0.3;1.3" dur="2.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#00ffff" stopOpacity="0.9">
              <animate attributeName="offset" values="0;1.6" dur="2.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#ff69b4" stopOpacity="0.8">
              <animate attributeName="offset" values="0.4;2.0" dur="2.8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0">
              <animate attributeName="offset" values="0.7;2.3" dur="2.8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Circuit pattern background */}
          <pattern id="circuitPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="rgba(0,255,255,0.08)" strokeWidth="0.8" />
          </pattern>
          
          {/* Particle trail effect */}
          <radialGradient id="particleTrail" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#ff69b4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          
          {/* Constellation star effect */}
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </radialGradient>
          
          {/* Data flow lines */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
          
          {/* Knowledge rays */}
          <linearGradient id="knowledgeRay" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffa500" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Constellation background stars */}
        <circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.6)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="25" r="1.5" fill="rgba(0,255,255,0.7)">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="25" cy="170" r="1.2" fill="rgba(255,215,0,0.6)">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="6s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="175" cy="175" r="1" fill="rgba(255,105,180,0.5)">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="3s" />
        </circle>
        
        {/* Premium circuit background pattern */}
        <rect x="0" y="0" width="200" height="200" fill="url(#circuitPattern)" />
        
        {/* Central energy core with multiple layers */}
        <circle cx="100" cy="100" r="35" fill="url(#sparkGlow)" opacity="0.2">
          <animate attributeName="r" values="35;40;35" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="25" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="1">
          <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Knowledge rays emanating from center */}
        <g opacity="0.4">
          <line x1="100" y1="100" x2="40" y2="40" stroke="url(#knowledgeRay)" strokeWidth="1">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="0.5s" />
          </line>
          <line x1="100" y1="100" x2="160" y2="40" stroke="url(#knowledgeRay)" strokeWidth="1">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="1s" />
          </line>
          <line x1="100" y1="100" x2="40" y2="160" stroke="url(#knowledgeRay)" strokeWidth="1">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="1.5s" />
          </line>
          <line x1="100" y1="100" x2="160" y2="160" stroke="url(#knowledgeRay)" strokeWidth="1">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="2s" />
          </line>
        </g>
        
        {/* Premium Learning Path - Enhanced Python Shape */}
        <path 
          d="M45 155 Q80 120, 100 100 Q120 80, 155 45" 
          fill="none" 
          stroke="url(#pathGradient)" 
          strokeWidth="5"
          strokeLinecap="round"
        >
          {/* Enhanced path growing animation with smooth easing */}
          <animate 
            attributeName="stroke-dasharray" 
            values="0,1000;1000,0" 
            dur="3.5s" 
            repeatCount="indefinite"
            keyTimes="0;1"
          />
          <animate 
            attributeName="stroke-width" 
            values="5;7;5" 
            dur="3.5s" 
            repeatCount="indefinite"
          />
        </path>
        
        {/* Path inner glow effect */}
        <path 
          d="M45 155 Q80 120, 100 100 Q120 80, 155 45" 
          fill="none" 
          stroke="rgba(255,215,0,0.3)" 
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        
        {/* Premium Milestone Dots with particle effects */}
        <g>
          <circle cx="45" cy="155" r="4" fill="url(#dotGlow)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" begin="0.1s" />
            <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" begin="0.1s" />
          </circle>
          <circle cx="45" cy="155" r="8" fill="none" stroke="rgba(255,215,0,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="0.1s" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" begin="0.1s" />
          </circle>
        </g>
        
        <g>
          <circle cx="75" cy="125" r="3.5" fill="url(#dotGlow)" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="75" cy="125" r="7" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;10;7" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
        
        <g>
          <circle cx="100" cy="100" r="3.5" fill="url(#dotGlow)" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
          <circle cx="100" cy="100" r="7" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;10;7" dur="3.5s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </g>
        
        <g>
          <circle cx="125" cy="75" r="3.5" fill="url(#dotGlow)" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite" begin="1.3s" />
          </circle>
          <circle cx="125" cy="75" r="7" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;10;7" dur="3.5s" repeatCount="indefinite" begin="1.3s" />
          </circle>
        </g>
        
        <g>
          <circle cx="155" cy="45" r="4" fill="url(#dotGlow)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" begin="1.7s" />
            <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" begin="1.7s" />
          </circle>
          <circle cx="155" cy="45" r="8" fill="none" stroke="rgba(255,215,0,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="1.7s" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" begin="1.7s" />
          </circle>
        </g>
        
        {/* Enhanced Beginner Symbols with glow effects */}
        <text x="55" y="145" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="monospace" fontWeight="bold">
          print()
          <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.3s" />
        </text>
        <text x="85" y="120" fill="rgba(255,215,0,0.9)" fontSize="12" fontFamily="monospace" fontWeight="bold">
          =
          <animate attributeName="fill-opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
        </text>
        <text x="110" y="95" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="monospace" fontWeight="bold">
          ()
          <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1.2s" />
        </text>
        
        {/* Additional premium symbols */}
        <text x="135" y="70" fill="rgba(0,255,255,0.7)" fontSize="8" fontFamily="monospace" fontWeight="bold">
          def
          <animate attributeName="fill-opacity" values="0.7;0.9;0.7" dur="2.8s" repeatCount="indefinite" begin="1.6s" />
        </text>
        
        {/* Premium Python Spark at the end */}
        <g>
          {/* Multi-layer spark effect */}
          <circle cx="155" cy="45" r="12" fill="url(#sparkGlow)" opacity="0.9">
            <animate attributeName="r" values="12;15;12" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Spark core layers */}
          <circle cx="155" cy="45" r="8" fill="rgba(255,255,255,0.9)" />
          <circle cx="155" cy="45" r="5" fill="rgba(0,255,255,0.8)" />
          <circle cx="155" cy="45" r="2" fill="#ffffff" />
          
          {/* Enhanced pulse effects */}
          <circle cx="155" cy="45" r="15" fill="none" stroke="rgba(0,255,255,0.4)" strokeWidth="2">
            <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="155" cy="45" r="20" fill="none" stroke="rgba(255,105,180,0.3)" strokeWidth="1">
            <animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          
          {/* Particle orbit effect */}
          <circle cx="155" cy="45" r="3" fill="url(#particleTrail)" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 155 45;360 155 45"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Data flow connections */}
        <g strokeWidth="1.5" fill="none">
          <path d="M60 60 L100 100" stroke="url(#dataFlow)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="0.2s" />
          </path>
          <path d="M140 60 L100 100" stroke="url(#dataFlow)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="0.7s" />
          </path>
          <path d="M60 140 L100 100" stroke="url(#dataFlow)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="1.2s" />
          </path>
          <path d="M140 140 L100 100" stroke="url(#dataFlow)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="1.7s" />
          </path>
        </g>
        
        {/* Floating knowledge particles */}
        <circle cx="50" cy="50" r="2" fill="url(#starGlow)">
          <animate attributeName="cy" values="50;150;50" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="70" r="1.5" fill="rgba(255,215,0,0.6)">
          <animate attributeName="cy" values="70;130;70" dur="7s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="7s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="70" cy="150" r="1.8" fill="rgba(0,255,255,0.5)">
          <animate attributeName="cy" values="150;90;150" dur="9s" repeatCount="indefinite" begin="2s" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="9s" repeatCount="indefinite" begin="2s" />
        </circle>
        
        {/* Premium Automated Traveling Light Effect */}
        <g>
          <circle 
            cx="45" 
            cy="155" 
            r="5" 
            fill="url(#travelingLight)"
          >
            <animateMotion
              path="M45 155 Q80 120, 100 100 Q120 80, 155 45"
              dur="2.8s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate attributeName="r" values="5;8;5" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Light trail effect */}
          <path 
            d="M45 155 Q80 120, 100 100 Q120 80, 155 45" 
            fill="none" 
            stroke="rgba(0,255,255,0.3)" 
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Premium Encouraging Micro-Animations */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          <path 
            d="M43 153 L47 157 L53 151" 
            stroke="#00ff9d" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" values="3;4;3" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <circle cx="48" cy="154" r="8" fill="none" stroke="rgba(0,255,157,0.3)" strokeWidth="1">
            <animate attributeName="r" values="8;12;8" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>
        
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="1.1s" />
          <path 
            d="M73 123 L77 127 L83 121" 
            stroke="#00ffcc" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" values="3;4;3" dur="3.5s" repeatCount="indefinite" begin="1.1s" />
          </path>
          <circle cx="78" cy="124" r="7" fill="none" stroke="rgba(0,255,204,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite" begin="1.1s" />
          </circle>
        </g>
        
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="1.9s" />
          <path 
            d="M98 98 L102 102 L108 96" 
            stroke="#00ffd4" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" values="3;4;3" dur="3.5s" repeatCount="indefinite" begin="1.9s" />
          </path>
          <circle cx="103" cy="99" r="7" fill="none" stroke="rgba(0,255,212,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite" begin="1.9s" />
          </circle>
        </g>
        
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="2.7s" />
          <path 
            d="M123 73 L127 77 L133 71" 
            stroke="#00ffe1" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" values="3;4;3" dur="3.5s" repeatCount="indefinite" begin="2.7s" />
          </path>
          <circle cx="128" cy="74" r="7" fill="none" stroke="rgba(0,255,225,0.3)" strokeWidth="1">
            <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite" begin="2.7s" />
          </circle>
        </g>
        
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="3.5s" />
          <path 
            d="M153 43 L157 47 L163 41" 
            stroke="#00fff2" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-width" values="3;4;3" dur="3.5s" repeatCount="indefinite" begin="3.5s" />
          </path>
          <circle cx="158" cy="44" r="8" fill="none" stroke="rgba(0,255,242,0.3)" strokeWidth="1">
            <animate attributeName="r" values="8;12;8" dur="3.5s" repeatCount="indefinite" begin="3.5s" />
          </circle>
        </g>
      </svg>
      
      {/* Premium ambient glow with multiple layers */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0,255,255,0.15) 0%, rgba(255,215,0,0.1) 20%, rgba(255,105,180,0.08) 40%, transparent 60%)'
        }}
      ></div>
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(0,255,204,0.12) 0%, rgba(0,255,157,0.08) 30%, transparent 50%)'
        }}
      ></div>
    </div>
  );
};

export default PythonForBeginnersLogo;