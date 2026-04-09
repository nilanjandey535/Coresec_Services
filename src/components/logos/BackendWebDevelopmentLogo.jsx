import React from 'react';

const BackendWebDevelopmentLogo = ({ size = "w-full h-full", className = "" }) => {
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center overflow-hidden relative transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1E1B3A 0%, #312C51 50%, #48426D 100%)'
      }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-3/4 h-3/4"
      >
        <defs>
          {/* Core glow gradient */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#8A2BE2" stopOpacity="0.4">
              <animate attributeName="stop-opacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4B0082" stopOpacity="0" />
          </radialGradient>
          
          {/* Data flow gradient */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
          
          {/* Response flow gradient */}
          <linearGradient id="responseFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4169E1" stopOpacity="0" />
            <stop offset="50%" stopColor="#4169E1" stopOpacity="1" />
            <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
          </linearGradient>
          
          {/* Layer glow */}
          <filter id="layerGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Pulse animation for particles */}
          <pattern id="serverGrid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="2" fill="rgba(255,255,255,0.1)" />
            <rect x="12" y="12" width="2" height="2" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        
        {/* Background with server grid pattern */}
        <rect x="0" y="0" width="200" height="200" fill="url(#serverGrid)" />
        
        {/* Architectural Layers (Wireframe planes) */}
        {/* Database Layer (bottom) */}
        <g opacity="0.8" className="transition-all duration-500">
          <rect 
            x="40" 
            y="140" 
            width="120" 
            height="15" 
            rx="2" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1" 
            strokeDasharray="4,2"
            style={{
              filter: 'url(#layerGlow)',
              stroke: '#00f0ff'
            }}
          />
          {/* Database symbols */}
          <text x="50" y="150" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">🗄️</text>
          <rect x="70" y="145" width="80" height="5" fill="rgba(255,255,255,0.1)" rx="1" />
        </g>
        
        {/* Service Layer (middle-bottom) */}
        <g opacity="0.8">
          <rect 
            x="45" 
            y="110" 
            width="110" 
            height="15" 
            rx="2" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1" 
            strokeDasharray="4,2"
            style={{
              filter: 'url(#layerGlow)',
              stroke: '#00f0ff'
            }}
          >
            <animate attributeName="y" values="110;108;110" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* Service symbols */}
          <text x="55" y="120" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">⚙️</text>
          <rect x="75" y="115" width="70" height="5" fill="rgba(255,255,255,0.1)" rx="1" />
        </g>
        
        {/* API Layer (middle-top) */}
        <g opacity="0.8">
          <rect 
            x="50" 
            y="80" 
            width="100" 
            height="15" 
            rx="2" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1" 
            strokeDasharray="4,2"
            style={{
              filter: 'url(#layerGlow)',
              stroke: '#00f0ff'
            }}
          >
            <animate attributeName="y" values="80;78;80" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* API symbols */}
          <text x="60" y="90" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">{}</text>
          <rect x="80" y="85" width="60" height="5" fill="rgba(255,255,255,0.1)" rx="1" />
        </g>
        
        {/* Cache Layer (top) */}
        <g opacity="0.8">
          <rect 
            x="55" 
            y="50" 
            width="90" 
            height="15" 
            rx="2" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1" 
            strokeDasharray="4,2"
            style={{
              filter: 'url(#layerGlow)',
              stroke: '#00f0ff'
            }}
          >
            <animate attributeName="y" values="50;48;50" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* Cache symbols */}
          <text x="65" y="60" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">⚡</text>
          <rect x="85" y="55" width="50" height="5" fill="rgba(255,255,255,0.1)" rx="1" />
        </g>
        
        {/* Central Processing Core (Hexagon) */}
        <g>
          <polygon 
            points="100,30 115,38 115,58 100,66 85,58 85,38" 
            fill="url(#coreGlow)" 
            stroke="#ffffff" 
            strokeWidth="2"
            opacity="0.9"
            className="transition-all duration-300"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 100 48;360 100 48"
              dur="8s"
              repeatCount="indefinite"
            />
          </polygon>
          
          {/* Core inner details */}
          <circle cx="100" cy="48" r="8" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <circle cx="100" cy="48" r="4" fill="rgba(255,255,255,0.8)" />
        </g>
        
        {/* Data Flow Channels */}
        {/* Vertical connections between layers */}
        <g strokeWidth="1.5" fill="none">
          {/* Connection lines */}
          <line x1="100" y1="66" x2="100" y2="80" stroke="rgba(0,240,255,0.4)" />
          <line x1="100" y1="95" x2="100" y2="110" stroke="rgba(0,240,255,0.4)" />
          <line x1="100" y1="125" x2="100" y2="140" stroke="rgba(0,240,255,0.4)" />
          
          {/* Horizontal connections */}
          <line x1="70" y1="66" x2="70" y2="140" stroke="rgba(0,240,255,0.2)" strokeDasharray="2,3" />
          <line x1="130" y1="66" x2="130" y2="140" stroke="rgba(0,240,255,0.2)" strokeDasharray="2,3" />
        </g>
        
        {/* Request Pulse Animation (white downward) */}
        <circle 
          cx="100" 
          cy="30" 
          r="3" 
          fill="#ffffff"
          opacity="0.8"
        >
          <animate 
            attributeName="cy" 
            values="30;140;30" 
            dur="1.5s" 
            repeatCount="indefinite" 
            keyTimes="0;0.8;1"
          />
          <animate 
            attributeName="r" 
            values="3;6;3" 
            dur="1.5s" 
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="opacity" 
            values="0.8;0.4;0.8" 
            dur="1.5s" 
            repeatCount="indefinite" 
          />
        </circle>
        
        {/* Response Pulse Animation (cyan upward) */}
        <circle 
          cx="100" 
          cy="140" 
          r="3" 
          fill="#00f0ff"
          opacity="0.8"
        >
          <animate 
            attributeName="cy" 
            values="140;30;140" 
            dur="1.5s" 
            repeatCount="indefinite" 
            keyTimes="0;0.8;1"
            begin="0.75s"
          />
          <animate 
            attributeName="r" 
            values="3;6;3" 
            dur="1.5s" 
            repeatCount="indefinite" 
            begin="0.75s"
          />
          <animate 
            attributeName="opacity" 
            values="0.8;0.4;0.8" 
            dur="1.5s" 
            repeatCount="indefinite" 
            begin="0.75s"
          />
        </circle>
        
        {/* Connection Nodes at intersections */}
        <g fill="rgba(255,255,255,0.6)">
          <circle cx="100" cy="66" r="2" opacity="0.5" />
          <circle cx="100" cy="80" r="2" opacity="0.5" />
          <circle cx="100" cy="95" r="2" opacity="0.5" />
          <circle cx="100" cy="110" r="2" opacity="0.5" />
          <circle cx="100" cy="125" r="2" opacity="0.5" />
          <circle cx="100" cy="140" r="2" opacity="0.5" />
          
          <circle cx="70" cy="66" r="1.5" opacity="0.3" />
          <circle cx="70" cy="140" r="1.5" opacity="0.3" />
          <circle cx="130" cy="66" r="1.5" opacity="0.3" />
          <circle cx="130" cy="140" r="1.5" opacity="0.3" />
        </g>
        
        {/* Server Particles (appear on hover) */}
        {/* Floating square particles */}
        <rect x="30" y="40" width="2" height="2" fill="rgba(255,255,255,0.6)">
          <animate attributeName="y" values="40;160;40" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="170" y="60" width="2" height="2" fill="rgba(0,240,255,0.6)">
          <animate attributeName="y" values="60;140;60" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0;0.6;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </rect>
        <rect x="40" y="120" width="2" height="2" fill="rgba(255,255,255,0.5)">
          <animate attributeName="y" values="120;80;120" dur="3s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" begin="1s" />
        </rect>
        <rect x="160" y="100" width="2" height="2" fill="rgba(0,240,255,0.5)">
          <animate attributeName="y" values="100;60;100" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0;0.5;0" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
        </rect>
        
        {/* Core Spin Burst Effect */}
        <circle 
          cx="100" 
          cy="48" 
          r="15" 
          fill="none" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="2"
          opacity="0.7"
        >
          <animate 
            attributeName="r" 
            values="15;30;15" 
            dur="0.8s" 
            repeatCount="1" 
          />
          <animate 
            attributeName="opacity" 
            values="0.7;0;0.7" 
            dur="0.8s" 
            repeatCount="1" 
          />
        </circle>
        <circle 
          cx="100" 
          cy="48" 
          r="20" 
          fill="none" 
          stroke="rgba(138,43,226,0.2)" 
          strokeWidth="1"
          opacity="0.5"
        >
          <animate 
            attributeName="r" 
            values="20;35;20" 
            dur="0.8s" 
            repeatCount="1" 
            begin="0.1s"
          />
          <animate 
            attributeName="opacity" 
            values="0.5;0;0.5" 
            dur="0.8s" 
            repeatCount="1" 
            begin="0.1s"
          />
        </circle>
        
        {/* Layer Synchronization Effect */}
        <rect 
          x="40" 
          y="140" 
          width="120" 
          height="15" 
          rx="2" 
          fill="none" 
          stroke="rgba(0,240,255,0.6)" 
          strokeWidth="2"
          opacity="0.4"
        >
          <animate attributeName="width" values="120;115;120" dur="2s" repeatCount="indefinite" />
          <animate attributeName="x" values="40;42.5;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect 
          x="45" 
          y="110" 
          width="110" 
          height="15" 
          rx="2" 
          fill="none" 
          stroke="rgba(0,240,255,0.6)" 
          strokeWidth="2"
          opacity="0.4"
        >
          <animate attributeName="width" values="110;105;110" dur="2s" repeatCount="indefinite" begin="0.1s" />
          <animate attributeName="x" values="45;47.5;45" dur="2s" repeatCount="indefinite" begin="0.1s" />
        </rect>
        <rect 
          x="50" 
          y="80" 
          width="100" 
          height="15" 
          rx="2" 
          fill="none" 
          stroke="rgba(0,240,255,0.6)" 
          strokeWidth="2"
          opacity="0.4"
        >
          <animate attributeName="width" values="100;95;100" dur="2s" repeatCount="indefinite" begin="0.2s" />
          <animate attributeName="x" values="50;52.5;50" dur="2s" repeatCount="indefinite" begin="0.2s" />
        </rect>
        <rect 
          x="55" 
          y="50" 
          width="90" 
          height="15" 
          rx="2" 
          fill="none" 
          stroke="rgba(0,240,255,0.6)" 
          strokeWidth="2"
          opacity="0.4"
        >
          <animate attributeName="width" values="90;85;90" dur="2s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="x" values="55;57.5;55" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </rect>
      </svg>
    </div>
  );
};

export default BackendWebDevelopmentLogo;