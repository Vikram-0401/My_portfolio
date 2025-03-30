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
      image: "/Modernizing_lab_ss (2).png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Piston api", "Monaco Editor"],
      demoLink: "https://labtests.vercel.app/",
      githubLink: "https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment",
    },
    {
      title: "AI Mock Interviewer",
      description: "An AI-powered interview preparation tool that provides personalized feedback and coaching",
      image: "/Mock_interview_ss.png",
      tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
      demoLink: "#",
      githubLink: "https://github.com/Vikram-0401/Ai-Mock_Interviewer#",
    },
    {
      title: "Code Review",
      description: "Automated code review tool that analyzes code quality and suggests improvements",
      image: "/Code_review_ss.png",
      tags: ["React", "TailwindCSS", "Gemini Api"],
      demoLink: "#",
      githubLink: "https://github.com/Vikram-0401/Code-RAI",
    },
  ]

  return (
    <section className="py-32 relative">
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgb(0,0,0)_90%)]" />
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
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Tilt
                options={{
                  max: 12,
                  scale: 1.04,
                  speed: 450,
                  glare: true,
                  "max-glare": 0.25,
                }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden border border-gray-800/50 bg-gray-900/80 backdrop-blur-sm hover:border-blue-500/70 transition-all duration-500 shadow-lg hover:shadow-blue-500/20">
                  <div className="relative overflow-hidden group">
                    <div className="w-full h-56 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                    
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
                          className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 transition-all duration-300 group"
                        asChild
                      >
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Live Demo <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-purple-500/20 backdrop-blur-sm text-white border-purple-500/30 hover:bg-purple-500/40 hover:border-purple-400 hover:scale-105 transition-all duration-300 group"
                        asChild
                      >
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Code <Github className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-blue-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 transition-all duration-300 group px-6"
            asChild
          >
            <a href="https://github.com/Vikram-0401" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}