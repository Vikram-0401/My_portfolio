"use client"
import { motion } from "framer-motion"

export default function Navigation() {
  return (
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
  )
}