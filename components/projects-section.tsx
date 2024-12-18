"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Sikhley: Course Website",
    description: "A full-stack LMS platform where teachers can create, manage, and sell courses, while students can browse and purchase them.",
    imageUrl: "/images/lms.png",
    githubUrl: "https://github.com/ShivamPal7/sikhley",
    liveUrl: "https://sikhley.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    title: "Startup Pitching Platform",
    description: "StartupSpot is an full stack platform where entrepreneurs can pitch their startup ideas to investors, mentors, and collaborators.",
    imageUrl: "/images/startupspot banner.png",
    githubUrl: "https://github.com/ShivamPal7/startup-spot",
    liveUrl: "https://startup-spot.vercel.app/",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Sanity"],
  },
  {
    title: "Lumix: AI Chatbot",
    description: "Lumix AI can answer questions about any topic, and it is powered by Google Gemini model.",
    imageUrl: "/images/lumix.png",
    githubUrl: "https://github.com/ShivamPal7/lumix-ai",
    liveUrl: "https://lumix.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="projects" className="relative p-2" ref={containerRef}>
      <motion.div style={{opacity}} className="absolute inset-0 -z-10">

      </motion.div>

      <motion.div style={{scale}}
      className="relative mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-center">
        <div className="space-y-16 text-center">
          <div className="text-center">
            <AnimatedText text="Featured Projects"
            className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl py-4" />

            <AnimatedText 
            text="Explore my latest works and creative endeavors"
            className="mt-4 text-lg text-muted-foreground sm:text-xl" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>


  );
}
