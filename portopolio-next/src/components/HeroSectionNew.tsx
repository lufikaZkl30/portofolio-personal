"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trees, MapIcon, ChevronRight } from "lucide-react";

export default function HeroSectionNew() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 z-10">
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative">
        
        {/* Animated GIF - Top Right Decoration */}
        <div className="absolute top-20 right-5 md:right-20 w-64 h-64 md:w-80 md:h-80 opacity-20 pointer-events-none z-0">
          <Image 
            src="/hero-animation.gif" 
            alt="Hero Animation"
            width={320}
            height={320}
            priority
            unoptimized
            className="w-full h-full object-contain" relative z-10
          />
        </div>

        {/* Animated GIF - Bottom Left Decoration */}
        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 opacity-15 pointer-events-none z-0">
          <Image 
            src="/hero-animation.gif" 
            alt="Hero Animation"
            width={288}
            height={288}
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Decorative Nature Elements around Hero */}
        <div className="absolute top-10 left-10 md:left-20 text-[#D4A373] animate-float opacity-70">
          <Sparkles size={40} />
        </div>
        <div className="absolute bottom-20 right-10 md:right-32 text-[#A2D2FF] animate-float-delayed opacity-80">
          <Trees size={60} />
        </div>

        {/* Main Content */}
        <div className="glass-card p-10 md:p-16 max-w-3xl w-full flex flex-col items-center animate-fade-in-up mt-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#FDE2E4] text-[#D4A373] font-semibold text-sm mb-6 border border-[#FCD5D8] shadow-sm flex items-center gap-2">
            <Sparkles size={14} className="fill-current animate-spin-slow" />
            <span>Welcome to my digital world</span>
          </div>
          
          <h1 className="font-pixel text-5xl md:text-7xl xl:text-8xl text-[#2C3E50] mb-6 drop-shadow-sm">
            <span className="block">Hello,</span>
            <span className="block text-[#A3C9A8]">Traveler.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            I build immersive digital experiences through <strong className="text-[#A3C9A8]">code</strong>, craft stories with <strong className="text-[#A2D2FF]">visuals</strong>, and set the mood with <strong className="text-[#D4A373]">sound</strong>.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-[#2C3E50] text-white rounded-2xl font-semibold hover:bg-[#3d566e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Map
              <MapIcon size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a href="#about" className="group flex items-center gap-2 px-8 py-4 bg-white text-[#2C3E50] border-2 border-[#E2E8F0] rounded-2xl font-semibold hover:border-[#A3C9A8] transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
              Read Story
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
