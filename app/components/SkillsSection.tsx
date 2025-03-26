"use client"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "R", icon: "https://skillicons.dev/icons?i=r" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
  ]

  return (
    <section id="skills" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Development Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl">
            </div>
            <div className="relative p-4 rounded-xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 11-5 5 1 1 0 012 0 3 3 0 106 0 1 1 0 012 0 5 5 0 01-5 5z"/>
                  </svg>
                </motion.div>
                Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['MongoDB', 'Express', 'React', 'Node.js', 'Firebase', 'TailwindCSS', 'TypeScript'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.toLowerCase().replace('.', '')}`}
                        alt={tech}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                        {tech}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl">
            </div>
            <div className="relative p-4 rounded-xl border border-purple-500/20 bg-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-5 h-5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4zm8 10v-2h2v2h-2z"/>
                  </svg>
                </motion.div>
                Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['C++','C', 'JavaScript', 'Python', 'R', 'HTML', 'CSS'].map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://skillicons.dev/icons?i=${lang.toLowerCase() === 'c++' ? 'cpp' : lang.toLowerCase()}`}
                        alt={lang}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-gray-300 group-hover:text-purple-400 transition-colors">
                        {lang}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl blur-xl">
            </div>
            <div className="relative p-4 rounded-xl border border-cyan-500/20 bg-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm-4 8a4 4 0 118 0 4 4 0 01-8 0z"/>
                  </svg>
                </motion.div>
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Git', 'GitHub', 'VSCode', 'Postman'].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://skillicons.dev/icons?i=${tool.toLowerCase()}`}
                        alt={tool}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {tool}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}