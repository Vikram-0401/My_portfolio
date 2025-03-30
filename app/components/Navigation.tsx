
"use client"
import { motion } from "framer-motion"
import { FaTerminal, FaCode, FaReact} from "react-icons/fa"
import { MdHexagon } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi"
import { useState } from "react"

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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    const elem = document.getElementById(targetId);
    
    if (elem) {
      setActiveSection(targetId);
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-14 h-14">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            
            {/* Base hexagon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <MdHexagon className="w-14 h-14 text-gray-800/50" />
            </motion.div>

            {/* Outer rotating React */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <FaReact className="w-12 h-12 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
            </motion.div>

            {/* Middle rotating code block */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="relative">
                <BiCodeBlock className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
                
                {/* Center terminal */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaTerminal className="w-4 h-4 text-blue-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text font-bold text-xl"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Vikram R
            </motion.span>
            <motion.span 
              className="text-gray-400 text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Developer
            </motion.span>
          </motion.div>
        </motion.div>

        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-8"
          >
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)}
                className={`relative px-3 py-2 rounded-md text-gray-300 font-medium transition-all duration-300
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
      </div>
    </nav>
  )
}

