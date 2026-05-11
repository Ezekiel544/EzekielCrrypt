"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp ,Twitter } from "lucide-react"

const quickLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
]

const socialLinks = [
   { icon: Twitter, href: "https://x.com/EzekielCrrypt", label: "Twitter" },
  { icon: Github, href: "https://github.com/Ezekiel544", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ezekiel-chikezie-7a5371302", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chikezieezekiel3@gmail.com", label: "Email" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-mono font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              {/* PORTFOLIO<span className="text-accent">.EXE</span> */}
               PORTFOLIO
            </h3>
            <p className="font-mono text-xs sm:text-sm text-background/70 leading-relaxed">
              Full-stack developer passionate about creating digital experiences
              that bridge creativity and functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">
              QUICK LINKS
            </h4>
            <nav className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block font-mono text-xs sm:text-sm text-background/70 hover:text-accent transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-bold text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">
              CONNECT
            </h4>
            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 border border-background/30 hover:border-accent hover:text-accent transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
            <p className="font-mono text-xs sm:text-sm text-background/70 break-all">
             chikezieezekiel3@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-mono text-[10px] sm:text-xs text-background/50">
              &copy; {new Date().getFullYear()} Ezekiel - ALL RIGHTS RESERVED
            </p>
            <p className="font-mono text-[10px] sm:text-xs text-background/50 mt-1">
              BUILT WITH NEXTJS + TYPESCRIPT + TAILWIND CSS
            </p>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-2 sm:p-3 border border-background/30 hover:border-accent hover:text-accent transition-colors"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
