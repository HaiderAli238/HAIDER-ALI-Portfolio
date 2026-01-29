"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-10 bg-[#020617] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-center">
          © {currentYear}{" "}
          <span className="text-white ml-2">HAIDER ALI HASHMI.</span> ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
