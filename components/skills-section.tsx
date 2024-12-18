"use client";
import { delay, motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import Image from "next/image";

export function SkillsSection() {
  const skillsData = [
    {
      name: "Next.js",
      icon: "/images/skills/nextjs.png",
    },
    {
      name: "React",
      icon: "/images/skills/react.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/images/skills/tailwindcss.png",
    },
    {
      name: "TypeScript",
      icon: "/images/skills/typescript.png",
    },
    {
      name: "JavaScript",
      icon: "/images/skills/javascript.png",
    },
    {
      name: "HTML",
      icon: "/images/skills/html.png",
    },
    {
      name: "CSS",
      icon: "/images/skills/css.png",    
    },  
    {
      name: "Node.js",
      icon: "/images/skills/nodejs.png",
    },
    {
      name: "Express.js",
      icon: "/images/skills/expressjs.png",
    },
    {
      name: "MongoDB",
      icon: "/images/skills/mongodb.png",
    },
    {
      name: "MySQL",
      icon: "/images/skills/mysql.png",
    },
    {
      name: "Figma",
      icon: "/images/skills/figma.png",
    },
    {
      name: "Git & GitHub",
      icon: "/images/skills/git.png",
    },
  ]

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
      }
    }),
    hidden: { 
      opacity: 0, 
      y: 30 
    }
  }

  return (
    <section
      className="flex flex-col justify-center items-center bg-white mb-15 sm:mb-40">
      <motion.div
        className="container px-6 mx-auto max-w-5xl space-y-8 rounded-lg shadow-lg bg-white p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center">
          <AnimatedText
            text="Technical Skills"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800" />

          <AnimatedText
            text="This is my skill i worked in"
            className="mt-2 text-gray-600" />
        </motion.div>

        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6 ">
          {skillsData.map((skill, index) => (
            <motion.div 
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{scale: 1.1}}
            viewport={{margin: "50px", once: true}}
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border-yellow-500 bg-zinc-200 sm:px-5 px-2 py-2 lg:px-2">
            <Image
              src={skill.icon}
              alt="skills image"
              width={100}
              height={100}
              className="h-auto w-[40px]"
            />
            <p className="hidden sm:block text-sm text-gray-600 pr-1">{skill.name}</p>
          </motion.div>
          ))}
        </div>
      </motion.div>


    </section>
  )
}