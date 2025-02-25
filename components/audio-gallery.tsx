"use client"

import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

interface AudioCardProps {
  name: string
  description: string
  audioSrc: string
}

const AudioCard = ({ name, description, audioSrc }: AudioCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <audio ref={audioRef} src={audioSrc} className="w-full mb-4" />
        <Button onClick={togglePlay} className="flex items-center justify-center w-full">
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" /> Play
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export default function AudioGallery() {
  const audioCards = [
    {
      name: "Thayron",
      description: "Membro da trindade, meu babeiro e amigo há mais de 3 anos. Casado há 2 anos (sabe das coisas)",
      audioSrc: "/audios/audio-t.ogg",
    },
    {
      name: "Laughter Together",
      description: "A compilation of our shared moments of joy.",
      audioSrc: "/placeholder-audio-2.mp3",
    },
    {
      name: "Future Plans",
      description: "Listen to us dreaming about our future together.",
      audioSrc: "/placeholder-audio-3.mp3",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recomendações (Fontes ABNT)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audioCards.map((card, index) => (
          <AudioCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

