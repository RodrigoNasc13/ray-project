import { Play } from "lucide-react"

const VideoCard = ({ title, src }: { title: string; src: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
        <Play className="w-4 h-4 mr-1" /> <a target="blank" href={src}>Watch Now</a> 
      </button>
    </div>
  </div>
)

export default function VideoGallery() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Musicas que quero te dedicar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoCard title="Minhas intenções" src="https://www.youtube.com/embed/-x2cE--r3L8" />
        <VideoCard title="Se toca essa fudeu, preciso ir pra Santos" src="https://www.youtube.com/embed/U-yVACiLXm0" />

          
        <VideoCard title="Trailer do filme que precisamos ver ❤" src="https://www.youtube.com/embed/3xNH23QkNpk" />
        
      </div>


      
    </section>
  )
}


