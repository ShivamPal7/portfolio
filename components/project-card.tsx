"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  index: number;
  technologies: string[];
}

export function ProjectCard({ title, description, imageUrl, githubUrl, liveUrl, index, technologies }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{
      duration:0.8,
      delay: index * 0.2,
      ease: [0.21, 1.11, 0.81, 0.99]
    }}
    viewport={{once: true}}
    className="relative"
    >
      <motion.div
      whileHover={{scale: 1.02}}
      transition={{duration:0.2}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
>
  <Card className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-accent/10">
  <div className="relative h-64 w-full overflow-hidden">
    <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-background-to-t from-background/800 to-transparent" />
  </div>

  <motion.div className="relative p-6" initial={{opacity:0, y:20}}
  animate={{opacity:1, y:0}}
  transition={{delay:0.2}} >

    <div className="mb-4 flex items-center gap-2">
      <Sparkles className="h-5 w-5 text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>

    <p className="mb-4 text-muted-foreground">{description}</p>
    <div className="mb-6  flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span key={i} className="rounded-full bg-primar/10 px-3 py-1 text-xs font-medium text-primary">
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <Button asChild variant="outline" className="rounded-full">
        <Link href={githubUrl} target="_blank">
        <Github className="mr-2 h-4 w-4" />
        Code
        </Link>
      </Button>
      <Button asChild variant="outline" className="rounded-full">
        <Link href={liveUrl} target="_blank">
        <Github className="mr-2 h-4 w-4" />
        Live Demo
        </Link>
      </Button>
    </div>
  </motion.div>

  {isHovered && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
    layoutId={`border-${index}`}
  />
)}

    </Card>
  </motion.div>
</motion.div>
  );
}