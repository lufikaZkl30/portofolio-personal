'use client';

import React, { useState, useEffect } from 'react';
import { Code2, Music, Video } from 'lucide-react';

export default function SkillsSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [fountains, setFountains] = useState<Array<{ id: string; drops: Array<{ id: number; tx: string; ty: string; color: string }> }>>([]);

  // Generate fountain drops on hover
  const createFountain = (nodeId: string, nodeColor: string) => {
    const drops = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 40;
      const tx = `${Math.cos(angle) * distance}px`;
      const ty = `${Math.sin(angle) * distance}px`;
      return {
        id: i,
        tx,
        ty,
        color: nodeColor
      };
    });
    
    setFountains(prev => [...prev, { id: nodeId, drops }]);
    setTimeout(() => {
      setFountains(prev => prev.filter(f => f.id !== nodeId));
    }, 1000);
  };

  const handleNodeHover = (nodeId: string, nodeColor: string) => {
    setHoveredNode(nodeId);
    createFountain(nodeId, nodeColor);
  };

  const journeyNodes = [
    {
      id: 'music',
      title: 'The Spring of Sound',
      subtitle: 'Music Production',
      icon: Music,
      color: '#D4A373',
      align: 'left',
      desc: 'Mata air inspirasi tempat saya meracik nada, harmoni, dan ambient soundscapes.',
      skills: ['Ableton Live', 'Synthesizers', 'Mixing & Mastering', 'Foley & Sound Design']
    },
    {
      id: 'code',
      title: 'The Logic River',
      subtitle: 'Web Development',
      icon: Code2,
      color: '#A3C9A8',
      align: 'right',
      desc: 'Arus deras tempat logika dan desain mengalir menjadi pengalaman interaktif.',
      skills: ['React & Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Framer Motion']
    },
    {
      id: 'edit',
      title: 'The Visual Delta',
      subtitle: 'Creative Editing',
      icon: Video,
      color: '#A2D2FF',
      align: 'left',
      desc: 'Muara tempat suara dan interaksi disatukan menjadi mahakarya sinematik.',
      skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics']
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 flex flex-col items-center z-10 font-sans overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .font-pixel {
          font-family: 'VT323', monospace;
          letter-spacing: 0.05em;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          background: rgba(255, 255, 255, 0.85);
        }

        /* Fountain Animation */
        @keyframes fountain-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
          }
        }

        .fountain-drop {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: fountain-burst 1s ease-out forwards;
        }

        /* Water Droplet Splash */
        @keyframes water-splash {
          0% {
            opacity: 0.8;
            transform: translateY(-20px) scale(1);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateY(30px) scale(0.3);
          }
        }

        .water-splash {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          animation: water-splash 1.2s ease-in forwards;
        }

        .fountain-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Mist Animation */
        @keyframes mist-float {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(-20px);
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translateY(40px) translateX(20px);
          }
        }

        .mist-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%);
          animation: mist-float 3s ease-in-out infinite;
          filter: blur(8px);
        }

        .mist-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#F0F7F4] to-[#FDFBF7] -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F4FF] border border-[#A2D2FF]/50 text-[#023047] mb-4 shadow-sm">
             <span className="font-bold text-sm tracking-widest uppercase">Skill Journey</span>
          </div>
          <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50]">The River of Creativity</h2>
          <p className="text-slate-500 mt-4 max-w-md font-medium">Ikuti aliran perjalananku dari meracik nada hingga merangkai kode dan visual.</p>
        </div>

        {/* Simple Alternating Layout */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Center Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#D4A373]/20 via-[#A2D2FF]/40 to-[#023047]/10 z-0" />

          {/* Skills Journey */}
          <div className="w-full flex flex-col gap-16 md:gap-24 relative z-10">
            {journeyNodes.map((node) => {
              const isLeft = node.align === 'left';
              const isHovered = hoveredNode === node.id;
              
              return (
                <div 
                  key={node.id}
                  className="w-full"
                  onMouseEnter={() => handleNodeHover(node.id, node.color)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Desktop Layout - 3 Column Grid */}
                  <div className="hidden md:flex items-center justify-center gap-0 w-full">
                    
                    {/* Left Column - 40% */}
                    <div className="w-5/12 flex justify-end pr-8">
                      {isLeft && (
                        <div className="w-full max-w-sm glass-card rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div 
                              className="p-3 rounded-xl text-white shadow-inner transition-all duration-300 flex-shrink-0"
                              style={{ 
                                backgroundColor: node.color,
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                              }}
                            >
                              <node.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-pixel text-xl md:text-2xl text-[#2C3E50]">{node.title}</h3>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{node.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                            {node.desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {node.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300"
                                style={{ 
                                  backgroundColor: isHovered ? `${node.color}20` : '#F8FAFC',
                                  color: '#2C3E50',
                                  borderColor: isHovered ? node.color : '#E2E8F0'
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center Column - 20% */}
                    <div className="w-2/12 flex justify-center items-center relative">
                      {/* Mist Layer */}
                      <div className="mist-layer w-32 h-32 flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={`mist-${i}`}
                            className="mist-particle"
                            style={{
                              width: `${20 + i * 8}px`,
                              height: `${20 + i * 8}px`,
                              top: `${10 + i * 5}px`,
                              left: `${15 + i * 3}px`,
                              animationDelay: `${i * 0.4}s`,
                              animationDuration: `${2.5 + i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>

                      {/* Fountain Container */}
                      <div className="fountain-container w-24 h-24 flex items-center justify-center">
                        {fountains.map(fountain => 
                          fountain.id === node.id && fountain.drops.map(drop => (
                            <div
                              key={`${fountain.id}-${drop.id}`}
                              className="fountain-drop"
                              style={{
                                '--tx': drop.tx,
                                '--ty': drop.ty,
                                backgroundColor: drop.color
                              } as React.CSSProperties}
                            />
                          ))
                        )}
                      </div>

                      {/* Main Dot */}
                      <div 
                        className="absolute w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 z-20"
                        style={{ 
                          backgroundColor: isHovered ? node.color : '#FDFBF7',
                          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                          boxShadow: isHovered ? `0 0 20px ${node.color}80` : '0 0 0 rgba(0,0,0,0)'
                        }}
                      >
                        <node.icon 
                          size={24}
                          style={{ color: isHovered ? '#FFF' : node.color }}
                          className="transition-colors duration-500"
                        />
                      </div>
                    </div>

                    {/* Right Column - 40% */}
                    <div className="w-5/12 flex justify-start pl-8">
                      {!isLeft && (
                        <div className="w-full max-w-sm glass-card rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div 
                              className="p-3 rounded-xl text-white shadow-inner transition-all duration-300 flex-shrink-0"
                              style={{ 
                                backgroundColor: node.color,
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                              }}
                            >
                              <node.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-pixel text-xl md:text-2xl text-[#2C3E50]">{node.title}</h3>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{node.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                            {node.desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {node.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300"
                                style={{ 
                                  backgroundColor: isHovered ? `${node.color}20` : '#F8FAFC',
                                  color: '#2C3E50',
                                  borderColor: isHovered ? node.color : '#E2E8F0'
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

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-center justify-center px-4 w-full">
                    <div className="w-full max-w-sm glass-card rounded-3xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="p-3 rounded-xl text-white shadow-inner transition-all duration-300 flex-shrink-0"
                          style={{ 
                            backgroundColor: node.color,
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}
                        >
                          <node.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-pixel text-xl text-[#2C3E50]">{node.title}</h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{node.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                        {node.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {node.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300"
                            style={{ 
                              backgroundColor: isHovered ? `${node.color}20` : '#F8FAFC',
                              color: '#2C3E50',
                              borderColor: isHovered ? node.color : '#E2E8F0'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}