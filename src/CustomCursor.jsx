import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 4
const TRAIL_LIFETIME = 150

export default function CustomCursor() {
  const overlayRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const dot = overlay?.querySelector('.custom-cursor-dot')
    const ring = overlay?.querySelector('.custom-cursor-ring')
    const trails = [...(overlay?.querySelectorAll('.custom-cursor-trail') || [])]
    if (!overlay || !dot || !ring || trails.length !== TRAIL_LENGTH) return

    const eligibility = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    const root = document.documentElement
    let raf = 0, lastFrame = 0, visible = false, enabled = false
    let x = 0, y = 0, ringX = 0, ringY = 0, scale = 1, targetScale = 1
    let history = []
    const place = (element, px, py, size = 1) => {
      element.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${size})`
    }

    function hide() {
      cancelAnimationFrame(raf)
      raf = 0
      lastFrame = 0
      visible = false
      history = []
      overlay.classList.remove('is-visible')
      root.classList.remove('custom-cursor-active')
      trails.forEach(trail => { trail.style.opacity = '0' })
    }

    function frame(now) {
      raf = 0
      if (!enabled || !visible || document.hidden) { hide(); return }
      const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.05) : 1 / 60
      lastFrame = now
      const ease = 1 - Math.exp(-delta * 22)
      ringX += (x - ringX) * ease
      ringY += (y - ringY) * ease
      scale += (targetScale - scale) * ease
      place(dot, x, y)
      place(ring, ringX, ringY, scale)
      history = history.filter(point => now - point.time < TRAIL_LIFETIME)
      trails.forEach((trail, index) => {
        const point = history[index]
        if (!point) { trail.style.opacity = '0'; return }
        place(trail, point.x, point.y)
        trail.style.opacity = String(0.22 * Math.max(0, 1 - (now - point.time) / TRAIL_LIFETIME))
      })
      // Hide the native cursor only after a custom frame is successfully drawn.
      overlay.classList.add('is-visible')
      root.classList.add('custom-cursor-active')
      if (history.length || Math.hypot(x - ringX, y - ringY) > 0.1 || Math.abs(targetScale - scale) > 0.001) {
        raf = requestAnimationFrame(frame)
      } else {
        lastFrame = 0
      }
    }

    function move(event) {
      if (!enabled || event.pointerType !== 'mouse') { hide(); return }
      const element = event.target instanceof Element ? event.target : null
      // Preserve native text and embedded control cursors.
      if (!element || element.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe, video')) {
        hide()
        return
      }
      if (visible && Math.hypot(event.clientX - x, event.clientY - y) > 3) {
        history.push({ x, y, time: performance.now() })
        history = history.slice(-TRAIL_LENGTH)
      }
      x = event.clientX
      y = event.clientY
      if (!visible) { ringX = x; ringY = y; scale = 1; visible = true }
      const interactive = element.closest('a[href], button:not(:disabled), [role="button"], [tabindex]:not([tabindex="-1"])')
        || element.closest('.project')?.querySelector('a[href], button:not(:disabled)')
      targetScale = interactive ? 1.6 : 1
      overlay.classList.toggle('is-interactive', Boolean(interactive))
      if (!raf) raf = requestAnimationFrame(frame)
    }

    function leave(event) { if (!event.relatedTarget) hide() }
    function pointerDown(event) { if (event.pointerType !== 'mouse') hide() }
    function visibility() { if (document.hidden) hide() }
    function sync() {
      enabled = eligibility.matches
      hide()
    }

    eligibility.addEventListener('change', sync)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerout', leave)
    window.addEventListener('pointerdown', pointerDown, { passive: true })
    window.addEventListener('blur', hide)
    window.addEventListener('scroll', hide, { passive: true })
    document.addEventListener('visibilitychange', visibility)
    sync()

    return () => {
      hide()
      eligibility.removeEventListener('change', sync)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerout', leave)
      window.removeEventListener('pointerdown', pointerDown)
      window.removeEventListener('blur', hide)
      window.removeEventListener('scroll', hide)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])

  return (
    <div className="custom-cursor" ref={overlayRef} aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => <span className="custom-cursor-trail" key={index} />)}
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  )
}
