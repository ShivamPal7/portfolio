"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedText } from "@/components/ui/animated-text";
import { Send } from "lucide-react";

export function ContactSection() {
  const [state, handleSubmit] = useForm("mnnqkwbp"); // Replace with your Formspree Form ID

  return (
    <section
      id="contact"
      className="py-16 pt-48 flex flex-col justify-center items-center bg-white"
    >
      <motion.div
        className="container px-4 md:px-6 mx-auto max-w-2xl space-y-8 rounded-lg shadow-lg bg-white p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <AnimatedText
            text="Get In Touch"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800"
          />

          <AnimatedText
            text="Let’s Build Something Great—Together."
            className="mt-2 text-gray-600"
          />
        </motion.div>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-green-500"
          >
            <p>Thanks for reaching out! We’ll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 w-full"
          >
            {/* Name Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 "
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 "
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="min-h-[150px] w-full bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <motion.div
                  className="flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <div className="h-4 w-4 border-2 border-t-white border-blue-400 rounded-full animate-spin"></div>
                </motion.div>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
