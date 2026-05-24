"use client";

import { useState, useMemo } from "react";
import { Code2, Music, Video, Github, Play, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "code" | "music" | "edit";
  desc: string;
  tech: string[];
  color: string;
  img: string;
  demo?: string;
  github?: string;
  bandLab?: string;
  Youtube?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ClassTeams-Info",
    category: "code",
    desc: "The website used to promote Teams classes uses Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    color: "#A3C9A8",
    img: "/assets/images/project-1.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/classteams-info",
  },
  {
    id: 2,
    title: "YT Emotion Analyzer",
    category: "code",
    desc: "A website for analyzing YouTube comments using the Google API and Chart.js.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
    color: "#A2D2FF",
    img: "/assets/images/project-2.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/yt-emotion-analyzer",
  },
  {
    id: 3,
    title: "MindEase Bot AI",
    category: "code",
    desc: "AI chatbot for helping users manage stress and relaxation.",
    tech: ["Node.js", "JavaScript", "Gemini API"],
    color: "#FDE2E4",
    img: "/assets/images/project-3.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/MindEase-ChatBot-Real",
  },
  {
    id: 4,
    title: "Loser In You (Prod.Lotus)",
    category: "music",
    desc: ""Loser In You" is a song about the loss of a once-close friendship. It tells of memories that are hard to forget and feelings that linger to this day.",
    tech: ["BandLab", "R&B & Soul", "Mixing", "Collaboration"],
    color: "#89C2D9",
    img: "/assets/images/music-1.png",
    bandLab: "https://www.bandlab.com/post/d733931e-5776-49c3-9cd6-d1dcdfd835f1",
  },
  {
    id: 7,
    title: "Anime Velocity Edit",
    category: "edit",
    desc: "Cinematic anime edit dengan transisi cepat dan efek velocity smooth.",
    tech: ["After Effects", "AMV", "Velocity"],
    color: "#FFAFCC",
    img: "/assets/images/edit-1.png",
    Youtube: "#",
  },
];

const categoryConfig = {
  code: {
    name: "Web Dev Village",
    icon: Code2,
    color: "#A3C9A8",
    particleType: "leaf",
  },
  music: {
    name: "Music Lake",
    icon: Music,
    color: "#89C2D9",
    particleType: "ripple",
  },
  edit: {
    name: "Creative Studio",
    icon: Video,
    color: "#FFAFCC",
    particleType: "sparkle",
  },
};

