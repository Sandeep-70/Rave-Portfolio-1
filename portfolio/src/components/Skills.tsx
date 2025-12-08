"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "#00f0ff",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "TailwindCSS", level: 92 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    color: "#ff00e1",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Python", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Databases",
    color: "#a6ff00",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 72 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "#9d00ff",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 82 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-sm font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}50`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
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
            className="text-neon-green font-mono text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {"// WHAT I DO"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-white">My </span>
            <span className="text-neon-green text-glow-green">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-6 bg-dark-100 rounded-xl border border-dark-300 hover:border-opacity-50 transition-all duration-300"
              style={{ borderColor: `${category.color}20` }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{
                boxShadow: `0 0 30px ${category.color}10`,
                borderColor: `${category.color}50`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: category.color,
                    boxShadow: `0 0 10px ${category.color}`,
                  }}
                />
                <h3
                  className="text-xl font-display font-bold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          {["Agile", "Scrum", "TDD", "Clean Code", "SOLID", "Design Patterns"].map(
            (tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-dark-200 rounded-full text-sm font-mono text-gray-300 border border-dark-300 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
