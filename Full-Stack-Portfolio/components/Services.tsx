"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Code, Gauge, Search } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React and Next.js. Creating seamless user experiences with modern UI libraries.",
    icon: <Layout className="text-[#00f2ff]" size={24} />,
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications with Node.js and Express. Creating RESTful APIs and implementing database solutions.",
    icon: <Server className="text-[#00f2ff]" size={24} />,
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web application development from database design to user interface. Implementing complete solutions with modern frameworks.",
    icon: <Code className="text-[#00f2ff]" size={24} />,
  },
  {
    title: "Performance Optimization",
    description: "Improving application performance and loading times. Implementing best practices for web vitals and user experience.",
    icon: <Gauge className="text-[#00f2ff]" size={24} />,
  },
  {
    title: "SEO Optimization",
    description: "Enhancing digital presence through strategic search engine optimization. Managing operations and strategies to improve ranking.",
    icon: <Search className="text-[#00f2ff]" size={24} />,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Specialized services I offer to help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0f172a]/40 border border-white/5 p-8 rounded-[2rem] 
                         hover:border-[#00f2ff]/50 hover:bg-[#0f172a]/80
                         hover:shadow-[0_20px_50px_rgba(0,242,255,0.15)] 
                         hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">

              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 
                              group-hover:bg-[#00f2ff]/10 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00f2ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;