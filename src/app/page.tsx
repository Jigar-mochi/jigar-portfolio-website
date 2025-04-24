"use client";

import { motion } from "framer-motion";

import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen space-y-8 text-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="animate-text-gradient">Jigar Mochi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-gray-600 dark:text-gray-400"
        >
          I build exceptional and accessible digital experiences for the web.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-900 dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}
