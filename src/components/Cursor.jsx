import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const trailRefs = useRef([])
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef([])
  const raf = useRef(null)

  const TRAIL_COUNT = 8
  const EASE = 0.25

  useEffect(() => {
    trail.current = Array.from({ length: TRAIL_COUNT }, () => ({
      x: 0,
      y: 0,
    }))

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const animate = () => {
      let x = pos.current.x
      let y = pos.current.y

      trail.current.forEach((point, i) => {
        point.x += (x - point.x) * EASE
        point.y += (y - point.y) * EASE

        const el = trailRefs.current[i]
        if (el) {
          el.style.left = point.x + 'px'
          el.style.top = point.y + 'px'
          el.style.opacity = 1 - i / TRAIL_COUNT
          el.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.08})`
        }

        x = point.x
        y = point.y
      })

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
        />
      ))}
    </>
  )
}