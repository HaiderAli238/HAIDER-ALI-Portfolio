"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
// Logos/Icons import karein
import { Search, Code2, Server, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "NETSOL Solutions",
    date: "Dec 2025 - Present",
    desc: "MERN Stack Developer building modern, scalable, and high-performance web applications using MongoDB, Express, React, and Node.js.",
    icon: <Server size={24} />, // MERN Stack Logo
    skills: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    title: "Python Developer",
    company: "Codexpace",
    date: "Aug 2025 - Dec 2025",
    desc: "Focused on backend automation and Python-based solutions during an intensive internship period.",
    icon: <Code2 size={24} />, // Python/Coding Logo
    skills: ["Python", "Automation", "Backend"]
  },
  {
    title: "Node.js Developer",
    company: "Nexgen Solutions",
    date: "Feb 2024 - June 2024",
    desc: "Worked on building scalable server-side logic and integrating RESTful APIs using the MERN stack.",
    icon: <Server size={24} />, // Node.js/Server Logo
    skills: ["Node.js", "Express", "MERN"]
  },
  {
    title: "SEO Specialist (Remote)",
    company: "Axcess Company",
    date: "Nov 2025 - Present",
    desc: "Currently managing remote SEO operations and optimization strategies to enhance digital presence.",
    icon: <Search size={24} />, // SEO Logo
    skills: ["SEO", "Analytics", "Strategy"]
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" matlab jab section screen mein enter ho
    // "end start" matlab jab section screen se bahar nikal jaye
    offset: ["start end", "end start"] 
  });

  // Stiffness aur Damping ko balance kiya taake scroll up/down responsive rahay
  const scaleY = useSpring(scrollYProgress, { stiffness: 150, damping: 20, restDelta: 0.001 });

  return (
    <section id="experience" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">My Experience</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Background Grey Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800" />
          
          {/* Scrolling Cyan Line - Fix: origin-top ensures it moves with scroll up */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#00f2ff] origin-top shadow-[0_0_15px_#00f2ff]"
          />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-24 w-full ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
              
              {/* CENTRAL NODE LOGO */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#020617] border-2 border-[#00f2ff] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,242,255,0.6)] text-[#00f2ff]">
                {exp.icon}
              </div>

              {/* Experience Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] ml-12 md:ml-0 group"
              >
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 transition-all duration-500 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="text-[10px] font-mono text-gray-500 mb-2">{exp.date}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">{exp.title}</h3>
                  <p className="text-[#00f2ff] font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-bold uppercase bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-[#00f2ff]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;