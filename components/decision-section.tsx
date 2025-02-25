"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function DecisionSection() {
  const [accepted, setAccepted] = useState(false)
  const [declinePosition, setDeclinePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const moveDeclineButton = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()

      // Button dimensions (assuming 100px width and 40px height)
      const buttonWidth = 100
      const buttonHeight = 40

      // Calculate random position within the container
      const maxX = containerRect.width - buttonWidth
      const maxY = containerRect.height - buttonHeight

      const randomX = Math.random() * maxX
      const randomY = Math.random() * maxY

      setDeclinePosition({ x: randomX, y: randomY })
    }
  }, [])

  useEffect(() => {
    // Initial position
    moveDeclineButton()
  }, [moveDeclineButton])

  return (
    <section className="bg-white rounded-lg shadow-md p-8  text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Aceita ser minha?</h2>
      <div ref={containerRef} className="relative h-[300px] mb-8">
        <Button
          onClick={() => setAccepted(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md text-sm"
        >
          SIM!!!!!!
        </Button>
        <motion.div
          animate={declinePosition}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute"
          style={{ width: "100px" }} 
        >
          <Button
            onClick={moveDeclineButton}
            className="bg-red-200 hover:bg-red-300 text-gray-800 font-semibold py-2 px-6 rounded-md text-sm"
          >
            Impossível
          </Button>
        </motion.div>
      </div>
      {accepted && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 font-medium"
        >
          Quero você meu bem, obrigado por ver tudo até aqui ❤
        </motion.p>
      )}
    </section>
  )
}

