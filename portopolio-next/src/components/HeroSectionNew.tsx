"use client";

import { Sparkles, Trees, MapIcon, ChevronRight } from "lucide-react";

export default function HeroSectionNew() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 z-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative">

        {/* 🌸 GIF DECORATION TOP RIGHT */}
        <div className="absolute top-16 right-4 md:right-20 w-64 md:w-80 opacity-80 pointer-events-none z-0 animate-float">
          <img
            src="/assets/gif/pokemon.gif"
            alt="pokemon gif"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 🌸 GIF DECORATION BOTTOM LEFT */}
        <div className="absolute bottom-0 left-0 w-52 md:w-72 opacity-60 pointer-events-none z-0 animate-float-slow">
          <img
            src="/assets/gif/cat.gif"
            alt="cat gif"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ✨ DECORATIVE ICONS */}
        <div className="absolute top-10 left-10 text-[#D4A373] animate-float opacity-70">
          <Sparkles size={40} />
        </div>

        <div className="absolute bottom-20 right-10 text-[#A2D2FF] animate-float-slow opacity-80">
          <Trees size={60} />
        </div>

        {/* 🪄 MAIN CARD */}
        <div className="glass-card p-10 md:p-16 max-w-3xl w-full flex flex-col items-center animate-fade-in-up mt-16 relative z-10">

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE2E4] text-[#D4A373] font-semibold text-sm mb-6 border border-[#FCD5D8] shadow-sm">
            <Sparkles size={14} className="animate-spin-slow" />
            Welcome to my digital world
          </div>

          {/* title */}
          <h1 className="font-pixel text-5xl md:text-7xl xl:text-8xl text-[#2C3E50] mb-6 drop-shadow-sm">
            <span className="block">Hello,</span>
            <span className="block text-[#A3C9A8]">Traveler.</span>
          </h1>

          {/* subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            I build immersive digital experiences through{" "}
            <strong className="text-[#A3C9A8]">code</strong>, craft stories
            with <strong className="text-[#A2D2FF]">visuals</strong>, and set
            the mood with <strong className="text-[#D4A373]">sound</strong>.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-[#2C3E50] text-white rounded-2xl font-semibold hover:bg-[#3d566e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Map
              <MapIcon
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>

            <a
              href="#about"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-[#2C3E50] border-2 border-[#E2E8F0] rounded-2xl font-semibold hover:border-[#A3C9A8] transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Read Story
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}