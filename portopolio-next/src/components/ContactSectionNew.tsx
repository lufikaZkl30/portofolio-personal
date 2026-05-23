"use client";

import { Tent, Send, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactSectionNew() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center justify-center z-10 pb-20">
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        
        <div className="glass-card p-12 md:p-20 bg-gradient-to-b from-white/80 to-[#FDFBF7]/90 border-b-8 border-[#2C3E50] shadow-2xl relative overflow-hidden">
          
          {/* Campfire illustration base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#FDE2E4]/50 to-transparent pointer-events-none"></div>
          
          <div className="w-20 h-20 mx-auto bg-[#2C3E50] rounded-full flex items-center justify-center mb-8 relative z-10 shadow-xl border-4 border-white group">
            <Tent size={36} className="text-white group-hover:scale-110 transition-transform duration-300" />
            {/* Fire particles */}
            <div className="absolute -top-2 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-80" style={{ animationDuration: '2s' }}></div>
            <div className="absolute -top-6 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-60" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }}></div>
          </div>

          <h2 className="font-pixel text-4xl md:text-5xl text-[#2C3E50] mb-4 relative z-10">Rest at the Campfire</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto relative z-10">
            Thanks for exploring my digital world. If you'd like to collaborate, leave a message or connect via the links below.
          </p>

          <form className="max-w-md mx-auto space-y-4 mb-10 relative z-10 text-left">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-white/80 focus:outline-none focus:border-[#A3C9A8] transition-colors"
            />
            <button 
              type="button" 
              className="w-full px-5 py-4 rounded-xl bg-[#2C3E50] text-white font-bold tracking-wide hover:bg-[#3d566e] transition-colors flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 relative z-10 pt-8 border-t border-slate-200">
            <a href="https://github.com/lufikaZkl30" className="w-12 h-12 rounded-full glass-card bg-white flex items-center justify-center text-slate-600 hover:text-[#2C3E50] hover:scale-110 transition-all hover:border-[#A3C9A8]">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/lufikaayu" className="w-12 h-12 rounded-full glass-card bg-white flex items-center justify-center text-slate-600 hover:text-[#2C3E50] hover:scale-110 transition-all hover:border-[#A3C9A8]">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lufikaayud/" className="w-12 h-12 rounded-full glass-card bg-white flex items-center justify-center text-slate-600 hover:text-[#2C3E50] hover:scale-110 transition-all hover:border-[#A3C9A8]">
              <Linkedin size={24} />
            </a>
          </div>

        </div>

        <p className="mt-12 text-sm text-slate-400 font-medium tracking-widest uppercase">
          Crafted with care © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
