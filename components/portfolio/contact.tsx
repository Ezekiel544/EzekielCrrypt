"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "viktoh7351@gmail.com",
    href: "mailto:viktoh7351@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+234 (0) 703 2568 802",
    href: "tel:+2347032568802",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Owerri, Imo State",
    href: null,
  },
]

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "X (F.K.A Twitter)" },
  { icon: Github, href: "https://github.com", label: "GITHUB" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LINKEDIN" },
  { icon: Instagram, href: "https://instagram.com", label: "INSTAGRAM" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export function Contact() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSuccess(false)
    setError(false)

    try {
      await emailjs.send(
        "service_6fypb7a",
        "template_97iz70f",
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        "LVZFQEZgim5Uvl9Ea"
      )

      setSuccess(true)

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
              CONTACT ME
            </h2>

            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-6 sm:mb-8" />

            <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Ready to collaborate on your next project? Let&apos;s connect and
              build something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="border border-border bg-card p-4 sm:p-6 md:p-8">
                <h3 className="font-mono font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 tracking-wider">
                  SEND MESSAGE
                </h3>

                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <Field>
                        <FieldLabel className="font-mono text-[10px] sm:text-xs tracking-wider">
                          NAME
                        </FieldLabel>

                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              name: e.target.value,
                            })
                          }
                          className="font-mono text-xs sm:text-sm"
                          required
                        />
                      </Field>

                      <Field>
                        <FieldLabel className="font-mono text-[10px] sm:text-xs tracking-wider">
                          EMAIL
                        </FieldLabel>

                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          className="font-mono text-xs sm:text-sm"
                          required
                        />
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel className="font-mono text-[10px] sm:text-xs tracking-wider">
                        SUBJECT
                      </FieldLabel>

                      <Input
                        type="text"
                        placeholder="Project inquiry"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        className="font-mono text-xs sm:text-sm"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel className="font-mono text-[10px] sm:text-xs tracking-wider">
                        MESSAGE
                      </FieldLabel>

                      <Textarea
                        placeholder="Tell me about your project..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="font-mono text-xs sm:text-sm min-h-[120px] sm:min-h-[150px] resize-none"
                        required
                      />
                    </Field>

                    {success && (
                      <p className="text-green-500 font-mono text-sm">
                        Message sent successfully!
                      </p>
                    )}

                    {error && (
                      <p className="text-red-500 font-mono text-sm">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-mono tracking-wider text-xs sm:text-sm"
                    >
                      <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />

                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </FieldGroup>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="font-mono font-bold text-sm sm:text-base md:text-lg tracking-wider">
                GET IN TOUCH
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                    className="border border-border bg-card p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-foreground transition-colors"
                  >
                    <div className="p-1.5 sm:p-2 bg-muted">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-wider">
                        {info.label}
                      </p>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-mono text-xs sm:text-sm hover:text-accent transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-mono text-xs sm:text-sm break-words">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}