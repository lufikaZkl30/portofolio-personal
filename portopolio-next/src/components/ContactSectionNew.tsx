"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Github, Linkedin, Cloud, Music, Radio, Zap, Mail, AlertCircle, CheckCircle2 } from "lucide-react";

// =====================================================
// GANTI dengan credentials EmailJS kamu:
// =====================================================
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "YOUR_PUBLIC_KEY";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSectionNew() {
  const formRef = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [focused2, setFocused2] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] flex items-center justify-center z-10 py-24 overflow-hidden"
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(163,201,168,0.04) 3px, rgba(163,201,168,0.04) 4px)",
        }}
      />

      {/* Floating pixel sparkles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute font-pixel text-[#A3C9A8] opacity-30 select-none animate-float"
          style={{
            top: `${10 + i * 14}%`,
            left: i % 2 === 0 ? `${5 + i * 4}%` : `${75 + i * 3}%`,
            fontSize: `${10 + i * 2}px`,
            animationDuration: `${4 + i}s`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {["✦", "◈", "✧", "▸", "◆", "✦"][i]}
        </div>
      ))}

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3C9A8]/20 border border-[#A3C9A8]/40 text-[#A3C9A8] font-semibold text-sm mb-4">
            <Radio size={14} className="animate-pulse" />
            <span className="font-pixel tracking-widest">SIGNAL DETECTED</span>
          </div>
          <h2 className="font-pixel text-5xl md:text-6xl text-[#2C3E50] drop-shadow-sm">
            Send a Signal
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Got a quest, a collab mission, or just want to say hi?{" "}
            <span className="text-[#A3C9A8] font-semibold">Transmit your message</span> — I&apos;ll
            receive it directly in my inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* === LEFT: Terminal-style form === */}
          <div className="glass-card overflow-hidden border-2 border-[#A3C9A8]/30 shadow-xl">
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 px-5 py-3 bg-[#2C3E50]/5 border-b border-[#A3C9A8]/20">
              <div className="w-3 h-3 rounded-full bg-[#FDE2E4] border border-red-300" />
              <div className="w-3 h-3 rounded-full bg-[#FDE2E4]/70 border border-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-[#A3C9A8]/60 border border-green-400" />
              <span className="ml-2 font-pixel text-xs text-slate-400 tracking-widest">
                TRANSMITTER.EXE
              </span>
              <Zap size={12} className="ml-auto text-[#A3C9A8] animate-pulse" />
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name input */}
              <div className="relative">
                <label className="font-pixel text-xs text-[#A3C9A8] tracking-widest mb-1 block">
                  &gt; YOUR_NAME
                </label>
                <div
                  className={`flex items-center gap-3 rounded-xl border-2 transition-all duration-300 bg-white/60 px-4 py-3 ${
                    focused === "name"
                      ? "border-[#A3C9A8] shadow-[0_0_12px_rgba(163,201,168,0.3)]"
                      : "border-slate-200"
                  }`}
                >
                  <span className="text-slate-400 text-sm shrink-0">👤</span>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your name / company"
                    required
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent outline-none text-sm text-[#2C3E50] placeholder:text-slate-300 font-mono"
                  />
                </div>
              </div>

              {/* Email input */}
              <div className="relative">
                <label className="font-pixel text-xs text-[#A3C9A8] tracking-widest mb-1 block">
                  &gt; YOUR_EMAIL
                </label>
                <div
                  className={`flex items-center gap-3 rounded-xl border-2 transition-all duration-300 bg-white/60 px-4 py-3 ${
                    focused === "email"
                      ? "border-[#A3C9A8] shadow-[0_0_12px_rgba(163,201,168,0.3)]"
                      : "border-slate-200"
                  }`}
                >
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="traveler@world.io"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent outline-none text-sm text-[#2C3E50] placeholder:text-slate-300 font-mono"
                  />
                </div>
              </div>

              {/* Message textarea */}
              <div className="relative">
                <label className="font-pixel text-xs text-[#A3C9A8] tracking-widest mb-1 block">
                  &gt; MESSAGE
                </label>
                <div
                  className={`rounded-xl border-2 transition-all duration-300 bg-white/60 ${
                    focused === "message"
                      ? "border-[#A3C9A8] shadow-[0_0_12px_rgba(163,201,168,0.3)]"
                      : "border-slate-200"
                  }`}
                >
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Your quest begins here..."
                    required
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent outline-none text-sm text-[#2C3E50] placeholder:text-slate-300 font-mono px-4 py-3 resize-none"
                  />
                </div>
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#A3C9A8]/15 border border-[#A3C9A8]/40 text-[#A3C9A8]">
                  <CheckCircle2 size={16} />
                  <span className="font-pixel text-xs tracking-wide">SIGNAL SENT! I&apos;ll reply soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-500">
                  <AlertCircle size={16} />
                  <span className="font-pixel text-xs tracking-wide">TRANSMISSION FAILED. Try again!</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 rounded-xl font-pixel text-base tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed ${
                  status === "success"
                    ? "bg-[#A3C9A8] text-white shadow-[0_0_20px_rgba(163,201,168,0.5)]"
                    : "bg-[#2C3E50] text-white hover:bg-[#3d566e] hover:shadow-[0_0_20px_rgba(44,62,80,0.3)] hover:-translate-y-0.5"
                }`}
              >
                {status === "loading" && (
                  <>
                    <Zap size={18} className="animate-spin" />
                    TRANSMITTING...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 size={18} />
                    SIGNAL SENT!
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    TRANSMIT
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* === RIGHT: Status panel === */}
          <div className="flex flex-col gap-5">
            {/* Status card */}
            <div className="glass-card p-6 border-2 border-[#A2D2FF]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#A3C9A8] shadow-[0_0_8px_rgba(163,201,168,0.8)] animate-pulse" />
                <span className="font-pixel text-xs tracking-widest text-[#A3C9A8]">
                  PLAYER STATUS
                </span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                {[
                  { key: "NAME", value: "Lufika Ayu Fatimah" },
                  { key: "CLASS", value: "Full-Stack Dev" },
                  { key: "GUILD", value: "Open to Collab" },
                  { key: "STATUS", value: "✔ Available" },
                ].map(({ key, value }) => (
                  <div
                    key={key}
                    className="flex justify-between items-center border-b border-slate-100 pb-2"
                  >
                    <span className="text-slate-400 text-xs font-pixel tracking-widest">
                      {key}
                    </span>
                    <span
                      className={`font-semibold text-xs ${
                        key === "STATUS" ? "text-[#A3C9A8]" : "text-[#2C3E50]"
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6 border-2 border-[#D4A373]/20 shadow-lg">
              <p className="font-pixel text-xs text-[#D4A373] tracking-widest mb-4">
                &gt; CONNECT VIA
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    href: "https://github.com/lufikaZkl30",
                    icon: Github,
                    label: "GitHub",
                    color:
                      "hover:border-[#2C3E50] hover:text-[#2C3E50] hover:shadow-[0_0_12px_rgba(44,62,80,0.2)]",
                  },
                  {
                    href: "https://www.linkedin.com/in/lufikaayud/",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color:
                      "hover:border-[#A2D2FF] hover:text-[#5a9fd4] hover:shadow-[0_0_12px_rgba(162,210,255,0.3)]",
                  },
                  {
                    href: "https://soundcloud.com/130530_xywnzenle",
                    icon: Cloud,
                    label: "SoundCloud",
                    color:
                      "hover:border-[#ff7700] hover:text-[#ff7700] hover:shadow-[0_0_12px_rgba(255,119,0,0.25)]",
                  },
                  {
                    href: "https://www.bandlab.com/xyawnzenle13",
                    icon: Music,
                    label: "BandLab",
                    color:
                      "hover:border-[#D4A373] hover:text-[#D4A373] hover:shadow-[0_0_12px_rgba(212,163,115,0.25)]",
                  },
                ].map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-slate-200 bg-white/50 text-slate-500 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon size={18} />
                    <span className="font-pixel text-xs tracking-wide">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-14 text-center text-xs text-slate-400 font-pixel tracking-widest uppercase">
          Crafted with care by Luvi Asakura © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
