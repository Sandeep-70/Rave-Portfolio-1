"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, User } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
];

const details = [
  {
    icon: User,
    title: "About Me",
    description:
      "Passionate software developer with a love for creating innovative solutions. I thrive on turning complex problems into elegant, user-friendly applications.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Bachelor's in Computer Science with a focus on software engineering and web technologies. Continuous learner always exploring new tech.",
  },
  {
    icon: Code2,
    title: "Approach",
    description:
      "Clean code enthusiast who believes in test-driven development, agile methodologies, and continuous integration for delivering robust solutions.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="text-3xl md:text-4xl font-display font-bold text-neon-cyan"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CountUp target={value} />
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isInView ? target : 0}
      </motion.span>
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-neon-pink font-mono text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {"// WHO AM I"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-white">About </span>
            <span className="text-neon-cyan text-glow-cyan">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
              <div className="relative aspect-square bg-dark-200 rounded-lg overflow-hidden border border-neon-cyan/30">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Sandeep Kumar Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-1 bg-dark-300 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-neon-pink rounded-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 border-2 border-neon-green rounded-lg"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  className="group p-6 bg-dark-100 rounded-lg border border-dark-300 hover:border-neon-cyan/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-dark-200 rounded-lg text-neon-cyan group-hover:bg-neon-cyan group-hover:text-dark transition-all duration-300">
                      <detail.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-white mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-dark-100 rounded-lg border border-dark-300 hover:border-neon-cyan/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-gray-400 font-mono mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
