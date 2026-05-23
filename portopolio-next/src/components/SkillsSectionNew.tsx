"use client";

import React, { useState } from 'react';
import { 
  Code2, Video, Music, Droplets, Sparkles,
  MonitorPlay, Waves
} from 'lucide-react';

export default function SkillsSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Urutan perjalanan: Music -> Code -> Edit (Sesuai permintaan)
  const journeyNodes = [
    {
      id: 'music',
      title: 'The Spring of Sound',
      subtitle: 'Music Production',
      icon: Music,
      color: '#D4A373', // Earthy/Warm for music
      waterColor: '#8ECAE6',
      align: 'left',
      desc: 'Mata air inspirasi tempat saya meracik nada, harmoni, dan ambient soundscapes.',
      skills: ['Ableton Live', 'Synthesizers', 'Mixing & Mastering', 'Foley & Sound Design']
    },
    {
      id: 'code',
      title: 'The Logic River',
      subtitle: 'Web Development',
      icon: Code2,
      color: '#A3C9A8', // Pastel Green for coding
      waterColor: '#219EBC',
      align: 'right',
      desc: 'Arus deras tempat logika dan desain mengalir menjadi pengalaman interaktif.',
      skills: ['React & Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Framer Motion']
    },
    {
      id: 'edit',
      title: 'The Visual Delta',
      subtitle: 'Creative Editing',
      icon: Video,
      color: '#A2D2FF', // Soft Blue for editing
      waterColor: '#023047',
      align: 'left',
      desc: 'Muara tempat suara dan interaksi disatukan menjadi mahakarya sinematik.',
      skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics']
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 flex flex-col items-center z-10 font-sans overflow-hidden">
      
      {/* Custom Styles for Waterfall Environment */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .font-pixel {
          font-family: 'VT323', monospace;
          letter-spacing: 0.05em;
        }

        /* Ambient Environment Animations */
        @keyframes flow-down {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes ripple-pool {
          0% { transform: scale(0.8); opacity: 0.8; border-width: 4px; }
          100% { transform: scale(2); opacity: 0; border-width: 1px; }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .water-drop {
          animation: flow-down 2.5s linear infinite;
        }
        
        .pool-ripple {
          position: absolute;
          border: 2px solid #A2D2FF;
          border-radius: 50%;
          animation: ripple-pool 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .interactive-hover {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .interactive-hover:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#F0F7F4] to-[#FDFBF7] -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F4FF] border border-[#A2D2FF]/50 text-[#023047] mb-4 shadow-sm">
             <Waves size={16} />
             <span className="font-bold text-sm tracking-widest uppercase">Skill Journey</span>
          </div>
          <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50]">The River of Creativity</h2>
          <p className="text-slate-500 mt-4 max-w-md font-medium">Ikuti aliran perjalananku dari meracik nada hingga merangkai kode dan visual.</p>
        </div>

        {/* WATERFALL JOURNEY LAYOUT */}
        <div className="relative w-full flex flex-col items-center py-10">
          
          {/* THE WATERFALL STREAM (Central Line) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-12 bg-gradient-to-b from-[#D4A373]/20 via-[#A2D2FF]/40 to-[#023047]/10 rounded-full border-x-2 border-white/50 overflow-hidden shadow-inner">
            {/* Moving Water Particles */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={`drop-${i}`}
                className="absolute left-1/2 -translate-x-1/2 w-4 md:w-6 h-12 md:h-20 bg-gradient-to-b from-transparent via-white/80 to-transparent rounded-full water-drop blur-[1px]"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>

          {/* THE NODES (Stops along the waterfall) */}
          <div className="w-full flex flex-col gap-24 md:gap-32 relative z-10">
            {journeyNodes.map((node, index) => {
              const isLeft = node.align === 'left';
              const isHovered = hoveredNode === node.id;
              
              return (
                <div 
                  key={node.id} 
                  className={`flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-0`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  
                  {/* Left Side (Empty space or Card) */}
                  <div className={`w-full md:w-5/12 flex ${isLeft ? 'justify-end' : 'justify-start md:justify-end order-3 md:order-1'} px-4 md:px-8`}>
                    {isLeft && (
                      <div className={`w-full max-w-sm glass-card rounded-3xl p-6 relative interactive-hover transition-all duration-500 ${isHovered ? 'border-[#A2D2FF] ring-4 ring-[#A2D2FF]/20' : 'border-white/80'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl text-white shadow-inner" style={{ backgroundColor: node.color }}>
                            <node.icon size={24} />
                          </div>
                          <div>
                            <h3 className="font-pixel text-2xl text-[#2C3E50]">{node.title}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{node.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                          {node.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {node.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300"
                              style={{ 
                                backgroundColor: isHovered ? `${node.color}15` : '#F8FAFC',
                                color: isHovered ? '#2C3E50' : '#64748B',
                                borderColor: isHovered ? `${node.color}30` : '#E2E8F0'
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Central Waterfall Pool (The Node) */}
                  <div className="w-full md:w-2/12 flex justify-center items-center relative order-2 z-20">
                    <div className="relative group cursor-crosshair">
                      {/* Ripple Effects */}
                      <div className="pool-ripple w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: node.waterColor }} />
                      <div className="pool-ripple w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ borderColor: node.waterColor, animationDelay: '1.5s' }} />
                      
                      {/* Central Glowing Stone/Pool */}
                      <div 
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-[0_0_30px_rgba(162,210,255,0.6)] flex items-center justify-center transition-all duration-500 z-10 relative`}
                        style={{ 
                          backgroundColor: isHovered ? node.color : '#FDFBF7',
                          transform: isHovered ? 'scale(1.15)' : 'scale(1)'
                        }}
                      >
                        <node.icon 
                          size={28} 
                          className={`transition-colors duration-500`}
                          style={{ color: isHovered ? '#FFF' : node.color }}
                        />
                        
                        {/* Sparkles on hover */}
                        {isHovered && (
                          <Sparkles size={20} className="absolute -top-2 -right-2 text-yellow-400 animate-spin-slow" />
                        )}
                      </div>
                      
                      {/* Connection Line to Card (Desktop only) */}
                      <div 
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-500 z-0 ${isLeft ? 'right-1/2' : 'left-1/2'}`}
                        style={{ 
                          width: isHovered ? '100px' : '40px',
                          backgroundColor: node.color,
                          opacity: isHovered ? 1 : 0.3
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Side (Empty space or Card) */}
                  <div className={`w-full md:w-5/12 flex ${!isLeft ? 'justify-start' : 'justify-end md:justify-start order-3'} px-4 md:px-8`}>
                    {!isLeft && (
                      <div className={`w-full max-w-sm glass-card rounded-3xl p-6 relative interactive-hover transition-all duration-500 ${isHovered ? 'border-[#A3C9A8] ring-4 ring-[#A3C9A8]/20' : 'border-white/80'}`}>
                         <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl text-white shadow-inner" style={{ backgroundColor: node.color }}>
                            <node.icon size={24} />
                          </div>
                          <div>
                            <h3 className="font-pixel text-2xl text-[#2C3E50]">{node.title}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{node.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                          {node.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {node.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300"
                              style={{ 
                                backgroundColor: isHovered ? `${node.color}15` : '#F8FAFC',
                                color: isHovered ? '#2C3E50' : '#64748B',
                                borderColor: isHovered ? `${node.color}30` : '#E2E8F0'
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
          
          {/* Waterfall End Pool (Decorative) */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-20 bg-gradient-to-t from-[#A2D2FF]/40 to-transparent rounded-[100%] blur-md flex items-center justify-center">
             <div className="w-32 h-10 border-2 border-white/50 rounded-[100%] pool-ripple" />
          </div>

        </div>
      </div>
    </section>
  );
}