"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import { TypeAnimation } from "react-type-animation"
import { Tilt } from "react-tilt"
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation"

export default function Portfolio() {
  const isMobile = useMobile()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data: any) => {
    // Email functionality
    const subject = encodeURIComponent(data.subject)
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
    window.location.href = `mailto:vikram@example.com?subject=${subject}&body=${body}`

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    reset()
  }

  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "R", icon: "https://skillicons.dev/icons?i=r" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
  ]

  const projects = [
    {
      title: "Modernizing Laboratory Assessment",
      description: "A digital platform for modernizing laboratory assessments with real-time feedback and analytics",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      title: "AI Mock Interviewer",
      description: "An AI-powered interview preparation tool that provides personalized feedback and coaching",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Code Review",
      description: "Automated code review tool that analyzes code quality and suggests improvements",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Machine Learning", "GitHub API", "Flask"],
      link: "#",
    },
  ]

  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Animated Background */}
        <BackgroundGradientAnimation />

        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-xl font-bold">Vikram</h1>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden md:flex gap-6"
              >
                <a href="#home" className="hover:text-primary-foreground transition-colors">
                  Home
                </a>
                <a href="#skills" className="hover:text-primary-foreground transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-primary-foreground transition-colors">
                  Projects
                </a>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section id="home" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Vikram
                  </span>
                </h2>
                <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 h-16">
                  <TypeAnimation
                    sequence={["Engineer", 2000, "Web Developer", 2000, "AIML Enthusiast", 2000]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </h3>
                <p className="text-lg mb-8 max-w-lg text-gray-300">
                  I build exceptional digital experiences that are fast, accessible, and responsive. Let's work together
                  to bring your ideas to life.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <a href="#contact">Get in Touch</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="text-primary-foreground border-gray-700 hover:bg-gray-800"
                  >
                    <a href="#projects">View Work</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 flex justify-center"
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground shadow-xl">
                    <img
                      src="/placeholder.svg?height=320&width=320"
                      alt="Vikram"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I've worked with a variety of technologies in the web development world. Here are my main areas of
                expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Tilt options={{ max: 25, scale: 1.05 }}>
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 mb-2 relative"
                      >
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <p className="text-xs text-gray-300">{skill.name}</p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project is a unique piece of development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Tilt options={{ max: 10, scale: 1.02 }}>
                    <Card className="h-full overflow-hidden border-0 shadow-lg bg-gray-800">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                View Project <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-primary-foreground/10 text-primary-foreground rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out to me.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="flex gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-primary-foreground border-gray-700 hover:bg-gray-800"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-primary-foreground border-gray-700 hover:bg-gray-800"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-primary-foreground border-gray-700 hover:bg-gray-800"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-primary-foreground border-gray-700 hover:bg-gray-800"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg overflow-hidden bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          {...register("name", { required: "Name is required" })}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                      </div>

                      <div>
                        <Input
                          placeholder="Subject"
                          {...register("subject", { required: "Subject is required" })}
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject.message as string}</p>
                        )}
                      </div>

                      <div>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          {...register("message", { required: "Message is required" })}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                        )}
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Vikram. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

