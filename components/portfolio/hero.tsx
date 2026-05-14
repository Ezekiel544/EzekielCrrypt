"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowDown, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/EzekielCrrypt", label: "Twitter" },
  { icon: Github, href: "https://github.com/Ezekiel544", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ezekiel-chikezie-7a5371302", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chikezieezekiel3@gmail.com", label: "Email" },
]

const roles = [
  "FULL STACK DEVELOPER",
  "SOLIDITY DEVELOPER",
  "BACKEND DEVELOPER",
  "MOBILE APP DEVELOPER",
  "FRONTEND DEVELOPER",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center w-full max-w-4xl mx-auto"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-mono font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 sm:mb-6"
        >
          {/* PORTFOLIO<span className="text-accent">.</span>EXE */}
            PORTFOLIO
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 min-h-[32px] sm:min-h-[40px]"
        >
          <span className="text-accent font-mono text-sm sm:text-base">&gt;</span>
          <span className="font-mono text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider sm:tracking-widest text-muted-foreground">
            {displayText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="w-2 sm:w-3 h-4 sm:h-6 bg-accent inline-block"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Hi, my name is{" "}
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5">
            Ezekiel
          </span>
       i am a Software Engineer. I enjoy turning innovative ideas into real solutions and building smooth, user-friendly digital experiences. My goal is to create products that not only meet client expectations but go beyond them.

        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <Button
            asChild
            size="lg"
            className="font-mono tracking-wider w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
          >
            <a href="#projects">VIEW PROJECTS</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-mono tracking-wider w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
          >
            <a href="/EzekielCV.pdf" download>
              <FileDown className="mr-2 h-4 w-4" />
              DOWNLOAD CV
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 border border-border bg-background hover:bg-secondary hover:border-foreground transition-all duration-200"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Large Name Background - Hidden on small screens */}
      <div className="absolute bottom-16 sm:bottom-0 left-0 right-0 overflow-hidden pointer-events-none hidden sm:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.06, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-mono font-bold text-[12vw] md:text-[15vw] tracking-[0.15em] md:tracking-[0.3em] text-foreground whitespace-nowrap text-center select-none"
        >
           EZEKIEL
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 p-2 sm:p-3 border border-border bg-background hover:bg-secondary transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
