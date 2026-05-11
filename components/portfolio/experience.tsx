"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Lead Developer",
    company: "Tokicard ai",
    location: "Owerri, Nigeria",
    period: "2025 - Present",
    description:
      "Led the technical development of a WhatsApp-based virtual card platform, architecting scalable backend systems for user management, transactions, and messaging workflows. Integrated third-party APIs to enable real-time interactions and event-driven processes, while implementing security best practices such as data validation and access control. Built internal administrative dashboards for monitoring platform activity and contributed to long-term scalability and deployment planning.",
    technologies: ["Node.js", "Express.js", "Tailwindcss", "rendar", "WhatsApp Business API"],
  },
  {
    title: "Full Stack Developer",
    company: "ChatbotX",
    location: "Nigeria",
    period: "April 2024 - 2025 ",
    description:
      "developed ChatbotX, a chatbot platform focused on business automation, designing scalable backend systems to manage user data and conversational workflows. Built responsive dashboards for system monitoring and analytics, while ensuring high performance, maintainability, and a seamless user experience across the platform.",
    technologies: ["React", "Firebase", "Tailwindcss", "Vercel", "OpenRouter API", "rendar", "JWT"],
  },
  {
    title: "Co-Founder & Lead Developer",
    company: "Kryden studio",
    location: "Remote",
    period: "2025 - present",
    description:
      "Co-founded and led Kryden Studio, a full-stack development studio, overseeing technical architecture, tooling decisions, and development workflows. Designed and delivered end-to-end web applications for multiple clients, while establishing coding standards, documentation practices, and version control processes to ensure consistency, scalability, and maintainability across projects.",
    technologies: ["React", "Tailwindcss", "Github", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "FrontEnd Developer",
    company: "Flibber",
    location: "Remote",
    period: "Jan, 2025 - Present",
    description:
      "Leading the development of user-facing web applications at Flibber, building responsive and high-performance interfaces with React.js and Tailwind CSS. Creating reusable and scalable UI components while ensuring a seamless user experience across devices. Collaborating closely with designers and product managers to translate designs into functional interfaces, while reviewing code and mentoring junior developers to maintain code quality and consistency.",
    technologies: ["NextJS", "TypeScript", "Firebase", "Github Actions"],
  },
  {
    title: "Developer and Founder of VetPredict",
    company: "VetPredict",
    location: "Nigeria",
    period: "Feb, 2026 - present",
    description:
      "Developer and Founder of VetPredict, the first prediction market platform on the VeChain blockchain. Designed and built a decentralized application enabling users to create and participate in prediction markets, leveraging smart contracts for transparent and trustless outcomes. Led the full-stack development of the platform, including frontend interface, backend services, and blockchain integration, with a focus on scalability, performance, and user experience.",
    technologies: ["Next.js", "Node.js", "Solidity", "Smart Contracts", "Express.js"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-12 lg:py-12 bg-muted/30 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
              {/* EXPERIENCE<span className="text-accent">.</span>LOG */}
               EXPERIENCE
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
            <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              My professional journey through the tech industry, working with
              innovative companies and delivering impactful solutions.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={itemVariants}
                className={`relative mb-8 sm:mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2"
                    : "md:pl-8 md:text-left md:ml-auto md:mr-0 md:w-1/2"
                } pl-8 sm:pl-12 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full top-2 left-1 sm:left-2.5 md:left-auto ${
                    index % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                  }`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="border border-border bg-card p-4 sm:p-6 hover:border-foreground transition-colors"
                >
                  <h3 className="font-mono font-bold text-sm sm:text-base md:text-lg mb-2">{exp.title}</h3>

                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                    <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-accent">{exp.company}</span>
                  </div>

                  <div className={`flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="font-mono text-[10px] sm:text-xs">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="font-mono text-[10px] sm:text-xs">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-left">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-border bg-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
