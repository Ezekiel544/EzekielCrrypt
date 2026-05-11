"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Smartphone, Globe, Blocks } from "lucide-react"
import { IconType } from "react-icons"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFirebase,
  SiSolidity,
  SiEthereum,
  SiEthers,
  SiWeb3Dotjs,
} from "react-icons/si"

// ✅ TYPES
type TechLogo = {
  name: string
  icon: IconType
  color?: string
}

type Skill = {
  icon: any
  title: string
  technologies: string
  description: string
}

// ✅ SKILLS
const skills: Skill[] = [
  {
    icon: Code2,
    title: "FRONTEND",
    technologies: "React, TypeScript, Next.js, Angular, Tailwind CSS",
    description: "Building responsive and interactive user interfaces",
  },
  {
    icon: Database,
    title: "BACKEND",
    technologies: "Node.js, Express.js, PostgreSQL, MongoDB , Python (APIs, automation, data processing)",
    description: "Scalable server-side applications and APIs",
  },
  {
    icon: Smartphone,
    title: "MOBILE APPLICATIONS",
    technologies: "React Native, Expo",
    description: "Building cross-platform mobile experiences with native performance",
  },
  {
    icon: Blocks,
    title: "BLOCKCHAIN / WEB3",
    technologies: "Solidity, Ethereum, Base, Hardhat, Foundry, Ethers.js, Web3.js",
    description:
      "Developing smart contracts, decentralized applications (dApps), and on-chain systems",
  },
  {
    icon: Globe,
    title: "DEPLOYMENT",
    technologies: "Hostinger, Vercel, CI/CD, GitHub / GitHub Actions, Pxxl",
    description: "Automated deployment and cloud infrastructure",
  },
]

// ✅ TECH STACK
const techLogos: TechLogo[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#0c0c0c" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // Blockchain
  { name: "Solidity", icon: SiSolidity, color: "#636363" },
  { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
  { name: "Ethers.js", icon: SiEthers, color: "#2535A0" },
  { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
];

// ✅ ANIMATIONS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// ✅ COMPONENT
export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* TITLE */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              ABOUT ME
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              I&apos;m a passionate software developer focused on building impactful
              digital experiences that blend creativity with functionality.
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group border border-border bg-card p-6 hover:border-foreground transition"
                >
                  <Icon className="h-8 w-8 mb-4" />
                  <h3 className="font-mono text-sm font-bold mb-2">{skill.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">
                    {skill.technologies}
                  </p>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* MARQUEE */}
          <motion.div variants={itemVariants} className="overflow-hidden py-6">
            <div className="flex animate-marquee gap-8">
              {[...techLogos, ...techLogos].map((tech, index) => {
                const Icon = tech.icon

                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="group flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 border border-border bg-card flex items-center justify-center hover:border-foreground transition-all hover:scale-110"
                    title={tech.name}
                  >
                  <Icon
  className="text-xl sm:text-2xl transition"
  style={{ color: tech.color }}
/>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* STATUS */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-12 bg-foreground text-background p-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent font-mono">&gt;</span>
              <span className="font-mono text-sm">
                CURRENT STATUS:{" "}
                <span className="text-accent">AVAILABLE FOR PROJECTS</span>
              </span>
            </div>
            <p className="font-mono text-sm text-background/80">
              Ready to collaborate on your next big idea
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}