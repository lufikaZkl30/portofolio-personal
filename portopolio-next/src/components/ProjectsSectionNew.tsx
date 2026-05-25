"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Music, Video, Github, ExternalLink, ChevronLeft, Star, Sparkles, Play } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  category: "code" | "music" | "edit";
  desc: string;
  tech: string[];
  color: string;
  github?: string;
  demo?: string;
  bandLab?: string;
  youtube?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1, title: "ClassTeams-Info", category: "code",
    desc: "Website to promote Teams classes built with Next.js and Supabase.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    color: "#A3C9A8",
    github: "https://github.com/lufikaZkl30/classteams-info", demo: "#",
  },
  {
    id: 2, title: "YT Emotion Analyzer", category: "code",
    desc: "Analyzes YouTube comments using Google API and Chart.js.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
    color: "#A3C9A8",
    github: "https://github.com/lufikaZkl30/yt-emotion-analyzer", demo: "#",
  },
  {
    id: 3, title: "MindEase Bot AI", category: "code",
    desc: "AI chatbot for helping users manage stress and relaxation.",
    tech: ["Node.js", "JavaScript", "Gemini API"],
    color: "#A3C9A8",
    github: "https://github.com/lufikaZkl30/MindEase-ChatBot-Real", demo: "#",
  },
  {
    id: 4, title: "Loser In You (Prod. Lotus)", category: "music",
    desc: "A song about the loss of a once-close friendship — lingering memories and feelings.",
    tech: ["BandLab", "R&B & Soul", "Mixing", "Collaboration"],
    color: "#89C2D9",
    bandLab: "https://www.bandlab.com/post/d733931e-5776-49c3-9cd6-d1dcdfd835f1",
  },
  {
    id: 7, title: "Anime Velocity Edit", category: "edit",
    desc: "Cinematic anime edit with fast transitions and smooth velocity effects.",
    tech: ["After Effects", "AMV", "Velocity"],
    color: "#FFAFCC",
    youtube: "#",
  },
];

