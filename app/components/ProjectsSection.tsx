"use client"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
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
  )
}