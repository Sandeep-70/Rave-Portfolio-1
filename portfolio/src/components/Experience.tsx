"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading full-stack development initiatives, mentoring junior developers, and architecting scalable solutions.",
    achievements: [
      "Led team of 5 developers on flagship product",
      "Reduced system latency by 40%",
      "Implemented CI/CD pipelines",
    ],
    color: "#00f0ff",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2021 - 2022",
    description:
      "Developed and maintained multiple web applications using React and Node.js ecosystem.",
    achievements: [
      "Built customer-facing dashboard",
      "Integrated third-party APIs",
      "Improved test coverage to 85%",
    ],
    color: "#ff00e1",
  },
  {
    id: 3,
    role: "Java Developer",
    company: "Enterprise Solutions",
    location: "Austin, TX",
    period: "2020 - 2021",
    description:
      "Worked on enterprise Java applications with Spring Boot and microservices architecture.",
    achievements: [
      "Migrated monolith to microservices",
      "Optimized database queries",
      "Implemented security protocols",
    ],
    color: "#a6ff00",
  },
  {
    id: 4,
    role: "Software Engineering Intern",
    company: "Innovation Labs",
    location: "Boston, MA",
    period: "2019 - 2020",
    description:
      "Gained hands-on experience in software development and agile methodologies.",
    achievements: [
      "Developed internal tools",
      "Participated in code reviews",
      "Contributed to documentation",
    ],
    color: "#9d00ff",
  },
];

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full z-10"
          style={{
            background: experience.color,
            boxShadow: `0 0 20px ${experience.color}`,
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        />
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 mt-2"
            style={{ background: `${experience.color}30` }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          />
        )}
      </div>

      <motion.div
        className="flex-1 pb-12 group"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="p-6 bg-dark-100 rounded-xl border border-dark-300 transition-all duration-300"
          style={{
            borderColor: `${experience.color}20`,
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3
                className="text-xl font-display font-bold"
                style={{ color: experience.color }}
              >
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <Briefcase size={14} />
                <span>{experience.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <MapPin size={12} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>

          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
              >
                <Award size={14} style={{ color: experience.color }} />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {"// MY JOURNEY"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-white">Work </span>
            <span className="text-neon-pink text-glow-pink">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
