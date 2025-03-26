"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Tilt } from "react-tilt"
import { Button } from "@/components/ui/button"

export default function HomeSection() {
  return (
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
  )
}