const ISLANDS = [
  {
    id: "code" as const,
    name: "Web Dev Village",
    tagline: "Where code meets magic",
    icon: Code2,
    color: "#A3C9A8",
    dark: "#5A8C60",
    glow: "rgba(163,201,168,0.4)",
    particle: "⌨️",
    symbols: ["</>", "{}", "//", "=>", "[]"],
    // positioned: left area
    x: 18, y: 32,
    size: 230,
    shape: "40% 60% 55% 45% / 45% 40% 60% 55%",
  },
  {
    id: "music" as const,
    name: "Music Lake",
    tagline: "Sounds from the deep",
    icon: Music,
    color: "#89C2D9",
    dark: "#4A8CAD",
    glow: "rgba(137,194,217,0.4)",
    particle: "🎵",
    symbols: ["♪", "♫", "~", "◉", "♬"],
    // positioned: right area
    x: 62, y: 18,
    size: 195,
    shape: "50% 50% 60% 40% / 40% 55% 45% 60%",
  },
  {
    id: "edit" as const,
    name: "Creative Studio",
    tagline: "Frames of imagination",
    icon: Video,
    color: "#FFAFCC",
    dark: "#C96E94",
    glow: "rgba(255,175,204,0.4)",
    particle: "✨",
    symbols: ["▶", "◼", "◀◀", "▶▶", "⬛"],
    // positioned: center
    x: 40, y: 44,
    size: 210,
    shape: "60% 40% 45% 55% / 55% 60% 40% 45%",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function FloatingSymbol({ sym, delay, color }: { sym: string; delay: number; color: string }) {
  return (
    <span
      className="absolute text-xs font-mono font-bold pointer-events-none select-none"
      style={{
        color,
        opacity: 0.6,
        left: `${15 + Math.random() * 70}%`,
        top: `${15 + Math.random() * 70}%`,
        animation: `floatSym ${3 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {sym}
    </span>
  );
}

function Particle({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{
        left: `${x}%`, top: `${y}%`,
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}`,
        animation: `particleDrift ${4 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.7,
      }}
    />
  );
}

function IslandCard({ island, onClick }: { island: typeof ISLANDS[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const Icon = island.icon;

  return (
    <div
      className="absolute cursor-pointer select-none group"
      style={{ left: `${island.x}%`, top: `${island.y}%`, zIndex: hovered ? 20 : 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${island.glow} 0%, transparent 70%)`,
          transform: hovered ? "scale(1.4)" : "scale(1.1)",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />

      {/* Water shadow / reflection under island */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -18,
          left: "10%",
          width: "80%",
          height: 28,
          background: `radial-gradient(ellipse, ${island.color}55 0%, transparent 75%)`,
          filter: "blur(10px)",
          transform: hovered ? "scaleX(1.15)" : "scaleX(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Island body */}
      <div
        className="relative flex flex-col items-center justify-center transition-all duration-500"
        style={{
          width: island.size,
          height: island.size,
          background: `
            radial-gradient(ellipse at 50% 30%, #f5f0e8 0%, ${island.color}cc 35%, ${island.color} 60%, ${island.dark}99 100%)
          `,
          borderRadius: island.shape,
          boxShadow: hovered
            ? `0 28px 56px rgba(0,0,0,0.22), 0 8px 24px ${island.glow}, inset -6px -10px 0 rgba(0,0,0,0.07), inset 0 6px 12px rgba(255,255,255,0.4)`
            : `0 16px 36px rgba(0,0,0,0.16), inset -5px -8px 0 rgba(0,0,0,0.05), inset 0 4px 10px rgba(255,255,255,0.35)`,
          transform: hovered ? "translateY(-16px) scale(1.04)" : "translateY(0) scale(1)",
          border: "3px solid rgba(255,255,255,0.6)",
          animation: `islandFloat ${5 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        {/* Sandy beach ring around the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none rounded-b-[inherit]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${island.color}88 60%, ${island.dark}66 100%)`,
          }}
        />

        {/* Floating symbols inside island */}
        {island.symbols.map((s, i) => (
          <FloatingSymbol key={i} sym={s} delay={i * 0.4} color="rgba(255,255,255,0.75)" />
        ))}

        {/* Icon plate */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg transition-transform duration-500"
          style={{
            background: "rgba(255,255,255,0.92)",
            transform: hovered ? "scale(1.15) translateY(-4px)" : "scale(1)",
            boxShadow: `0 8px 20px ${island.glow}`,
          }}
        >
          <Icon size={30} style={{ color: island.dark }} />
          {hovered && (
            <div className="absolute inset-0 rounded-2xl animate-ping" style={{ background: `${island.color}40` }} />
          )}
        </div>

        {/* Island name */}
        <div
          className="relative z-10 px-4 py-2 rounded-xl text-center transition-transform duration-300"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <p className="font-pixel text-xs text-slate-700 leading-tight">{island.name}</p>
          <p className="text-[10px] text-slate-500 mt-0.5">{island.tagline}</p>
        </div>

        {/* Click hint */}
        {hovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold text-slate-500 animate-bounce">
            ✦ Click to explore ✦
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, accentColor }: { project: Project; accentColor: string }) {
  return (
    <div
      className="flex-shrink-0 w-72 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(16px)",
        border: `1.5px solid ${accentColor}40`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.08), 0 0 0 0 ${accentColor}`,
      }}
    >
      {/* Color banner */}
      <div
        className="w-full h-2"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }}
      />

      <div className="p-5">
        <h4 className="font-pixel text-sm text-slate-800 mb-2 leading-snug">{project.title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold text-white"
              style={{ backgroundColor: accentColor }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 transition-colors"
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {project.bandLab && (
            <a
              href={project.bandLab} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-white transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              <Play size={12} /> Listen
            </a>
          )}
          {project.youtube && project.youtube !== "#" && (
            <a
              href={project.youtube} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-white transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              <ExternalLink size={12} /> Watch
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-white transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              <ExternalLink size={12} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ProjectsSectionNew() {
  const [active, setActive] = useState<typeof ISLANDS[0] | null>(null);
  const [phase, setPhase] = useState<"map" | "in" | "island" | "out">("map");
  const particles = useRef(
    Array.from({ length: 28 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["#A3C9A8", "#89C2D9", "#FFAFCC", "#E2D4F0", "#FFE5B4"][i % 5],
      delay: i * 0.35,
    }))
  ).current;

  const openIsland = (island: typeof ISLANDS[0]) => {
    setActive(island);
    setPhase("in");
    setTimeout(() => setPhase("island"), 650);
  };

  const closeIsland = () => {
    setPhase("out");
    setTimeout(() => { setPhase("map"); setActive(null); }, 650);
  };

  const filtered = active ? PROJECTS.filter((p) => p.category === active.id) : [];

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden flex flex-col items-center">
      <style>{`
        @keyframes islandFloat {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(0.4deg); }
          66% { transform: translateY(-4px) rotate(-0.4deg); }
        }
        @keyframes floatSym {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-10px) rotate(8deg); opacity: 0.9; }
        }
        @keyframes waterShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes waterRipple {
          0% { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cloudDrift {
          from { transform: translateX(-150px); }
          to { transform: translateX(110vw); }
        }
        @keyframes pathGlow {
          0%,100% { opacity: 0.25; }
          50% { opacity: 0.6; }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes floatParticle {
          0%,100% { transform: translate(0,0); opacity: 0.5; }
          50% { transform: translate(6px,-12px); opacity: 1; }
        }
        .path-glow { animation: pathGlow 3s ease-in-out infinite; }
        .cloud-drift { animation: cloudDrift linear infinite; }
        .fade-scale { animation: fadeScale 0.5s ease forwards; }
        .water-ripple-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.45);
          animation: waterRipple 3.5s ease-out infinite;
          pointer-events: none;
        }
      `}</style>

      {/* ── Section header ── */}
      <div
        className="relative z-10 text-center mb-10 transition-all duration-500"
        style={{ opacity: phase === "map" ? 1 : 0, pointerEvents: phase === "map" ? "auto" : "none" }}
      >
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/60 border border-white/70 backdrop-blur-sm shadow-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Interactive World Map</span>
          <Sparkles size={14} className="text-amber-400" />
        </div>
        <h2 className="font-pixel text-3xl md:text-5xl text-[#2C3E50] mb-3">My Creative World</h2>
        <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
          Three islands, one universe. Click an island to explore the artifacts within.
        </p>
      </div>

      {/* ── World Map ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div
          className="relative w-full rounded-[40px] overflow-hidden border-4 border-white/50 shadow-2xl"
          style={{
            height: "clamp(440px, 70vh, 720px)",
            background: "linear-gradient(180deg, #6ec6ea 0%, #4ab8e8 15%, #3aace0 35%, #5dc0e8 55%, #4ab5d8 75%, #62cce0 100%)",
          }}
        >
          {/* ── Animated water base layers ── */}
          {/* Deep shimmer */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #6ecfee88 0%, #3aa8d844 40%, #5bbfe844 100%)",
              backgroundSize: "200% 200%",
              animation: "waterShimmer 8s ease infinite",
            }}
          />

          {/* Wave pattern layer 1 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.18 }}>
            <svg width="200%" height="100%" viewBox="0 0 2400 100" preserveAspectRatio="none"
              style={{ animation: "waveMove 6s linear infinite" }}>
              <path d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40 C1400,70 1600,10 1800,40 C2000,70 2200,10 2400,40 L2400,100 L0,100Z"
                fill="rgba(255,255,255,0.6)" />
            </svg>
          </div>

          {/* Wave pattern layer 2 (offset) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.12, top: "20%" }}>
            <svg width="200%" height="80%" viewBox="0 0 2400 80" preserveAspectRatio="none"
              style={{ animation: "waveMove 10s linear infinite reverse" }}>
              <path d="M0,30 C300,55 500,5 800,30 C1100,55 1300,5 1600,30 C1900,55 2100,5 2400,30 L2400,80 L0,80Z"
                fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          {/* Sparkle glints on water surface */}
          {[{x:12,y:18},{x:35,y:72},{x:58,y:14},{x:78,y:62},{x:22,y:50},{x:88,y:30},{x:50,y:85},{x:68,y:45}].map((g,i)=>(
            <div key={i} className="absolute pointer-events-none"
              style={{
                left:`${g.x}%`, top:`${g.y}%`,
                width:6, height:6,
                background:"rgba(255,255,255,0.9)",
                borderRadius:"50%",
                boxShadow:"0 0 8px 3px rgba(255,255,255,0.6)",
                animation:`floatParticle ${2.5+i*0.4}s ease-in-out infinite`,
                animationDelay:`${i*0.5}s`,
              }}
            />
          ))}

          {/* Water ripple rings at random spots */}
          {[{x:"15%",y:"25%",s:60,d:"0s"},{x:"72%",y:"55%",s:80,d:"1.2s"},{x:"45%",y:"75%",s:50,d:"2.3s"},{x:"85%",y:"20%",s:45,d:"0.7s"}].map((r,i)=>(
            <div key={i} className="water-ripple-ring"
              style={{ left:r.x, top:r.y, width:r.s, height:r.s, animationDelay:r.d,
                transform:`translate(-50%,-50%)` }}
            />
          ))}

          {/* Island color reflection pools (under each island) */}
          {ISLANDS.map((isl) => (
            <div key={isl.id} className="absolute pointer-events-none"
              style={{
                left: `${isl.x + isl.size * 0.03}%`,
                top: `${isl.y + 12}%`,
                width: isl.size * 1.5,
                height: isl.size * 0.6,
                background: `radial-gradient(ellipse, ${isl.color}55 0%, ${isl.color}22 50%, transparent 75%)`,
                filter: "blur(18px)",
                transform: "scaleY(0.6)",
              }}
            />
          ))}

          {/* Glowing paths connecting islands */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {/* Web Dev → Music Lake */}
            <path d="M 30% 47% Q 45% 25% 68% 35%" stroke="rgba(163,201,168,0.55)" strokeWidth="3" fill="none"
              strokeDasharray="8 6" filter="url(#glow)" className="path-glow" />
            {/* Web Dev → Creative Studio */}
            <path d="M 30% 52% Q 40% 68% 52% 68%" stroke="rgba(255,175,204,0.5)" strokeWidth="3" fill="none"
              strokeDasharray="6 8" filter="url(#glow)" className="path-glow" />
            {/* Music Lake → Creative Studio */}
            <path d="M 72% 42% Q 68% 58% 57% 65%" stroke="rgba(137,194,217,0.5)" strokeWidth="3" fill="none"
              strokeDasharray="7 5" filter="url(#glow)" className="path-glow" />
          </svg>

          {/* Clouds */}
          {[
            { top: "8%", dur: "38s", size: 80, delay: "0s" },
            { top: "22%", dur: "55s", size: 110, delay: "-18s" },
            { top: "70%", dur: "44s", size: 65, delay: "-9s" },
          ].map((c, i) => (
            <div key={i} className="cloud-drift absolute pointer-events-none opacity-60"
              style={{ top: c.top, animationDuration: c.dur, animationDelay: c.delay }}>
              <svg width={c.size} height={c.size * 0.55} viewBox="0 0 120 70" fill="none">
                <ellipse cx="60" cy="50" rx="55" ry="22" fill="rgba(255,255,255,0.85)" />
                <ellipse cx="40" cy="38" rx="28" ry="22" fill="rgba(255,255,255,0.85)" />
                <ellipse cx="72" cy="34" rx="22" ry="18" fill="rgba(255,255,255,0.85)" />
              </svg>
            </div>
          ))}

          {/* Star decorations */}
          {[{ x: 8, y: 10 }, { x: 88, y: 8 }, { x: 12, y: 80 }, { x: 85, y: 78 }, { x: 50, y: 6 }].map((s, i) => (
            <Star key={i} size={10 + i * 2} className="absolute pointer-events-none"
              style={{ left: `${s.x}%`, top: `${s.y}%`, color: "#FFD700", opacity: 0.5,
                animation: `floatSym ${2 + i}s ease-in-out infinite`, animationDelay: `${i * 0.7}s` }} />
          ))}

          {/* Islands */}
          {ISLANDS.map((island) => (
            <IslandCard key={island.id} island={island} onClick={() => openIsland(island)} />
          ))}

          {/* Cinematic fade overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-600"
            style={{
              background: active ? active.color + "22" : "transparent",
              opacity: phase === "in" || phase === "out" ? 1 : 0,
              backdropFilter: phase === "in" || phase === "out" ? "blur(8px)" : "none",
            }}
          />

          {/* Island Detail Panel */}
          {active && phase === "island" && (
            <div className="absolute inset-0 z-40 flex flex-col fade-scale"
              style={{
                background: `linear-gradient(160deg, ${active.color}18 0%, #FDFBF7 50%)`,
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/40">
                <button
                  onClick={closeIsland}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-white/60 text-slate-700 text-sm font-bold transition-all hover:shadow-md"
                >
                  <ChevronLeft size={16} /> World Map
                </button>

                <div className="flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/80 border border-white/60 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: active.color }}>
                    <active.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-pixel text-sm text-slate-800">{active.name}</p>
                    <p className="text-[11px] text-slate-500">{active.tagline}</p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium hidden md:block">
                  {filtered.length} artifact{filtered.length !== 1 ? "s" : ""} found
                </div>
              </div>

              {/* Project cards */}
              <div className="flex-1 overflow-auto p-6">
                {filtered.length > 0 ? (
                  <div className="flex gap-5 flex-wrap justify-center">
                    {filtered.map((p) => (
                      <ProjectCard key={p.id} project={p} accentColor={active.color} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                    <div className="text-5xl">🗺️</div>
                    <h4 className="font-pixel text-xl text-slate-500">Uncharted Territory</h4>
                    <p className="text-slate-400 text-sm">No artifacts discovered here yet — check back soon!</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div
          className="flex items-center justify-center gap-6 mt-6 flex-wrap transition-all duration-500"
          style={{ opacity: phase === "map" ? 1 : 0 }}
        >
          {ISLANDS.map((isl) => {
            const Icon = isl.icon;
            return (
              <button key={isl.id} onClick={() => openIsland(isl)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/60 backdrop-blur-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: isl.color }}>
                  <Icon size={12} className="text-white" />
                </div>
                <span className="text-xs font-bold text-slate-600">{isl.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
