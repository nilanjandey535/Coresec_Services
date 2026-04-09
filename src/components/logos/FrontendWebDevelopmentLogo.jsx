import React from 'react';

const FrontendWebDevelopmentLogo = ({ size = "w-full h-full", className = "" }) => {

  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center overflow-hidden relative transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 70%, #533483 100%)'
      }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-3/4 h-3/4"
      >
        <defs>
          {/* Premium interface glow */}
          <radialGradient id="interfaceGlow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9">
              <animate attributeName="stop-opacity" values="0.9;0.6;0.9" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="40%" stopColor="#ff00ff" stopOpacity="0.5">
              <animate attributeName="stop-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite" begin="0.5s" />
            </stop>
            <stop offset="70%" stopColor="#0080ff" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
            </stop>
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          
          {/* Holographic sweep effect */}
          <linearGradient id="holographicSweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0">
              <animate attributeName="offset" values="-0.3;1.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#00ffff" stopOpacity="0.9">
              <animate attributeName="offset" values="0;1.6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#ff00ff" stopOpacity="0.8">
              <animate attributeName="offset" values="0.4;2.0" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0">
              <animate attributeName="offset" values="0.7;2.3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Neon circuit pattern */}
          <pattern id="neonGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="rgba(0,255,255,0.15)" strokeWidth="0.5" />
          </pattern>
          
          {/* Particle glow */}
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Background circuit pattern */}
        <rect x="0" y="0" width="200" height="200" fill="url(#neonGrid)" />
        
        {/* Central energy core */}
        <circle cx="100" cy="100" r="25" fill="url(#interfaceGlow)" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="#00ffff" strokeWidth="1">
          <animate attributeName="r" values="25;30;25" dur="5s" repeatCount="indefinite" />
        </circle>
        
        {/* Premium Browser Frame with neon edges */}
        <rect 
          x="25" 
          y="25" 
          width="150" 
          height="150" 
          rx="15" 
          fill="none" 
          stroke="url(#holographicSweep)" 
          strokeWidth="3"
        />
        
        {/* Inner frame glow */}
        <rect 
          x="30" 
          y="30" 
          width="140" 
          height="140" 
          rx="12" 
          fill="none" 
          stroke="rgba(0,255,255,0.3)" 
          strokeWidth="1"
        >
          <animate attributeName="stroke-width" values="1;2;1" dur="2s" repeatCount="indefinite" />
        </rect>
        
        {/* High-tech Grid System */}
        <g stroke="rgba(0,255,255,0.3)" strokeWidth="1">
          {/* Primary grid lines with enhanced animation */}
          <line x1="50" y1="40" x2="50" y2="160">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="80" y1="40" x2="80" y2="160">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
          </line>
          <line x1="110" y1="40" x2="110" y2="160">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
          </line>
          <line x1="140" y1="40" x2="140" y2="160">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.9s" />
          </line>
          
          <line x1="40" y1="60" x2="160" y2="60">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.15s" />
          </line>
          <line x1="40" y1="90" x2="160" y2="90">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.45s" />
          </line>
          <line x1="40" y1="120" x2="160" y2="120">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.75s" />
          </line>
          <line x1="40" y1="150" x2="160" y2="150">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="1.05s" />
          </line>
          {/* Vertical grid lines */}
          <line x1="50" y1="40" x2="50" y2="160" />
          <line x1="80" y1="40" x2="80" y2="160" />
          <line x1="110" y1="40" x2="110" y2="160" />
          <line x1="140" y1="40" x2="140" y2="160" />
          
          {/* Horizontal grid lines */}
          <line x1="40" y1="60" x2="160" y2="60" />
          <line x1="40" y1="90" x2="160" y2="90" />
          <line x1="40" y1="120" x2="160" y2="120" />
          <line x1="40" y1="150" x2="160" y2="150" />
        </g>
        
        {/* Premium UI Components */}
        <g>
          {/* Main card with holographic effect */}
          <rect 
            x="42" 
            y="42" 
            width="55" 
            height="35" 
            rx="8" 
            fill="rgba(0,255,255,0.15)"
            stroke="rgba(0,255,255,0.4)"
            strokeWidth="1"
          >
            <animate attributeName="y" values="42;40;42" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="rgba(0,255,255,0.15);rgba(255,0,255,0.2);rgba(0,255,255,0.15)" dur="5s" repeatCount="indefinite" />
          </rect>
          <rect x="47" y="47" width="45" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
          <rect x="47" y="57" width="35" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="47" y="65" width="30" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
          
          {/* Secondary card with gradient */}
          <rect 
            x="103" 
            y="52" 
            width="45" 
            height="30" 
            rx="8" 
            fill="rgba(255,0,255,0.12)"
            stroke="rgba(255,0,255,0.3)"
            strokeWidth="1"
          >
            <animate attributeName="y" values="52;50;52" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
          </rect>
          <rect x="108" y="57" width="35" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
          <rect x="108" y="65" width="25" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
          
          {/* Navigation bar with particle effects */}
          <rect 
            x="35" 
            y="132" 
            width="130" 
            height="20" 
            rx="10" 
            fill="rgba(0,128,255,0.2)"
            stroke="rgba(0,128,255,0.4)"
            strokeWidth="1"
          >
            <animate attributeName="y" values="132;131;132" dur="3.5s" repeatCount="indefinite" />
          </rect>
          
          {/* Navigation dots with glow */}
          <circle cx="45" cy="142" r="3" fill="url(#particleGlow)">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="142" r="3" fill="rgba(255,255,255,0.5)">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="65" cy="142" r="3" fill="rgba(255,255,255,0.5)">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
        </g>
        
        {/* Advanced Frontend Symbols */}
        <text x="155" y="125" fill="rgba(0,255,255,0.7)" fontSize="12" fontFamily="monospace" fontWeight="bold">{`<`}</text>
        <text x="165" y="125" fill="rgba(255,0,255,0.7)" fontSize="12" fontFamily="monospace" fontWeight="bold">{`/>`}</text>
        
        {/* Layout guides with animation */}
        <line x1="40" y1="100" x2="160" y2="100" stroke="rgba(0,255,255,0.3)" strokeWidth="1" strokeDasharray="4,3">
          <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="95" y1="40" x2="95" y2="160" stroke="rgba(255,0,255,0.3)" strokeWidth="1" strokeDasharray="4,3">
          <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </line>
        
        {/* Holographic Light Sweep */}
        <rect 
          x="25" 
          y="25" 
          width="150" 
          height="150" 
          rx="15" 
          fill="url(#holographicSweep)" 
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-150 0; 150 0"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        
        {/* Premium Component Highlights */}
        <rect x="42" y="42" width="55" height="35" rx="8" fill="none" stroke="rgba(0,255,255,0.5)" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-width" values="2;3;2" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="103" y="52" width="45" height="30" rx="8" fill="none" stroke="rgba(255,0,255,0.5)" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="0.7s" />
          <animate attributeName="stroke-width" values="2;3;2" dur="3s" repeatCount="indefinite" begin="0.7s" />
        </rect>
        
        {/* Advanced Layout Reflow with multiple effects */}
        <g>
          {/* Primary reflow lines */}
          <line x1="35" y1="75" x2="165" y2="75" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5">
            <animate attributeName="y1" values="75;72;75" dur="4s" repeatCount="indefinite" />
            <animate attributeName="y2" values="75;72;75" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="85" y1="35" x2="85" y2="165" stroke="rgba(255,0,255,0.4)" strokeWidth="1.5">
            <animate attributeName="x1" values="85;88;85" dur="4s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="x2" values="85;88;85" dur="4s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" begin="0.8s" />
          </line>
          
          {/* Secondary reflow lines */}
          <line x1="115" y1="35" x2="115" y2="165" stroke="rgba(0,128,255,0.3)" strokeWidth="1">
            <animate attributeName="x1" values="115;118;115" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
            <animate attributeName="x2" values="115;118;115" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
          </line>
        </g>
        
        {/* Floating Data Particles */}
        <circle cx="30" cy="50" r="2" fill="rgba(0,255,255,0.7)">
          <animate attributeName="cy" values="50;150;50" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="80" r="1.5" fill="rgba(255,0,255,0.6)">
          <animate attributeName="cy" values="80;120;80" dur="5s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="50" cy="160" r="2" fill="rgba(0,128,255,0.5)">
          <animate attributeName="cy" values="160;60;160" dur="7s" repeatCount="indefinite" begin="2s" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="7s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
      
      {/* Premium ambient glow overlay */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.15) 0%, rgba(255,0,255,0.1) 30%, rgba(0,128,255,0.05) 60%, transparent 80%)'
        }}
      ></div>
    </div>
  );
};

export default FrontendWebDevelopmentLogo;