"use client";

import { motion } from "framer-motion";
import { 
  Code2, Video, Music, MonitorPlay, 
  Map as MapIcon, Tent, Star, User
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const navItems = [
    { id: 'hero', label: 'Start', icon: Star },
    { id: 'about', label: 'Story', icon: User },
    { id: 'skills', label: 'Guilds', icon: MonitorPlay },
    { id: 'projects', label: 'Artifacts', icon: Code2 },
    { id: 'contact', label: 'Camp', icon: Tent }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
      <div className="glass-card px-4 py-3 flex items-center gap-2 md:gap-6 shadow-lg border-opacity-50 border-white/50 bg-white/60">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                ${activeSection === item.id 
                  ? 'bg-[#A3C9A8] text-white shadow-md transform scale-105' 
                  : 'text-slate-600 hover:bg-white hover:text-[#2C3E50] hover:-translate-y-1'
                }
              `}
            >
              <IconComponent size={18} className={activeSection === item.id ? 'animate-pulse' : ''} />
              <span className="hidden md:block font-medium text-sm tracking-wide">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
