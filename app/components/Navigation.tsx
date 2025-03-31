"use client"
import { motion } from "framer-motion"
import { FaTerminal } from "react-icons/fa"
import { MdHexagon } from "react-icons/md"

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
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => {
    e.preventDefault()
    const targetId = item.toLowerCase()
    const element = document.getElementById(targetId)
    
    if (element) {
      const navHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
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
          {/* Hexagon with Terminal Icon */}
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
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MdHexagon className="w-10 h-10 text-gray-800/50" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 0 }}
            >
              <FaTerminal className="w-6 h-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text" />
            </motion.div>
          </div>

          <motion.div className="flex flex-col">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text font-bold text-lg align-baseline">
              Vikram R
            </span>
            <span className="text-gray-400 text-xs align-baseline">
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
              className="group relative px-2 py-1 text-sm rounded-md text-gray-300 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text">
                {item}
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={false}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  )
}
