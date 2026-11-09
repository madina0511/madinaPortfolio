import { useEffect, useRef } from 'react'

// Decorative Canvas 2D only: no React updates during animation.
export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const background = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!background || !ctx) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    let width = 0, height = 0, nodes = [], mobile = false
    let raf = 0, lastFrame = 0, time = 0
    const target = { x: 0, y: 0 }
    const pointer = { x: 0, y: 0 }

    function draw(delta = 0) {
      const reduced = motion.matches
      time += reduced ? 0 : delta
      const easing = 1 - Math.exp(-delta * 4)
      pointer.x += (target.x - pointer.x) * easing
      pointer.y += (target.y - pointer.y) * easing
      ctx.clearRect(0, 0, width, height)

      const positions = nodes.map(node => {
        const depth = (node.layer + 1) / 3
        const x = node.x * width + (reduced ? 0 : Math.sin(time * 0.13 + node.phase) * 7 * depth + pointer.x * 14 * depth)
        const y = node.y * height + (reduced ? 0 : Math.cos(time * 0.1 + node.phase) * 6 * depth + pointer.y * 10 * depth)
        // Keep the central reading area quiet; most detail lives near the edges.
        const edge = Math.pow(Math.abs(x / width - 0.5) * 2, 1.4)
        return { ...node, x, y, alpha: 0.12 + Math.min(1, edge) * 0.55 }
      })

      const reach = mobile ? 110 : 170
      positions.forEach((node, index) => {
        const color = node.layer === 1 ? '146, 117, 211' : '65, 192, 190'
        for (let otherIndex = index + 1; otherIndex < positions.length; otherIndex++) {
          const other = positions[otherIndex]
          if (other.layer !== node.layer) continue
          const distance = Math.hypot(node.x - other.x, node.y - other.y)
          if (distance > reach) continue
          ctx.strokeStyle = `rgba(${color}, ${(1 - distance / reach) * Math.min(node.alpha, other.alpha) * 0.42})`
          ctx.lineWidth = 0.65
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
        const radius = 1 + node.layer * 0.45
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 6)
        glow.addColorStop(0, `rgba(${color}, ${node.alpha * 0.24})`)
        glow.addColorStop(1, `rgba(${color}, 0)`)
        ctx.fillStyle = glow
        ctx.fillRect(node.x - radius * 6, node.y - radius * 6, radius * 12, radius * 12)
        ctx.fillStyle = `rgba(${color}, ${node.alpha})`
        ctx.beginPath()
        if (index % 7 === 0) {
          ctx.moveTo(node.x, node.y - radius * 2)
          ctx.lineTo(node.x + radius * 2, node.y)
          ctx.lineTo(node.x, node.y + radius * 2)
          ctx.lineTo(node.x - radius * 2, node.y)
          ctx.closePath()
          ctx.strokeStyle = ctx.fillStyle
          ctx.stroke()
        } else {
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    function frame(now) {
      raf = 0
      if (document.hidden || motion.matches) return
      const elapsed = now - lastFrame
      if (!lastFrame || elapsed >= (mobile ? 1000 / 24 : 1000 / 30)) {
        draw(lastFrame ? Math.min(elapsed / 1000, 0.1) : 0)
        lastFrame = now
      }
      raf = requestAnimationFrame(frame)
    }

    function syncAnimation() {
      cancelAnimationFrame(raf)
      raf = 0
      lastFrame = 0
      if (motion.matches) {
        pointer.x = pointer.y = target.x = target.y = 0
        draw()
      } else if (!document.hidden) {
        raf = requestAnimationFrame(frame)
      }
    }

    function resize() {
      width = background.clientWidth
      height = background.clientHeight
      if (!width || !height) return
      mobile = width <= 760
      const ratio = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      // Seeded positions avoid random jumps on resize and language changes.
      let seed = 42
      const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
      nodes = Array.from({ length: mobile ? 30 : 66 }, (_, index) => ({
        x: random(), y: random(), phase: random() * Math.PI * 2, layer: index % 3,
      }))
      draw()
    }

    function onMove(event) {
      if (motion.matches || !finePointer.matches) return
      const rect = background.getBoundingClientRect()
      target.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / width * 2 - 1))
      target.y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / height * 2 - 1))
    }
    function onLeave() { target.x = target.y = 0 }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(background)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', syncAnimation)
    motion.addEventListener('change', syncAnimation)
    resize()
    syncAnimation()

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', syncAnimation)
      motion.removeEventListener('change', syncAnimation)
    }
  }, [])

  return <div className="site-background" aria-hidden="true"><canvas className="hero-network" ref={canvasRef} /></div>
}
