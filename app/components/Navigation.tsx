"use client"
import { motion } from "framer-motion"
import { FaTerminal, FaCode, FaReact } from "react-icons/fa"
import { MdHexagon } from "react-icons/md"
import { BiCodeBlock } from "react-icons/bi"
import { useState, useEffect } from "react"

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 64

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 64 && bottom >= 64) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScrollSpy)
    return () => window.removeEventListener("scroll", handleScrollSpy)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => {
    e.preventDefault()
    const targetId = item.toLowerCase()
    const element = document.getElementById(targetId)
    
    if (element) {
      // Improved positioning calculation
      const navHeight = 64 // Height of the navbar
      
      // Get the element's position relative to the top of the document
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      
      // Subtract the navbar height to account for fixed positioning
      const offsetPosition = elementPosition - navHeight
      
      // Add a small delay before scrolling to ensure all calculations are complete
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }, 10)
      
      setActiveSection(targetId)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md bg-gray-950/80 border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {/* Terminal Icon */}
          <motion.div
            className="relative w-8 h-8"
            animate={{ 
              rotateY: [0, 360],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            <FaTerminal className="w-full h-full text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
          </motion.div>

          {/* Logo Container */}
          <div className="relative w-10 h-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <MdHexagon className="w-10 h-10 text-gray-800/50" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <FaReact className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <BiCodeBlock className="w-6 h-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
            </div>
          </div>

          <motion.div className="flex flex-col">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text font-bold text-lg">
              Vikram R
            </span>
            <span className="text-gray-400 text-xs">
              Developer
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6"
        >
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item)}
              className={`relative px-2 py-1 text-sm rounded-md text-gray-300 font-medium transition-all duration-300
                ${activeSection === item.toLowerCase() 
                  ? "text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text" 
                  : "hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600"
                  layoutId="activeSection"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  )
}