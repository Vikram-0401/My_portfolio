"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function BackgroundGradientAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient objects
    const gradients = [
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: `rgba(123, 97, 255, 0.5)`, // Purple
      },
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: `rgba(56, 189, 248, 0.5)`, // Blue
      },
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: `rgba(232, 121, 249, 0.5)`, // Pink
      },
    ]

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw gradients
      for (const gradient of gradients) {
        // Update position
        gradient.x += gradient.vx
        gradient.y += gradient.vy

        // Bounce off edges
        if (gradient.x < 0 || gradient.x > canvas.width) {
          gradient.vx = -gradient.vx
        }
        if (gradient.y < 0 || gradient.y > canvas.height) {
          gradient.vy = -gradient.vy
        }

        // Draw gradient
        const radialGradient = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.radius,
        )
        radialGradient.addColorStop(0, gradient.color)
        radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = radialGradient
        ctx.beginPath()
        ctx.arc(gradient.x, gradient.y, gradient.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add noise effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Add subtle noise to each pixel
        const noise = Math.random() * 5 - 2.5
        data[i] = Math.max(0, Math.min(255, data[i] + noise))
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
      }

      ctx.putImageData(imageData, 0, 0)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

