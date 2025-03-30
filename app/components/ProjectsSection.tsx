"use client"
import { motion, Variants } from "framer-motion"
import { Tilt } from "react-tilt"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Modernizing Laboratory Assessment",
      description: "A digital platform for modernizing laboratory assessments with real-time feedback and analytics",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Mock Interviewer",
      description: "An AI-powered interview preparation tool that provides personalized feedback and coaching",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Code Review",
      description: "Automated code review tool that analyzes code quality and suggests improvements",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Machine Learning", "GitHub API", "Flask"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-32 relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(29,78,216,0.15),transparent)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest projects showcasing innovative solutions and technical expertise.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="h-full"
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1,
                  speed: 300,
                  glare: true,
                  "max-glare": 0.5,
                }}
                className="h-full"
              >

                <Card className="h-full overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <motion.h3 
                      className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400 group"
                        asChild
                      >
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Live Demo <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-purple-500/20 backdrop-blur-sm text-white border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400 group"
                        asChild
                      >
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Code <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}