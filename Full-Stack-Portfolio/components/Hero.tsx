  "use client";
  import React from "react";
  import { motion } from "framer-motion";
  import { TypeAnimation } from "react-type-animation";

  const Hero = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-32 bg-[#020617] overflow-hidden">
        <div className="flex-[1.2] space-y-6 z-10 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#00f2ff] to-[#3b82f6] rounded-lg text-white font-bold text-sm shadow-[0_0_15px_rgba(0,242,255,0.3)]">
            Hello, I'm
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">
              HAIDER ALI HASHMI{" "}
            </span>
          </h1>

          <div className="text-xl lg:text-3xl font-bold text-gray-300">
            <TypeAnimation
              sequence={[
                "Web Application Developer",
                2000,
                "MERN Stack Specialist",
                2000,
                "Creative UI/UX Designer",
                2000,
              ]}
              repeat={Infinity}
              cursor={true}/>
          </div>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            I'm a Full Stack Web Application Developer based in Pakistan, focused
            on building scalable and user-friendly applications.
          </p>
          <a href="#contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[#00f2ff] to-[#3b82f6] text-white font-black rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)]">
              Let's Talk
            </motion.button>
          </a>
        </div>
        <div className="flex-1 relative flex justify-center lg:justify-end mt-20 lg:mt-0 w-full">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-80 md:w-80 md:h-[350px] p-1 rounded-3xl"
          >
            {/* Multi-color Rotating Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] via-[#8b5cf6] to-[#00f2ff] rounded-3xl blur-md animate-pulse opacity-70" />

            <div className="relative w-full h-full bg-[#020617] rounded-[22px] overflow-hidden border-2 border-[#00f2ff]/30">
              <img
                src="/haider.png"
                alt="Haider Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default Hero;
