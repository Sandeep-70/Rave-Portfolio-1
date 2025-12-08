"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {"// GET IN TOUCH"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-white">Contact </span>
            <span className="text-neon-green text-glow-green">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-neon-cyan">Amazing</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-dark-100 rounded-lg border border-dark-300 hover:border-neon-cyan/50 transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-dark-200 rounded-lg text-neon-cyan group-hover:bg-neon-cyan group-hover:text-dark transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">contact@sandeepkumarsingh.dev</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-dark-100 rounded-lg border border-dark-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-dark-200 rounded-lg text-neon-pink">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">India</p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", color: "#00f0ff" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  color: "#ff00e1",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-100 rounded-lg border border-dark-300 text-gray-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    borderColor: social.color,
                    color: social.color,
                    boxShadow: `0 0 20px ${social.color}30`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-300 rounded-lg text-white font-mono focus:outline-none focus:border-neon-cyan transition-all duration-300"
                  placeholder="John Doe"
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-300 rounded-lg text-white font-mono focus:outline-none focus:border-neon-cyan transition-all duration-300"
                  placeholder="john@example.com"
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-300 rounded-lg text-white font-mono focus:outline-none focus:border-neon-cyan transition-all duration-300 resize-none"
                  placeholder="Let's work together..."
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 font-mono font-bold rounded-lg relative overflow-hidden group disabled:cursor-not-allowed cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green" />
                <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative z-10 text-dark flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-neon-green" size={24} />
                  <p className="text-neon-green font-mono text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
