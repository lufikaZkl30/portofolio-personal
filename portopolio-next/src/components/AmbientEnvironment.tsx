"use client";

import { Cloud } from "lucide-react";

export default function AmbientEnvironment() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft gradient backgrounds that change subtly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#F4F9F5] to-[#FDFBF7] opacity-80" />
      
      {/* Drifting Clouds */}
      <div className="absolute top-[10%] left-0 text-[#E8F0EA] opacity-60 animate-drift" style={{ animationDuration: '45s' }}>
        <Cloud size={120} strokeWidth={1} fill="currentColor" />
      </div>
      <div className="absolute top-[30%] left-0 text-[#E8F0EA] opacity-40 animate-drift" style={{ animationDuration: '60s', animationDelay: '-15s' }}>
        <Cloud size={180} strokeWidth={1} fill="currentColor" />
      </div>
      
      {/* Floating Particles (Dust/Fireflies) */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-[#A3C9A8] opacity-30 animate-float"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDuration: (Math.random() * 4 + 3) + 's',
            animationDelay: (Math.random() * 2) + 's'
          }}
        />
      ))}
    </div>
  );
}
