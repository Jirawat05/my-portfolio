import { useEffect, useRef } from 'react'

type Point = { x: number; y: number }
type Dot = Point & { vx: number; vy: number; color: string }

// ปรับค่าตรงนี้เพื่อเปลี่ยนหน้าตาได้
const LINK_DISTANCE = 120   // จุดห่างกันไม่เกินเท่านี้ (px) ถึงจะมีเส้นเชื่อม
const MOUSE_DISTANCE = 160  // ระยะที่เส้นสีวิ่งเข้าหาเมาส์
const DENSITY = 14000       // พื้นที่ (px²) ต่อ 1 จุด ยิ่งน้อย จุดยิ่งเยอะ
const MAX_DOTS = 80
const SPEED = 0.4
const FALL_SPEED = 0.35     // ความเร็วที่จุดไหลลง (px ต่อเฟรม)
const DOT_SIZE = 3          // รัศมีจุดปกติ (เดิม 1.8)
const DOT_SIZE_NEAR = 4.5   // รัศมีจุดตอนอยู่ใกล้เมาส์ (เดิม 2.6)
const LINE_WIDTH = 1.5      // ความหนาเส้น (เดิม 1)

// สีประจำจุด (ค่า R, G, B) แนวเดียวกับสีของ Apple
const COLORS = [
  '0, 113, 227',   // น้ำเงิน
  '168, 85, 247',  // ม่วง
  '236, 72, 153',  // ชมพู
  '245, 158, 11',  // ส้ม
  '34, 211, 238',  // ฟ้า
  '52, 199, 89',   // เขียว
]

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    const parentEl = canvasEl?.parentElement
    const context = canvasEl?.getContext('2d')
    if (!canvasEl || !parentEl || !context) return

    // ผ่านการเช็กแล้ว จึงประกาศชนิดได้ว่าไม่มีทางเป็น null
    const canvas: HTMLCanvasElement = canvasEl
    const area: HTMLElement = parentEl
    const ctx: CanvasRenderingContext2D = context

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse: Point = { x: -9999, y: -9999 }
    let dots: Dot[] = []
    let width = 0
    let height = 0
    let frameId = 0
    let onScreen = true

    // ปรับขนาด canvas ให้เท่ากับพื้นที่ แล้วสุ่มจุดใหม่
    function resize() {
      const ratio = window.devicePixelRatio || 1
      width = area.clientWidth
      height = area.clientHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.min(MAX_DOTS, Math.round((width * height) / DENSITY))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: FALL_SPEED * (0.6 + Math.random() * 0.8), // บวกเสมอ = ไหลลง
        color: randomColor(),
      }))
      draw()
    }

    function line(a: Point, b: Point) {
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
        ctx.lineWidth = LINE_WIDTH

      for (let i = 0; i < dots.length; i++) {
        // เส้นเทาระหว่างจุดที่อยู่ใกล้กัน
        for (let j = i + 1; j < dots.length; j++) {
          const d = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y)
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(29, 29, 31, ${(1 - d / LINK_DISTANCE) * 0.15})`
            line(dots[i], dots[j])
          }
        }
        // เส้นสีประจำจุด วิ่งไปหาเมาส์
        const dm = Math.hypot(dots[i].x - mouse.x, dots[i].y - mouse.y)
        if (dm < MOUSE_DISTANCE) {
          ctx.strokeStyle = `rgba(${dots[i].color}, ${(1 - dm / MOUSE_DISTANCE) * 0.7})`
          line(dots[i], mouse)
        }
      }

      // จุด: ถ้าอยู่ใกล้เมาส์ ให้เป็นสีประจำตัวและใหญ่ขึ้น
      for (const dot of dots) {
        const near = Math.hypot(dot.x - mouse.x, dot.y - mouse.y) < MOUSE_DISTANCE
        ctx.fillStyle = near ? `rgb(${dot.color})` : 'rgba(29, 29, 31, 0.35)'
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, near ? DOT_SIZE_NEAR : DOT_SIZE, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // 1 เฟรม: ขยับทุกจุด แล้ววาดใหม่ แล้วนัดเฟรมถัดไป
    function step() {
      for (const dot of dots) {
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < 0 || dot.x > width) dot.vx *= -1
        // ตกพ้นขอบล่างแล้ว ให้กลับไปเริ่มใหม่เหนือขอบบน ที่ตำแหน่งแนวนอนแบบสุ่ม
        if (dot.y > height + 10) {
          dot.y = -10
          dot.x = Math.random() * width
        }
      }
      draw()
      frameId = requestAnimationFrame(step)
    }

    function start() {
      if (!reduceMotion && onScreen && frameId === 0) frameId = requestAnimationFrame(step)
    }
    function stop() {
      cancelAnimationFrame(frameId)
      frameId = 0
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onPointerLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    // ขนาดพื้นที่เปลี่ยน (เช่น หมุนจอ, ย่อหน้าต่าง) ให้คำนวณใหม่
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(area)

    // เลื่อนจนพ้นจอแล้วให้หยุดวาด กลับมาเห็นค่อยวาดต่อ
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      if (onScreen) start()
      else stop()
    })
    visibilityObserver.observe(area)

    if (!reduceMotion) {
      area.addEventListener('pointermove', onPointerMove)
      area.addEventListener('pointerleave', onPointerLeave)
    }
    start()

    // เก็บกวาดทุกอย่างตอนคอมโพเนนต์ถูกถอดออก
    return () => {
      stop()
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      area.removeEventListener('pointermove', onPointerMove)
      area.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}