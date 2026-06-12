"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Code2,
  Video,
  Disc,
  Headphones,
  Sparkles,
  Globe,
  Palette,
  Database,
  Terminal,
  Cpu,
  Layers,
  Wand2,
  Info,
  Layers3
} from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface InventoryItem {
  id: string;
  name: string;
  icon: any;
  level: string; // e.g. "Lv. 9", "Lv. 7"
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  type: string;  // e.g. "Alchemy Station", "Luminous Wand"
  description: string;
  stats: { name: string; value: number }[]; // values from 1-10
  color: string; // border/glow color
  rarityColor: string; // text color for rarity
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const INVENTORY_DATA: Record<string, InventoryItem[]> = {
  music: [
    {
      id: "flstudio",
      name: "FL Studio",
      icon: Disc,
      level: "Lv. 3",
      rarity: "Common",
      type: "Novice Station",
      description: "A digital audio workstation I am currently exploring as a beginner to learn the basics of beatmaking, arrangement, and sound patterns.",
      stats: [
        { name: "Beatmaking", value: 3 },
        { name: "Arranging", value: 3 },
        { name: "Synthesis", value: 2 }
      ],
      color: "#94a3b8",
      rarityColor: "text-slate-500 font-bold"
    },
    {
      id: "bandlab",
      name: "BandLab",
      icon: Headphones,
      level: "Lv. 9",
      rarity: "Legendary",
      type: "Pocket Synth",
      description: "My primary tool for cloud composition, vocal recording, sketching melodies, and sharing work across realms.",
      stats: [
        { name: "Portability", value: 10 },
        { name: "Composition", value: 9 },
        { name: "Collaboration", value: 9 }
      ],
      color: "#ffaa00",
      rarityColor: "text-amber-500 font-bold animate-pulse"
    },
    {
      id: "soundcloud",
      name: "SoundCloud",
      icon: Sparkles,
      level: "Lv. 7",
      rarity: "Rare",
      type: "Bard's Stage",
      description: "Platform for hosting my music, sharing completed tracks, and gathering auditory reviews from listeners.",
      stats: [
        { name: "Distribution", value: 8 },
        { name: "Audience Sync", value: 7 },
        { name: "Vibe", value: 8 }
      ],
      color: "#ff5500",
      rarityColor: "text-blue-500 font-bold"
    }
  ],
  code: [
    {
      id: "nextjs",
      name: "Next.js & React",
      icon: Globe,
      level: "Lv. 8",
      rarity: "Epic",
      type: "Luminous Wand",
      description: "My core tool for conjuring fast, responsive, and interactive user interfaces and frontend portals on the web.",
      stats: [
        { name: "Speed", value: 8 },
        { name: "Structure", value: 8 },
        { name: "Interaction", value: 9 }
      ],
      color: "#2C3E50",
      rarityColor: "text-purple-500 font-bold"
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: Palette,
      level: "Lv. 9",
      rarity: "Legendary",
      type: "Prism Cloak",
      description: "Allows rapid weaving of responsive styling layouts. Fits any screen resolution dynamically with perfect styling speed.",
      stats: [
        { name: "Aesthetics", value: 10 },
        { name: "Build Speed", value: 9 },
        { name: "Flexibility", value: 9 }
      ],
      color: "#38bdf8",
      rarityColor: "text-amber-500 font-bold animate-pulse"
    },
    {
      id: "javascript",
      name: "JavaScript & TS",
      icon: Terminal,
      level: "Lv. 8",
      rarity: "Epic",
      type: "Logic Scroll",
      description: "The primary scripting language that dictates interactive behavior and logic throughout my web projects.",
      stats: [
        { name: "Logic", value: 8 },
        { name: "TypeScript", value: 7 },
        { name: "Implementation", value: 8 }
      ],
      color: "#A3C9A8",
      rarityColor: "text-purple-500 font-bold"
    },
    {
      id: "supabase",
      name: "Supabase & SQL",
      icon: Database,
      level: "Lv. 3",
      rarity: "Common",
      type: "Locked Chest",
      description: "A database and backend framework that I am still learning. Used to understand basic data storage and user auth.",
      stats: [
        { name: "Querying", value: 3 },
        { name: "Data Design", value: 3 },
        { name: "Usage", value: 4 }
      ],
      color: "#94a3b8",
      rarityColor: "text-slate-500 font-bold"
    },
    {
      id: "python",
      name: "Python",
      icon: Cpu,
      level: "Lv. 5",
      rarity: "Rare",
      type: "Basic Scroll",
      description: "Used to write backend scripts, automation pipelines, and call APIs for simple calculations.",
      stats: [
        { name: "Automation", value: 6 },
        { name: "Scripting", value: 5 },
        { name: "Library Use", value: 5 }
      ],
      color: "#ffd43b",
      rarityColor: "text-blue-500 font-bold"
    }
  ],
  visual: [
    {
      id: "capcut",
      name: "CapCut & InShot",
      icon: Video,
      level: "Lv. 9",
      rarity: "Legendary",
      type: "Chrono Splicer",
      description: "My go-to tools for splicing video clips, managing visual rhythms, and syncing visual triggers for TikTok contents.",
      stats: [
        { name: "Cutting Speed", value: 9 },
        { name: "Audio Sync", value: 9 },
        { name: "Visual FX", value: 9 }
      ],
      color: "#ffaa00",
      rarityColor: "text-amber-500 font-bold animate-pulse"
    },
    {
      id: "canva",
      name: "Canva",
      icon: Layers,
      level: "Lv. 9",
      rarity: "Legendary",
      type: "Blueprint Grid",
      description: "A fast canvas environment for structuring templates, branding assets, presentation slides, and graphic designs.",
      stats: [
        { name: "Layout Speed", value: 10 },
        { name: "Resource Pool", value: 9 },
        { name: "Design Flow", value: 9 }
      ],
      color: "#00c4cc",
      rarityColor: "text-amber-500 font-bold animate-pulse"
    },
    {
      id: "aftereffects",
      name: "After Effects",
      icon: Layers3,
      level: "Lv. 4",
      rarity: "Common",
      type: "Motion Catalyst",
      description: "Used to practice basic keyframe animations and simple motion graphic presets.",
      stats: [
        { name: "Keyframing", value: 4 },
        { name: "Visual Effects", value: 4 },
        { name: "Complexity", value: 3 }
      ],
      color: "#94a3b8",
      rarityColor: "text-slate-500 font-bold"
    }
  ]
};

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<"music" | "code" | "visual">("code");
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(INVENTORY_DATA.code[0]);

  const activeItems = INVENTORY_DATA[activeTab];
  // Create an array of 12 slots (any items, filled with null for empty slots)
  const inventorySlots = Array.from({ length: 12 }, (_, i) => activeItems[i] || null);

  // Stats bar helper (returns blocks like [■■■■■■■□□□])
  const renderStatBlocks = (value: number) => {
    const filled = "■".repeat(value);
    const empty = "□".repeat(10 - value);
    return `[${filled}${empty}]`;
  };

  return (
    <section id="tools" className="relative py-24 flex flex-col items-center z-10 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        .font-pixel {
          font-family: 'VT323', monospace;
          letter-spacing: 0.05em;
        }

        .tools-bg {
          background:
            radial-gradient(circle at bottom, rgba(255,255,255,0.9), transparent 50%),
            linear-gradient(to bottom, #FDFBF7, #F5F7FB, #FDFBF7);
        }

        /* RPG styled double border */
        .rpg-border {
          border: 4px solid #2C3E50;
          outline: 2px solid white;
          box-shadow: 0 10px 25px rgba(44, 62, 80, 0.15);
        }

        .rpg-slot {
          aspect-ratio: 1;
          border: 2px solid #BDC3C7;
          background: rgba(236, 240, 241, 0.4);
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .rpg-slot:hover {
          border-color: #2C3E50;
          background: rgba(255, 255, 255, 0.85);
          transform: scale(1.05);
        }

        .rpg-slot.active {
          border-color: #2C3E50;
          background: white;
          box-shadow: 0 0 10px rgba(163, 201, 168, 0.6), inset 0 0 4px rgba(0,0,0,0.1);
        }

        /* RPG button pressed effect */
        .rpg-tab-btn {
          border: 3px solid #2C3E50;
          background: #ECF0F1;
          box-shadow: 0 4px 0 #2C3E50;
          transition: all 0.1s ease;
        }

        .rpg-tab-btn:active, .rpg-tab-btn.active {
          transform: translateY(3px);
          box-shadow: 0 1px 0 #2C3E50;
          background: #BDC3C7;
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="absolute inset-0 tools-bg -z-20" />

      {/* Cozy clouds decoration */}
      <div className="absolute top-10 left-1/4 w-28 h-10 bg-white/50 rounded-full blur-sm pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-12 bg-white/40 rounded-full blur-md pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2EFE9] border border-slate-300 text-[#2C3E50] mb-6 shadow-sm">
            <span className="font-bold text-sm tracking-widest uppercase font-pixel">
              Equipment & Gear
            </span>
          </div>

          <h2 className="font-pixel text-5xl md:text-6xl text-[#2C3E50] mb-4">
            Adventurer's Backpack
          </h2>

          <p className="text-slate-500 max-w-md font-medium leading-relaxed text-sm md:text-base">
            Inspect the tools and gear I carry in my backpack to summon digital realms.
          </p>
        </div>

        {/* RPG INVENTORY INTERFACE */}
        <div className="w-full max-w-4xl bg-[#FDFBF7]/90 rounded-3xl p-6 md:p-10 rpg-border relative">
          
          {/* Header Bar inside backpack */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-b-4 border-[#2C3E50] pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <h3 className="font-pixel text-3xl md:text-4xl text-[#2C3E50] tracking-wide">
                LUFIKA'S INVENTORY
              </h3>
            </div>

            {/* TAB SELECTORS (INVENTORY BAGS) */}
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  setActiveTab("code");
                  setSelectedItem(INVENTORY_DATA.code[0]);
                }}
                className={`rpg-tab-btn font-pixel text-lg md:text-xl px-4 py-2 rounded-xl flex items-center gap-2 ${
                  activeTab === "code" ? "active" : ""
                }`}
              >
                <Code2 size={16} />
                CODE
              </button>
              <button
                onClick={() => {
                  setActiveTab("music");
                  setSelectedItem(INVENTORY_DATA.music[0]);
                }}
                className={`rpg-tab-btn font-pixel text-lg md:text-xl px-4 py-2 rounded-xl flex items-center gap-2 ${
                  activeTab === "music" ? "active" : ""
                }`}
              >
                <Music size={16} />
                MUSIC
              </button>
              <button
                onClick={() => {
                  setActiveTab("visual");
                  setSelectedItem(INVENTORY_DATA.visual[0]);
                }}
                className={`rpg-tab-btn font-pixel text-lg md:text-xl px-4 py-2 rounded-xl flex items-center gap-2 ${
                  activeTab === "visual" ? "active" : ""
                }`}
              >
                <Video size={16} />
                VISUAL
              </button>
            </div>
          </div>

          {/* MAIN BAG GRID & INSPECTOR PANELS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* LEFT SIDE: INVENTORY GRID */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-pixel text-xl text-slate-500">
                  Select item to inspect ({activeItems.length} / 12 Slots)
                </span>
                <span className="font-pixel text-xl text-slate-500 uppercase">
                  TAB: {activeTab}
                </span>
              </div>

              {/* Grid Layout (4 Columns) */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-[#ECF0F1]/50 rounded-2xl border-2 border-slate-300/80">
                {inventorySlots.map((item, index) => {
                  if (item === null) {
                    // Empty Inventory Slot placeholder
                    return (
                      <div
                        key={`empty-${index}`}
                        className="rpg-slot rounded-xl flex items-center justify-center border-dashed border-2 border-slate-300 opacity-40 cursor-not-allowed select-none"
                      >
                        <span className="font-pixel text-slate-400 text-sm">Empty</span>
                      </div>
                    );
                  }

                  const IconComp = item.icon;
                  const isSelected = selectedItem?.id === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      onMouseEnter={() => setSelectedItem(item)}
                      className={`rpg-slot rounded-xl flex flex-col items-center justify-center p-2 relative group ${
                        isSelected ? "active border-4" : ""
                      }`}
                      style={{ borderColor: isSelected ? item.color : "" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComp
                        size={28}
                        className="transition-colors duration-200"
                        style={{ color: isSelected ? item.color : "#7F8C8D" }}
                      />
                      
                      {/* Item level badge */}
                      <span className="absolute bottom-1 right-1.5 font-pixel text-xs text-[#7F8C8D] font-semibold bg-white/70 px-1 rounded">
                        {item.level}
                      </span>

                      {/* Small hover glow dot */}
                      <span
                        className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full opacity-70"
                        style={{ backgroundColor: item.color }}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Tips block */}
              <div className="mt-5 flex gap-2.5 items-start p-4 bg-white/60 rounded-xl border border-slate-200 text-slate-500 text-xs leading-relaxed">
                <Info size={16} className="text-[#A3C9A8] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> Hovering or tapping a item slot activates the inspect lens. Item classes, levels, and attributes are dynamically loaded into the inspector.
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: ITEM INSPECTOR PANEL */}
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  className="bg-[#2C3E50] text-white rounded-2xl p-6 border-4 border-[#BDC3C7] shadow-xl relative"
                  style={{
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.15), 0 0 20px ${selectedItem.color}22`
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Decorative bracket lines */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/20" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/20" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/20" />

                  {/* Inspector Header */}
                  <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                    <div>
                      <h4 className="font-pixel text-3xl tracking-wide text-white leading-none">
                        {selectedItem.name}
                      </h4>
                      <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider block mt-1">
                        Type: {selectedItem.type}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-pixel text-xl text-yellow-300 font-bold block leading-none">
                        {selectedItem.level}
                      </span>
                      <span className={`text-[10px] uppercase tracking-wider block mt-1 ${selectedItem.rarityColor}`}>
                        💎 {selectedItem.rarity}
                      </span>
                    </div>
                  </div>

                  {/* Lore/Description */}
                  <div className="mb-6">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{selectedItem.description}"
                    </p>
                  </div>

                  {/* Attributes & Stats */}
                  <div className="space-y-4">
                    <h5 className="font-pixel text-xl text-yellow-300 tracking-wider">
                      ✦ ITEM ATTRIBUTES ✦
                    </h5>

                    <div className="space-y-2.5">
                      {selectedItem.stats.map((st, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-xs text-slate-300 font-medium w-24">
                            {st.name}
                          </span>
                          
                          <div className="flex items-center gap-3 flex-1 justify-end">
                            {/* Retro Stat Block string */}
                            <span className="font-pixel text-sm text-[#A3C9A8] tracking-widest hidden sm:inline">
                              {renderStatBlocks(st.value)}
                            </span>
                            
                            {/* Visual Progress Bar */}
                            <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden border border-white/10">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${st.value * 10}%`,
                                  backgroundColor: selectedItem.color
                                }}
                              />
                            </div>
                            
                            <span className="font-pixel text-xs text-white/80 font-bold w-4 text-right">
                              +{st.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Glow Core Icon inside Panel */}
                  <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                    {React.createElement(selectedItem.icon, { size: 100 })}
                  </div>

                </motion.div>
              ) : (
                <div className="bg-[#2C3E50]/5 rounded-2xl p-10 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center h-[340px]">
                  <span className="text-5xl mb-4 opacity-40">🔍</span>
                  <h4 className="font-pixel text-2xl text-slate-600 mb-1">
                    Inspector Panel Empty
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                    Tap or hover over an item in your bag grid to read its parameters, level properties, and lore statistics.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}