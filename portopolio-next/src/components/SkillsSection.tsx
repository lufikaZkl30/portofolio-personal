"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "DESIGN",
      color: "text-accent",
      bgColor: "bg-accent",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research", "Interaction Design"]
    },
    {
      title: "FRONT-END",
      color: "text-secondary",
      bgColor: "bg-secondary",
      skills: ["HTML5 & CSS3", "JavaScript", "React JS", "Next.js", "Tailwind CSS", "Responsive UI"]
    },
    {
      title: "TOOLS",
      color: "text-primary",
      bgColor: "bg-primary",
      skills: ["Figma", "VS Code", "GitHub", "Canva", "Node.js", "Python"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-pixel text-secondary text-xl">✚</span>
        <h2 className="font-pixel text-xl md:text-2xl text-white">SKILL TREE</h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent ml-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} className="rpg-panel p-6 h-full hover:border-gold transition-colors group">
            <h3 className={`font-pixel text-sm ${category.color} mb-6 pb-4 border-b border-white/20 flex items-center justify-between`}>
              {category.title}
              <span className={`w-3 h-3 ${category.bgColor} animate-pulse pixel-border`}></span>
            </h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="font-mono text-sm text-muted flex items-center gap-3 group-hover:text-white/90 transition-colors">
                  <span className={`text-[10px] ${category.color} opacity-70 group-hover:opacity-100 group-hover:animate-bounce transition-all`}>▶</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
