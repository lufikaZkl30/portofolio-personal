"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-32 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      
      {/* Left Visual Environment (Island & Character) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 w-full relative h-[400px] flex items-center justify-center order-2 md:order-1"
      >
        {/* Floating Stars */}
        <div className="absolute top-4 left-10 text-white animate-blink text-xs">✨</div>
        <div className="absolute bottom-10 left-20 text-accent animate-pulse text-sm">✦</div>
        <div className="absolute top-1/3 right-10 text-gold animate-blink text-[10px]">✨</div>
        
        {/* Pixel Floating Island & Character */}
        <motion.div className="relative z-10 flex flex-col items-center animate-float mt-10">
          
          {/* Speech Bubble */}
          <div className="absolute -top-16 -right-12 glass-panel pixel-border p-2 rounded-lg bg-black/80 z-30">
            <p className="font-pixel text-[8px] text-white">READY FOR<br/>QUEST!</p>
            <div className="absolute -bottom-2 left-4 w-2 h-2 bg-black border-r-2 border-b-2 border-white/20 transform rotate-45"></div>
          </div>
          
          {/* Health Bar / Life UI */}
          <div className="absolute -top-6 flex gap-1 z-30">
            <span className="text-accent text-sm">❤️</span>
            <span className="text-accent text-sm">❤️</span>
            <span className="text-accent text-sm">❤️</span>
          </div>

          {/* Character Placeholer */}
          <div className="w-32 h-32 md:w-40 md:h-40 relative z-20 flex items-center justify-center text-7xl drop-shadow-[0_0_15px_rgba(176,38,255,0.6)] group">
            🧙‍♀️
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10 group-hover:bg-primary/40 transition-colors"></div>
          </div>
          
          {/* Island Platform */}
          <div className="w-48 md:w-56 h-12 bg-[#2c3e50] border-b-4 border-r-4 border-[#1a252f] rounded-[50%] mt-[-15px] shadow-[0_30px_40px_rgba(0,0,0,0.9)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#27ae60]"></div>
            <div className="absolute top-2 left-2 w-4 h-2 bg-[#2ecc71]"></div>
            <div className="absolute top-1 right-8 w-3 h-2 bg-[#2ecc71]"></div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Center Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-[1.5] w-full flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 z-20"
      >
        <p className="font-pixel text-[10px] md:text-xs text-accent mb-4 tracking-widest bg-black/50 px-3 py-1 pixel-border inline-block">
          UI/UX Designer • Front-End Developer • AI Engineer
        </p>
        
        <h1 className="font-pixel text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-[4px_4px_0_theme('colors.primary')]">
          HI, I'M <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-gold animate-pulse">LUFIKA AYU FATIMAH</span>
        </h1>
        
        <div className="rpg-panel p-4 inline-block mb-8 pixel-border">
          <p className="font-mono text-sm md:text-base text-muted">
            &lt; crafting immersive digital experiences &gt;<br/>
            &lt; with code &amp; creativity <span className="animate-blink text-primary">_</span>/&gt;
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects" className="pixel-border bg-primary/20 px-6 py-4 font-pixel text-[10px] md:text-xs text-white hover:bg-primary transition-colors neon-glow group flex items-center gap-3">
            <span className="text-gold group-hover:animate-bounce">★</span> VIEW WORK
          </a>
          <a href="#contact" className="pixel-border px-6 py-4 font-pixel text-[10px] md:text-xs text-white hover:bg-white/10 hover:border-gold transition-colors">
            CONTACT ME
          </a>
        </div>
      </motion.div>

      {/* Right RPG Stats Panel */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 w-full hidden lg:flex flex-col items-end order-3 z-20"
      >
        <div className="rpg-panel p-5 w-64 animate-float-delayed">
          <div className="font-pixel text-[10px] text-gold mb-4 border-b-2 border-white/10 pb-2 text-center">
            [ INVENTORY / STATS ]
          </div>
          
          <div className="space-y-4">
            {[
              { label: "CREATIVITY", val: "95%", color: "bg-accent" },
              { label: "LOGIC", val: "90%", color: "bg-secondary" },
              { label: "DESIGN", val: "88%", color: "bg-primary" },
              { label: "CODING", val: "85%", color: "bg-gold" },
              { label: "PROBLEM SOLVING", val: "92%", color: "bg-white" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between font-mono text-[10px] text-white mb-1">
                  <span>{stat.label}</span>
                  <span className="text-muted">{stat.val}</span>
                </div>
                <div className="h-2 w-full bg-black border border-white/20 p-[1px]">
                  <div className={`h-full ${stat.color}`} style={{ width: stat.val }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      
    </section>
  );
}
