"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile"];

const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full-featured e-commerce platform built with React and Node.js.",
    image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "MongoDB", "Stripe"],
    category: "Fullstack",
    live: "#",
    github: "#"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Complex data visualization with interactive charts and dark mode.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=60&w=800",
    tags: ["React", "Recharts", "Framer"],
    category: "Frontend",
    live: "#",
    github: "#"
  },
  {
    title: "Secure Auth Engine",
    description: "Authentication microservice with JWT, 2FA, and Docker.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=800",
    tags: ["Node.js", "Redis", "Docker"],
    category: "Backend",
    live: "#",
    github: "#"
  },
  {
    title: "Real-time Notification API",
    description: "Scalable backend for instant push notifications and socket events.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
    tags: ["Express", "Socket.io", "AWS"],
    category: "Backend",
    live: "#",
    github: "#"
  },
  {
    title: "IronPulse",
    description: "Fuel your strength, track your progress, and crush your fitness goals.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React Native", "MongoDB", "Express"],
    category: "Mobile",
    live: "#",
    github: "#"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white">
            Featured <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">Work</span>
          </h2>
          <p className='text-gray-400 mt-8'>Explore some of my recent projects in detail.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[11px] font-black tracking-widest transition-all uppercase
                ${filter === cat 
                  ? "bg-[#00f2ff] text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]" 
                  : "bg-white/5 text-gray-500 border border-white/5 hover:border-[#00f2ff]/30"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0f1d] border border-white/5 rounded-[1.8rem] overflow-hidden 
                           hover:border-[#00f2ff]/60 hover:shadow-[0_30px_70px_rgba(0,242,255,0.2)] 
                           transition-all duration-500 ease-out flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-[#00f2ff] text-black text-[9px] font-black px-3 py-1 rounded-md uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow relative z-10">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#00f2ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold bg-[#00f2ff]/10 text-[#00f2ff] px-2.5 py-1 rounded border border-[#00f2ff]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <button className="text-[10px] font-black text-white/40 group-hover:text-[#00f2ff] tracking-[0.2em] transition-all">
                      VIEW PROJECT
                    </button>
                    <div className="flex gap-4">
                      <Github size={18} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
                      <ExternalLink size={18} className="text-gray-500 hover:text-[#00f2ff] transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;