// SVG Rope component connecting anchor to card
function RopeLine({
  id,
  startX,
  startY,
  endX,
  endY,
}: {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}) {
  const controlX = (startX + endX) / 2 + (Math.random() - 0.5) * 40;
  const controlY = startY + Math.abs(endY - startY) * 0.4;

  return (
    <svg
      key={id}
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
      style={{ zIndex: 1 }}
    >
      <defs>
        <linearGradient
          id={`rope-${id}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="rgba(200,180,150,0.4)" />
          <stop offset="100%" stopColor="rgba(200,180,150,0.2)" />
        </linearGradient>
      </defs>
      <path
        d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        stroke={`url(#rope-${id})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="rope-sway"
      />
    </svg>
  );
}

// Floating Particle component
function FloatingParticle({
  id,
  type,
  delay,
}: {
  id: string;
  type: "leaf" | "sparkle" | "ripple";
  delay: number;
}) {
  if (type === "leaf") {
    return (
      <div
        key={id}
        className="absolute animate-drift pointer-events-none floating-leaf"
        style={{
          animationDelay: `${delay}s`,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          opacity: 0.3,
        }}
      >
        <div className="text-3xl">🍂</div>
      </div>
    );
  }

  if (type === "sparkle") {
    return (
      <div
        key={id}
        className="absolute animate-sparkle pointer-events-none"
        style={{
          animationDelay: `${delay}s`,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          width: "8px",
          height: "8px",
          background: "radial-gradient(circle, #FFD700 0%, #FFAF00 100%)",
          borderRadius: "50%",
          boxShadow: "0 0 12px #FFD700",
        }}
      />
    );
  }

  return (
    <div
      key={id}
      className="absolute animate-ripple pointer-events-none"
      style={{
        animationDelay: `${delay}s`,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        width: "20px",
        height: "20px",
        border: "2px solid #89C2D9",
        borderRadius: "50%",
        opacity: 0.4,
      }}
    />
  );
}

// Push Pin decoration
function PushPin({ color }: { color: string }) {
  return (
    <div
      className="absolute w-4 h-4 rounded-full shadow-lg"
      style={{
        backgroundColor: color,
        top: "-8px",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: `0 2px 8px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)`,
        border: "2px solid rgba(255,255,255,0.6)",
      }}
    />
  );
}

// Tape corner decoration
function TapeCorner({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute w-6 h-6 ${positions[position]} pointer-events-none`}
      style={{
        background: "linear-gradient(135deg, rgba(255,222,89,0.5), rgba(255,222,89,0.3))",
        transform: position.includes("top-left")
          ? "rotate(0deg)"
          : position.includes("top-right")
            ? "rotate(90deg)"
            : position.includes("bottom-left")
              ? "rotate(270deg)"
              : "rotate(180deg)",
      }}
    />
  );
}

export default function ProjectsSectionNew() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Generate random rotation for each card
  const cardRotations = useMemo(() => {
    const rotations: Record<number, number> = {};
    projects.forEach((p) => {
      rotations[p.id] = (Math.random() - 0.5) * 6;
    });
    return rotations;
  }, []);

  // Generate random Y offsets for varied heights
  const cardOffsets = useMemo(() => {
    const offsets: Record<number, number> = {};
    projects.forEach((p) => {
      offsets[p.id] = Math.random() * 80;
    });
    return offsets;
  }, []);

  // Generate particles
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const categories = Object.keys(categoryConfig) as Array<
        keyof typeof categoryConfig
      >;
      const category = categories[i % categories.length];
      return {
        id: `particle-${i}`,
        type: categoryConfig[category].particleType as
          | "leaf"
          | "sparkle"
          | "ripple",
        delay: i * 0.5,
      };
    });
  }, []);

  const getLink = (project: Project) => {
    return (
      project.github || project.demo || project.bandLab || project.Youtube || "#"
    );
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 z-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <style>{`
        @keyframes rope-sway {
          0%, 100% { transform: translateX(0px) scaleX(1); }
          50% { transform: translateX(8px) scaleX(1.02); }
        }
        @keyframes floating-leaf {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.4; }
          100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes ripple {
          0% { 
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        @keyframes mist-drift {
          0% { transform: translateX(0) translateY(0); opacity: 0.1; }
          50% { transform: translateX(30px) translateY(-20px); opacity: 0.15; }
          100% { transform: translateX(0) translateY(0); opacity: 0.1; }
        }
        @keyframes card-sway {
          0%, 100% { transform: translateY(0) rotate(var(--card-rotation)); }
          50% { transform: translateY(-12px) rotate(var(--card-rotation)); }
        }
        @keyframes paper-float {
          0%, 100% { transform: translateY(-8px) rotate(var(--card-rotation)); }
          50% { transform: translateY(8px) rotate(var(--card-rotation)); }
        }
        
        .rope-sway {
          animation: rope-sway 3s ease-in-out infinite;
          transform-origin: center;
        }
        .floating-leaf {
          animation: floating-leaf 8s ease-out forwards;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 2s ease-out infinite;
        }
        .mist-background {
          animation: mist-drift 12s ease-in-out infinite;
        }
        .card-float {
          animation: paper-float 4s ease-in-out infinite;
        }
        .card-float:hover {
          animation: card-sway 1.5s ease-in-out infinite;
        }
        
        .paper-texture {
          background-image: 
            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23fff' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 50px 50px;
        }
        
        .handmade-corner {
          border-radius: 
            ${Math.random() * 8 + 12}% ${Math.random() * 8 + 12}% 
            ${Math.random() * 8 + 12}% ${Math.random() * 8 + 12}% /
            ${Math.random() * 8 + 12}% ${Math.random() * 8 + 12}% 
            ${Math.random() * 8 + 12}% ${Math.random() * 8 + 12}%;
        }
      `}</style>

      {/* Background Magical Atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Mist */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F5F2ED] to-[#EEE9E0]" />

        {/* Magical Glow Orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl mist-background"
          style={{
            background: "radial-gradient(circle, #A3C9A8 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl mist-background"
          style={{
            background: "radial-gradient(circle, #89C2D9 0%, transparent 70%)",
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl mist-background"
          style={{
            background: "radial-gradient(circle, #FFAFCC 0%, transparent 70%)",
            animationDelay: "-8s",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <FloatingParticle
            key={p.id}
            id={p.id}
            type={p.type}
            delay={p.delay}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#A3C9A8]" />
            <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50]">
              Floating Memories
            </h2>
            <Sparkles className="w-6 h-6 text-[#89C2D9]" />
          </div>
          <p className="text-slate-600 font-medium max-w-2xl">
            A collection of creative artifacts, handmade memories, and dreamy projects
            suspended in a cozy fantasy world
          </p>
        </div>

        {/* Floating Cards Container */}
        <div className="relative w-full h-[1200px] md:h-[800px] lg:h-[900px]">
          {/* Rope and Card System */}
          {projects.map((project, idx) => {
            const xPercent = (idx % 3) * 35 + 10 + Math.random() * 10;
            const yPercent = Math.floor(idx / 3) * 40 + cardOffsets[project.id];

            const startX = (xPercent * window.innerWidth) / 100;
            const startY = 0;
            const endX = (xPercent * window.innerWidth) / 100;
            const endY = (yPercent * 900) / 100;

            const isHovered = hoveredId === project.id;

            return (
              <div key={project.id}>
                {/* Rope Line */}
                {typeof window !== "undefined" && (
                  <RopeLine
                    id={`rope-${project.id}`}
                    startX={startX}
                    startY={startY}
                    endX={endX}
                    endY={endY}
                  />
                )}

                {/* Card */}
                <div
                  className="absolute card-float transition-all duration-300 group"
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                    "--card-rotation": `${cardRotations[project.id]}deg`,
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Push Pin */}
                  <PushPin color={project.color} />

                  {/* Main Card */}
                  <div
                    className={`relative w-64 bg-white/85 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 ${
                      isHovered
                        ? "scale-105 shadow-3xl"
                        : "hover:scale-102"
                    }`}
                    style={{
                      borderRadius: `${Math.random() * 8 + 16}% ${Math.random() * 8 + 16}% ${Math.random() * 8 + 16}% ${Math.random() * 8 + 16}%`,
                      border: `2px solid ${project.color}30`,
                      boxShadow: isHovered
                        ? `0 20px 40px rgba(0,0,0,0.15), 0 0 30px ${project.color}40`
                        : "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Paper Texture Overlay */}
                    <div
                      className="absolute inset-0 paper-texture pointer-events-none z-10"
                      style={{ opacity: 0.3 }}
                    />

                    {/* Tape Corners */}
                    <TapeCorner position="top-left" />
                    <TapeCorner position="top-right" />
                    <TapeCorner position="bottom-left" />
                    <TapeCorner position="bottom-right" />

                    {/* Image Section */}
                    <div
                      className="w-full h-40 overflow-hidden relative"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                      }}
                    >
                      {project.img && (
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}50 100%)`,
                        }}
                      >
                        {!project.img && (
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: project.color }}
                          >
                            <Code2 size={24} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      {/* Title & Category */}
                      <h3 className="font-pixel text-base text-[#2C3E50] mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.slice(0, 2).map((t, i) => (
                          <span
                            key={i}
                            className="text-[9px] px-2 py-1 rounded-full font-bold text-white"
                            style={{ backgroundColor: project.color }}
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="text-[9px] px-2 py-1 rounded-full font-bold text-slate-600 bg-slate-100">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <button
                            onClick={() => window.open(project.github, "_blank")}
                            className="flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition-all text-xs font-bold hover:scale-105"
                          >
                            <Github size={12} />
                            <span>Code</span>
                          </button>
                        )}

                        {(project.demo && project.demo !== "#") ||
                        project.bandLab ||
                        project.Youtube ? (
                          <button
                            onClick={() => {
                              const url = getLink(project);
                              if (url && url !== "#") window.open(url, "_blank");
                            }}
                            className="flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-white transition-all text-xs font-bold hover:scale-105"
                            style={{
                              backgroundColor: project.color,
                            }}
                          >
                            <Play size={12} />
                            <span>View</span>
                          </button>
                        ) : null}
                      </div>
                    </div>

                    {/* Glow Effect on Hover */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 pointer-events-none rounded-2xl animate-pulse"
                        style={{
                          backgroundColor: `${project.color}20`,
                          boxShadow: `inset 0 0 30px ${project.color}30`,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  
  const projects = [

  // =====================================
  // CODE PROJECTS
  // =====================================
  {
    id: 1,
    title: "ClassTeams-Info",
    category: "code",
    desc: "The website used to promote Teams classes uses Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    color: "#A3C9A8",
    img: "/assets/images/project-1.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/classteams-info",
  },

  {
    id: 2,
    title: "YT Emotion Analyzer",
    category: "code",
    desc: "A website for analyzing YouTube comments using the Google API and Chart.js.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
    color: "#A2D2FF",
    img: "/assets/images/project-2.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/yt-emotion-analyzer",
  },

  {
    id: 3,
    title: "MindEase Bot AI",
    category: "code",
    desc: "AI chatbot for helping users manage stress and relaxation.",
    tech: ["Node.js", "JavaScript", "Gemini API"],
    color: "#FDE2E4",
    img: "/assets/images/project-3.png",
    demo: "#",
    github: "https://github.com/lufikaZkl30/MindEase-ChatBot-Real",
  },

  // =====================================
  // MUSIC PROJECTS
  // =====================================

  {
    id: 4,
    title: "Loser In You (Prod.Lotus)",
    category: "music",
    desc: "“Loser In You” is a song about the loss of a once-close friendship. It tells of memories that are hard to forget and feelings that linger to this day.",
    tech: ["BandLab", "R&B & Soul", "Mixing","Collaboration"],
    color: "#89C2D9",
    img: "/assets/images/music-1.png",
    bandLab: "https://www.bandlab.com/post/d733931e-5776-49c3-9cd6-d1dcdfd835f1",
  },


  // =====================================
  // EDITING PROJECTS
  // =====================================
  {
    id: 7,
    title: "Anime Velocity Edit",
    category: "edit",
    desc: "Cinematic anime edit dengan transisi cepat dan efek velocity smooth.",
    tech: ["After Effects", "AMV", "Velocity"],
    color: "#FFAFCC",
    img: "/assets/images/edit-1.png",
    Youtube: "#",
  },

 
];

// Define the islands representing project categories
  const islands: Island[] = [
    {
      id: 'code',
      title: 'Web Dev Village',
      color: '#A3C9A8',
      darkColor: '#7A9D7E',
      position: 'top-[8%] left-[5%] md:top-[15%] md:left-[12%]',
      size: 'w-44 h-44 md:w-60 md:h-60',
      icon: Code2,
      decor: Trees,
      animationDelay: '0s',
      borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
    },
    {
      id: 'edit',
      title: 'Creative Studio',
      color: '#FDE2E4',
      darkColor: '#D3A5A9',
      position: 'bottom-[5%] left-[50%] -translate-x-1/2 md:bottom-[10%]',
      size: 'w-48 h-48 md:w-72 md:h-72',
      icon: Video,
      decor: Tent,
      animationDelay: '1.5s',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
    },
    {
      id: 'music',
      title: 'Music Lake',
      color: '#A2D2FF',
      darkColor: '#7AABC8',
      position: 'top-[15%] right-[5%] md:top-[20%] md:right-[10%]',
      size: 'w-36 h-36 md:w-52 md:h-52',
      icon: Music,
      decor: Star,
      animationDelay: '0.7s',
      borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%'
    }
  ];

  const handleIslandClick = (island: Island) => {
    setSelectedIsland(island);
    setMapState('zooming_in');
    setTimeout(() => {
      setMapState('island');
    }, 800);
  };

  const handleBackToMap = () => {
    setMapState('zooming_out');
    setTimeout(() => {
      setMapState('map');
      setSelectedIsland(null);
    }, 800);
  };

  const filteredProjects = selectedIsland ? projects.filter(p => p.category === selectedIsland.id) : [];

  return (
    <section id="projects" className="relative min-h-screen py-24 z-10 flex flex-col items-center justify-center">
      <style>{`
        .water-ripple {
          position: absolute;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: ripple 4s linear infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; border-width: 3px; }
          100% { transform: scale(2.5); opacity: 0; border-width: 1px; }
        }
        .island-shadow {
          box-shadow: inset -10px -15px 0px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15);
        }
        .island-hover-glow {
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .island-hover-glow:hover {
          transform: scale(1.08) translateY(-15px);
          filter: brightness(1.05);
          box-shadow: inset -10px -15px 0px rgba(0,0,0,0.1), 0 30px 50px rgba(255,255,255,0.6);
          z-index: 20;
        }
        .cinematic-overlay {
          position: absolute;
          inset: 0;
          background: #FDFBF7;
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-6xl relative">
        
        {/* Section Header */}
        <div className={`flex flex-col items-center mb-10 text-center transition-all duration-700 ${mapState === 'map' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8 pointer-events-none absolute left-1/2 -translate-x-1/2'}`}>
          <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50] mb-4">Project Island World Map</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm">
             <MapIcon size={16} className="text-[#A2D2FF]" />
             <span className="text-slate-600 font-medium tracking-wide text-sm">Select an island region to explore artifacts</span>
          </div>
        </div>

        {/* Immersive Map Container */}
        <div className="relative w-full h-[600px] md:h-[750px] bg-gradient-to-b from-[#E0F4FF] to-[#C9E9F6] rounded-[40px] border-8 border-white shadow-2xl overflow-hidden">
          
          {/* Cinematic Fade Overlay */}
          <div className="cinematic-overlay" style={{ opacity: (mapState === 'zooming_in' || mapState === 'zooming_out') ? 1 : 0 }} />

          {/* LAYER 1: The Map View */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out origin-center ${mapState === 'map' ? 'opacity-100 scale-100 z-10' : mapState === 'zooming_in' ? 'opacity-0 scale-150 z-0 pointer-events-none' : 'opacity-0 scale-90 z-0 pointer-events-none'}`}>
            
            {/* Ambient Water Environment */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-20 mix-blend-overlay"></div>
            <div className="water-ripple top-[20%] left-[30%] w-32 h-32"></div>
            <div className="water-ripple top-[60%] right-[20%] w-48 h-48" style={{ animationDelay: '1.5s' }}></div>
            <div className="water-ripple bottom-[30%] left-[15%] w-24 h-24" style={{ animationDelay: '2.5s' }}></div>

            {/* Drifting Clouds overlaying the map */}
            <div className="absolute top-[15%] left-0 text-white/80 animate-drift pointer-events-none drop-shadow-md" style={{ animationDuration: '40s' }}><Cloud size={90} fill="currentColor" /></div>
            <div className="absolute top-[50%] left-0 text-white/60 animate-drift pointer-events-none drop-shadow-md" style={{ animationDuration: '60s', animationDelay: '-15s' }}><Cloud size={140} fill="currentColor" /></div>

            {/* Interactive Islands */}
            {islands.map((island) => {
              const Decor = island.decor;
              const IconComp = island.icon;
              return (
                <div
                  key={island.id}
                  onClick={() => handleIslandClick(island)}
                  className={`absolute ${island.position} ${island.size} cursor-pointer island-hover-glow island-shadow animate-float flex flex-col items-center justify-center group`}
                  style={{
                    backgroundColor: island.color,
                    animationDelay: island.animationDelay,
                    border: '6px solid rgba(255,255,255,0.6)',
                    borderRadius: island.borderRadius,
                  }}
                >
                  {/* Island Decor */}
                  <Decor size={36} className="absolute top-4 left-6 text-white/50 drop-shadow-sm" />
                  <Decor size={24} className="absolute bottom-8 right-6 text-white/50 drop-shadow-sm" />
                  <Decor size={16} className="absolute top-1/2 left-4 text-white/40 drop-shadow-sm" />

                  {/* Main Icon Plate */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center mb-3 transform group-hover:-translate-y-3 transition-transform duration-500 relative z-10 border-4 border-white">
                    <IconComp size={36} style={{ color: island.darkColor }} className="drop-shadow-sm" />
                    
                    {/* Glowing ping effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-50"></div>
                  </div>

                  {/* Island Title Label */}
                  <span className="font-pixel text-lg md:text-xl text-center px-5 py-2 rounded-2xl bg-white/95 text-slate-700 shadow-md transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {island.title}
                  </span>

                  {/* Floating environmental particles */}
                  <div className="absolute top-[10%] right-[20%] w-3 h-3 bg-white rounded-full animate-pulse opacity-80 blur-[1px]"></div>
                  <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-white rounded-full animate-pulse opacity-60 blur-[1px]" style={{ animationDelay: '1s'}}></div>
                </div>
              );
            })}
          </div>

          {/* LAYER 2: Island Projects Details View */}
          <div className={`absolute inset-0 bg-[#FDFBF7] transition-opacity duration-1000 overflow-y-auto custom-scrollbar ${mapState === 'island' ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
            {selectedIsland && (
              <div className="min-h-full p-6 md:p-12 relative flex flex-col">
                
                {/* Subtle themed background glow */}
                <div className="absolute top-0 left-0 w-full h-96 opacity-30 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${selectedIsland.color}, transparent)` }}></div>

                {/* Navigation & Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-10">
                  <button
                    onClick={handleBackToMap}
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2C3E50] text-slate-600 hover:text-[#2C3E50] transition-all shadow-sm hover:shadow-md self-start md:self-auto"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#2C3E50] group-hover:text-white transition-colors">
                      <MapIcon size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">Return to Map</span>
                  </button>

                  <div className="flex items-center gap-4 bg-white/80 px-6 py-3 rounded-2xl shadow-sm border border-white backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-inner" style={{ backgroundColor: selectedIsland.color }}>
                      <selectedIsland.icon size={20} />
                    </div>
                    <h3 className="font-pixel text-2xl md:text-3xl text-[#2C3E50]">{selectedIsland.title}</h3>
                  </div>
                </div>

                {/* Filtered Artifacts Grid - Horizontal Scrollable */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="overflow-x-auto custom-scrollbar pb-4">
                    <div className="flex gap-6 min-w-full px-6">
                      {filteredProjects.length > 0 ? filteredProjects.map((project, idx) => (
                        <div 
                          key={project.id} 
                          className="flex-shrink-0 w-80 glass-card bg-white/70 flex flex-col group interactive-hover relative overflow-hidden border-2 border-transparent hover:border-slate-200 animate-fade-in-up"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {/* Project Preview Area */}
                          <div 
                            className="w-full h-40 relative overflow-hidden flex items-center justify-center bg-cover bg-center"
                            style={{
                              backgroundImage: `url('${project.img}')`,
                              borderBottom: `2px solid ${selectedIsland.color}30`
                            }}
                          >
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${selectedIsland.color}40 0%, ${selectedIsland.color}60 100%)` }}></div>

                            {/* Fallback Icon if image fails */}
                            <div className="relative z-10 flex flex-col items-center gap-2 text-center group-hover:opacity-0 transition-opacity">
                              <div 
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500"
                                style={{ backgroundColor: selectedIsland.color }}
                              >
                                <selectedIsland.icon size={32} />
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-5 flex flex-col flex-grow relative z-10">
                            {/* Decorative Background Blur */}
                            <div 
                              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                              style={{ backgroundColor: selectedIsland.color }}
                            ></div>

                            <div className="relative z-10 mb-3">
                              <h3 className="font-pixel text-lg text-[#2C3E50] mb-2 group-hover:text-slate-800 transition-colors line-clamp-2">{project.title}</h3>
                              <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-3">
                                {project.desc}
                              </p>
                            </div>

                            <div className="mt-auto relative z-10 pt-4">
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tech.slice(0, 3).map((t, i) => (
                                  <span key={i} className="text-[10px] font-bold tracking-wide px-2 py-1 bg-slate-100 text-slate-600 rounded-md shadow-inner">
                                    {t}
                                  </span>
                                ))}
                                {project.tech.length > 3 && (
                                  <span className="text-[10px] font-bold tracking-wide px-2 py-1 bg-slate-100 text-slate-600 rounded-md shadow-inner">
                                    +{project.tech.length - 3}
                                  </span>
                                )}
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="flex items-center gap-2">
                                {/* GitHub Button */}
                                {(project as any).github && (
                                  <button 
                                    onClick={() => window.open((project as any).github, "_blank")}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition-all duration-300 hover:scale-105 text-xs font-bold"
                                  >
                                    <Github size={14} />
                                    <span>GitHub</span>
                                  </button>
                                )}
                                
                                {/* Demo/Link Button */}
                                {((project as any).demo && (project as any).demo !== "#") || (project as any).bandLab || (project as any).Youtube ? (
                                  <button 
                                    onClick={() => {
                                      const url = (project as any).demo || (project as any).bandLab || (project as any).Youtube;
                                      if (url && url !== "#") window.open(url, "_blank");
                                    }}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105 text-xs font-bold"
                                    style={{ backgroundColor: selectedIsland.color }}
                                  >
                                    <Play size={14} />
                                    <span>View</span>
                                  </button>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : (
                        <div className="w-full flex flex-col items-center justify-center py-20 text-center text-slate-400">
                          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                            <Trees size={40} className="opacity-40" />
                          </div>
                          <h4 className="font-pixel text-2xl text-slate-500 mb-2">Uncharted Territory</h4>
                          <p className="font-medium">No artifacts discovered in this region yet. Check back soon!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
