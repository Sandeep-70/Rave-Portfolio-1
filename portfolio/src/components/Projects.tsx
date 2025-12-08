"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Java Spring Boot. Features include user authentication, product management, shopping cart, payment processing with Stripe, and order tracking.",
    tech: ["Next.js", "Java", "Spring Boot", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#00f0ff",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time AI-powered chatbot with natural language processing",
    longDescription:
      "An intelligent chatbot application leveraging OpenAI's GPT models. Includes conversation history, context awareness, and customizable AI personalities.",
    tech: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#ff00e1",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A Kanban-style task management application with real-time collaboration features. Supports team workspaces, task assignments, deadlines, and progress tracking.",
    tech: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#a6ff00",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    longDescription:
      "A comprehensive social media management dashboard that aggregates data from multiple platforms. Features include scheduling, analytics, and engagement tracking.",
    tech: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#9d00ff",
  },
  {
    id: 5,
    title: "IoT Home Automation",
    description: "Smart home control system with mobile app",
    longDescription:
      "An IoT-based home automation system with a mobile-first approach. Control lights, temperature, and security from anywhere with real-time monitoring.",
    tech: ["React Native", "Java", "MQTT", "AWS IoT", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#00f0ff",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Personal fitness and workout tracking application",
    longDescription:
      "A comprehensive fitness tracking application with workout plans, progress charts, nutrition tracking, and social features for community motivation.",
    tech: ["Flutter", "Node.js", "MongoDB", "GraphQL", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "#ff00e1",
  },
];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  onSelect: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative p-6 bg-dark-100 rounded-xl border border-dark-300 overflow-hidden cursor-pointer"
        onClick={onSelect}
        whileHover={{ scale: 1.02 }}
        style={{
          borderColor: `${project.color}20`,
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}10, transparent 70%)`,
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          <motion.div
            className="h-full"
            style={{ background: project.color }}
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <h3
              className="text-xl font-display font-bold group-hover:text-opacity-100 transition-colors"
              style={{ color: project.color }}
            >
              {project.title}
            </h3>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2, rotate: 45 }}
            >
              <ChevronRight
                size={20}
                style={{ color: project.color }}
              />
            </motion.div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-dark-200 rounded text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs font-mono bg-dark-200 rounded text-gray-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-pink transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />

      <motion.div
        className="relative w-full max-w-2xl bg-dark-100 rounded-2xl border overflow-hidden"
        style={{ borderColor: `${project.color}30` }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}50)`,
          }}
        />

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3
              className="text-2xl font-display font-bold"
              style={{ color: project.color }}
            >
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-gray-500 mb-3">
              TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono bg-dark-200 rounded-lg text-gray-300 border border-dark-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-200 rounded-lg text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 border border-dark-300 transition-all duration-300"
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all duration-300"
              style={{
                background: project.color,
                color: "#0a0a0f",
              }}
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
            className="text-neon-cyan font-mono text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {"// MY WORK"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-white">Featured </span>
            <span className="text-neon-cyan text-glow-cyan">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
