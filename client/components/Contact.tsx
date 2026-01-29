"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Github, Linkedin, Instagram, Send } from 'lucide-react';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const email = "haideralihashmi2308@gmail.com";
  const phone = "923264607060";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_vy8gun4',
      'template_hlakm5i',
      form.current!,
      'zHSKxun1HHHYuzJ4-'
    )
    .then(() => {
        alert("Thank you, Your Message has been sent successfully.");
        setIsSending(false);
        form.current?.reset();
    }, (error) => {
        console.log(error.text);
        alert("Oops! Message has not been sent.");
        setIsSending(false);
    });
  };

  const contactCards = [
    {
      title: "Email",
      value: email,
      icon: <Mail size={32} />, 
      color: "text-cyan-400",
      glowClass: "hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]",
      iconGlow: "group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,1)]",
      link: `mailto:${email}`,
      showSendIcon: true 
    },
    {
      title: "WhatsApp",
      value: "+92 326 4607060",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      color: "text-green-400",
      glowClass: "hover:border-green-500/50 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]",
      iconGlow: "group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,1)]",
      link: `https://wa.me/${phone}`,
      showSendIcon: true 
    },
    {
      title: "Location",
      value: "Lahore, Pakistan",
      icon: <MapPin size={32} />,
      color: "text-rose-400",
      glowClass: "hover:border-rose-500/50 hover:shadow-[0_0_50px_rgba(244,63,94,0.3)]",
      iconGlow: "group-hover:drop-shadow-[0_0_20px_rgba(244,63,94,1)]",
      link: "#",
      showSendIcon: false
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#020617] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Let's Create <br />
              <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">
                Greatness.
              </span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-8 flex justify-center gap-4 items-center">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Available for Hire</span>
            </div>
            <div className="text-slate-500 text-xs font-medium border-l border-white/10 pl-4 flex items-center">
              <Clock size={14} className="mr-2" /> Mon-Sat, 10AM - 8PM
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, index) => (
            <motion.a
              key={index} href={card.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
              className={`group relative p-10 rounded-[2.5rem] bg-[#0f172a]/40 border border-slate-800 transition-all duration-500 flex flex-col items-center text-center overflow-hidden ${card.glowClass}`}
            >
              {card.showSendIcon && (
                <div className="absolute top-0 right-0 p-6 overflow-hidden">
                   <Send 
                    size={20} 
                    className={`transition-all duration-500 ease-out transform 
                      translate-x-10 -translate-y-10 opacity-0 
                      group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                      ${card.color}`} 
                   />
                </div>
              )}

              <div className={`mb-6 transition-all duration-500 group-hover:scale-110 ${card.color} ${card.iconGlow}`}>{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase tracking-widest transition-all">{card.title}</h3>
              <p className="text-slate-500 text-sm group-hover:text-slate-200 transition-all">{card.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-[#0f172a]/60 border border-slate-800 shadow-2xl mb-20">
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold ml-4 group-focus-within:text-cyan-400 transition-colors">
                  Name
                </label>
                <input 
                  required
                  name="from_name"
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-[#020617] border border-slate-800 rounded-2xl px-6 py-4 text-sm text-slate-300 outline-none transition-all duration-300
                               hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                               focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(6,182,212,0.25)] focus:text-cyan-50 group-hover:placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold ml-4 group-focus-within:text-cyan-400 transition-colors">
                  Email
                </label>
                <input 
                  required
                  name="from_email"
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-[#020617] border border-slate-800 rounded-2xl px-6 py-4 text-sm text-slate-300 outline-none transition-all duration-300
                               hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                               focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(6,182,212,0.25)] focus:text-cyan-50 group-hover:placeholder:text-slate-500"
                />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold ml-4 group-focus-within:text-cyan-400 transition-colors">Message</label>
              <textarea 
                required
                name="message"
                rows={5} 
                placeholder="Tell me about your project..."
                className="w-full bg-[#020617] border border-slate-800 rounded-3xl px-6 py-4 text-sm text-slate-300 outline-none transition-all duration-300
                           hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                           focus:border-cyan-400 focus:shadow-[0_0_30px_rgba(6,182,212,0.3)] focus:text-cyan-50 resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSending}
              className="w-full py-5 bg-[#020617] border border-cyan-500/30 rounded-2xl text-cyan-400 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500
                         hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.01]
                         flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-2">
                {isSending ? "Sending..." : "Send Message"}
              </span>
              <Send size={16} className="relative z-10 transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">Connect on Socials</p>
          <div className="flex gap-8">
            {[
              { icon: <Github size={24} />, link: "https://github.com/HaiderAli238" },
              { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/haider-ali-hashmi-47347a360/" },
              { icon: <Instagram size={24} />, link: "https://www.instagram.com/haider_ali_hashmi2308/" }
            ].map((social, i) => (
              <a 
                key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-2 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;