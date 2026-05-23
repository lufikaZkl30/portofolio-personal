"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Video, Music, Cloud, Trees, Tent, MapIcon, Star, ArrowUpRight } from "lucide-react";

interface Island {
  id: string;
  title: string;
  color: string;
  darkColor: string;
  position: string;
  size: string;
  icon: any;
  decor: any;
  animationDelay: string;
  borderRadius: string;
}

export default function ProjectsSectionNew() {
  const [mapState, setMapState] = useState<'map' | 'zooming_in' | 'island' | 'zooming_out'>('map'); 
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Eco-Tracker App",
      category: "code",
      desc: "A gamified web app to track daily carbon footprint. Built to encourage sustainable habits through a cozy UI.",
      tech: ["React", "Tailwind", "Chart.js"],
      color: "#A3C9A8",
      icon: Trees
    },
    {
      id: 2,
      title: "Midnight Lo-Fi",
      category: "music",
      desc: "A 4-track EP of ambient beats designed for late-night coding sessions and studying.",
      tech: ["Ableton", "Analog Synths", "Foley"],
      color: "#D4A373",
      icon: Music
    },
    {
      id: 3,
      title: "Indie Game Trailer",
      category: "edit",
      desc: "Kinetic typography and fast-paced editing for an upcoming pixel-art indie game release.",
      tech: ["Premiere", "After Effects"],
      color: "#A2D2FF",
      icon: Video
    },
    {
      id: 4,
      title: "Weather Station UI",
      category: "code",
      desc: "A beautifully animated weather dashboard that changes its visual theme based on live weather data.",
      tech: ["Next.js", "Framer Motion", "API"],
      color: "#A3C9A8",
      icon: Cloud
    }
  ];

  const islands: Island[] = [
    {
      id: 'code',
      title: 'Web Dev Village',
      color: '#A3C9A8',
      darkColor: '#7A9D7E',
      position: 'top-[8%] left-[5%] md:top-[15%] md:left-[12%]',
      size: 'w-44 h-44 md:w-60 md:h-60',
      icon: Code2,
      decor: Trees,
      animationDelay: '0s',
      borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
    },
    {
      id: 'edit',
      title: 'Creative Studio',
      color: '#FDE2E4',
      darkColor: '#D3A5A9',
      position: 'bottom-[5%] left-[50%] -translate-x-1/2 md:bottom-[10%]',
      size: 'w-48 h-48 md:w-72 md:h-72',
      icon: Video,
      decor: Tent,
      animationDelay: '1.5s',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
    },
    {
      id: 'music',
      title: 'Music Lake',
      color: '#A2D2FF',
      darkColor: '#7AABC8',
      position: 'top-[15%] right-[5%] md:top-[20%] md:right-[10%]',
      size: 'w-36 h-36 md:w-52 md:h-52',
      icon: Music,
      decor: Star,
      animationDelay: '0.7s',
      borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%'
    }
  ];

  const handleIslandClick = (island: Island) => {
    setSelectedIsland(island);
    setMapState('zooming_in');
    setTimeout(() => {
      setMapState('island');
    }, 800);
  };

  const handleBackToMap = () => {
    setMapState('zooming_out');
    setTimeout(() => {
      setMapState('map');
      setSelectedIsland(null);
    }, 800);
  };

  const filteredProjects = selectedIsland ? projects.filter(p => p.category === selectedIsland.id) : [];

  return (
    <section id="projects" className="relative min-h-screen py-24 z-10 flex flex-col items-center justify-center">
      <style>{`
        .water-ripple {
          position: absolute;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: ripple 4s linear infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; border-width: 3px; }
          100% { transform: scale(2.5); opacity: 0; border-width: 1px; }
        }
        .island-shadow {
          box-shadow: inset -10px -15px 0px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15);
        }
        .island-hover-glow {
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .island-hover-glow:hover {
          transform: scale(1.08) translateY(-15px);
          filter: brightness(1.05);
          box-shadow: inset -10px -15px 0px rgba(0,0,0,0.1), 0 30px 50px rgba(255,255,255,0.6);
          z-index: 20;
        }
        .cinematic-overlay {
          position: absolute;
          inset: 0;
          background: #FDFBF7;
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-6xl relative">
        
        {/* Section Header */}
        <div className={`flex flex-col items-center mb-10 text-center transition-all duration-700 ${mapState === 'map' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8 pointer-events-none absolute left-1/2 -translate-x-1/2'}`}>
          <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50] mb-4">Project Island World Map</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm">
             <MapIcon size={16} className="text-[#A2D2FF]" />
             <span className="text-slate-600 font-medium tracking-wide text-sm">Select an island region to explore artifacts</span>
          </div>
        </div>

        {/* Immersive Map Container */}
        <div className="relative w-full h-[600px] md:h-[750px] bg-gradient-to-b from-[#E0F4FF] to-[#C9E9F6] rounded-[40px] border-8 border-white shadow-2xl overflow-hidden">
          
          {/* Cinematic Fade Overlay */}
          <div className="cinematic-overlay" style={{ opacity: (mapState === 'zooming_in' || mapState === 'zooming_out') ? 1 : 0 }} />

          {/* LAYER 1: The Map View */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out origin-center ${mapState === 'map' ? 'opacity-100 scale-100 z-10' : mapState === 'zooming_in' ? 'opacity-0 scale-150 z-0 pointer-events-none' : 'opacity-0 scale-90 z-0 pointer-events-none'}`}>
            
            {/* Ambient Water Environment */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-20 mix-blend-overlay"></div>
            <div className="water-ripple top-[20%] left-[30%] w-32 h-32"></div>
            <div className="water-ripple top-[60%] right-[20%] w-48 h-48" style={{ animationDelay: '1.5s' }}></div>
            <div className="water-ripple bottom-[30%] left-[15%] w-24 h-24" style={{ animationDelay: '2.5s' }}></div>

            {/* Drifting Clouds overlaying the map */}
            <div className="absolute top-[15%] left-0 text-white/80 animate-drift pointer-events-none drop-shadow-md" style={{ animationDuration: '40s' }}><Cloud size={90} fill="currentColor" /></div>
            <div className="absolute top-[50%] left-0 text-white/60 animate-drift pointer-events-none drop-shadow-md" style={{ animationDuration: '60s', animationDelay: '-15s' }}><Cloud size={140} fill="currentColor" /></div>

            {/* Interactive Islands */}
            {islands.map((island) => {
              const Decor = island.decor;
              const IconComp = island.icon;
              return (
                <div
                  key={island.id}
                  onClick={() => handleIslandClick(island)}
                  className={`absolute ${island.position} ${island.size} cursor-pointer island-hover-glow island-shadow animate-float flex flex-col items-center justify-center group`}
                  style={{
                    backgroundColor: island.color,
                    animationDelay: island.animationDelay,
                    border: '6px solid rgba(255,255,255,0.6)',
                    borderRadius: island.borderRadius,
                  }}
                >
                  {/* Island Decor */}
                  <Decor size={36} className="absolute top-4 left-6 text-white/50 drop-shadow-sm" />
                  <Decor size={24} className="absolute bottom-8 right-6 text-white/50 drop-shadow-sm" />
                  <Decor size={16} className="absolute top-1/2 left-4 text-white/40 drop-shadow-sm" />

                  {/* Main Icon Plate */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center mb-3 transform group-hover:-translate-y-3 transition-transform duration-500 relative z-10 border-4 border-white">
                    <IconComp size={36} style={{ color: island.darkColor }} className="drop-shadow-sm" />
                    
                    {/* Glowing ping effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-50"></div>
                  </div>

                  {/* Island Title Label */}
                  <span className="font-pixel text-lg md:text-xl text-center px-5 py-2 rounded-2xl bg-white/95 text-slate-700 shadow-md transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {island.title}
                  </span>

                  {/* Floating environmental particles */}
                  <div className="absolute top-[10%] right-[20%] w-3 h-3 bg-white rounded-full animate-pulse opacity-80 blur-[1px]"></div>
                  <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-white rounded-full animate-pulse opacity-60 blur-[1px]" style={{ animationDelay: '1s'}}></div>
                </div>
              );
            })}
          </div>

          {/* LAYER 2: Island Projects Details View */}
          <div className={`absolute inset-0 bg-[#FDFBF7] transition-opacity duration-1000 overflow-y-auto custom-scrollbar ${mapState === 'island' ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
            {selectedIsland && (
              <div className="min-h-full p-6 md:p-12 relative flex flex-col">
                
                {/* Subtle themed background glow */}
                <div className="absolute top-0 left-0 w-full h-96 opacity-30 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${selectedIsland.color}, transparent)` }}></div>

                {/* Navigation & Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-10">
                  <button
                    onClick={handleBackToMap}
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2C3E50] text-slate-600 hover:text-[#2C3E50] transition-all shadow-sm hover:shadow-md self-start md:self-auto"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#2C3E50] group-hover:text-white transition-colors">
                      <MapIcon size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">Return to Map</span>
                  </button>

                  <div className="flex items-center gap-4 bg-white/80 px-6 py-3 rounded-2xl shadow-sm border border-white backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-inner" style={{ backgroundColor: selectedIsland.color }}>
                      <selectedIsland.icon size={20} />
                    </div>
                    <h3 className="font-pixel text-2xl md:text-3xl text-[#2C3E50]">{selectedIsland.title}</h3>
                  </div>
                </div>

                {/* Filtered Artifacts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 flex-grow">
                  {filteredProjects.length > 0 ? filteredProjects.map((project, idx) => (
                    <div 
                      key={project.id} 
                      className="glass-card bg-white/70 flex flex-col group interactive-hover relative overflow-hidden border-2 border-transparent hover:border-slate-200 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {/* Project Preview Area */}
                      <div 
                        className="w-full h-48 md:h-56 relative overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-500 origin-top"
                        style={{
                          background: `linear-gradient(135deg, ${selectedIsland.color}20 0%, ${selectedIsland.color}40 100%)`,
                          borderBottom: `2px solid ${selectedIsland.color}30`
                        }}
                      >
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                          <div className="absolute top-4 right-4 w-20 h-20 rounded-full" style={{ backgroundColor: selectedIsland.color, opacity: 0.3 }}></div>
                          <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full" style={{ backgroundColor: selectedIsland.color, opacity: 0.2 }}></div>
                          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-lg transform rotate-45" style={{ backgroundColor: selectedIsland.color, opacity: 0.25 }}></div>
                        </div>

                        {/* Project Icon Large */}
                        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                          <div 
                            className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500"
                            style={{ backgroundColor: selectedIsland.color }}
                          >
                            <project.icon size={48} />
                          </div>
                          <span className="text-xs font-bold tracking-widest uppercase text-slate-500 px-4">{project.category}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col flex-grow relative z-10">
                        {/* Decorative Background Blur */}
                        <div 
                          className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                          style={{ backgroundColor: selectedIsland.color }}
                        ></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className="flex-1">
                            <h3 className="font-pixel text-3xl text-[#2C3E50] mb-4 group-hover:text-slate-800 transition-colors">{project.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                              {project.desc}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto relative z-10 pt-6 flex items-center justify-between border-t border-slate-200/50">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                              <span key={i} className="text-xs font-bold tracking-wide px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg shadow-inner">
                                {t}
                              </span>
                            ))}
                          </div>
                          <button 
                            className="w-12 h-12 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl flex-shrink-0"
                            style={{ backgroundColor: selectedIsland.color }}
                          >
                            <ArrowUpRight size={22} className="text-slate-800" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-slate-400">
                      <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                        <Trees size={40} className="opacity-40" />
                      </div>
                      <h4 className="font-pixel text-2xl text-slate-500 mb-2">Uncharted Territory</h4>
                      <p className="font-medium">No artifacts discovered in this region yet. Check back soon!</p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
