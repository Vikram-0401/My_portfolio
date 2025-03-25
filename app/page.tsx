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
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Vikram
              </h1>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden md:flex gap-6"
              >
                <a 
                  href="#home" 
                  className="nav-link text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <a 
                  href="#skills" 
                  className="nav-link text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="nav-link text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="nav-link text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
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
                    sequence={[
                      "A Developer", 2000,
                      "AI/ML Enthusiast", 2000,
                      "Problem Solver", 2000,
                      "Tech Innovator", 2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </h3>
                <p className="text-lg mb-8 max-w-lg text-gray-300">
                  Passionate about creating innovative solutions through code. 
                  Specialized in full-stack development with expertise in AI/ML. 
                  Building the future, one project at a time.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="#contact">Get in Touch</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="text-gray-100 border-gray-400 hover:bg-gray-800 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
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
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl">
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
<section id="skills" className="py-12 relative">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Technical Expertise
      </h2>
    </motion.div>

    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Development Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl">
        </div>
        <div className="relative p-4 rounded-xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 11-5 5 1 1 0 012 0 3 3 0 106 0 1 1 0 012 0 5 5 0 01-5 5z"/>
              </svg>
            </motion.div>
            Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[ 'MongoDB', 'Express', 'React', 'Node.js', 'Firebase', 'TailwindCSS', 'TypeScript'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.toLowerCase().replace('.', '')}`}
                    alt={tech}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl">
        </div>
        <div className="relative p-4 rounded-xl border border-purple-500/20 bg-gray-900/60 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4zm8 10v-2h2v2h-2z"/>
              </svg>
            </motion.div>
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['C++','C', 'JavaScript', 'Python', 'R', 'HTML', 'CSS'].map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`https://skillicons.dev/icons?i=${lang.toLowerCase() === 'c++' ? 'cpp' : lang.toLowerCase()}`}
                    alt={lang}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-purple-400 transition-colors">
                    {lang}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl blur-xl">
        </div>
        <div className="relative p-4 rounded-xl border border-cyan-500/20 bg-gray-900/60 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm-4 8a4 4 0 118 0 4 4 0 01-8 0z"/>
              </svg>
            </motion.div>
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Git', 'GitHub', 'VSCode', 'Postman'].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`https://skillicons.dev/icons?i=${tool.toLowerCase()}`}
                    alt={tool}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {tool}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore my latest projects showcasing innovative solutions and technical expertise.
                Each project represents a unique challenge and creative solution.
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
                    <Card className="h-full overflow-hidden border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full bg-blue-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400"
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
                        <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ready to start a project or want to discuss opportunities? 
                I'm always open to new ideas and collaborations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                <div className="flex gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/Vikram-0401" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/vikram" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                    asChild
                  >
                    <a href="https://twitter.com/vikram" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:vikram@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-400" />
                    vikram@example.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-blue-400" />
                    github.com/Vikram-0401
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-700 shadow-lg overflow-hidden bg-gray-800/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          {...register("name", { required: "Name is required" })}
                          className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                            errors.name ? "border-red-500" : ""
                          }`}
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
                          className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                      </div>

                      <div>
                        <Input
                          placeholder="Subject"
                          {...register("subject", { required: "Subject is required" })}
                          className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                            errors.subject ? "border-red-500" : ""
                          }`}
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
                          className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                            errors.message ? "border-red-500" : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                      >
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
        <footer className="py-8 border-t border-gray-800 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vikram. Built with 
              <span className="text-blue-400"> React</span> and 
              <span className="text-purple-400"> TailwindCSS</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}