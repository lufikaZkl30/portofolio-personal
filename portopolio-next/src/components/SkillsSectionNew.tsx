'use client';

import React, { useState, useEffect } from 'react';
import { Code2, Music, Video, Sparkles } from 'lucide-react';

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
      startYear: 2019,
      desc: 'A wellspring of inspiration where I craft melodies, harmonies, and ambient soundscapes.',
      skills: ['Ableton Live', 'Synthesizers', 'Mixing & Mastering', 'Foley & Sound Design']
    },
    {
      id: 'code',
      title: 'The Logic River',
      subtitle: 'Web Development',
      icon: Code2,
      color: '#A3C9A8',
      align: 'right',
      startYear: 2022,
      desc: 'A rushing stream where logic and design flow into an interactive experience.',
      skills: ['React & Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Framer Motion']
    },
    {
      id: 'edit',
      title: 'The Visual Delta',
      subtitle: 'Creative Editing',
      icon: Video,
      color: '#A2D2FF',
      align: 'left',
      startYear: 2025,
      desc: 'The mouth where sound and interaction are united into a cinematic masterpiece.',
      skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics']
    }
  ];

  return (
  <section
    id="skills"
    className="relative min-h-screen py-24 flex flex-col items-center z-10 overflow-hidden"
  >
    {/* ========================= */}
    {/* STYLES */}
    {/* ========================= */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      .font-pixel {
        font-family: 'VT323', monospace;
        letter-spacing: 0.05em;
      }

      /* ========================= */
      /* BACKGROUND */
      /* ========================= */
      .river-bg {
        background:
          radial-gradient(circle at top, rgba(255,255,255,0.9), transparent 40%),
          linear-gradient(to bottom, #FDFBF7, #EEF8F5, #FDFBF7);
      }

      /* ========================= */
      /* GLASS CARD */
      /* ========================= */
      .glass-card {
        position: relative;
        background: rgba(255,255,255,0.65);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(255,255,255,0.7);
        box-shadow:
          0 10px 30px rgba(0,0,0,0.05),
          inset 0 1px 0 rgba(255,255,255,0.5);
        transition: all 0.45s ease;
      }

      .glass-card:hover {
        transform: translateY(-6px) scale(1.02);
        background: rgba(255,255,255,0.78);
        box-shadow:
          0 20px 40px rgba(0,0,0,0.08),
          0 0 25px rgba(162,210,255,0.25);
      }

      /* ========================= */
      /* MAIN RIVER */
      /* ========================= */
      .river-line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 10px;
        transform: translateX(-50%);
        border-radius: 999px;
        overflow: hidden;
        background:
          linear-gradient(
            to bottom,
            rgba(180,240,255,0.2),
            rgba(120,220,255,0.7),
            rgba(180,240,255,0.2)
          );
        box-shadow:
          0 0 30px rgba(162,210,255,0.35),
          0 0 60px rgba(162,210,255,0.2);
      }

      .river-flow {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(
            to bottom,
            transparent,
            rgba(255,255,255,0.8),
            transparent,
            rgba(255,255,255,0.6),
            transparent
          );
        background-size: 100% 220px;
        animation: riverFlow 5s linear infinite;
        opacity: 0.8;
      }

      @keyframes riverFlow {
        from {
          background-position: 0 0;
        }

        to {
          background-position: 0 220px;
        }
      }

      /* ========================= */
      /* FLOATING PARTICLES */
      /* ========================= */
      .particle {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: rgba(255,255,255,0.9);
        box-shadow: 0 0 10px rgba(255,255,255,0.9);
        animation: floatParticle linear infinite;
      }

      @keyframes floatParticle {
        from {
          transform: translateY(0px);
          opacity: 0;
        }

        20% {
          opacity: 1;
        }

        100% {
          transform: translateY(-120px);
          opacity: 0;
        }
      }

      /* ========================= */
      /* FOUNTAIN */
      /* ========================= */
      .fountain-core {
        position: relative;
        width: 90px;
        height: 90px;
        border-radius: 999px;
        background:
          radial-gradient(circle, #ffffff 0%, #b7ecff 35%, #7fd8ff 100%);
        box-shadow:
          0 0 30px rgba(162,210,255,0.6),
          0 0 80px rgba(162,210,255,0.4);
      }

      .fountain-ring {
        position: absolute;
        inset: -12px;
        border-radius: 999px;
        border: 2px solid rgba(162,210,255,0.4);
        animation: ripple 3s linear infinite;
      }

      .fountain-ring:nth-child(2) {
        animation-delay: 1s;
      }

      .fountain-ring:nth-child(3) {
        animation-delay: 2s;
      }

      @keyframes ripple {
        from {
          transform: scale(0.8);
          opacity: 0.8;
        }

        to {
          transform: scale(1.8);
          opacity: 0;
        }
      }

      /* ========================= */
      /* NODE */
      /* ========================= */
      .river-node {
        position: relative;
      }

      .river-node::before {
        content: '';
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(162,210,255,0.4), transparent);
        filter: blur(15px);
        z-index: -1;
      }

      /* ========================= */
      /* MOBILE */
      /* ========================= */
      @media (max-width: 768px) {
        .river-line {
          left: 24px;
        }
      }
    `}</style>

    {/* ========================= */}
    {/* BACKGROUND */}
    {/* ========================= */}
    <div className="absolute inset-0 river-bg -z-20" />

    {/* floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 100}px`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <div className="flex flex-col items-center text-center mb-28 relative">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F4FF] border border-[#A2D2FF]/50 text-[#023047] mb-6 shadow-sm">
          <span className="font-bold text-sm tracking-widest uppercase">
            Skill Journey
          </span>
        </div>

        <h2 className="font-pixel text-5xl md:text-6xl text-[#2C3E50]">
          The River of Creativity
        </h2>

        <p className="text-slate-500 mt-5 max-w-md font-medium leading-relaxed">
          Follow my journey from composing music to crafting code and visuals.
        </p>

        {/* Fountain */}
        <div className="relative mt-16 flex items-center justify-center">
          <div className="fountain-core flex items-center justify-center">
            <Sparkles className="text-white w-10 h-10" />

            <div className="fountain-ring" />
            <div className="fountain-ring" />
            <div className="fountain-ring" />
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* TIMELINE */}
      {/* ========================= */}
      <div className="relative">

        {/* river */}
        <div className="river-line hidden md:block">
          <div className="river-flow" />
        </div>

        <div className="flex flex-col gap-24 md:gap-36 relative z-10">

          {journeyNodes.map((node) => {
            const isLeft = node.align === "left";
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                className="relative"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >

                {/* DESKTOP */}
                <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-10">

                  {/* LEFT */}
                  <div className="flex justify-end">
                    {isLeft ? (
                      <div className="glass-card rounded-[2rem] p-7 max-w-sm w-full">

                        <div className="flex items-center gap-4 mb-5">
                          <div
                            className="p-4 rounded-2xl text-white shadow-lg"
                            style={{
                              backgroundColor: node.color,
                            }}
                          >
                            <node.icon size={24} />
                          </div>

                          <div>
                            <h3 className="font-pixel text-3xl text-[#2C3E50]">
                              {node.title}
                            </h3>

                            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                              {node.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-5">
                          {node.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {node.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold border"
                              style={{
                                borderColor: `${node.color}50`,
                                backgroundColor: `${node.color}15`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <div
                          className="px-6 py-4 rounded-2xl text-white text-center shadow-lg"
                          style={{
                            backgroundColor: `${node.color}30`,
                            borderLeft: `4px solid ${node.color}`,
                          }}
                        >
                          <p className="font-pixel text-2xl font-bold" style={{ color: node.color }}>
                            {(node as any).startYear}
                          </p>
                          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
                            - NOW
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER */}
                  <div className="river-node relative flex items-center justify-center">

                    {/* ripple */}
                    <div
                      className="absolute w-24 h-24 rounded-full animate-ping opacity-20"
                      style={{
                        backgroundColor: node.color,
                      }}
                    />

                    {/* node */}
                    <div
                      className="w-16 h-16 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isHovered ? node.color : "#fff",
                        boxShadow: `0 0 30px ${node.color}60`,
                      }}
                    >
                      <node.icon
                        size={28}
                        style={{
                          color: isHovered ? "#fff" : node.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col justify-center items-start">
                    {!isLeft ? (
                      <div className="glass-card rounded-[2rem] p-7 max-w-sm w-full">

                        <div className="flex items-center gap-4 mb-5">
                          <div
                            className="p-4 rounded-2xl text-white shadow-lg"
                            style={{
                              backgroundColor: node.color,
                            }}
                          >
                            <node.icon size={24} />
                          </div>

                          <div>
                            <h3 className="font-pixel text-3xl text-[#2C3E50]">
                              {node.title}
                            </h3>

                            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                              {node.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-5">
                          {node.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {node.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold border"
                              style={{
                                borderColor: `${node.color}50`,
                                backgroundColor: `${node.color}15`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <div
                          className="px-6 py-4 rounded-2xl text-white text-center shadow-lg"
                          style={{
                            backgroundColor: `${node.color}30`,
                            borderLeft: `4px solid ${node.color}`,
                          }}
                        >
                          <p className="font-pixel text-2xl font-bold" style={{ color: node.color }}>
                            {(node as any).startYear}
                          </p>
                          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
                            - NOW
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* MOBILE */}
                <div className="md:hidden pl-14 relative">

                  {/* mobile river */}
                  <div className="absolute left-6 top-0 bottom-0 w-[6px] rounded-full bg-gradient-to-b from-cyan-200 via-sky-300 to-cyan-200" />

                  {/* mobile node */}
                  <div
                    className="absolute left-0 top-8 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-xl"
                    style={{
                      backgroundColor: node.color,
                    }}
                  >
                    <node.icon size={20} color="#fff" />
                  </div>

                  <div className="glass-card rounded-[2rem] p-6">

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-xl text-white"
                        style={{
                          backgroundColor: node.color,
                        }}
                      >
                        <node.icon size={22} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-pixel text-2xl text-[#2C3E50]">
                          {node.title}
                        </h3>

                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                          {node.subtitle}
                        </p>
                      </div>

                      <div className="flex-shrink-0 text-center">
                        <p className="font-pixel text-2xl font-bold" style={{ color: node.color }}>
                          {(node as any).startYear}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                          - NOW
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-5 leading-relaxed">
                      {node.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {node.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold border"
                          style={{
                            borderColor: `${node.color}50`,
                            backgroundColor: `${node.color}15`,
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
);}