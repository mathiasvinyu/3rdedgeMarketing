'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './HeroCanvas.module.scss'

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // 1. Accessibility Check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return // Skip Three.js rendering; CSS static gradient takes over
    }

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 180

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Particle Geometry & Material
    const count = 120
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOrange = new THREE.Color(0xea5807)
    const colorSlate = new THREE.Color(0x6a727f)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 260
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120

      // 15% orange highlight, 85% slate
      const color = Math.random() < 0.15 ? colorOrange : colorSlate
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Subtle ambient rotation
      points.rotation.y = elapsedTime * 0.03
      points.rotation.x = elapsedTime * 0.015

      // Smooth easing toward cursor
      targetX += (mouseX * 8 - targetX) * 0.05
      targetY += (mouseY * -8 - targetY) * 0.05
      points.position.x = targetX
      points.position.y = targetY

      renderer.render(scene, camera)
    }
    animate()

    // Resize Observer
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.canvasContainer} aria-hidden="true" />
}
