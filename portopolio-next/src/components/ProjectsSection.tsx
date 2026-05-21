"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Decision Web App",
      desc: "AI-powered decision support system with smart recommendations.",
      img: "../img/project-1.png", // Paths relative to public dir when built, but this might need to be adjusted in next.js
      tags: ["React", "Python", "Tailwind"],
      demo: "#",
      code: "https://github.com/lufikaZkl30/classteams-info",
      isNew: true
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with pixel game aesthetics and dark mode.",
      img: "../img/project-2.png",
      tags: ["HTML", "Tailwind", "JavaScript"],
      demo: "#",
      code: "https://github.com/lufikaZkl30/yt-emotion-analyzer"
    },
    {
      title: "Dashboard UI",
      desc: "Modern dashboard interface for analytics and management.",
      img: "../img/project-3.png",
      tags: ["Figma", "React", "Chart.js"],
      demo: "https://luviasakura-bio.netlify.app",
      code: "#"
    },
    {
      title: "Landing Page Concept",
      desc: "Creative landing page concept for tech startup product.",
      img: "../img/project-4.png",
      tags: ["Figma", "Tailwind", "UI Design"],
      demo: "https://mindease-ai.netlify.app/",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="relative scroll-mt-32">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <span className="font-pixel text-primary text-xl">★</span>
          <h2 className="font-pixel text-xl md:text-2xl text-white">QUEST LOG</h2>
        </div>
        <a href="https://github.com/lufikaZkl30" target="_blank" className="font-pixel text-[10px] text-muted hover:text-white transition-colors flex items-center gap-2">
          VIEW ALL <span className="text-primary">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rpg-panel overflow-hidden group flex flex-col h-full hover:border-gold hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-2"
          >
            {/* Quest Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-gold z-10 hidden group-hover:block"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-gold z-10 hidden group-hover:block"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-gold z-10 hidden group-hover:block"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-gold z-10 hidden group-hover:block"></div>

            {/* Image Container */}
            <div className="h-48 md:h-56 relative overflow-hidden border-b border-white/10 bg-black/50">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'}
              />
              
              {project.isNew && (
                <div className="absolute top-4 left-4 bg-primary text-white font-pixel text-[8px] px-3 py-1 pixel-border border-white animate-bounce shadow-lg">
                  ★ NEW QUEST
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent opacity-80"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="font-mono text-sm text-muted mb-6 flex-1">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-white/20">
                <a href={project.demo} target="_blank" className="font-mono text-xs font-bold text-muted hover:text-white flex items-center gap-2 transition-colors bg-white/5 px-3 py-2 border border-white/10 hover:border-primary hover:bg-primary/20">
                  <span className="text-primary">▶</span> PLAY DEMO
                </a>
                <a href={project.code} target="_blank" className="font-mono text-xs font-bold text-muted hover:text-white flex items-center gap-2 transition-colors bg-white/5 px-3 py-2 border border-white/10 hover:border-secondary hover:bg-secondary/20">
                  <span className="text-secondary">&lt;/&gt;</span> SOURCE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
