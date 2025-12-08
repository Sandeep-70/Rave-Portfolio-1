"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("@/three/ParticleBackground"), {
  ssr: false,
});

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.p
            className="text-neon-cyan font-mono text-sm md:text-base tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {"<Hello World />"}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="glitch-text" data-text="Sandeep Kumar Singh">
              <span className="text-white">Sandeep </span>
              <span className="text-neon-cyan">Kumar </span>
              <span className="text-neon-pink">Singh</span>
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-2 text-lg md:text-2xl font-mono text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-neon-green">{"{"}</span>
            <span>Software Developer</span>
            <span className="text-neon-pink">|</span>
            <span>Java</span>
            <span className="text-neon-pink">+</span>
            <span>Web</span>
            <span className="text-neon-pink">+</span>
            <span>Full Stack</span>
            <span className="text-neon-green">{"}"}</span>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:contact@example.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neon-cyan/30 rounded-lg text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <motion.button
              onClick={() => handleScroll("#projects")}
              className="group relative px-8 py-4 font-mono text-sm md:text-base overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-80" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 text-dark font-bold flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => handleScroll("#contact")}
              className="px-8 py-4 font-mono text-sm md:text-base border-2 border-neon-cyan rounded-lg text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={() => handleScroll("#about")}
            className="text-neon-cyan cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
