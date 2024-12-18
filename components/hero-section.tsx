"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px, transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%, transparent_100%)]"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 rounded-full overflow-hidden border-4 bg-clip-border border-gradient-to-r from-blue-500 to-purple-500">
            <img src="/images/profile_pic.png" alt="logo" className="h-full w-full object-cover" />

          </motion.div>

          <div>
            <AnimatedText text="Hi, I'm Shivam Pal"
              className="text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl py-4" />

            <AnimatedText text="Full stack developer & UI/UX designer"
              className="text-muted-foreground mx-auto max-w-[700px] text-lg sm:text-xl"
              once={false} />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size='lg' className="gap-2">
              <Link href='https://drive.google.com/file/d/1T4ybvH4ouQEp4D3nmGCwANaogeByr75t/view?usp=sharing'target="_blank">
                View Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='#contact'>Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://github.com/ShivamPal7' target="blank" >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://linkedin.com/in/ShivamPal7' target="blank" >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://wa.me/918976417423' target="blank" >
                <img src="/images/whatsapp.svg" alt="" className="h-6 w-6"/>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

  );
}
