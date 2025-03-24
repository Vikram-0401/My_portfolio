"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const [particles, setParticles] = useState<Array<ParticleProps>>([])
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"

  const onMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const createParticles = useCallback(() => {
    const particles: Array<ParticleProps> = []
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        color: isDarkTheme
          ? `rgba(${Math.floor(Math.random() * 80) + 120}, ${Math.floor(Math.random() * 80) + 120}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`
          : `rgba(${Math.floor(Math.random() * 80)}, ${Math.floor(Math.random() * 80)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      })
    }
    setParticles(particles)
  }, [quantity, isDarkTheme])

  useEffect(() => {
    createParticles()
    window.addEventListener("mousemove", onMouseMove)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [createParticles, onMouseMove])

  useEffect(() => {
    if (refresh) {
      createParticles()
    }
  }, [refresh, createParticles, isDarkTheme])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} mousePosition={mousePosition} staticity={staticity} ease={ease} />
      ))}
    </div>
  )
}

interface ParticleProps {
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  mousePosition?: { x: number; y: number }
  staticity?: number
  ease?: number
}

function Particle({ x, y, size, color, vx, vy, mousePosition, staticity = 50, ease = 50 }: ParticleProps) {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x, y })

  useEffect(() => {
    const interval = setInterval(() => {
      let newX = position.x + vx
      let newY = position.y + vy

      if (newX < 0 || newX > window.innerWidth) {
        vx = -vx
        newX = position.x + vx
      }

      if (newY < 0 || newY > window.innerHeight) {
        vy = -vy
        newY = position.y + vy
      }

      // Mouse interaction
      if (mousePosition) {
        const dx = mousePosition.x - position.x
        const dy = mousePosition.y - position.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) / staticity
          newX -= Math.cos(angle) * force
          newY -= Math.sin(angle) * force
        }
      }

      setPosition({ x: newX, y: newY })
    }, 50)

    return () => clearInterval(interval)
  }, [position, vx, vy, mousePosition, staticity])

  return (
    <motion.div
      className="absolute rounded-full"
      animate={{
        x: position.x,
        y: position.y,
        transition: { duration: ease / 1000, ease: "linear" },
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  )
}

