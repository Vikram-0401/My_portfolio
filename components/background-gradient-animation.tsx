"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FloatingElement {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  angle: number
}

export function BackgroundGradientAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher pixel density
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create floating elements
    const elements: FloatingElement[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 150 + 50,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random() * 0.04 + 0.02,
      angle: Math.random() * Math.PI * 2
    }))

    const drawElement = (element: FloatingElement) => {
      const gradient = ctx.createLinearGradient(
        element.x - element.size / 2,
        element.y - element.size / 2,
        element.x + element.size / 2,
        element.y + element.size / 2
      )

      gradient.addColorStop(0, `rgba(123, 97, 255, ${element.opacity})`)  // Purple
      gradient.addColorStop(1, `rgba(56, 189, 248, ${element.opacity})`)  // Blue

      ctx.save()
      ctx.translate(element.x, element.y)
      ctx.rotate(element.angle)
      ctx.beginPath()

      // Create rounded rectangle shape
      const radius = element.size * 0.2
      ctx.moveTo(-element.size / 2 + radius, -element.size / 2)
      ctx.lineTo(element.size / 2 - radius, -element.size / 2)
      ctx.quadraticCurveTo(element.size / 2, -element.size / 2, element.size / 2, -element.size / 2 + radius)
      ctx.lineTo(element.size / 2, element.size / 2 - radius)
      ctx.quadraticCurveTo(element.size / 2, element.size / 2, element.size / 2 - radius, element.size / 2)
      ctx.lineTo(-element.size / 2 + radius, element.size / 2)
      ctx.quadraticCurveTo(-element.size / 2, element.size / 2, -element.size / 2, element.size / 2 - radius)
      ctx.lineTo(-element.size / 2, -element.size / 2 + radius)
      ctx.quadraticCurveTo(-element.size / 2, -element.size / 2, -element.size / 2 + radius, -element.size / 2)

      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      // Clear canvas and draw solid background
      ctx.fillStyle = "#0E0E1A"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw elements
      elements.forEach(element => {
        element.y -= element.speed
        element.angle += 0.002

        // Reset position when element moves off screen
        if (element.y + element.size < 0) {
          element.y = canvas.height + element.size
          element.x = Math.random() * canvas.width
        }

        drawElement(element)
      })

      // Add subtle gradient overlay
      const overlay = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      )
      overlay.addColorStop(0, "rgba(14, 14, 26, 0)")
      overlay.addColorStop(1, "rgba(14, 14, 26, 0.4)")
      ctx.fillStyle = overlay
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
      className="fixed inset-0 z-0 pointer-events-none bg-[#0E0E1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  )
}