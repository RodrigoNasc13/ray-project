"use client"

import type React from "react"

import { useEffect, useState } from "react"

const Heart = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute text-pink-500 animate-float opacity-70" style={style}>
    ❤️
  </div>
)

export default function AnimatedBackground() {
  const [hearts, setHearts] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      fontSize: `${Math.random() * 20 + 10}px`,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((style, index) => (
        <Heart key={index} style={style} />
      ))}
    </div>
  )
}

