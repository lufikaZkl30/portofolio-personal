"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, X, ChevronLeft, Cloud } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  category: "code" | "music" | "edit";
  desc: string;
  tech: string[];
  github?: string;
  demo?: string;
  bandLab?: string;
  youtube?: string;
  tiktok?: string;
  soundcloud?: string;
  emoji: string;
  image?: string; // preview screenshot
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 1, title: "ClassTeams-Info", category: "code", emoji: "🏫",
    desc: "Website to promote Teams classes built with Next.js and Supabase.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/lufikaZkl30/classteams-info",
    image: "/assets/images/project-1.png",
  },
  {
    id: 2, title: "YT Emotion Analyzer", category: "code", emoji: "💬",
    desc: "Analyzes YouTube comments using Google API and Chart.js for emotion tracking.",
    tech: ["HTML", "JavaScript", "Python"],
    github: "https://github.com/lufikaZkl30/yt-emotion-analyzer",
    image: "/assets/images/project-2.png",
  },
  {
    id: 3, title: "MindEase Bot AI", category: "code", emoji: "🧠",
    desc: "AI chatbot for helping users manage stress and relaxation with Gemini.",
    tech: ["Node.js", "Gemini API", "Python"],
    github: "https://github.com/lufikaZkl30/MindEase-ChatBot-Real",
    image: "/assets/images/project-3.png",
  },
  {
    id: 4, title: "Loser In You", category: "music", emoji: "🎵",
    desc: "A song about the loss of a once-close friendship — lingering memories.",
    tech: ["R&B & Soul", "Mixing", "Type Beat", "Emotional"],
    bandLab: "https://www.bandlab.com/post/d733931e-5776-49c3-9cd6-d1dcdfd835f1",
    soundcloud: "https://soundcloud.com/130530_xywnzenle/loser-in-you-prod-lotus",
    image: "/assets/images/music-1.png",
  },
  {
    id: 5, title: "Tiktok Content Creator", category: "edit", emoji: "🎬",
    desc: "Creating engaging content for TikTok with creative editing and effects.",
    tech: ["CapCut", "InShot", "Canva"],
    tiktok: "https://www.tiktok.com/@xyawnzenle13",
    image: "/assets/images/project-4.png",
  },
];

// ─── Category cloud config ─────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "code" as const,
    label: "Code",
    emoji: "⌨️",
    tagline: "Web Dev",
    fill: "rgba(210,195,255,0.88)",
    glow: "#b8a4f8",
    border: "#ccc0ff",
    textColor: "#2d1a5a",
    left: "8%",
    top: "12%",
    floatY: [-10, 2, -8, 2, -10],
    dur: 8,
  },
  {
    id: "music" as const,
    label: "Music",
    emoji: "🎵",
    tagline: "Music Lake",
    fill: "rgba(185,225,255,0.88)",
    glow: "#85ccf5",
    border: "#a8dcff",
    textColor: "#0f3060",
    left: "60%",
    top: "8%",
    floatY: [-8, 4, -12, 4, -8],
    dur: 9.5,
  },
  {
    id: "edit" as const,
    label: "Content",
    emoji: "🎬",
    tagline: "Creative Studio",
    fill: "rgba(255,210,225,0.88)",
    glow: "#ffaac0",
    border: "#ffcad8",
    textColor: "#5a1030",
    left: "35%",
    top: "38%",
    floatY: [-6, 5, -10, 5, -6],
    dur: 10,
  },
];

const TAG_COLORS: Record<string, string> = {
  "Next.js": "#c8b4f8", "Tailwind CSS": "#a5d8ff", "Supabase": "#b2f2bb",
  "HTML": "#ffd6a5", "JavaScript": "#fdffb6", "Python": "#caffbf",
  "Node.js": "#b2f2bb", "Gemini API": "#ffc6ff", "BandLab": "#ffd6a5",
  "R&B & Soul": "#fdffb6", "Mixing": "#a5d8ff", "After Effects": "#ffc6ff", "AMV": "#c8b4f8",
};

