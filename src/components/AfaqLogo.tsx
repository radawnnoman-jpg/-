import React from 'react';

export default function AfaqLogo({ className = "w-6 h-6", useOriginalColors = false }: { className?: string, useOriginalColors?: boolean }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="15 0 100 100" 
      fill="none"
      className={className}
    >
      {/* Left Leg (Dark Blue) */}
      <path 
        d="M 35 100 L 55 10 L 35 10 L 15 100 Z" 
        fill={useOriginalColors ? "#0A3254" : "currentColor"} 
      />
      
      {/* Bottom Arrow (Gold) */}
      <path 
        d="M 25 95 L 90 30 L 85 25 L 115 15 L 105 45 L 100 40 L 45 95 Z" 
        fill={useOriginalColors ? "#C4A052" : "currentColor"} 
        opacity={useOriginalColors ? 1 : 0.6}
      />

      {/* Top Arrow (Teal) */}
      <path 
        d="M 15 75 L 75 15 L 70 10 L 100 0 L 90 30 L 85 25 L 35 75 Z" 
        fill={useOriginalColors ? "#1A8A99" : "currentColor"} 
        opacity={useOriginalColors ? 1 : 0.8}
      />
    </svg>
  );
}

