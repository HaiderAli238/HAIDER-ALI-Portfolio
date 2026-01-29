"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "@/components/Experience";
import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BacktoTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // "dark" class force kar di hai taake animations aur colors hamesha sahi rahein
    <main className="bg-[#020617] min-h-screen selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}