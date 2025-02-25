import Header from "@/components/header"
import ReasonsTabs from "@/components/reasons-tabs"
import VideoGallery from "@/components/video-gallery"
import AudioGallery from "@/components/audio-gallery"
import DecisionSection from "@/components/decision-section"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Header />
        <ReasonsTabs />
        <VideoGallery />
        <AudioGallery />
        <DecisionSection />
      </div>
    </main>
  )
}

