"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Decision Web App",
      desc: "AI-powered decision support system with smart recommendations.",
      img: "/img/project-1.png",
      tags: ["React", "Python", "Tailwind"],
      demo: "#",
      code: "https://github.com/lufikaZkl30/classteams-info",
      isNew: true,
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with pixel game aesthetics and dark mode.",
      img: "/img/project-2.png",
      tags: ["HTML", "Tailwind", "JavaScript"],
      demo: "#",
      code: "https://github.com/lufikaZkl30/yt-emotion-analyzer",
    },
    {
      title: "Dashboard UI",
      desc: "Modern dashboard interface for analytics and management.",
      img: "/img/project-3.png",
      tags: ["Figma", "React", "Chart.js"],
      demo: "https://luviasakura-bio.netlify.app",
      code: "#",
    },
    {
      title: "Landing Page Concept",
      desc: "Creative landing page concept for tech startup product.",
      img: "/img/project-4.png",
      tags: ["Figma", "Tailwind", "UI Design"],
      demo: "https://mindease-ai.netlify.app/",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="relative scroll-mt-32">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="font-pixel text-primary text-lg">★</span>
          <h2 className="font-pixel text-lg md:text-xl text-white">FEATURED PROJECTS</h2>
        </div>
        <a href="https://github.com/lufikaZkl30" target="_blank" rel="noopener noreferrer" className="font-pixel text-[10px] text-muted hover:text-white transition-colors flex items-center gap-2">
          VIEW ALL <span className="text-primary">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="relative group overflow-hidden rounded-lg border border-white/10 bg-[#071026]"
          >
            {/* Image */}
            <div className="relative w-full h-40 sm:h-44 md:h-36 lg:h-44 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                onError={() => { /* fallback handled by browser */ }}
              />

              {project.isNew && (
                <div className="absolute top-3 left-3 bg-primary text-black font-pixel text-[10px] px-2 py-1 rounded-md">NEW</div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#02030a]/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-[220px] sm:h-[220px]">
              <h3 className="font-sans font-semibold text-sm sm:text-base text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="font-mono text-[12px] text-muted mb-3 flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/6 text-white/70 rounded">{tag}</span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-muted hover:text-white flex items-center gap-2 transition-colors px-3 py-2 bg-white/5 border border-white/10 rounded">
                  <span className="text-primary">▶</span> DEMO
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-muted hover:text-white flex items-center gap-2 transition-colors px-3 py-2 bg-white/5 border border-white/10 rounded">
                  <span className="text-secondary">&lt;/&gt;</span> CODE
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