// ─── Cloud SVG ─────────────────────────────────────────────────────────────────
function CloudSvg({ w = 240, fill, glow, hovered }: { w?: number; fill: string; glow: string; hovered?: boolean }) {
  const h = w * 0.5;
  return (
    <svg width={w} height={h} viewBox="0 0 240 120" fill="none"
      style={{ filter: hovered ? `drop-shadow(0 0 20px ${glow})` : `drop-shadow(0 8px 20px rgba(0,0,0,0.2))`, transition: "filter 0.4s" }}>
      <ellipse cx="120" cy="96" rx="112" ry="26" fill={fill} />
      <ellipse cx="78" cy="78" rx="54" ry="42" fill={fill} />
      <ellipse cx="152" cy="72" rx="48" ry="40" fill={fill} />
      <ellipse cx="112" cy="58" rx="42" ry="36" fill={fill} />
      <ellipse cx="100" cy="52" rx="24" ry="12" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

// Mini cloud SVG for project cards
function MiniCloudSvg({ fill, glow, hovered }: { fill: string; glow: string; hovered?: boolean }) {
  return (
    <svg width={200} height={100} viewBox="0 0 200 100" fill="none"
      style={{ filter: hovered ? `drop-shadow(0 0 14px ${glow})` : `drop-shadow(0 4px 14px rgba(0,0,0,0.18))`, transition: "filter 0.35s" }}>
      <ellipse cx="100" cy="82" rx="92" ry="20" fill={fill} />
      <ellipse cx="65" cy="66" rx="44" ry="34" fill={fill} />
      <ellipse cx="128" cy="60" rx="38" ry="32" fill={fill} />
      <ellipse cx="96" cy="46" rx="34" ry="28" fill={fill} />
      <ellipse cx="88" cy="40" rx="18" ry="10" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

// ─── Ambient sparkles ──────────────────────────────────────────────────────────
const SPARKLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: Math.random() * 100, y: Math.random() * 100,
  size: 3 + Math.random() * 4,
  dur: 3 + Math.random() * 4,
  delay: Math.random() * 5,
  color: ["#e8d5ff", "#c8e8ff", "#ffd6e8", "#fff5cc"][i % 4],
}));

// ─── Category Cloud button ─────────────────────────────────────────────────────
function CategoryCloud({
  cat, delay, onClick,
}: {
  cat: typeof CATEGORIES[0];
  delay: number;
  onClick: () => void;
}) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer select-none"
      style={{ left: cat.left, top: cat.top }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: cat.floatY }}
        transition={{ duration: cat.dur, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        style={{ display: "inline-block" }}
      >
        <div className="relative">
          <CloudSvg w={240} fill={cat.fill} glow={cat.glow} hovered={hov} />
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ top: "14px" }}>
            <motion.span className="text-3xl leading-none mb-1"
              animate={hov ? { y: -4, scale: 1.2 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}>
              {cat.emoji}
            </motion.span>
            <p className="font-pixel text-base" style={{ color: cat.textColor, textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}>
              {cat.label}
            </p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: cat.textColor, opacity: 0.7 }}>
              {cat.tagline}
            </p>
          </div>
          <AnimatePresence>
            {hov && (
              <motion.div className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ background: `radial-gradient(ellipse, ${cat.glow}55 0%, transparent 70%)`, filter: "blur(14px)", zIndex: -1 }} />
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {hov && (
            <motion.div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-pixel"
              style={{ bottom: "-22px", fontSize: "11px", color: "rgba(255,255,255,0.9)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              ✦ click to explore ✦
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ─── Project Cloud Card ────────────────────────────────────────────────────────
function ProjectCloudCard({ project, cat }: { project: Project; cat: typeof CATEGORIES[0] }) {
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="cursor-pointer select-none"
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, y: -6 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "inline-block" }}
      >
        <div className="relative">
          <MiniCloudSvg fill={cat.fill} glow={cat.glow} hovered={hov} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ top: "8px", bottom: "4px" }}>
            <span className="text-xl leading-none mb-1">{project.emoji}</span>
            <p className="font-pixel text-center leading-tight" style={{ fontSize: "12px", color: cat.textColor, maxWidth: "140px", textShadow: "0 1px 2px rgba(255,255,255,0.9)" }}>
              {project.title}
            </p>
            <div className="flex flex-wrap gap-1 justify-center mt-1.5">
              {project.tech.slice(0, 2).map(t => (
                <span key={t} className="text-[8px] px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: TAG_COLORS[t] ?? "#e0e0e0", color: "#3d2a5c", border: "1px solid rgba(100,80,150,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mini modal */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}>
            <div className="absolute inset-0" style={{ background: "rgba(10,5,30,0.65)", backdropFilter: "blur(6px)" }} />
            <motion.div className="relative max-w-xs w-full rounded-3xl overflow-hidden z-10"
              style={{ background: `linear-gradient(145deg, rgba(255,255,255,0.97) 0%, ${cat.fill} 100%)`, border: `2px solid ${cat.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.25), 0 0 40px ${cat.glow}44` }}
              initial={{ scale: 0.85, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}>
              <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${cat.glow}, ${cat.border})` }} />
              {/* ── Project preview image ── */}
              {project.image && (
                <div className="relative w-full overflow-hidden" style={{ height: "150px" }}>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    style={{ borderBottom: `1.5px solid ${cat.border}` }}
                  />
                  {/* dreamy gradient overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-10"
                    style={{ background: `linear-gradient(to top, rgba(255,255,255,0.97), transparent)` }} />
                </div>
              )}
              {!project.image && (
                <div className="w-full flex items-center justify-center"
                  style={{ height: "80px", background: `linear-gradient(135deg, ${cat.fill}, rgba(255,255,255,0.6))` }}>
                  <span className="text-5xl">{project.emoji}</span>
                </div>
              )}
              <div className="p-5 pt-3">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-2xl block mb-1">{project.emoji}</span>
                    <h3 className="font-pixel text-lg" style={{ color: cat.textColor }}>{project.title}</h3>
                  </div>
                  <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/10 transition-all" style={{ color: cat.textColor }}>
                    <X size={14} />
                  </button>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: cat.textColor, opacity: 0.8 }}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] px-2 py-0.5 rounded-full font-bold"
                      style={{ background: TAG_COLORS[t] ?? "#e8e0ff", color: "#3d2a5c", border: "1px solid rgba(100,80,150,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-2xl text-xs font-bold text-white transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #2a1a4a, #4a2a7a)" }}>
                      <Github size={12} /> GitHub
                    </a>
                  )}
                  {project.bandLab && (
                    <a href={project.bandLab} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-2xl text-xs font-bold transition-all hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${cat.glow}, ${cat.border})`, color: cat.textColor }}>
                      <Play size={12} /> BandLab
                    </a>
                  )}
                  {project.youtube && project.youtube !== "#" && (
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-2xl text-xs font-bold transition-all hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${cat.glow}, ${cat.border})`, color: cat.textColor }}>
                      <ExternalLink size={12} /> Watch
                    </a>
                  )}
                  {project.tiktok && (
                    <a href={project.tiktok} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-2xl text-xs font-bold text-white transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #010101, #ff0050)" }}>
                      <Play size={12} /> Watch
                    </a>
                  )}
                  {project.soundcloud && (
                    <a href={project.soundcloud} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-2xl text-xs font-bold text-white transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #ff5500, #ff8800)" }}>
                      <Cloud size={12} /> SoundCloud
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Category Panel (reveals after clicking a category cloud) ─────────────────
function CategoryPanel({ cat, projects, onClose }: { cat: typeof CATEGORIES[0]; projects: Project[]; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Dreamy overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(10,5,30,0.72)", backdropFilter: "blur(8px)" }} />

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        {/* Header */}
        <motion.div className="flex items-center gap-3 mb-8"
          initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <button onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-pixel text-sm transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <ChevronLeft size={14} /> back
          </button>
          <div className="text-center">
            <p className="font-pixel text-3xl" style={{ color: "rgba(255,255,255,0.95)", textShadow: `0 0 20px ${cat.glow}` }}>
              {cat.emoji} {cat.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{cat.tagline}</p>
          </div>
        </motion.div>

        {/* Cloud project cards */}
        <motion.div className="flex flex-wrap gap-6 justify-center"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          {projects.length === 0 ? (
            <div className="text-center">
              <p className="text-5xl mb-3">🌙</p>
              <p className="font-pixel text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>Coming soon...</p>
            </div>
          ) : (
            projects.map((p, i) => (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.12 }}>
                <ProjectCloudCard project={p} cat={cat} />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ProjectsSectionNew() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[0] | null>(null);

  const filtered = activeCategory ? PROJECTS.filter(p => p.category === activeCategory.id) : [];

  return (
    <section id="projects" className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* GIF background */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/gif/cat-claud.gif" alt="cozy pixel world" className="w-full h-full object-cover"
          style={{ imageRendering: "pixelated" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(8,4,20,0.38) 100%)" }} />
      </div>

      {/* Ambient sparkles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {SPARKLES.map(s => (
          <motion.div key={s.id} className="absolute rounded-full"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, backgroundColor: s.color, boxShadow: `0 0 ${s.size * 2}px ${s.color}` }}
            animate={{ y: [-8, 8, -8], opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }} />
        ))}
      </div>

      {/* Section header */}
      <div className="relative z-10 pt-12 flex flex-col items-center gap-1 pointer-events-none">
        <motion.p className="font-pixel text-sm tracking-widest"
          style={{ color: "rgba(255,255,255,0.7)", textShadow: "0 2px 8px rgba(0,0,0,0.6)", letterSpacing: "0.2em" }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          ✦ my dream world ✦
        </motion.p>
        <motion.h2 className="font-pixel text-4xl md:text-5xl"
          style={{ color: "rgba(255,255,255,0.93)", textShadow: "0 3px 20px rgba(80,0,120,0.8), 0 1px 4px rgba(0,0,0,0.8)" }}
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Creative Projects
        </motion.h2>
        <motion.p className="font-pixel text-xs mt-1"
          style={{ color: "rgba(255,255,255,0.45)", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          click a cloud to explore
        </motion.p>
      </div>

      {/* Category clouds floating in the scene */}
      <div className="relative z-10 mx-auto" style={{ width: "100%", maxWidth: "1100px", height: "clamp(520px, 72vh, 800px)", marginTop: "12px" }}>
        {CATEGORIES.map((cat, i) => (
          <CategoryCloud key={cat.id} cat={cat} delay={0.2 + i * 0.18} onClick={() => setActiveCategory(cat)} />
        ))}
      </div>

      {/* Category panel overlay */}
      <AnimatePresence>
        {activeCategory && (
          <CategoryPanel
            cat={activeCategory}
            projects={filtered}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
