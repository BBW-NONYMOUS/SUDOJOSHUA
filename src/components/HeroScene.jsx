import React, { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    let cleanup = () => {}
    let disposed = false
    let frameId

    import('three').then((THREE) => {
      if (disposed) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
      camera.position.set(0, 0, 8)

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
      renderer.setClearColor(0x000000, 0)
      mount.appendChild(renderer.domElement)

      const group = new THREE.Group()
      scene.add(group)

      const starCount = window.innerWidth < 640 ? 90 : 150
      const starPositions = new Float32Array(starCount * 3)
      for (let index = 0; index < starCount; index += 1) {
        const offset = index * 3
        starPositions[offset] = (Math.random() - 0.5) * 14
        starPositions[offset + 1] = (Math.random() - 0.5) * 8
        starPositions[offset + 2] = (Math.random() - 0.5) * 8
      }

      const starsGeometry = new THREE.BufferGeometry()
      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
      const starsMaterial = new THREE.PointsMaterial({
        color: 0x67e8f9,
        size: 0.035,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      })
      const stars = new THREE.Points(starsGeometry, starsMaterial)
      group.add(stars)

      const knotGeometry = new THREE.TorusKnotGeometry(1.35, 0.18, 150, 18)
      const knotMaterial = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x312e81,
        emissiveIntensity: 0.42,
        metalness: 0.7,
        roughness: 0.24,
        transparent: true,
        opacity: 0.62,
      })
      const knot = new THREE.Mesh(knotGeometry, knotMaterial)
      knot.position.set(2.65, 0.35, -0.3)
      group.add(knot)

      const ringGeometry = new THREE.TorusGeometry(2.35, 0.012, 8, 180)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        transparent: true,
        opacity: 0.42,
      })
      const rings = [0, 1, 2].map((item) => {
        const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone())
        ring.position.copy(knot.position)
        ring.rotation.set(item * 0.72, item * 0.48, item * 0.32)
        group.add(ring)
        return ring
      })

      scene.add(new THREE.AmbientLight(0x93c5fd, 0.85))
      const pointLight = new THREE.PointLight(0x22d3ee, 2.4, 14)
      pointLight.position.set(2.8, 2.2, 4)
      scene.add(pointLight)
      const violetLight = new THREE.PointLight(0x8b5cf6, 1.8, 12)
      violetLight.position.set(-3.5, -1.8, 3)
      scene.add(violetLight)

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect()
        renderer.setSize(width, height, false)
        camera.aspect = width / Math.max(height, 1)
        camera.updateProjectionMatrix()
      }

      resize()
      window.addEventListener('resize', resize)

      const clock = new THREE.Clock()
      const shouldMove = !prefersReducedMotion()

      const animate = () => {
        const elapsed = clock.getElapsedTime()

        if (shouldMove) {
          group.rotation.y = elapsed * 0.045
          stars.rotation.y = elapsed * 0.018
          knot.rotation.x = elapsed * 0.22
          knot.rotation.y = elapsed * 0.32
          rings.forEach((ring, index) => {
            ring.rotation.x += 0.002 + index * 0.0008
            ring.rotation.y -= 0.0025 + index * 0.0006
          })
        }

        renderer.render(scene, camera)
        frameId = window.requestAnimationFrame(animate)
      }

      animate()

      cleanup = () => {
        window.cancelAnimationFrame(frameId)
        window.removeEventListener('resize', resize)
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement)
        }
        starsGeometry.dispose()
        starsMaterial.dispose()
        knotGeometry.dispose()
        knotMaterial.dispose()
        ringGeometry.dispose()
        ringMaterial.dispose()
        rings.forEach((ring) => ring.material.dispose())
        renderer.dispose()
      }
    })

    return () => {
      disposed = true
      cleanup()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-75 mix-blend-screen"
      aria-hidden="true"
      data-hero-scene
    />
  )
}
