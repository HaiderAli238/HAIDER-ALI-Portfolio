"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Settings2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="text-emerald-400" size={20} />,
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      // Fixed Motion Logo with weight
      { name: "Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
      { name: "NEXTjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="text-blue-500" size={20} />,
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Fast Api", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-purple-500" size={20} />,
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Oracle SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ]
  },
  {
    title: "Tools & Others",
    icon: <Settings2 className="text-teal-400" size={20} />,
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Modal", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/modal.svg" },
      { name: "Appwrite", icon: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Skills & <span className="text-white drop-shadow-[0_0_8px_#00f2ff]">Technologies</span>
          </h2>
          <p className='text-gray-400 mt-4'>My technical toolkit that I've mastered throughout my journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              // Box Hover Style: Added border weight and heavy shadow
              className="bg-[#0f172a]/40 border border-white/5 rounded-[2.5rem] p-8 
                         hover:border-[#00f2ff]/60 hover:bg-[#0f172a]/80
                         hover:shadow-[0_20px_50px_rgba(0,242,255,0.2)] 
                         hover:-translate-y-2 transition-all duration-500 group relative"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-[#00f2ff]/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center gap-3">
                    {/* Icon container - clean, no individual glow */}
                    <div className="w-14 h-14 bg-[#1e293b]/50 rounded-2xl flex items-center justify-center p-3 border border-white/5 group-hover:border-white/10 transition-all shadow-inner">
                       <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter saturate-150" 
                       />
                    </div>
                    <span className="text-[9px] font-black text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Box Bottom Glow Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;