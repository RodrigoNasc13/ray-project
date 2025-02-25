"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AcceptanceSection() {
  const [accepted, setAccepted] = useState(false)

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8 text-center">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">Will you be mine?</h2>
      <div className="space-x-4">
        <Button
          onClick={() => setAccepted(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </Button>
        <Button disabled className="bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
          Do not accept
        </Button>
      </div>
      {accepted && <p className="mt-4 text-xl text-purple-600 animate-bounce">Yay! I'm so happy you accepted! ❤️</p>}
    </section>
  )
}

