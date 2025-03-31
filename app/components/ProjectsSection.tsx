"use client"
import { useState, useRef } from "react"
import { motion, Variants, useInView } from "framer-motion"
import { Tilt } from "react-tilt"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Code, Eye } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const projects = [
    {
      id: "lab-assessment",
      title: "Modernizing Laboratory Assessment",
      description: "A comprehensive digital platform transforming traditional laboratory assessments with real-time feedback, analytics, and an intuitive interface for both students and instructors.",
      image: "/Modernizing_lab_ss (2).png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Piston API", "Monaco Editor"],
      demoLink: "https://labtests.vercel.app/",
      githubLink: "https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment",
      featured: false
    },
    {
      id: "mock-interviewer",
      title: "AI Mock Interviewer",
      description: "An AI-powered interview preparation tool that simulates real interview scenarios, provides personalized feedback, and helps users improve their interview skills through targeted coaching.",
      image: "/Mock_interview_ss.png",
      tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS", "Shadcn UI"],
      demoLink: "#",
      githubLink: "https://github.com/Vikram-0401/Ai-Mock_Interviewer",
      featured: false
    },
    {
      id: "code-review",
      title: "Code Review Assistant",
      description: "An intelligent code review tool that automatically analyzes code quality, identifies potential issues, and suggests improvements to enhance code readability and performance.",
      image: "/Code_review_ss.png",
      tags: ["React", "TailwindCSS", "Gemini API", "JavaScript", "Firebase"],
      demoLink: "#",
      githubLink: "https://github.com/Vikram-0401/Code-RAI",
      featured: false
    },
  ]

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      {/* Enhanced background with subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_70%),linear-gradient(to_bottom,transparent_0%,rgb(0,0,0)_90%)]" />
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase mb-3 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest projects showcasing innovative solutions and technical expertise.
            Each project represents a unique challenge and creative approach to problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1.03,
                  speed: 500,
                  glare: true,
                  "max-glare": 0.3,
                }}
                className="h-full perspective-1000"
              >
                <Card className="h-full overflow-hidden border border-gray-800/50 bg-gray-900/80 backdrop-blur-sm hover:border-blue-500/70 transition-all duration-500 shadow-lg hover:shadow-blue-500/20 group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-56 relative overflow-hidden">
                      {/* Image overlay layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                      
                      {/* Project image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
                      
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full z-30 shadow-lg">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
                    
                    {/* Project title */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    
                    {/* Project description */}
                    <p className="text-gray-300 leading-relaxed line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
                      {project.description}
                    </p>
                    
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project links */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 transition-all duration-300 group/btn"
                        asChild
                      >
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Live Demo 
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-purple-500/20 backdrop-blur-sm text-white border-purple-500/30 hover:bg-purple-500/40 hover:border-purple-400 hover:scale-105 transition-all duration-300 group/btn"
                        asChild
                      >
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Code 
                          <Github className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-12" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all projects button */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-20"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white border-blue-500/30 hover:bg-blue-500/40 hover:border-blue-400 hover:scale-105 transition-all duration-300 group px-8 py-6"
            asChild
          >
            <a href="https://github.com/Vikram-0401" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span className="mr-2">View All Projects</span>
              <span className="relative">
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}