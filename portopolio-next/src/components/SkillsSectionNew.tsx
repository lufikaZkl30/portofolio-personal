"use client";

import { useState } from "react";
import { Code2, Video, Music, MonitorPlay, Sparkles } from "lucide-react";

export default function SkillsSectionNew() {
  const [activeGuild, setActiveGuild] = useState('code');

  const guilds = {
    code: {
      id: 'code',
      title: 'Coding Forest',
      icon: Code2,
      color: '#A3C9A8',
      skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Next.js', 'Tailwind CSS', 'Framer Motion', 'Git & GitHub']
    },
    edit: {
      id: 'edit',
      title: 'Editing Studio',
      icon: Video,
      color: '#A2D2FF',
      skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Storyboarding']
    },
    music: {
      id: 'music',
      title: 'Music Lake',
      icon: Music,
      color: '#D4A373',
      skills: ['Ableton Live', 'Synthesizers', 'Mixing', 'Mastering', 'Ambient Soundscapes', 'Foley']
    }
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 flex items-center z-10 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex items-center justify-end gap-4 mb-12">
            <div className="flex-grow h-px bg-gradient-to-l from-slate-300 to-transparent mr-4"></div>
            <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50]">The Guilds</h2>
            <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600 shadow-inner">
              <MonitorPlay size={24} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Guild Selection Tabs */}
            <div className="flex md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 md:w-1/3">
              {Object.values(guilds).map((guild) => {
                const Icon = guild.icon;
                const isActive = activeGuild === guild.id;
                return (
                  <button
                    key={guild.id}
                    onClick={() => setActiveGuild(guild.id)}
                    className={`
                      flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-[200px] md:min-w-0 text-left border-2
                      ${isActive 
                        ? 'bg-white shadow-lg border-transparent scale-105 z-10' 
                        : 'glass-card border-transparent hover:border-white/50 opacity-70 hover:opacity-100'}
                    `}
                    style={isActive ? { borderLeftColor: guild.color, borderLeftWidth: '6px' } : {}}
                  >
                    <div 
                      className={`p-3 rounded-xl transition-colors`}
                      style={{ backgroundColor: isActive ? guild.color : '#F1F5F9', color: isActive ? '#fff' : '#64748B' }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50]">{guild.title}</h3>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{guild.skills.length} Skills</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Guild Skills Display */}
            <div className="md:w-2/3">
              <div className="glass-card p-8 h-full bg-white/80 border-t-8 transition-colors duration-500" style={{ borderTopColor: guilds[activeGuild].color }}>
                <div className="flex items-center gap-3 mb-8">
                  {(() => {
                    const Icon = guilds[activeGuild].icon;
                    return <Icon size={32} color={guilds[activeGuild].color} />;
                  })()}
                  <h3 className="font-pixel text-3xl text-[#2C3E50]">{guilds[activeGuild].title} Inventory</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {guilds[activeGuild].skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-slate-300 transition-all hover:-translate-y-1 hover:shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: guilds[activeGuild].color }}></div>
                      <span className="font-medium text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                   <Sparkles className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                   <p className="text-sm text-slate-600 italic">
                     "Proficiency in these tools allows for seamless crafting of cohesive digital experiences, blending logic with aesthetics."
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
