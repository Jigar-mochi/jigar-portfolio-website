"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-64 md:h-96 w-full flex justify-center items-center perspective-1000"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-64"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                width={256}
                height={256}
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                transform: "translateZ(20px)",
              }}
              className="absolute inset-0 rounded-lg border-2 border-primary/20 pointer-events-none"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I am a passionate Full Stack Developer with expertise in building modern web
            applications. With a strong foundation in both frontend and backend technologies, I
            create seamless digital experiences that users love.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science</p>
            </div>
          </div>
          <div className="pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
