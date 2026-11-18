import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // เล่นแค่ครั้งเดียว แล้วเลิกเฝ้าดู
        }
      },
      { threshold: 0.15 }, // เห็นอย่างน้อย 15% ค่อยเริ่ม
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'motion-safe:animate-rise' : 'motion-safe:opacity-0'}`}
    >
      {children}
    </div>
  )
}