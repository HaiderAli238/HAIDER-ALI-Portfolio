"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check karna ke component client par load ho gaya hai
  useEffect(() => {
    setMounted(true);
    
    const toggleVisibility = () => {
      // Agar 300px se zyada scroll ho to button dikhao
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hydration error se bachne ke liye
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[110] p-4 bg-[#020617] border border-[#00f2ff]/30 text-[#00f2ff] rounded-2xl shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] hover:bg-[#00f2ff] hover:text-[#020617] group transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp
            size={24}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;