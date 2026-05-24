"use client";

// import { motion } from "framer-motion";
import { User, Trees, Mountain, Sparkles } from "lucide-react";

export default function AboutSectionNew() {
  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#A2D2FF] flex items-center justify-center text-white shadow-inner">
              <User size={24} />
            </div>
            <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50]">Chapter 1: The Story</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#A2D2FF] to-transparent ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Illustration/Avatar Area */}
            <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#F4F9F5] rounded-3xl transform rotate-3 border-4 border-white shadow-xl interactive-hover"></div>
              <div className="absolute inset-0 bg-[#FDE2E4] rounded-3xl transform -rotate-2 border-4 border-white shadow-xl interactive-hover z-10 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                 {/* Abstract representation of the creator */}
                 <div className="w-32 h-32 rounded-full bg-white mb-6 shadow-inner flex items-center justify-center border-4 border-[#FCD5D8]">
                    <img
                      src="/assets/images/me-lufika.png"
                      alt="my photo"
                      className="w-full h-full object-cover rounded-full"
                    />
                 </div>
                 <h3 className="font-pixel text-2xl text-[#2C3E50] mb-2">LUFIKA AYU FATIMAH</h3>
                 <p className="text-slate-600 text-sm mb-4">Multidisciplinary Creator</p>
                 <p className="text-slate-600 text-xs italic">"Crafting cozy corners of the internet, one pixel at a time."</p>
                 <p className="text-slate-600 text-sm">Level 99 Multidisciplinary Artist</p>
                 
                 <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
                    <Trees className="text-[#A3C9A8] opacity-50" size={24} />
                    <Mountain className="text-[#A2D2FF] opacity-50" size={24} />
                 </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="glass-card p-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  I don't just build websites; I craft <strong className="text-[#A3C9A8]">digital environments</strong>. 
                  My journey started with a fascination for how things look, moved into how they sound, and finally settled on how they work together to make people feel something.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Whether I'm writing React components, cutting video frames, or layering synth tracks, my goal is always to create a cozy, memorable space on the internet.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 glass-card p-4 flex flex-col items-center justify-center text-center interactive-hover border-t-4 border-[#A3C9A8]">
                  <span className="font-pixel text-3xl text-[#2C3E50]">3+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Exploring</span>
                </div>
                <div className="flex-1 glass-card p-4 flex flex-col items-center justify-center text-center interactive-hover border-t-4 border-[#A2D2FF]">
                  <span className="font-pixel text-3xl text-[#2C3E50]">30+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">CREATIVE PROJECTS</span>
                </div>
                <div className="flex-1 glass-card p-4 flex flex-col items-center justify-center text-center interactive-hover border-t-4 border-[#D4A373]">
                  <span className="font-pixel text-3xl text-[#2C3E50]">∞</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">IDEAS & DAYDREAMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
