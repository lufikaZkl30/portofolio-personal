"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      date: "2023 — Present",
      role: "Freelance UI Designer",
      desc: "Working with clients to design user interfaces, wireframes, and responsive websites.",
      icon: "💼",
      color: "text-primary",
      borderColor: "border-primary"
    },
    {
      date: "2023",
      role: "Salesforce Talent Accelerator Program",
      desc: "Completed intensive digital program focused on Salesforce fundamentals, CRM, and business processes.",
      icon: "🏆",
      color: "text-accent",
      borderColor: "border-accent"
    },
    {
      date: "2022 — 2023",
      role: "UI/UX Project Experience",
      desc: "Collaborated on multiple UI/UX projects including landing pages, dashboards, and web applications.",
      icon: "🚀",
      color: "text-secondary",
      borderColor: "border-secondary"
    }
  ];

  return (
    <section id="experience" className="relative scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Experience Timeline */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-pixel text-accent text-xl">⏱</span>
            <h2 className="font-pixel text-xl md:text-2xl text-white">EXPERIENCE</h2>
          </div>
          
          <div className="relative pl-6 border-l-2 border-white/10 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[35px] top-0 w-8 h-8 bg-[#030514] border-2 ${exp.borderColor} flex items-center justify-center text-xs z-10 neon-glow`}>
                  {exp.icon}
                </div>
                
                <div className="rpg-panel p-5 relative group hover:border-gold transition-colors">
                  <div className="font-mono text-[10px] text-muted mb-2 tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    {exp.date}
                  </div>
                  <h3 className={`font-pixel text-xs ${exp.color} leading-relaxed mb-3 group-hover:text-gold transition-colors`}>{exp.role}</h3>
                  <p className="font-mono text-sm text-muted">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Learning Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="font-pixel text-primary text-xl">⚔</span>
            <h2 className="font-pixel text-xl md:text-2xl text-white">CURRENTLY LEARNING</h2>
          </div>
          
          <div className="rpg-panel p-6 md:p-8 h-full flex flex-col">
            <div className="space-y-6 flex-1">
              
              <div className="w-full">
                <div className="flex justify-between font-mono text-xs text-white mb-2">
                  <span className="flex items-center gap-2"><span className="text-secondary">⚛️</span> Advanced React</span>
                  <span className="text-muted">70%</span>
                </div>
                <div className="h-2 w-full bg-black/50 pixel-border border-white/10 p-[1px]">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-secondary"></motion.div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between font-mono text-xs text-white mb-2">
                  <span className="flex items-center gap-2"><span className="text-white">N</span> Next.js</span>
                  <span className="text-muted">60%</span>
                </div>
                <div className="h-2 w-full bg-black/50 pixel-border border-white/10 p-[1px]">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-white"></motion.div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between font-mono text-xs text-white mb-2">
                  <span className="flex items-center gap-2"><span className="text-accent">🤖</span> AI / Machine Learning</span>
                  <span className="text-muted">50%</span>
                </div>
                <div className="h-2 w-full bg-black/50 pixel-border border-white/10 p-[1px]">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-accent"></motion.div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between font-mono text-xs text-white mb-2">
                  <span className="flex items-center gap-2"><span className="text-primary">🌸</span> Three.js Animation</span>
                  <span className="text-muted">88%</span>
                </div>
                <div className="h-2 w-full bg-black/50 pixel-border border-white/10 p-[1px]">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-primary"></motion.div>
                </div>
              </div>
              
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
              <p className="font-mono text-xs text-muted leading-relaxed">
                LEVEL UP YOUR SKILLS.<br/>
                UNLOCK THE FUTURE.
              </p>
              <div className="w-10 h-10 animate-bounce text-2xl">
                👾
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
