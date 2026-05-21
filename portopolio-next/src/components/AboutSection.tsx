"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="font-pixel text-primary text-xl">✦</span>
          <h2 className="font-pixel text-xl md:text-2xl text-white">ABOUT PLAYER</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent ml-4"></div>
        </div>

        <div className="rpg-panel p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center mt-10">
          
          {/* Avatar Frame */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-black pixel-border-gold flex items-center justify-center p-2 relative z-10 group">
              <div className="w-full h-full bg-[#1a1a2e] flex items-center justify-center text-7xl">
                🧙‍♀️
              </div>
              
              {/* Corner decos */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gold"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gold"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gold"></div>
            </div>
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/30 blur-2xl z-0 scale-125 animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4 font-mono text-sm md:text-base text-muted leading-relaxed">
              <p>
                I'm a UI/UX Designer and Front-End Developer who enjoys creating clean, functional, and visually engaging digital experiences.
              </p>
              <p>
                I focus on combining design thinking with modern web technologies to build products that are not only beautiful but also solve real problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <Badge color="primary">UI/UX Design</Badge>
              <Badge color="secondary">Front-End</Badge>
              <Badge color="accent">AI Enthusiast</Badge>
              <Badge color="white">Creative Thinker</Badge>
              <Badge color="white">Problem Solver</Badge>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
  const colorStyles = {
    primary: "bg-primary/20 text-primary border-primary hover:bg-primary hover:text-white neon-glow-hover",
    secondary: "bg-secondary/20 text-secondary border-secondary hover:bg-secondary hover:text-black",
    accent: "bg-accent/20 text-accent border-accent hover:bg-accent hover:text-white neon-glow-accent-hover",
    white: "bg-white/10 text-white/90 border-white/30 hover:bg-white hover:text-black",
  };
  
  return (
    <span className={`font-mono text-xs px-3 py-1.5 pixel-border ${colorStyles[color as keyof typeof colorStyles]} transition-all cursor-default`}>
      {children}
    </span>
  );
}
