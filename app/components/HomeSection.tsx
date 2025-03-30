
"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Tilt } from "react-tilt"
import { FaGithub } from "react-icons/fa"
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
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
              As a Computer Science student specializing in Artificial Intelligence and Machine Learning, I'm delving deep into Data Structures and Algorithms using C++, AI, and ML. My passions extend beyond coding to include the great outdoors and cricket. Whether scaling a mountain, exploring new subjects, or competing on the cricket field, I bring enthusiasm and dedication to everything I do.
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-gray-100 border-gray-400 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <a href="#projects">View Work</a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/Vikram-0401">
                    <FaGithub size={24} />
                  </a>
                </Button>
              </motion.div>
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
