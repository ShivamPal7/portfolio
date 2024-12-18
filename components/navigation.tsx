"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Home, User, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 w-full bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <Link href='/' className="text-2xl font-bold">Portfolio</Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button variant='ghost' className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle} */}

        <Button variant='ghost' className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}


      {isOpen && (
        <motion.div 
        initial ={{opacity: 0, y: -20}}
        animate = {{opacity: 1, y:0}}
        exit = {{opacity: 0, y:-20}}
        className="absolute w-full bg-background p-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant='ghost' className="w-full justify-start gap-2"
                onClick={() => setIsOpen(false)}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}