"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 font-pixel text-primary text-sm hover:text-white hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.8)] transition-all group">
          <div className="w-8 h-8 bg-black pixel-border border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-sm">👾</span>
          </div>
          LUFIKA_AF.EXE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-pixel text-[10px] text-muted hover:text-white transition-colors tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className="pixel-border px-4 py-2 font-pixel text-[10px] text-white hover:bg-primary/30 hover:border-primary transition-all neon-glow-hover">
            CONNECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel py-6 flex flex-col items-center gap-6 border-t-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-pixel text-xs text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="pixel-border px-6 py-3 font-pixel text-xs text-primary">
            CONNECT
          </a>
        </div>
      )}
    </motion.nav>
  );
}
